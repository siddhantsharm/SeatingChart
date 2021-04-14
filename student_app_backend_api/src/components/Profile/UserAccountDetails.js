/*
 * A form allowing students to edit and update profile information.
 * Handles all of the functionality for the form of a User's Profile, updates account info if needed.
 * TODO: Eventually look into using Formik for error checking
 */

import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { CardHeader } from "shards-react";
import { MyContext } from "../../contexts/MyContext";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormTextarea,
} from "shards-react";
import { Card, Button } from "@material-ui/core";

// Separate the user's name into their first and last name for the form

// TODO: Currently, none of the form information updates, need to implement API and create user database
function UserAccountDetails(props) {
  const { updateUserInfo } = useContext(MyContext);
  const initialState = {
    userInfo: {
      firstname: props.currentUser.firstName,
      lastname: props.currentUser.lastName,
      pronouns: props.currentUser.pronouns,
      password: props.currentUser.password,
      username: props.currentUser.username,
      currentUser: props.currentUser.username,
    },
    errorMsg: "",
    successMsg: "",
  };

  const [state, setState] = useState(initialState);

  const onChangeValue = (e) => {
    setState({
      ...state,
      userInfo: {
        ...state.userInfo,
        [e.target.name]: e.target.value,
      },
    });
  };
  const submitForm = async (event) => {
    event.preventDefault();
    const data = await updateUserInfo(state.userInfo);
    if (data.success && data.token) {
      setState({
        ...initialState,
      });
    } else {
      setState({
        ...state,
        successMsg: "",
        errorMsg: data.message,
      });
    }
  };

  // Show Message on Error or Success
  let successMsg = "";
  let errorMsg = "";
  if (state.errorMsg) {
    errorMsg = <div className="error-msg">{state.errorMsg}</div>;
  }
  if (state.successMsg) {
    successMsg = <div className="success-msg">{state.successMsg}</div>;
  }

  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">Change Profile Info</h6>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form onSubmit={submitForm} noValidate>
                <Row form>
                  {/* First Name */}
                  <Col md="5" className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <FormInput
                      id="firstname"
                      name="firstname"
                      placeholder={props.currentUser.firstName}
                      onChange={onChangeValue}
                    />
                  </Col>
                  {/* Last Name */}
                  <Col md="5" className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <FormInput
                      id="lastname"
                      name="lastname"
                      placeholder={props.currentUser.lastName}
                      onChange={onChangeValue}
                    />
                  </Col>
                  {/* Pronouns */}
                  <Col md="2" className="form-group">
                    <label htmlFor="pronouns">Pronouns</label>
                    <FormInput
                      id="pronouns"
                      name="pronouns"
                      placeholder={props.currentUser.pronouns}
                      onChange={onChangeValue}
                    />
                  </Col>
                </Row>
                <Row form>
                  {/* Email */}
                  <Col md="6" className="form-group">
                    <label htmlFor="username">Email Address</label>
                    <FormInput
                      id="username"
                      name="username"
                      placeholder="User Name"
                      onChange={onChangeValue}
                      autoComplete="email"
                    />
                  </Col>
                  {/* Password */}
                  <Col md="6" className="form-group">
                    <label htmlFor="password">Password</label>
                    <FormInput
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value=""
                      onChange={onChangeValue}
                      autoComplete="current-password"
                    />
                  </Col>
                </Row>
                <Row form>
                  {/* Description */}
                  <Col md="12" className="form-group">
                    <label htmlFor="feDescription">Accommodations</label>
                    <FormTextarea id="feDescription" rows="5" />
                  </Col>
                </Row>

                {/* Button to update user info  */}
                <Button
                  variant="contained"
                  color="primary"
                  justifyContent="center"
                  type="submit"
                >
                  Update Profile
                </Button>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
}

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
};

UserAccountDetails.defaultProps = {
  title: "Account Details",
};

export default UserAccountDetails;

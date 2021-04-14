/*
* A form allowing students to edit and update profile information.
* Handles all of the functionality for the form of a User's Profile, updates account info if needed.
* TODO: Eventually look into using Formik for error checking
*/

import React from "react";
import PropTypes from "prop-types";
import {CardHeader} from "shards-react";
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
const UserAccountDetails = ({ title, currentUser }) => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* First Name */}
                <Col md="5" className="form-group">
                  <label htmlFor="feFirstName">First Name</label>
                  <FormInput
                    id="feFirstName"
                    placeholder={currentUser.name.split(/[ ,]+/)[0]}
                    onChange={() => {}}
                  />
                </Col>
                {/* Last Name */}
                <Col md="5" className="form-group">
                  <label htmlFor="feLastName">Last Name</label>
                  <FormInput
                    id="feLastName"
                    placeholder={currentUser.name.split(/[ ,]+/)[1]}
                    onChange={() => {}}
                  />
                </Col>
                {/* Pronouns */}
                <Col md="2" className="form-group">
                  <label htmlFor="feLastName">Pronouns</label>
                  <FormInput
                    id="feLastName"
                    placeholder={currentUser.pronouns}
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">Email Address</label>
                  <FormInput
                    type="email"
                    id="feEmail"
                    placeholder="Email Address"
                    onChange={() => {}}
                    autoComplete="email"
                  />
                </Col>
                {/* Password */}
                <Col md="6" className="form-group">
                  <label htmlFor="fePassword">Password</label>
                  <FormInput
                    type="password"
                    id="fePassword"
                    placeholder="Password"
                    value=""
                    onChange={() => {}}
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
                justifyContent = 'center'
                onClick={() => {
                  console.log("onClick"); // change this to actual event that updates user info and creates an alert
                }}
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

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "Account Details"
};

export default UserAccountDetails;

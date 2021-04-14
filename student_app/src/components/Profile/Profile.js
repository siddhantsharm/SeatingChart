/*
* Profile Component that displays the User's information and the form.
*/
import React from "react";
import { Container, Row, Col } from "shards-react";
import UserDetails from "./UserDetails";
import UserAccountDetails from "./UserAccountDetails";

const Profile = (props) => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4"></Row>
    <Row>
      <Col lg="4">
        {/* Section with User Description Display */}
        <UserDetails
          currentUser = {props.currentUser}/>
      </Col>
      <Col lg="8">
        {/* Section with User Form to update profile */}
        <UserAccountDetails currentUser = {props.currentUser} />
      </Col>
    </Row>
  </Container>
);

export default Profile;

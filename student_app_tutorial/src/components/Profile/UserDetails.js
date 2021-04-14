/*
 * Where current information of student is stored such as name, SID, email, etc.. in the Profile
 */
import React from "react";
import PropTypes from "prop-types";
import { CardHeader, ListGroup, ListGroupItem, Progress } from "shards-react";
import { Card } from "@material-ui/core";

const UserDetails = ({ userDetails, currentUser }) => (
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      {/* Styling for User profile pic */}
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={currentUser.img} //{currentUser.img}
          alt={currentUser.name}
          width="110"
        />
      </div>
      {/* Display student name, pronouns, and SID */}
      <h4 className="mb-0">
        {currentUser.firstName + " " + currentUser.lastName}
      </h4>
      <span className="text-muted d-block mb-2">{currentUser.pronouns}</span>
      <span className="text-muted d-block mb-2"> SID: {currentUser.id}</span>
    </CardHeader>
    {/* Styling for user performance/participation (depends on performanceReportValue) */}
    <ListGroup flush>
      <ListGroupItem className="px-4">
        <div className="progress-wrapper">
          <strong className="text-muted d-block mb-2">
            {userDetails.performanceReportTitle}
          </strong>
          <Progress
            className="progress-sm"
            value={userDetails.performanceReportValue}
          >
            <span className="progress-value">
              {userDetails.performanceReportValue}%
            </span>
          </Progress>
        </div>
      </ListGroupItem>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          {userDetails.metaTitle}
        </strong>
        <span>{userDetails.metaValue}</span>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object,
};

// Default values for user details
UserDetails.defaultProps = {
  userDetails: {
    performanceReportTitle: "Participation",
    performanceReportValue: 74,
    metaTitle: "Accommodations",
    metaValue: "",
  },
};

export default UserDetails;

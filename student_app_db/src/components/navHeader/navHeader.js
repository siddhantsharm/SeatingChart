/*
* Class for the navigation bar header that display's the user's profile pic, name, and sid.
*/
import React from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const NavHeader = ( {collapsed, currentUser} ) => (

  <>

    {/* Navigation Bar Styling*/}
    <div
      style={{
        padding: collapsed ? 8 : 0,
        transition: "0.3s",
        marginTop: 20,
      }}
    >
      {/* User profile pic styling */}
      <Avatar
        src={currentUser.img}
        style={{
          width: collapsed ? 48 : 60,
          height: collapsed ? 48 : 60,
          transition: "0.3s",
        }}
      />
      <div style={{ paddingBottom: 16 }} />
      {/* User full name styling */}
      <Typography variant={"h6"} noWrap>
        {currentUser.firstName + " "}
        {currentUser.lastName}
      </Typography>
      {/* User SID styling */}
      <Typography color={"white"} noWrap gutterBottom>
        SID: {currentUser.id}
      </Typography>
    </div>
    <Divider />
  </>
);

NavHeader.propTypes = {
  collapsed: PropTypes.bool,
};
NavHeader.defaultProps = {
  collapsed: false,
};


export default NavHeader;

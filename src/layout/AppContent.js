import React from "react";
import Timetracker from "../pages/Timetracker";
import Correct from "../pages/Correct";
import Statistics from "../pages/Statistics";
import Absence from "../pages/Absence";
import Profile from "../pages/Profile";

import classes from "./Layout.module.css";

function AppContent({email, password}) {
  return (
    <div className={classes.appcontent}>
      <Timetracker />
      <Correct />
      <Statistics email={email} password={password} />
      <Absence />
      <Profile />
    </div>
  );
}

export default AppContent;

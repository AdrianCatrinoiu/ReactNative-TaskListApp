import React from "react";
// set the defaults
export const UserStateContext = React.createContext({
  userToken: null,
  setUserToken: (arg) => arg,
});
export const UserProfileContext = React.createContext({
  profile: {},
  setProfile: (arg) => arg,
});
export const DrawerStateContext = React.createContext({
  isDrawerOpen: false,
  setIsDrawerOpen: (arg) => arg,
});

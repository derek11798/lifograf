import * as actions from "./constants";

export const authTokenAction = (data) => {
  return {
    type: actions.authToken,
    value: data,
  };
};

export const userIdAction = (data) => {
    return {
      type: actions.userId,
      value: data,
    };
  };

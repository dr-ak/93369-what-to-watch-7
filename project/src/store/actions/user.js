export const ActionType = {
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
};

export const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  logout: () => {
    return {
      type: ActionType.LOGOUT,
    };
  },
};

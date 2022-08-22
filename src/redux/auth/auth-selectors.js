export const getUserName = state => state.auth.user.name;

export const getLogging = state => state.auth.isLogged;

export const getToken = state => state.auth.token;

export const getRefreshing = state => state.auth.isRefreshing;
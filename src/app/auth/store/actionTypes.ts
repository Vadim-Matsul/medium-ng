export enum ActionTypes {
  REGISTER = `[Auth] Register`,
  REGISTER_SUCCESS = '[Auth] Register success',
  REGISTER_FAILURE = '[Auth] Register failure',

  LOGIN = `[Auth] Login`,
  LOGIN_SUCCESS = '[Auth] Login success',
  LOGIN_FAILURE = '[Auth] Login failure',

  FETCH_USER_BY_TOKEN = `[Auth] fetch user by token`,
  FETCH_USER_BY_TOKEN_SUCCESS = '[Auth] fetch user by token success',
  FETCH_USER_BY_TOKEN_FAILURE = '[Auth] fetch user by token failure',
}

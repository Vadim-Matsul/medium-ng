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

  UPDATE_USER = `[Auth] update user`,
  UPDATE_USER_SUCCESS = '[Auth] update user success',
  UPDATE_USER_FAILURE = '[Auth] update user failure',

  LOGOUT_USER = `[Auth] Logout user`,
  CHECK_TO_LOGGED_IN = `[Auth] check to logged in`,
}

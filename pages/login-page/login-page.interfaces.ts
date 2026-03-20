import { LoginPageData } from "./login-page.data";

export interface User {
  username: string;
  password: string;
}

export const standardUser: User = {
  username: LoginPageData.credentials.usernames.standardUser,
  password: LoginPageData.credentials.password,
};
export const performanceGlitchUser: User = {
  username: LoginPageData.credentials.usernames.performanceGlitchUser,
  password: LoginPageData.credentials.password,
};
export const problemUser: User = {
  username: LoginPageData.credentials.usernames.problemUser,
  password: LoginPageData.credentials.password,
};
export const lokedOutUser: User = {
  username: LoginPageData.credentials.usernames.lockedOutUser,
  password: LoginPageData.credentials.password,
};

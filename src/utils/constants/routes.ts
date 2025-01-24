// routes.ts

export interface IRoute {
  [key: string]: string;
}

export const ROUTES = {
  HOME: "/",
  ACCOUNT: "/account",
  MESSAGES: "/messages",
  LIKES: "/likes",
  FRIENDS: "/friends",
  LOGIN: "/login",
  REGISTRATION: "/registration",
  FORGOT_PASSWORD: "/forgot-password",
};

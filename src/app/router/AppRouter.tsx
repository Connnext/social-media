import { Route, Routes } from "react-router";

import {
  ACCOUNT,
  FRIENDS,
  HOME,
  LIKES,
  LOGIN,
  MESSAGES,
  REGISTRATION,
} from "./../../utils/constants/routes";
import {
  Account,
  Friends,
  Home,
  Likes,
  Login,
  Messages,
  Registration,
} from "./../../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={HOME} element={<Home />}>
        <Route path={ACCOUNT} element={<Account />} />
        <Route path={MESSAGES} element={<Messages />} />
        <Route path={LIKES} element={<Likes />} />
        <Route path={FRIENDS} element={<Friends />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={REGISTRATION} element={<Registration />} />
      </Route>
    </Routes>
  );
};

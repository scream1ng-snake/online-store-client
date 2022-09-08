import React, {useContext} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {authRoutes, publicRoutes} from "../router/router";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import { MAIN_ROUTE } from '../helpers/consts';



const AppRouter = observer(() => {
  const {user} = useContext(Context)
  return (
    <Routes>
      {user.isAuth && authRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} element={Component}  />
      )}
      {publicRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} element={Component}  />
      )}
      <Route
        path="*"
        element={<Navigate to={MAIN_ROUTE} replace />}
    />
    </Routes>
  );
})

export default AppRouter;
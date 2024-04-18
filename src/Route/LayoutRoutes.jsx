import React,{useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './Routes';
import AppLayout from '../Layout/Layout';
import LoadingBar from "react-top-loading-bar";

const LayoutRoutes = () => {
  const [progress, setProgress] = useState(0);
  return (
    <>
    <LoadingBar color="#24695c" height={2} progress={progress} />
      <Routes setProgress={setProgress}>
        {routes.map(({ path, Component }, i) => (
          <Route element={<AppLayout />} key={i}>
            <Route path={path} element={Component} setProgress={setProgress} />
          </Route>
        ))}
      </Routes>
    </>
  );
};

export default LayoutRoutes;
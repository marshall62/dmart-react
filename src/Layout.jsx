import { Outlet } from "react-router-dom";
import DmartNavbar from './DmartNavbar';
import React from "react";

export function Layout () {
  return(
    <>
      <DmartNavbar/>
      <Outlet/>
    </>
  )
}
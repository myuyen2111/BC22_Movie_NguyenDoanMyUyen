import { Fragment } from "react";
import {Outlet} from "react-router-dom"
import Header from "../HomeTemplate/Layout/Header/Header"
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";

export const HomeTemplate = () => {
  return (
    <Fragment>
    <Header/>
    <HomeCarousel/>
    <Outlet/>
    <footer> đây là footer</footer>
  </Fragment> )};

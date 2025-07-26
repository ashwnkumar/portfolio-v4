import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import GridCard from "../components/GridCard";
import FooterCard from "../components/cards/home/FooterCard";
import Navbar from "../components/Navbar";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className=" flex items-start  justify-center w-full min-h-screen">
      <div className="relative  w-full md:max-w-7xl min-h-screen  grid grid-cols-12  auto-rows-[100px] md:auto-rows-[90px] gap-4 md:gap-5 p-2 md:p-10 custom-scroll">
        {/* <Navbar /> */}
        <Outlet />
        <GridCard className={"col-span-12 row-span-2 "}>
          <FooterCard />
        </GridCard>
      </div>
    </div>
  );
};

export default Layout;


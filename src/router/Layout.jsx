import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import GridCard from "../components/GridCard";
import FooterCard from "../components/cards/home/FooterCard";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex items-start  justify-center w-full min-h-screen">
      <div className="w-full max-w-7xl min-h-screen grid grid-cols-8 md:grid-cols-12 auto-rows-[90px] gap-6 p-10 custom-scroll">
        <Outlet />
        <GridCard className={"col-span-12 row-span-2"}>
          <FooterCard />
        </GridCard>
      </div>
    </div>
  );
};

export default Layout;

//   <div className="bg-gray-100 rounded-xl shadow">
//         <p>1</p>
//       </div>
//       <div className="bg-gray-100 rounded-xl shadow">
//         <p>2</p>
//       </div>
//       <div className="bg-gray-100 rounded-xl shadow">
//         <p>3</p>
//       </div>
//       <div className="bg-gray-100 rounded-xl shadow">
//         <p>4</p>
//       </div>
//       <div className="bg-gray-100 rounded-xl shadow">
//         <p>5</p>
//       </div>
//       <div className="bg-gray-100 rounded-xl shadow">
//         <p>6</p>
//       </div>
//       <div className="bg-gray-100 rounded-xl shadow">
//         <p>7</p>
//       </div>
//       <div className="bg-gray-100 rounded-xl shadow">
//         <p>8</p>
//       </div>
//       <div className="bg-gray-100 rounded-xl shadow">
//         <p>9</p>
//       </div>
//       <div className="bg-gray-100 rounded-xl shadow">
//         <p>10</p>
//       </div>
//       <div className="bg-gray-100 rounded-xl shadow">
//         <p>11</p>
//       </div>
//       <div className="bg-gray-100 rounded-xl shadow">
//         <p>12</p>
//       </div>
//       <div className="bg-gray-100 rounded-xl shadow">
//         <p>13</p>
//       </div>
//       <div className="bg-gray-100 rounded-xl shadow">
//         <p>14</p>
//       </div>
//       <div className="bg-gray-100 rounded-xl shadow">
//         <p>15</p>
//       </div>
//       <div className="bg-gray-100 rounded-xl shadow">
//         <p>16</p>
//       </div>
//       <div className="bg-gray-100 rounded-xl shadow">
//         <p>17</p>
//       </div>
//       <div className="bg-gray-100 rounded-xl shadow">
//         <p>18</p>
//       </div>

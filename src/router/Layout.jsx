import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full h-screen overflow-hidden p-5 grid grid-cols-6 grid-rows-3  gap-6">
      <Outlet />
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

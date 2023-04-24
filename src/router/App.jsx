import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import Home from "../pages/home/Home";
import Employee from "../pages/employee/Employee";
import Salary from "../pages/employee/Salary";
import Role from "../pages/employee/Role";
import Customer from "../pages/customer/Customer";
import Room from "../pages/room/Room";
import RoomType from "../pages/room/RoomType";
import RoomState from "../pages/room/RoomState";
import { Loading } from "../components/Loading";
import BookRoom from "../pages/book/BookRoom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/loading" element={<Loading />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />

        {/* Nhân viên */}
        <Route path="/employee/*">
          <Route path="account" element={<Employee />} />
          <Route path="salary" element={<Salary />} />
          <Route path="role" element={<Role />} />
        </Route>

        {/* Khách hàng */}
        <Route path="/customer/*">
          <Route path="account" element={<Customer />} />
        </Route>

        {/* Phòng */}
        <Route path="/room/*">
          <Route path="list" element={<Room />} />
          <Route path="type" element={<RoomType />} />
          <Route path="state" element={<RoomState />} />
        </Route>

        {/* Phòng */}
        <Route path="/book-room/*">
          <Route path="list" element={<BookRoom />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

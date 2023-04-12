import React from "react";
import "../../index.css";
import { AddForm } from "../../components/Form";

const Signup = () => {

  const onFinish = (value) => {
    console.log(value);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="max-w-lg flex-row">
          <h1 className="font-semibold">Đăng ký</h1>
          <hr className="my-4 mb-4" />
        </div>
        <AddForm
          nhanvien
          submit="Đăng ký"
          onFinish={onFinish}
        />
        <div className="max-w-lg px-10 py-3">
          <span>
            Đã có tài khoản? <a href="/signin">Đăng nhập ngay</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;

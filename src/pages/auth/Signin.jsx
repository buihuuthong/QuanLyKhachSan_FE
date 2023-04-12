import React from "react";
import "../../index.css";
import { SigninForm } from "../../components/Form";

const Signin = () => {

  const onChecked = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onFinish = (value) => {
    console.log(value);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="max-w-lg flex-row">
          <h1 className="font-semibold">Đăng nhập</h1>
          <hr className="mt-4 mb-4" />
        </div>
        <div className="max-w-lg flex-row">
          <SigninForm 
            submit="Đăng nhập"
            onFinish={onFinish}
            onChecked={onChecked}
          />
        </div>
        <div className="max-w-lg px-10 py-3">
          <span>Chưa có tài khoản? <a href="/signup">Đăng ký ngay</a></span>
        </div>
      </div>
    </div>
  );
};

export default Signin;

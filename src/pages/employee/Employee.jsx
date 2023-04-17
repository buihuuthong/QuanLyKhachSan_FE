import dayjs from "dayjs";
import React, { useState } from "react";
import { AddUserModal, DeleteModal, UserModal } from "../../components/Modal";
import { DefautlTable } from "../../components/Table";
import Main from "../../layout/Main";

const Employee = () => {
  const [isEditModal, setIsEditModal] = useState(false);
  const [isAddModal, setIsAddModal] = useState(false);
  const [isDeleteModal, setisDeleteModal] = useState(false);
  const [formValues, setFormValues] = useState({
    taikhoan: "1234",
    matkhau: "1234",
    hoten: "Bùi Hữu Thông",
    ngaysinh: dayjs("28-06-2002", "DD-MM-YYYY"),
    diachi: "New York No. 1 Lake Park",
    sdt: "0123456789",
    email: "thong@gmail.com",
    chucvu: "quanly",
  });

  const showAddModal = () => {
    setIsAddModal(true);
  };

  const showEditModal = () => {
    setIsEditModal(true);
  };

  const showDeleteModal = () => {
    setisDeleteModal(true);
  };

  const handleOk = (value) => {
    setIsEditModal(false);
    console.log(value);
  };

  const data = [
    {
      key: "1",
      taikhoan: "1234",
      matkhau: "1234",
      hoten: "Bùi Hữu Thông",
      ngaysinh: "28-06-2002",
      diachi: "New York No. 1 Lake Park",
      sdt: "0123456789",
      email: "thong@gmail.com",
      chucvu: "quanly",
    },
  ];

  return (
    <Main>
      <DefautlTable add={showAddModal} edit={showEditModal} remove={showDeleteModal} dataSource={data} />
      <UserModal
        isEditModal={isEditModal}
        setIsEditModal={setIsEditModal}
        onFinish={handleOk}
        formValues={formValues}
      />
      <AddUserModal
        isAddModal={isAddModal}
        setIsAddModal={setIsAddModal}
        onFinish={handleOk}
      />
      <DeleteModal
        title="Xóa tài khoản"
        isDeleteModal={isDeleteModal}
        setisDeleteModal={setisDeleteModal}
        handleOk={handleOk}
      />
    </Main>
  );
};

export default Employee;

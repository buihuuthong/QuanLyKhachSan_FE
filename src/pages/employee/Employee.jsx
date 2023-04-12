import { Tag } from "antd";
import moment from "moment/moment";
import React, { useState } from "react";
import { ActionButton } from "../../components/Button";
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
    ngaysinh: moment("28-06-2002", "DD-MM-YYYY"),
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

  const columns = [
    {
      title: "Họ tên",
      dataIndex: "hoten",
      key: "hoten",
    },
    {
      title: "Ngày sinh",
      dataIndex: "ngaysinh",
      key: "ngaysinh",
    },
    {
      title: "Địa chỉ",
      dataIndex: "diachi",
      key: "diachi",
    },
    {
      title: "Số điện thoại",
      dataIndex: "sdt",
      key: "sdt",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Chức vụ",
      key: "machucvu",
      dataIndex: "machucvu",
      render: (_, record) => (
        <Tag color={"green"} key={record.chucvu}>
          {record.chucvu?.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <ActionButton edit={showEditModal} remove={showDeleteModal} />
      ),
    },
  ];

  const data = [
    {
      key: "1",
      hoten: "Bùi Hữu Thông",
      ngaysinh: moment("28-06-2002", "DD-MM-YYYY"),
      diachi: "New York No. 1 Lake Park",
      sdt: "0123456789",
      email: "thong@gmail.com",
      chucvu: "quanly",
    },
  ];

  return (
    <Main>
      <DefautlTable add={showAddModal} columns={columns} dataSource={data} />
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

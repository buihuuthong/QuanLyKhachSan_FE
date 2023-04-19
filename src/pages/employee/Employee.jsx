import React, { useEffect, useState } from "react";
import { AddUserModal, DeleteModal, UserModal } from "../../components/Modal";
import { DefautlTable } from "../../components/Table";
import Main from "../../layout/Main";
import employeeApi from "../../services/employeeApi";

const Employee = () => {
  const [isEditModal, setIsEditModal] = useState(false);
  const [isAddModal, setIsAddModal] = useState(false);
  const [isDeleteModal, setisDeleteModal] = useState(false);
  const [data, setData] = useState([]);
  const [formValues, setFormValues] = useState();

  // Lấy danh sách nhân viên
  const getData = () => {
    const result = employeeApi.getAll();
    result
      .then((data) => {
        setData(data.list);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Load danh sách khi mở trang
  useEffect(() => {
    getData();
  }, []);

  // Gọi api thêm nhân viên
  const addValue = async (value) => {
    try {
      await employeeApi.create(value);
    } catch (error) {
      console.log(error);
    }
  };

  // Gọi api lấy thông tin nhân viên theo id
  const showEditModal = async (id) => {
    const result = employeeApi.getOne(id);
    result
      .then((data) => {
        setFormValues(data);
        setIsEditModal(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Gọi api sửa thông tin nhân viên
  const editValue = (value) => {
    setIsEditModal(false);
    console.log(value);
  };

  // Xóa nhân viên
  const deleteValue = () => {};

  return (
    <Main>
      {/* Table hiển thị danh sách */}
      <DefautlTable
        add={() => setIsAddModal(true)}
        edit={showEditModal}
        remove={() => setisDeleteModal(true)}
        dataSource={data}
      />
      {/* Modal hiển thị thông tin từng nhân viên */}
      <UserModal
        isEditModal={isEditModal}
        setIsEditModal={setIsEditModal}
        onFinish={editValue}
        formValues={formValues}
      />
      {/* Modal thêm tài khoản */}
      <AddUserModal
        isAddModal={isAddModal}
        setIsAddModal={setIsAddModal}
        onFinish={addValue}
        nhanvien
      />
      {/* Modal xóa tài khoản */}
      <DeleteModal
        title="Xóa tài khoản"
        isDeleteModal={isDeleteModal}
        setisDeleteModal={setisDeleteModal}
        handleOk={deleteValue}
      />
    </Main>
  );
};

export default Employee;

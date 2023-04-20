import { Modal } from "antd";
import React from "react";
import { AddForm, EditForm, AddFormCustomer, EditFormCustomer } from "./Form";

export const UserModal = ({
  isEditModal,
  setIsEditModal,
  onFinish,
  onFinishFaled,
  nhanvien,
  formValues,
}) => {
  return (
    <Modal
      title="Sửa thông tin"
      centered
      open={isEditModal}
      footer={null}
      onCancel={() => setIsEditModal(false)}
    >
      <EditForm
        submit="Cập nhật"
        onFinish={onFinish}
        onFinishFailed={onFinishFaled}
        nhanvien={nhanvien}
        formValues={formValues}
      />
    </Modal>
  );
};

export const AddUserModal = ({
  isAddModal,
  setIsAddModal,
  onFinish,
  onFinishFaled,
  nhanvien,
}) => {
  return (
    <Modal
      title="Thêm tài khoản"
      centered
      open={isAddModal}
      footer={null}
      onCancel={() => setIsAddModal(false)}
    >
      <AddForm
        submit="Thêm"
        onFinish={onFinish}
        onFinishFailed={onFinishFaled}
        nhanvien={nhanvien}
      />
    </Modal>
  );
};

export const CustomerModal = ({
  isEditModal,
  setIsEditModal,
  onFinish,
  onFinishFaled,
  khachhang,
  formValues,
}) => {
  return (
    <Modal
      title="Sửa thông tin"
      centered
      open={isEditModal}
      footer={null}
      onCancel={() => setIsEditModal(false)}
    >
      <EditFormCustomer
        submit="Cập nhật"
        onFinish={onFinish}
        onFinishFailed={onFinishFaled}
        khachhang={khachhang}
        formValues={formValues}
      />
    </Modal>
  );
};

export const AddCustomerModal = ({
  isAddModal,
  setIsAddModal,
  onFinish,
  onFinishFaled,
  khachhang,
}) => {
  return (
    <Modal
      title="Thêm tài khoản"
      centered
      open={isAddModal}
      footer={null}
      onCancel={() => setIsAddModal(false)}
    >
      <AddFormCustomer
        submit="Thêm"
        onFinish={onFinish}
        onFinishFailed={onFinishFaled}
        khachhang={khachhang}
      />
    </Modal>
  );
};


export const DeleteModal = ({
  title,
  isDeleteModal,
  handleOk,
  setIsDeleteModal,
}) => {
  return (
    <Modal
      title={title}
      open={isDeleteModal}
      onOk={handleOk}
      okText="Xác nhận"
      cancelText="Hủy"
      onCancel={() => setIsDeleteModal(false)}
    >
      <span className="flex items-center"><span> Bạn muốn xóa tài khoản này?</span></span>
    </Modal>
  );
};

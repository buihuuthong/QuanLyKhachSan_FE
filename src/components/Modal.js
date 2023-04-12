import { Modal } from "antd";
import React from "react";
import { AddForm } from "./Form";

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
      title="Sửa tài khoản"
      centered
      open={isEditModal}
      footer={null}
      onCancel={() => setIsEditModal(false)}
    >
      <AddForm
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

export const DeleteModal = ({
  title,
  isDeleteModal,
  handleOk,
  setisDeleteModal,
}) => {
  return (
    <Modal
      title={title}
      centered
      open={isDeleteModal}
      onOk={handleOk}
      onCancel={() => setisDeleteModal(false)}
    >
      <b>Bạn muốn xóa tài khoản này?</b>
    </Modal>
  );
};

import { Modal } from "antd";
import React from "react";
import {
   AddForm, 
   EditForm, 
   AddFormCustomer, 
   EditFormCustomer, 
   AddFormBookRoom, 
   EditFormBookRoom,
   AddFormRoom,
   EditFormRoom
   } from "./Form";

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

export const BookRoomModal = ({
  isEditModal,
  setIsEditModal,
  onFinish,
  onFinishFaled,
  datphong,
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
      <EditFormBookRoom
        submit="Cập nhật"
        onFinish={onFinish}
        onFinishFailed={onFinishFaled}
        datphong={datphong}
        formValues={formValues}
      />
    </Modal>
  );
};

export const AddBookRoomModal = ({
  isAddModal,
  setIsAddModal,
  onFinish,
  onFinishFaled,
  datphong,
}) => {
  return (
    <Modal
      title="Đặt Phòng"
      centered
      open={isAddModal}
      footer={null}
      onCancel={() => setIsAddModal(false)}
    >
      <AddFormBookRoom
        submit="Thêm"
        onFinish={onFinish}
        onFinishFailed={onFinishFaled}
        datphong={datphong}
      />
    </Modal>
  );
};

export const RoomModal = ({
  isEditModal,
  setIsEditModal,
  onFinish,
  onFinishFaled,
  phong,
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
      <EditFormRoom
        submit="Cập nhật"
        onFinish={onFinish}
        onFinishFailed={onFinishFaled}
        phong={phong}
        formValues={formValues}
      />
    </Modal>
  );
};

export const AddRoomModal = ({
  isAddModal,
  setIsAddModal,
  onFinish,
  onFinishFaled,
  phong,
}) => {
  return (
    <Modal
      title="Thêm phòng"
      centered
      open={isAddModal}
      footer={null}
      onCancel={() => setIsAddModal(false)}
    >
      <AddFormRoom
        submit="Thêm"
        onFinish={onFinish}
        onFinishFailed={onFinishFaled}
        phong={phong}
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

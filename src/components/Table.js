import { Table, Tag } from "antd";
import dayjs from "dayjs";
import React from "react";
import { ActionButton, AddButton } from "./Button";

export const DefautlTable = ({
  dataSource,
  add,
  edit,
  remove,
  currentPage,
  totalItems,
  onChange,
}) => {
  const userColumn = [
    {
      title: "Họ tên",
      dataIndex: "HoTen",
      key: "HoTen",
    },
    {
      title: "Ngày sinh",
      dataIndex: "NgaySinh",
      key: "NgaySinh",
      render: (_, record) =>
        record.NgaySinh == null ? null : (
          <p>{dayjs(record.NgaySinh).format("DD-MM-YYYY")}</p>
        ),
    },
    {
      title: "Địa chỉ",
      dataIndex: "DiaChi",
      key: "DiaChi",
    },
    {
      title: "Số điện thoại",
      dataIndex: "SDT",
      key: "SDT",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
    },
    {
      title: "Chức vụ",
      key: "ChucVu",
      dataIndex: "ChucVu",
      render: (_, record) => (
        <Tag color={"green"} key={record.ChucVu?.TenChucVu}>
          {record.ChucVu?.TenChucVu}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <ActionButton edit={() => edit(record.MaNhanVien)} remove={() => remove(record.MaNhanVien)} />
      ),
    },
  ];

  return (
    <div className="bg-white p-4 rounded-md">
      <AddButton add={add} />
      <Table
        columns={userColumn}
        dataSource={dataSource}
        pagination={{
          defaultCurrent: currentPage,
          total: totalItems,
          pageSize: 10,
          onChange: onChange,
        }}
      />
    </div>
  );
};
export const CustomerTable = ({
  dataSource,
  add,
  edit,
  remove,
  currentPage,
  totalItems,
  onChange,
}) => {
  const CustomerColumn = [
    {
      title: "Họ tên",
      dataIndex: "HoTen",
      key: "HoTen",
    },
    {
      title: "Ngày sinh",
      dataIndex: "NgaySinh",
      key: "NgaySinh",
      render: (_, record) =>
        record.NgaySinh == null ? null : (
          <p>{dayjs(record.NgaySinh).format("DD-MM-YYYY")}</p>
        ),
    },
    {
      title: "Địa chỉ",
      dataIndex: "DiaChi",
      key: "DiaChi",
    },
    {
      title: "Số điện thoại",
      dataIndex: "SDT",
      key: "SDT",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <ActionButton edit={() => edit(record.MaKhachHang)} remove={() => remove(record.MaKhachHang)} />
      ),
    },
  ];

  return (
    <div className="bg-white p-4 rounded-md">
      <AddButton add={add} />
      <Table
        columns={CustomerColumn}
        dataSource={dataSource}
        pagination={{
          defaultCurrent: currentPage,
          total: totalItems,
          pageSize: 10,
          onChange: onChange,
        }}
      />
    </div>
  );
};
export const RoomTable = ({
  dataSource,
  add,
  edit,
  remove,
  currentPage,
  totalItems,
  onChange,
}) => {
  const RoomColumn = [
  
    {
      title: "Ngày Tạo",
      dataIndex: "NgayTao",
      key: "NgayTao",
      render: (_, record) =>
        record.NgayTao == null ? null : (
          <p>{dayjs(record.NgaySinh).format("DD-MM-YYYY")}</p>
        ),
    },
    {
      title: "Ngày Sửa",
      dataIndex: "NgaySua",
      key: "NgaySua",
      render: (_, record) =>
        record.NgaySua == null ? null : (
          <p>{dayjs(record.NgaySua).format("DD-MM-YYYY")}</p>
        ),
    },
    {
      title: "Ngày nhận",
      dataIndex: "NgayNhan",
      key: "NgayNhan",
      render: (_, record) =>
        record.NgayNhan == null ? null : (
          <p>{dayjs(record.NgayNhan).format("DD-MM-YYYY")}</p>
        ),
    },
    {
      title: "Ngày Trả",
      dataIndex: "NgayTra",
      key: "NgayTra",
      render: (_, record) =>
        record.NgayTra == null ? null : (
          <p>{dayjs(record.NgayTra).format("DD-MM-YYYY")}</p>
        ),
    },
    {
      title: "Số ngày thuê",
      dataIndex: "SoNgayThue",
      key: "SoNgayThue",
    },
    {
      title: "Giá thuê",
      dataIndex: "GiaThue",
      key: "GiaThue",
    },
    {
      title: "Phụ thu",
      dataIndex: "PhuThu",
      key: "PhuThu",
    },
    {
      title: "Tổng tiền",
      dataIndex: "TongTien",
      key: "TongTien",
    },
    // {
    //   title: "Ghi chú",
    //   dataIndex: "GhiChu",
    //   key: "GhiChu",
    // },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <ActionButton edit={() => edit(record.MaDatPhong)} remove={() => remove(record.MaDatPhong)} />
      ),
    },
  ];

  return (
    <div className="bg-white p-4 rounded-md">
      <AddButton add={add} />
      <Table
        columns={RoomColumn}
        dataSource={dataSource}
        pagination={{
          defaultCurrent: currentPage,
          total: totalItems,
          pageSize: 10,
          onChange: onChange,
        }}
      />
    </div>
  );
};
export const RoomTypeTable = ({
  dataSource,
  add,
  edit,
  remove,
  currentPage,
  totalItems,
  onChange,
}) => {
  const RoomTypeColumn = [
    {
      title: "Tên phòng",
      dataIndex: "TenPhong",
      key: "TenPhong",
    },
    {
      title: "Mã loại phòng",
      dataIndex: "MaLoaiPhong",
      key: "MaLoaiPhong",
    },
    {
      title: "Mã tình trạng",
      dataIndex: "MaTinhTrang",
      key: "MaTinhTrang",
    },
   
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <ActionButton edit={() => edit(record.MaPhong)} remove={() => remove(record.MaPhong)} />
      ),
    },
  ];

  return (
    <div className="bg-white p-4 rounded-md">
      <AddButton add={add} />
      <Table
        columns={RoomTypeColumn}
        dataSource={dataSource}
        pagination={{
          defaultCurrent: currentPage,
          total: totalItems,
          pageSize: 10,
          onChange: onChange,
        }}
      />
    </div>
  );
};


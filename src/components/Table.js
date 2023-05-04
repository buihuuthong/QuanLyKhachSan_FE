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
  khachhang,
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
    ...(khachhang ? [] : [
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
    ]),
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <ActionButton
          edit={() => edit(khachhang ? record.MaKhachHang : record.MaNhanVien)}
          remove={() =>
            remove(khachhang ? record.MaKhachHang : record.MaNhanVien)
          }
        />
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
export const BookRoomTable = ({
  dataSource,
  add,
  edit,
  remove,
  currentPage,
  totalItems,
  onChange,
  datphong
}) => {
  const BookRoomColumn = [
  
    {
      title: "Tên Khách hàng",
      dataIndex: "KhachHang",
      key: "KhachHang",
      render: (_, record) =>
       datphong ? null : (
            <span key={record.KhachHang?.HoTen}>
              {record.KhachHang?.HoTen}
            </span>
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
        columns={BookRoomColumn}
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
  phong
}) => {
  const RoomColumn = [
    {
      title: "Tên phòng",
      dataIndex: "TenPhong",
      key: "TenPhong",
    },
    {
      title: "Tên loại phòng",
      dataIndex: "LoaiPhong",
      key: "LoaiPhong",
      render: (_, record) =>
          phong ? null : (
            <span key={record.LoaiPhong?.TenLoaiPhong}>
              {record.LoaiPhong?.TenLoaiPhong}
            </span>
          ),

    },
    {
      title: "Tên tình trạng",
      dataIndex: "TinhTrangPhong",
      key: "TinhTrangPhong",
      render: (_, record) =>
          phong ? null : (
            <span key={record.TinhTrangPhong?.TenTinhTrang}>
              {record.TinhTrangPhong?.TenTinhTrang}
            </span>
          ),
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


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
    {
      title: "Chức vụ",
      key: "ChucVu",
      dataIndex: "ChucVu",
      render: (_, record) =>
        khachhang ? null : (
          <Tag color={"green"} key={record.ChucVu?.TenChucVu}>
            {record.ChucVu?.TenChucVu}
          </Tag>
        ),
    },
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

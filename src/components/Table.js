import { Table, Tag } from "antd";
import dayjs from "dayjs";
import React from "react";
import { ActionButton, AddButton } from "./Button";

export const DefautlTable = ({ dataSource, add , edit, remove}) => {

  const userColumn = [
    {
      title: "Họ tên",
      dataIndex: "hoten",
      key: "hoten",
    },
    {
      title: "Ngày sinh",
      dataIndex: "ngaysinh",
      key: "ngaysinh",
      render: (_, record) => (
        <p>{dayjs(record.ngaysinh, "DD-MM-YYYY").format("DD-MM-YYYY")}</p>
      ),
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
        <ActionButton edit={edit} remove={remove} />
      ),
    },
  ];

  return (
    <div className="bg-white p-4 rounded-md">
      <AddButton add={add} />
      <Table columns={userColumn} dataSource={dataSource} />
    </div>
  );
};

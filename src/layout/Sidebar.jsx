import React, { useState } from "react";
import { HomeOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import Sider from "antd/es/layout/Sider";

const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};

const items = [
  getItem("Trang chủ", "/home", <HomeOutlined />),
  {
    type: "divider",
  },
  getItem("Quản lý nhân viên", "/employee", <UserOutlined />, [
    getItem("Tài khoản", "/employee/account"),
    getItem("Lương", "/employee/salary"),
    getItem("Chức vụ", "/employee/role"),
  ]),
  {
    type: "divider",
  },
  getItem("Quản lý khách hàng", "/customer", <UserOutlined />, [
    getItem("Tài khoản", "/customer/account"),
  ]),
  {
    type: "divider",
  },
  getItem("Quản lý phòng", "/room", <SettingOutlined />, [
    getItem("Danh sách phòng", "/room/list"),
    getItem("Loại phòng", "/room/type"),
    getItem("Trạng thái phòng", "/room/state"),
  ]),
  {
    type: "divider",
  },
  getItem("Quản lý đặt phòng", "/book-room", <HomeOutlined />, [
    getItem("Danh sách đặt phòng", "/book-room/list"),
  ]),
];

const rootSubmenuKeys = ["/home", "/employee", "/customer", "/room", "/book-room"];

const Sidebar = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState(location.pathname);
  const [openKey, setOpenKey] = useState();
  const [openKeys, setOpenKeys] = useState(["/home"]);

  const onClick = (e) => {
    navigate(e.key);
    setSelectedKey(e.key);

    // expand the parent submenu if the clicked item has children
    const parentKey = e.key.split("/").slice(0, -1).join("/");
    setOpenKey(parentKey);
  };

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{
        backgroundColor: "white",
      }}
    >
      {/* Sidebar header */}
      <div className="flex items-center justify-center h-20 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-emerald-500 text-center">
          HT TEAM
        </h1>
      </div>

      <Menu
        onClick={onClick}
        selectedKeys={selectedKey}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        mode="inline"
        items={items}
        className="w-[100%]"
      />
    </Sider>
  );
};

export default Sidebar;

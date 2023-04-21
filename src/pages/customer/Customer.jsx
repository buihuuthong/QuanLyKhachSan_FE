import React, { useEffect, useState } from "react";
import { DeleteModal, AddCustomerModal, CustomerModal } from "../../components/Modal";
import { CustomerTable } from "../../components/Table";
import Main from "../../layout/Main";
import customerApi from "../../services/customerApi";
import { notification } from "antd";

const Customer = () => {
  // show/ hide modal
  const [isEditModal, setIsEditModal] = useState(false);
  const [isAddModal, setIsAddModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  //set data cho table và modal
  const [data, setData] = useState([]);
  const [formValues, setFormValues] = useState();

  // lưu id user khi được gọii
  const [userId, setUserId] = useState("");

  // phân trang cho table
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  // Lấy danh sách khách hàng
  const getData = () => {
    const result = customerApi.getAll(currentPage);
    result
      .then((data) => {
        setCurrentPage(data.currentPage);
        setTotalItems(data.totalItems);
        setData(data.list);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Load danh sách khi mở trang
  useEffect(() => {
    getData();
  }, [currentPage]);

  // Gọi api thêm khách hàng
  const addValue = async (value) => {
    try {
      await customerApi.create(value);
      setIsAddModal(false);
      getData();
      notification.success({
        message: "Thêm thành công",
        description: "Thêm khách hàng mới thành công!",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Show modal và gọi api lấy thông tin khách hàngg theo id
  const showEditModal = (id) => {
    const result = customerApi.getOne(id);
    result
      .then((data) => {
        setFormValues(data);
        setUserId(id);
        setIsEditModal(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Gọi api sửa thông tin khách hàng
  
  const editValue = async (value) => {
    try {
      await customerApi.edit({
        id: userId,
        data: value,
      });
      setIsEditModal(false);
      getData();
      notification.success({
        message: "Cập nhật thông tin thành công",
        description: "Cập nhật thông tin khách hàng thành công!",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Show modal và lấy id khách hàng
  const showDeleteModal = (id) => {
    setUserId(id);
    setIsDeleteModal(true);
  };

  // Xóa nhân viên
  const deleteValue = async () => {
    try {
      await customerApi.deleteOne(userId);
      setIsDeleteModal(false);
      getData();
      notification.warning({
        message: "Xóa tài khoản thành công",
        description: "Xóa tài khoản khách hàng thành công!",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Main>
      {/* Table hiển thị danh sách */}
      <CustomerTable
        add={() => setIsAddModal(true)}
        edit={showEditModal}
        remove={showDeleteModal}
        dataSource={data}
        currentPage={currentPage}
        totalItems={totalItems}
        onChange={(page) => setCurrentPage(page)}
      />
      {/* Modal hiển thị thông tin từng nhân viên */}
      <CustomerModal
        isEditModal={isEditModal}
        setIsEditModal={setIsEditModal}
        onFinish={editValue}
        formValues={formValues}
      />
      {/* Modal thêm tài khoản */}
      <AddCustomerModal
        isAddModal={isAddModal}
        setIsAddModal={setIsAddModal}
        onFinish={addValue}
        khachhang
      />
      {/* Modal xóa tài khoản */}
      <DeleteModal
        title="Xóa tài khoản"
        isDeleteModal={isDeleteModal}
        setIsDeleteModal={setIsDeleteModal}
        handleOk={deleteValue}
      />
    </Main>
  );
};

export default Customer;

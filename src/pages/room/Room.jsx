import React, { useEffect, useState } from "react";
import { DeleteModal, AddRoomModal, RoomModal } from "../../components/Modal";
import { RoomTable } from "../../components/Table";
import Main from "../../layout/Main";
import roomApi from "../../services/roomApi";
import { notification } from "antd";

const Room = () => {
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

  // Lấy danh sách dat phong
  const getData = () => {
    const result = roomApi.getAll(currentPage);
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

  // Gọi api thêm dat phong
  const addValue = async (value) => {
    try {
      await roomApi.create(value);
      setIsAddModal(false);
      getData();
      notification.success({
        message: "Thêm thành công",
        description: "Thêm phòng mới thành công!",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Show modal và gọi api lấy thông tin phòng theo id
  const showEditModal = (id) => {
    const result = roomApi.getOne(id);
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

  // Gọi api sửa thông tin phòng
  
  const editValue = async (value) => {
    try {
      await roomApi.edit({
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

  // Show modal và lấy id phòng
  const showDeleteModal = (id) => {
    setUserId(id);
    setIsDeleteModal(true);
  };

  // Xóa nhân viên
  const deleteValue = async () => {
    try {
      await roomApi.deleteOne(userId);
      setIsDeleteModal(false);
      getData();
      notification.warning({
        message: "Xóa phòng thành công",
        description: "Xóa phòng khách hàng thành công!",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Main>
      {/* Table hiển thị danh sách phòng*/}
      <RoomTable
        add={() => setIsAddModal(true)}
        edit={showEditModal}
        remove={showDeleteModal}
        dataSource={data}
        currentPage={currentPage}
        totalItems={totalItems}
        onChange={(page) => setCurrentPage(page)}
      />
      {/* Modal hiển thị thông tin từng phòng */}
      <RoomModal
        isEditModal={isEditModal}
        setIsEditModal={setIsEditModal}
        onFinish={editValue}
        formValues={formValues}
      />
      {/* Modal thêm tài khoản */}
      <AddRoomModal
        isAddModal={isAddModal}
        setIsAddModal={setIsAddModal}
        onFinish={addValue}
        datphong
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

export default Room;

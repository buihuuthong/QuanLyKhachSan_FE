import {
  DollarOutlined,
  EditOutlined,
  FieldNumberOutlined,
  FontSizeOutlined,
  HomeOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";
import dayjs from "dayjs";
import React from "react";

const { Option } = Select;

const FormItem = ({ name, required, message, children }) => {
  return (
    <Form.Item
      name={name}
      rules={[
        {
          required: required,
          message: `Vui lòng nhập ${message}!`,
        },
      ]}
    >
      {children}
    </Form.Item>
  );
};

export const EditForm = ({
  nhanvien,
  onFinish,
  onFinishFailed,
  submit,
  formValues,
}) => {
  const [form] = Form.useForm();

  form.setFieldsValue({
    TaiKhoan: formValues.TaiKhoan,
    MatKhau: formValues.MatKhau,
    HoTen: formValues.HoTen,
    NgaySinh: dayjs(formValues.NgaySinh, "YYYY-MM-DD"),
    Email: formValues.Email,
    DiaChi: formValues.DiaChi,
    SDT: formValues.SDT,
    ChucVu: formValues.ChucVu?.TenChucVu,
  });

  return (
    <Form
      name="add"
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="midle"
      form={form}
    >
      <FormItem
        name="TaiKhoan"
        required={nhanvien ? true : false}
        message="tài khoản"
      >
        <Input placeholder="Tài khoản" prefix={<UserOutlined />} />
      </FormItem>

      <FormItem
        name="MatKhau"
        required={nhanvien ? true : false}
        message="mật khẩu"
      >
        <Input.Password placeholder="Mật khẩu" prefix={<LockOutlined />} />
      </FormItem>

      <FormItem
        name="HoTen"
        required={nhanvien ? true : false}
        message="họ tên"
      >
        <Input placeholder="Họ tên" prefix={<FontSizeOutlined />} />
      </FormItem>

      <FormItem
        name="NgaySinh"
        required={nhanvien ? true : false}
        message="ngày sinh"
      >
        <DatePicker placeholder="Ngày sinh" style={{ width: "100%" }} />
      </FormItem>

      <FormItem name="Email" required={nhanvien ? true : false} message="email">
        <Input placeholder="Email" prefix={<MailOutlined />} />
      </FormItem>

      <FormItem
        name="DiaChi"
        required={nhanvien ? true : false}
        message="địa chỉ"
      >
        <Input placeholder="Địa chỉ" prefix={<HomeOutlined />} />
      </FormItem>

      <FormItem
        name="SDT"
        required={nhanvien ? true : false}
        message="số điện thoại"
      >
        <Input placeholder="Số điện thoại" prefix={<PhoneOutlined />} />
      </FormItem>

      <FormItem
        name="ChucVu"
        required={nhanvien ? true : false}
        message="Chức Vụ"
      >
        <Select placeholder="Chức vụ" allowClear>
          <Option value="1">QUANLY</Option>
          <Option value="2">TIEPTAN</Option>
        </Select>
      </FormItem>

      {submit ? (
        <Form.Item>
          <Button className="large-btn" type="primary" htmlType="submit">
            {submit}
          </Button>
        </Form.Item>
      ) : null}
    </Form>
  );
};

export const AddForm = ({
  nhanvien,
  onFinish,
  onFinishFailed,
  submit,
  isSignup,
}) => {
  return (
    <Form
      name="add"
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="midle"
    >
      <FormItem
        name="TaiKhoan"
        required={nhanvien ? true : false}
        message="tài khoản"
      >
        <Input placeholder="Tài khoản" prefix={<UserOutlined />} />
      </FormItem>

      <FormItem
        name="MatKhau"
        required={nhanvien ? true : false}
        message="mật khẩu"
      >
        <Input.Password placeholder="Mật khẩu" prefix={<LockOutlined />} />
      </FormItem>

      <FormItem
        name="HoTen"
        required={nhanvien ? true : false}
        message="họ tên"
      >
        <Input placeholder="Họ tên" prefix={<FontSizeOutlined />} />
      </FormItem>

      <FormItem
        name="NgaySinh"
        required={nhanvien ? true : false}
        message="ngày sinh"
      >
        <DatePicker placeholder="Ngày sinh" style={{ width: "100%" }} />
      </FormItem>

      <FormItem name="Email" required={nhanvien ? true : false} message="email">
        <Input placeholder="Email" prefix={<MailOutlined />} />
      </FormItem>

      <FormItem
        name="DiaChi"
        required={nhanvien ? true : false}
        message="địa chỉ"
      >
        <Input placeholder="Địa chỉ" prefix={<HomeOutlined />} />
      </FormItem>

      <FormItem
        name="SDT"
        required={nhanvien ? true : false}
        message="số điện thoại"
      >
        <Input placeholder="Số điện thoại" prefix={<PhoneOutlined />} />
      </FormItem>
      {isSignup ? null : (
        <FormItem
          name="ChucVu"
          required={nhanvien ? true : false}
          message="Chức Vụ"
        >
          <Select
            placeholder="Chức vụ"
            // onChange={onGenderChange}
            allowClear
          >
            <Option value="1">QUANLY</Option>
            <Option value="2">TIEPTAN</Option>
          </Select>
        </FormItem>
      )}
      {submit ? (
        <Form.Item>
          <Button className="large-btn" type="primary" htmlType="submit">
            {submit}
          </Button>
        </Form.Item>
      ) : null}
    </Form>
  );
};
///form khachHang
export const EditFormCustomer = ({ khachhang, onFinish, onFinishFailed, submit, formValues }) => {
  const [form] = Form.useForm();

  form.setFieldsValue({
    TaiKhoan: formValues.TaiKhoan,
    MatKhau: formValues.MatKhau,
    HoTen: formValues.HoTen,
    NgaySinh: dayjs(formValues.NgaySinh, "YYYY-MM-DD"),
    Email: formValues.Email,
    DiaChi: formValues.DiaChi,
    SDT: formValues.SDT,
  });

  return (
    <Form
      name="add"
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="midle"
      form={form}
    >
      <FormItem name="TaiKhoan" required={khachhang ? true : false} message="tài khoản">
        <Input placeholder="Tài khoản" prefix={<UserOutlined />} />
      </FormItem>

      <FormItem name="MatKhau" required={khachhang ? true : false} message="mật khẩu">
        <Input.Password placeholder="Mật khẩu" prefix={<LockOutlined />} />
      </FormItem>

      <FormItem name="HoTen" required={khachhang ? true : false} message="họ tên">
        <Input placeholder="Họ tên" prefix={<FontSizeOutlined />} />
      </FormItem>

      <FormItem name="NgaySinh" required={khachhang ? true : false} message="ngày sinh">
        <DatePicker placeholder="Ngày sinh" style={{ width: "100%" }} />
      </FormItem>

      <FormItem name="Email" required={khachhang ? true : false} message="email">
        <Input placeholder="Email" prefix={<MailOutlined />} />
      </FormItem>

      <FormItem name="DiaChi" required={khachhang ? true : false} message="địa chỉ">
        <Input placeholder="Địa chỉ" prefix={<HomeOutlined />} />
      </FormItem>

      <FormItem name="SDT" required={khachhang ? true : false} message="số điện thoại">
        <Input placeholder="Số điện thoại" prefix={<PhoneOutlined />} />
      </FormItem>

      {submit ? (
        <Form.Item>
          <Button className="large-btn" type="primary" htmlType="submit">
            {submit}
          </Button>
        </Form.Item>
      ) : null}
    </Form>
  );
};

export const AddFormCustomer = ({ khachhang, onFinish, onFinishFailed, submit }) => {

  return (
    <Form
      name="add"
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="midle"
    >
      <FormItem name="TaiKhoan" required={khachhang ? true : false} message="tài khoản">
        <Input placeholder="Tài khoản" prefix={<UserOutlined />} />
      </FormItem>

      <FormItem name="MatKhau" required={khachhang ? true : false} message="mật khẩu">
        <Input.Password placeholder="Mật khẩu" prefix={<LockOutlined />} />
      </FormItem>
      <FormItem name="HoTen" required={khachhang ? true : false} message="họ tên">
        <Input placeholder="Họ tên" prefix={<FontSizeOutlined />} />
      </FormItem>

      <FormItem name="NgaySinh" required={khachhang ? true : false} message="ngày sinh">
        <DatePicker placeholder="Ngày sinh" style={{ width: "100%" }} />
      </FormItem>

      <FormItem name="Email" required={khachhang ? true : false} message="email">
        <Input placeholder="Email" prefix={<MailOutlined />} />
      </FormItem>

      <FormItem name="DiaChi" required={khachhang ? true : false} message="địa chỉ">
        <Input placeholder="Địa chỉ" prefix={<HomeOutlined />} />
      </FormItem>

      <FormItem name="SDT" required={khachhang ? true : false} message="số điện thoại">
        <Input placeholder="Số điện thoại" prefix={<PhoneOutlined />} />
      </FormItem>
      {submit ? (
        <Form.Item>
          <Button className="large-btn" type="primary" htmlType="submit">
            {submit}
          </Button>
        </Form.Item>
      ) : null}
    </Form>
  );
};
export const EditFormBookRoom = ({
  datphong,
  onFinish,
  onFinishFailed,
  submit,
  formValues,
}) => {
  const [form] = Form.useForm();

  form.setFieldsValue({
    KhachHang: formValues.MaKhachHang?.HoTen,
    MaPhong: formValues.MaPhong,
    NgayTao: dayjs(formValues.NgayTao, "YYYY-MM-DD"),
    NgaySua: dayjs(formValues.NgaySua, "YYYY-MM-DD"),
    NgayNhan: dayjs(formValues.NgayNhan, "YYYY-MM-DD"),
    NgayTra: dayjs(formValues.NgayTra, "YYYY-MM-DD"),
    SoNgayThue: formValues.SoNgayThue,
    NguoiLon: formValues.NguoiLon,
    TreEm: formValues.TreEm,
    GiaThue: formValues.GiaThue,
    PhuThu: formValues.PhuThu,
    TongTien: formValues.TongTien,
    GhiChu: formValues.GhiChu,
    MaNhanVien: formValues.MaNhanVien,
    MaTrangThai: formValues.MaTrangThai,
  });

  return (
    <Form
      name="add"
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="midle"
      form={form}
    >
      <div className="flex justify-between">
        <FormItem name="KhachHang" required={datphong ? true : false} message="Tên khách hàng">
          <Input placeholder="Tên khách hàng" prefix={<UserOutlined />} />
        </FormItem>
        <FormItem name="MaPhong" required={datphong ? true : false} message="Mã phòng">
          <Input placeholder="Mã phòng" prefix={<FontSizeOutlined />} />
        </FormItem>
      </div>
      <div className="flex justify-between ">
        <FormItem className="w-[100%]" name="NgayTao" required={datphong ? true : false} message="ngày tạo">
          <DatePicker placeholder="Ngày tạo"  />
        </FormItem>
        <FormItem className="w-[100%]" name="NgaySua" required={datphong ? true : false} message="ngày sửa">
          <DatePicker placeholder="Ngày sửa"  />
        </FormItem>
        
      </div>
      <div className="flex justify-between">
        <FormItem name="NgayNhan" required={datphong ? true : false} message="ngày nhận">
          <DatePicker placeholder="Ngày nhận"  />
        </FormItem>
        <FormItem name="NgayTra" required={datphong ? true : false} message="ngày trả">
          <DatePicker placeholder="Ngày trả"  />
        </FormItem>
      </div>
      <div className="flex justify-between">
        <FormItem name="SoNgayThue" required={datphong ? true : false} message="số ngày thuê">
          <Input placeholder="Số ngày thuê" prefix={<FieldNumberOutlined />} />
        </FormItem>
        <FormItem name="GiaThue" required={datphong ? true : false} message="giá thuê">
          <Input placeholder="Giá thuê" prefix={<DollarOutlined />} />
        </FormItem>
      </div>
      <div className="flex  justify-between">
      <FormItem name="PhuThu" required={datphong ? true : false} message="Phụ Thu">
          <Input placeholder="Phụ Thu" prefix={<DollarOutlined />} />
        </FormItem>
        <FormItem name="TongTien" required={datphong ? true : false} message="tổng tiền">
          <Input placeholder="tổng tiền" prefix={<DollarOutlined />} />
        </FormItem>
      </div>
      <div className="flex  justify-between">
        <FormItem name="NguoiLon" required={datphong ? true : false} message="Người lớn">
          <Input placeholder="Người lớn" prefix={<UserOutlined />} />
        </FormItem>
      <FormItem name="TreEm" required={datphong ? true : false} message="Trẻ em">
          <Input placeholder="Trẻ em" prefix={<UserOutlined />} />
        </FormItem>
      </div>
      <div className="flex  justify-between">
        <FormItem name="MaTrangThai" required={datphong ? true : false} message="Mã trang thái">
          <Input placeholder="Mã Trang Thái" prefix={<FontSizeOutlined />} />
        </FormItem>
        <FormItem name="MaNhanVien" required={datphong ? true : false} message="Mã Nhân viên">
          <Input placeholder="Mã Nhân Viên" prefix={<FontSizeOutlined />} />
        </FormItem>
      </div>
      <FormItem name="GhiChu" required={datphong ? true : false} message="ghi chú">
        <Input placeholder="Ghi chú" prefix={<  EditOutlined />} />
      </FormItem>
      {submit ? (
        <Form.Item>
          <Button className="large-btn" type="primary" htmlType="submit">
            {submit}
          </Button>
        </Form.Item>
      ) : null}
    </Form>
  );
};

export const AddFormBookRoom = ({
  datphong,
  onFinish,
  onFinishFailed,
  submit,
  isSignup,
}) => {
  return (
    <Form
      name="add"
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="midle"
    >
      <div className="flex justify-between">
        <FormItem name="KhachHang" required={datphong ? true : false} message="Tên khách hàng">
          <Input placeholder="Tên khách hàng" prefix={<UserOutlined />} />
        </FormItem>
        <FormItem name="MaPhong" required={datphong ? true : false} message="Mã phòng">
          <Input placeholder="Mã phòng" prefix={<FontSizeOutlined />} />
        </FormItem>
      </div>
      <div className="flex justify-between ">
        <FormItem name="NgayTao" required={datphong ? true : false} message="ngày tạo">
          <DatePicker placeholder="Ngày tạo" style={{ width: "100%" }} />
        </FormItem>
        <FormItem name="NgaySua" required={datphong ? true : false} message="ngày sửa">
          <DatePicker placeholder="Ngày sửa" style={{ width: "100%" }} />
        </FormItem>
      </div>
      <div className="flex justify-between">
        <FormItem name="NgayNhan" required={datphong ? true : false} message="ngày nhận">
          <DatePicker placeholder="Ngày nhận" style={{ width: "100%" }} />
        </FormItem>
        <FormItem name="NgayTra" required={datphong ? true : false} message="ngày trả">
          <DatePicker placeholder="Ngày trả" style={{ width: "100%" }} />
        </FormItem>
      </div>
      <div className="flex justify-between">
        <FormItem name="SoNgayThue" required={datphong ? true : false} message="số ngày thuê">
          <Input placeholder="Số ngày thuê" prefix={<FieldNumberOutlined />} />
        </FormItem>
        <FormItem name="GiaThue" required={datphong ? true : false} message="giá thuê">
          <Input placeholder="Giá thuê" prefix={<DollarOutlined />} />
        </FormItem>
      </div>
      <div className="flex  justify-between">
        <FormItem name="PhuThu" required={datphong ? true : false} message="Phụ Thu">
          <Input placeholder="Phụ Thu" prefix={<DollarOutlined />} />
        </FormItem>
        <FormItem name="TongTien" required={datphong ? true : false} message="tổng tiền">
          <Input placeholder="tổng tiền" prefix={<DollarOutlined />} />
        </FormItem>
      </div>
      <div className="flex  justify-between">
      <FormItem name="NguoiLon" required={datphong ? true : false} message="Người lớn">
          <Input placeholder="Người lớn" prefix={<UserOutlined />} />
        </FormItem>
      <FormItem name="TreEm" required={datphong ? true : false} message="Trẻ em">
          <Input placeholder="Trẻ em" prefix={<UserOutlined />} />
        </FormItem>
      </div>
      <div className="flex  justify-between">
        <FormItem name="MaTrangThai" required={datphong ? true : false} message="Mã trang thái">
          <Input placeholder="Mã Trang Thái" prefix={<FontSizeOutlined />} />
        </FormItem>
        <FormItem name="MaNhanVien" required={datphong ? true : false} message="Mã Nhân viên">
          <Input placeholder="Mã Nhân Viên" prefix={<FontSizeOutlined />} />
        </FormItem>
      </div>
      <FormItem name="GhiChu" required={datphong ? true : false} message="ghi chú">
        <Input placeholder="Ghi chú" prefix={<  EditOutlined />} />
      </FormItem>
      {submit ? (
        <Form.Item>
          <Button className="large-btn" type="primary" htmlType="submit">
            {submit}
          </Button>
        </Form.Item>
      ) : null}

    </Form>
  );
};
export const EditFormRoom = ({ phong, onFinish, onFinishFailed, submit, formValues }) => {
  const [form] = Form.useForm();

  form.setFieldsValue({
    TenPhong: formValues.TenPhong,
    LoaiPhong: formValues.LoaiPhong?.TenLoaiPhong,
    TinhTrangPhong: formValues.TinhTrangPhong?.TenTinhTrang,

  });

  return (
    <Form
      name="add"
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="midle"
      form={form}
    >

      <FormItem name="TenPhong" required={phong ? true : false} message="Tên phòng">
        <Input placeholder="Tên phòng" prefix={<FontSizeOutlined />} />
      </FormItem>

      <FormItem name="LoaiPhong" required={phong ? true : false} message="Tên loại phòng">

        <Select placeholder="Loại Phòng" allowClear>
          <Option value="1"> Phòng đơn</Option>
          <Option value="2"> Phòng đôi</Option>
          <Option value="3"> Phòng View biển</Option>
          <Option value="4"> Phòng Vip</Option>
        </Select>
      </FormItem>

      <FormItem name="TinhTrangPhong" required={phong ? true : false} message="Tên tình trạng">
        <Select placeholder="Tình trạng" allowClear>
          <Option value="1">  Sẳn sàng</Option>
          <Option value="2">  Đang thuê</Option>
          <Option value="3">  Đang sửa</Option>
        </Select>
      </FormItem>

      {submit ? (
        <Form.Item>
          <Button className="large-btn" type="primary" htmlType="submit">
            {submit}
          </Button>
        </Form.Item>
      ) : null}
    </Form>
  );
};

export const AddFormRoom = ({ phong, onFinish, onFinishFailed, submit }) => {

  return (
    <Form
      name="add"
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="midle"
    >

      <FormItem name="TenPhong" required={phong ? true : false} message="Tên phòng">
        <Input placeholder="Tên phòng" prefix={<FontSizeOutlined />} />
      </FormItem>

      <FormItem name="MaLoaiPhong" required={phong ? true : false} message="Mã loại phòng">
        {/* <Input placeholder="Mã loại phòng" prefix={<FontSizeOutlined />} /> */}
        <Select placeholder="Loại Phòng" allowClear>
          <Option value="1">Phòng đơn</Option>
          <Option value="2"> Phòng đôi</Option>
          <Option value="3"> Phòng View biển</Option>
          <Option value="4"> Phòng Vip</Option>
        </Select>
      </FormItem>

      <FormItem name="MaTinhTrang" required={phong ? true : false} message="Mã tình trạng">
        {/* name="ChucVu"
        required={nhanvien ? true : false}
        message="Chức Vụ" */}
        {/* <Input placeholder="Mã tình trạng" prefix={<FontSizeOutlined />} /> */}
        <Select placeholder="Tình trạng" allowClear>
          <Option value="1"> Sẳn sàng</Option>
          <Option value="2"> Đang thuê</Option>
          <Option value="3"> Đang sửa</Option>
        </Select>
      </FormItem>


      {submit ? (
        <Form.Item>
          <Button className="large-btn" type="primary" htmlType="submit">
            {submit}
          </Button>
        </Form.Item>
      ) : null}
    </Form>
  );
};
export const SigninForm = ({ onFinish, onFinishFailed, onChecked, submit }) => {
  return (
    <Form
      name="signin"
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      size="midle"
    >
      <FormItem name="taikhoan" required={true} message="tài khoản">
        <Input placeholder="Tài khoản" prefix={<UserOutlined />} />
      </FormItem>

      <FormItem name="matkhau" required={true} message="mật khẩu">
        <Input.Password placeholder="Mật khẩu" prefix={<LockOutlined />} />
      </FormItem>

      <FormItem>
        <Checkbox onChange={onChecked}>Nhớ mật khẩu</Checkbox>
      </FormItem>

      <Form.Item>
        <Button className="large-btn" type="primary" htmlType="submit">
          {submit}
        </Button>
      </Form.Item>
    </Form>
  );
};

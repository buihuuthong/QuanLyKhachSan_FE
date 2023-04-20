import {
  FontSizeOutlined,
  HomeOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
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

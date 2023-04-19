import AxiosClient from "./AxiosClient";

const employeeApi = {
  signin: ({ taikhoan, matkhau }) => {
    return AxiosClient.post("nhanvien/signin", {
      TaiKhoan: taikhoan,
      MatKhau: matkhau,
    });
  },
  getAll: (page) => {
    return AxiosClient.get("nhan-vien/danh-sach?page=" + page);
  },
  getOne: (id) => {
    return AxiosClient.get("nhan-vien/tai-khoan?id=" + id);
  },
  create: (data) => {
    return AxiosClient.post("nhan-vien/them", {
      TaiKhoan: data.TaiKhoan,
      MatKhau: data.MatKhau,
      HoTen: data.HoTen,
      NgaySinh: data.NgaySinh,
      DiaChi: data.DiaChi,
      SDT: data.SDT,
      Email: data.Email,
      MaChucVu: data.ChucVu,
    });
  },
  edit: ({ id, data }) => {
    return AxiosClient.put("nhan-vien/sua?id=" + id, {
      TaiKhoan: data.TaiKhoan,
      MatKhau: data.MatKhau,
      HoTen: data.HoTen,
      NgaySinh: data.NgaySinh,
      DiaChi: data.DiaChi,
      SDT: data.SDT,
      Email: data.Email,
      MaChucVu:
        data.ChucVu === "QUANLY"
          ? 1
          : data.ChucVu === "TIEPTAN"
          ? 2
          : data.ChucVu,
    });
  },
  deleteOne: (id) => {
    return AxiosClient.delete("nhan-vien/xoa?id=" + id);
  },
};

export default employeeApi;

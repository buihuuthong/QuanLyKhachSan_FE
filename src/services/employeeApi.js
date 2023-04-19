import AxiosClient from "./AxiosClient";

const employeeApi = {
  signin: (taikhoan, matkhau) => {
    return AxiosClient.post("nhanvien/signin", {
      TaiKhoan: taikhoan,
      MatKhau: matkhau,
    });
  },
  getAll: () => {
    return AxiosClient.get("nhan-vien/danh-sach");
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
  edit: (data) => {
    return AxiosClient.put("nhan-vien/sua",{
      TaiKhoan: data.TaiKhoan,
      MatKhau: data.MatKhau,
      HoTen: data.HoTen,
      NgaySinh: data.NgaySinh,
      DiaChi: data.DiaChi,
      SDT: data.SDT,
      Email: data.Email,
      MaChucVu: data.ChucVu,
    })
  }
};

export default employeeApi;

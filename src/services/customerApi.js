import AxiosClient from "./AxiosClient";

const customerApi = {
  signin: ({ taikhoan, matkhau }) => {
    return AxiosClient.post("khachhang/signin", {
      TaiKhoan: taikhoan,
      MatKhau: matkhau,
    });
  },
  getAllNotPage: () => {
    return AxiosClient.get("khach-hang/danh-sach");
  },
  getAll: (page) => {
    return AxiosClient.get("khach-hang/danh-sach?page=" + page);
  },
  getOne: (id) => {
    return AxiosClient.get("khach-hang/tai-khoan?id=" + id);
  },
  create: (data) => {
    return AxiosClient.post("khach-hang/them", {
      TaiKhoan: data.TaiKhoan,
      MatKhau: data.MatKhau,
      HoTen: data.HoTen,
      NgaySinh: data.NgaySinh,
      DiaChi: data.DiaChi,
      SDT: data.SDT,
      Email: data.Email,
    });
  },
  edit: ({ id, data }) => {
    return AxiosClient.put("khach-hang/sua?id=" + id, {
      HoTen: data.HoTen,
      NgaySinh: data.NgaySinh,
      DiaChi: data.DiaChi,
      SDT: data.SDT,
      Email: data.Email,
    });
  },
  deleteOne: (id) => {
    return AxiosClient.delete("khach-hang/xoa?id=" + id);
  },
};

export default customerApi;

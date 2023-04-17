import AxiosClient from "./AxiosClient";

const employeeApi = {
  signin: (taikhoan, matkhau) => {
    return AxiosClient.post("nhanvien/signin", {
        TaiKhoan: taikhoan,
        MatKhau: matkhau
    });
  },
};

export default employeeApi;

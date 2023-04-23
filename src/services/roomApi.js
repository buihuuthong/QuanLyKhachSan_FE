import AxiosClient from "./AxiosClient";

const roomApi = {
  getAll: (page) => {
    return AxiosClient.get("dat-phong/danh-sach?page=" + page);
  },
  getOne: (id) => {
    return AxiosClient.get("dat-phong/don-dat?id=" + id);
  },
  create: (data) => {
    return AxiosClient.post("dat-phong/tao-don", {
      MaKhachHang: data.MaKhachHang,
      MaPhong: data.MaPhong,
      NgayTao: data.NgayTao,
      NgaySua: data.NgaySua,
      NgayNhan: data.NgayNhan,
      NgayTra: data.NgayTra,
      SoNgayThue: data.SoNgayThue,
      GiaThue: data.GiaThue,
      PhuThu: data.PhuThu,
      TongTien: data.TongTien,
      GhiChu: data.GhiChu,
      MaNhanVien: data.MaNhanVien,
      MaTrangThai: data.MaTrangThai,
    });
  },
  edit: ({ id, data }) => {
    return AxiosClient.put("dat-phong/sua-don?id=" + id, {
        MaKhachHang: data.MaKhachHang,
        MaPhong: data.MaPhong,
        NgayTao: data.NgayTao,
        NgaySua: data.NgaySua,
        NgayNhan: data.NgayNhan,
        NgayTra: data.NgayTra,
        SoNgayThue: data.SoNgayThue,
        GiaThue: data.GiaThue,
        PhuThu: data.PhuThu,
        TongTien: data.TongTien,
        GhiChu: data.GhiChu,
        MaNhanVien: data.MaNhanVien,
        MaTrangThai: data.MaTrangThai,
    });
  },
  deleteOne: (id) => {
    return AxiosClient.delete("dat-phong/xoa-don?id=" + id);
  },
};

export default roomApi;

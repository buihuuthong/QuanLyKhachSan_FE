import AxiosClient from "./AxiosClient";

const roomApi = {
  
  getAll: (page) => {
    return AxiosClient.get("phong/danh-sach-phong?page=" + page);
  },
  getOne: (id) => {
    return AxiosClient.get("phong/thong-tin?id=" + id);
  },
  create: (data) => {
    return AxiosClient.post("phong/tao-phong", {
        TenPhong: data.TenPhong,
        MaLoaiPhong: data.MaLoaiPhong,
        MaTinhTrang: data.MaTinhTrang,

    });
  },
  edit: ({ id, data }) => {
    return AxiosClient.put("phong/sua-phong?id=" + id, {
        TenPhong: data.TenPhong,
        MaLoaiPhong: data.LoaiPhong,
        MaTinhTrang: data.TinhTrangPhong,
    });
  },
  deleteOne: (id) => {
    return AxiosClient.delete("phong/xoa-phong?id=" + id);
  },
};

export default roomApi;

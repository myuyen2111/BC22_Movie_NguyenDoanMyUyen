import {
    GET_DANH_SACH_PHIM_KEYWORD,
    SET_DANH_SACH_PHIM,
    SET_FILM_DANG_CHIEU,
    SET_FILM_SAP_CHIEU,
    SET_THONG_TIN_PHIM,
  } from "../types/QuanLyPhimType";
const stateDefault = {
    arrFilm: [
      {
        maPhim: 1496,
        tenPhim: "Southpaw",
        biDanh: "southpaw",
        trailer: "https://www.youtube.com/embed/Mh2ebPxhoLs",
        hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/southpaw.jpg",
        moTa: "Boxer Billy Hope turns to trainer Tick Willis to help him get his life back on track after losing his wife in a tragic accident and his daughter to child protection services.",
        maNhom: "GP03",
        ngayKhoiChieu: "2019-07-29T00:00:00",
        danhGia: 5,
        hot: true,
        dangChieu: false,
        sapChieu: true
      },
    ],
      arrFilmSearch: [],
  arrFilmDefault: [],
  filmDetail: {},
  thongTinPhim: {},
  dangChieu: false,
  sapChieu: false,
  };
  export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
      case SET_DANH_SACH_PHIM: {
        state.arrFilm = action.arrFilm;
        state.arrFilmDefault = state.arrFilm;
        return { ...state };
      }
  
      case GET_DANH_SACH_PHIM_KEYWORD: {
        state.arrFilmSearch = action.arrFilmSearch;
        state.arrFilmDefault = state.arrFilmSearch;
        return { ...state };
      }
  
      case SET_FILM_DANG_CHIEU: {
        state.dangChieu = !state.dangChieu;
        state.arrFilm = state.arrFilmDefault.filter(
          (film) => film.dangChieu === state.dangChieu
        );
        return { ...state };
      }
      case SET_FILM_SAP_CHIEU: {
        state.sapChieu = !state.sapChieu;
        state.arrFilm = state.arrFilmDefault.filter(
          (film) => film.sapChieu === state.sapChieu
        );
        return { ...state };
      }
      case SET_THONG_TIN_PHIM: {
        state.thongTinPhim = action.thongTinPhim;
        return { ...state };
      }
      default:
        return { ...state };
    }
  };

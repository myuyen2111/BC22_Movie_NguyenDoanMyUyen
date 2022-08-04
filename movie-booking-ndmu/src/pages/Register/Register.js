import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { dangKyAction } from "../../redux/actions/QuanLyNguoiDungAction";
export default function Register(props) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
      maNhom: "",
      hoTen: "",
    },
    onSubmit: (values) => {
      dispatch(dangKyAction(values));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="lg:w-1/2 xl:max-w-screen-sm"
    >
      <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
        <h2
          className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
      xl:text-bold"
        >
          Đăng ký
        </h2>
        <div className="mt-2">
          <div>
            <div>
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Họ và tên
                </div>
              </div>
              <input
                type="text"
                name="hoTen"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b pl-4 mt-2 rounded-xl border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Nguyen Van A"
              />
            </div>

            <div className="mt-2">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Email
                </div>
              </div>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b pl-4 mt-2 rounded-xl border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="mt-2">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Số điện thoại
                </div>
              </div>
              <input
                type="text"
                name="soDT"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b pl-4 mt-2 rounded-xl border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="0909900009"
              />
            </div>

            <div className="mt-2">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Mã nhóm
                </div>
              </div>
              <input
                type="text"
                name="maNhom"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b pl-4 mt-2 rounded-xl border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="1 - 2 - 3"
              />
            </div>

            <div>
              <div className="text-sm font-bold mt-2 text-gray-700 tracking-wide">
                Tài khoản
              </div>
              <input
                name="taiKhoan"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b pl-4 mt-2 rounded-xl border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Nhập vào tài khoản"
              />
            </div>

            <div className="mt-2">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Mật khẩu
                </div>
              </div>
              <input
                type="password"
                name="matKhau"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b pl-4 mt-2 rounded-xl border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Nhập vào mật khẩu"
              />
            </div>

            <div className="mt-5">
              <button
                className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                  shadow-lg"
              >
                Đăng ký
              </button>
            </div>
          </div>
          <div className="mt-5 text-sm font-display font-semibold text-gray-700 text-center">
            Bạn đã có tài khoản ?
            <NavLink
              to="/login"
              className="cursor-pointer text-indigo-600 hover:text-indigo-800 ml-2"
            >
              Đăng nhập
            </NavLink>
          </div>
        </div>
      </div>
    </form>
  );
}

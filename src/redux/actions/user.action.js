
import Axios from "axios";
import { startLoading, stopLoading } from "../../redux/actions/common.actions";

export function loginRequest(user, history) {
  return (dispatch) => {
    dispatch(startLoading());
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
      // headers: "Bearer" + accessToken,  
    })
      .then(function (res) {

        localStorage.setItem("user", JSON.stringify(res.data));
        history.push("/");
        dispatch(login(res.data));
        dispatch(stopLoading());
      })
      .catch(function (err) {
        console.log(err);
        alert("oops,lỗi gì đó rùi");
      });
  };
}
export function logoutRequest() {
  return {
    type: "LOGOUT",
  };
}
export function login(data) {
  return {
    type: "LOGIN",
    payload:data,
  };
}

export function signupRequest(user, history) {
  return (dispatch) => {
    dispatch(startLoading());
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: user,
      // headers: "Bearer" + accessToken,  
    })
      .then(function (res) {
        localStorage.setItem("user", JSON.stringify(res.data));
        history.push("/");
        dispatch(stopLoading());
      })
      .catch(function (err) {
        console.log(err);
        alert("oops,lỗi gì đó rùi");
      });
  };
}
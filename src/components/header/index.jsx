import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutRequest } from "../../redux/actions/user.action";
import { useState } from "react";
let user = JSON.parse(localStorage.getItem("user"));
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  activeRoute: {
    backgroundColor: theme.palette.newColor, // yellow
  },
}));

export default function Header() {
  const classes = useStyles();
  let isLogin = useSelector((state) => {
    return state.dependLogin.isLogin;
  });
  let cloneUser = useSelector((state) => {
    return state.dependLogin.user;
  });
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutRequest());
  };
  const handleSelect=(event)=>{
      event.preventDefault();
      setLocation(event.target.value);
      
  }
  let [location, setLocation] = useState("Hồ Chí Minh");
  return (
    <header>
      <div className="header__content">
        <div className="header__left">
          <a href="./index.html" className="header__webLogo">
            <img src="./tix/tix/img/web-logo.png" alt="web-logo" />
          </a>
        </div>
        <div className="header__center">
          <a
            href="#filmBlock"
            className="header__text jumper"
            data-scroll="homeMovies"
          >
            Lịch Chiếu
          </a>
          <a href="#cinemaBlock" className="header__text jumper">
            Cụm rạp
          </a>
          <a href="#newsBlock" className="header__text jumper">
            Tin Tức
          </a>
          <a href="#homeApp" className="header__text jumper">
            Ứng dụng
          </a>
        </div>
        <div className="header__right">
          <div className="header__account header__logIn">
            <img
              src="./tix/tix/img/avatar.png"
              alt="avatar"
              className="header__avatar m-3"
            />

            {/* {user != null || isLogin === true ? (
              <span>{user?.taiKhoan}</span>
              
            ) : (
              <NavLink to="/sign-in" className="header__signIn">
                Đăng Nhập
              </NavLink>
            )} */}
            {user!=null?<span>{user?.taiKhoan}</span>:isLogin===true?<span>{cloneUser.taiKhoan}</span>:<NavLink to="/sign-in" className="header__signIn">
                Đăng Nhập
              </NavLink>}

            <button className="btn btn-light m-3" onClick={handleLogOut}>
              Đăng Xuất
            </button>
          </div>
          <div className="header__account dropdown header__location">
            <img
              className="place-header"
              src="./tix/tix/img/location-header.png"
              alt="location-header"
            />
            <div
              className="dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              {location}
            </div>
            <ul className="dropdown-menu selectScroll">
              <li className="ng-scope">
                <button  className="btn ng-binding" value="Hồ Chí Minh" onClick={handleSelect}>
                  Hồ Chí Minh
                </button>
              </li>
              <li className="ng-scope">
              <button  className="btn ng-binding" value="Hà Nội" onClick={handleSelect}>
                  Hà Nội
                </button>
              </li>
              <li className="ng-scope">
              <button  className="btn ng-binding" value="Đà Nẵng" onClick={handleSelect}>
                  Đà Nẵng
                </button>
              </li>
              <li className="ng-scope">
              <button  className="btn ng-binding" value="Hải phòng" onClick={handleSelect}>
                  Hải phòng
                </button>
              </li>
              <li className="ng-scope">
              <button  className="btn ng-binding" value="Biên Hòa" onClick={handleSelect}>
                 Biên Hòa
                </button>
              </li>
              <li className="ng-scope">
              <button  className="btn ng-binding" value="Nha Trang" onClick={handleSelect}>
                Nha Trang
                </button>
              </li>
              <li className="ng-scope">
              <button  className="btn ng-binding" value="Bình Dương" onClick={handleSelect}>
               Bình Dương
                </button>
              </li>
              <li className="ng-scope">
              <button  className="btn ng-binding" value=" Vũng Tàu" onClick={handleSelect}>
                  Vũng Tàu
                </button>
              </li>
              <li className="ng-scope">
              <button  className="btn ng-binding" value=" Hạ Long" onClick={handleSelect}>
                 Hạ Long
                </button>
              </li>
              <li className="ng-scope">
              <button  className="btn ng-binding" value="Cần Thơ" onClick={handleSelect}>
                  Cần Thơ
                </button>
              </li>
              <li className="ng-scope">
              <button  className="btn ng-binding" value="Quy Nhơn" onClick={handleSelect}>
                  Quy Nhơn
                </button>
              </li>
              <li className="ng-scope">
              <button  className="btn ng-binding" value=" Huế" onClick={handleSelect}>
                 Huế
                </button>
              </li>
              <li className="ng-scope">
              <button  className="btn ng-binding" value=" Long Xuyên" onClick={handleSelect}>
                  Long Xuyên
                </button>
              </li>
              <li className="ng-scope">
              <button  className="btn ng-binding" value=" Thái Nguyên" onClick={handleSelect}>
                 Thái Nguyên
                </button>
              </li>
              <li className="ng-scope">
              <button  className="btn ng-binding" value="Buôn Mê Thuột" onClick={handleSelect}>
                 Buôn Mê Thuột
                </button>
              </li>
            
            </ul>
          
        </div>

        </div>
        <div className="header__leftMobile">
          <a href="./index.html" className="header__webLogo">
            <img src="./tix/tix/img/web-logo.png" alt="web-logo" />
          </a>
        </div>
        <button
          className="header__rightMobile navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#sideMenu"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <img src="./tix/tix/img/menu-options.png" alt="menu-options" />
        </button>
        <div id="sideMenu" className="header__sideMenu">
          <div className="wrapMenuMobile selectScroll">
            <div className="header__wrapFirst">
              <p className="header__titleMenu">
                <img src="./tix/tix/img/avatar.png" alt="avatar" />
                {user != null || isLogin === true ? (
                  <span>{user?.taiKhoan}</span>
                ) : (
                  <NavLink to="/sign-in" className="header__signIn">
                    Đăng Nhập
                  </NavLink>
                )}
              </p>

              <img
                src="./tix/tix/img/next-session.png"
                alt="next-session"
                className="close"
                data-toggle="collapse"
                data-target="#sideMenu"
              />
            </div>
            <a
              href="#filmBlock"
              className="header__text jumper"
              data-scroll="homeMovies"
            >
              Lịch Chiếu
            </a>
            <a href="#cinemaBlock" className="header__text jumper">
              Cụm rạp
            </a>
            <a href="#newsBlock" className="header__text jumper">
              Tin Tức
            </a>
            <a href="#homeApp" className="header__text jumper">
              Ứng dụng
            </a>
            <a href="#" className="header__text">
              Hồ Chí Minh
            </a>
            <button className="btn btn-light m-3" onClick={handleLogOut}>
              Đăng Xuất
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

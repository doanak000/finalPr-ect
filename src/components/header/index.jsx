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
  const isLogin = useSelector((state) => {
    return state.dependLogin.isLogin;
  });
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
              className="header__avatar"
            />
              {isLogin?<span>//tên user</span>:   <a href="./tix/tix/views/login.html" className="header__signIn">
              Đăng Nhập
            </a>}
         
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
              Hồ Chí Minh
            </div>
            <ul className="dropdown-menu selectScroll">
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Hồ Chí Minh
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Hà Nội
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Đà Nẵng
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Hải Phòng
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Biên Hòa
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Nha Trang
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Bình Dương
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Phan Thiết
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Hạ Long
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Cần Thơ
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Vũng Tàu
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Quy Nhơn
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Huế
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Long Xuyên
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Thái Nguyên
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Buôn Ma Thuột
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Bắc Giang
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Bến Tre
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Việt Trì
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Ninh Bình
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Thái Bình
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Vinh
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Bảo Lộc
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Đà Lạt
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Trà Vinh
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Yên Bái
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Kiên Giang
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Vĩnh Long
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Cà Mau
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Hậu Giang
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Tây Ninh
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Tuyên Quang
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Thanh Hóa
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Nam Định
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Hải Dương
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Gia Lai
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Hà Tĩnh
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Phú Yên
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Bạc Liêu
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Long An
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Đồng Hới
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Hà Nam
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Bắc Ninh
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Quảng Trị
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Kon Tum
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Sóc Trăng
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Sơn La
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Lạng Sơn
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Quảng Ngãi
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Mỹ Tho
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Đồng Tháp
                </a>
              </li>
              <li className="ng-scope">
                <a href="#" className="ng-bingding">
                  Hưng Yên
                </a>
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
                {isLogin?<span>//tên user</span>:   <a href="./tix/tix/views/login.html" className="header__signIn">
              Đăng Nhập
            </a>}
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
            <a href="#" className="header__text">
              Đăng xuất
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

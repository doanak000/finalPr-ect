import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer__content">
        <div className="row footer__rowFirst">
          <div className="col-md-4 col-sm-12 footer__left">
            <h6 className="footer__title">TIX</h6>
            <div className="row">
              <div className="col-sm-6 footer__hideOnMobile">
                <p className="footer__text">FAQ</p>
                <p className="footer__text">Brand Guidelines</p>
              </div>
              <div className="col-sm-6 col-sm-12 footer__onMobile">
                <p className="footer__text">Thỏa thuận sử dụng</p>
                <p className="footer__text">Chính sách bảo mật</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer__middle">
            <h6 className="footer__title">ĐỐI TÁC</h6>
            <div className="row">
              <div className="col-12">
                <a href="#">
                  <img
                    src="./tix/tix/img/cgv.png"
                    alt="iconCGV"
                    style={{ background: "white" }}
                  />
                </a>
                <a href="#">
                  <img src="./tix/tix/img/bhd.png" alt="iconBHD" />
                </a>
                <a href="#">
                  <img src="./tix/tix/img/galaxycine.png" alt="iconGALAXY" />
                </a>
                <a href="#">
                  <img src="./tix/tix/img/cinestar.png" alt="iconCinestar" />
                </a>
                <a href="#">
                  <img
                    src="./tix/tix/img/404b8c4b80d77732e7426cdb7e24be20.png"
                    alt="iconLOTTE"
                  />
                </a>
              </div>
              <div className="col-12">
                <a href="#">
                  <img src="./tix/tix/img/megags.png" alt="iconMegaGS" />
                </a>
                <a href="#">
                  <img src="./tix/tix/img/bt.jpg" alt="iconBeta" />
                </a>
                <a href="#">
                  <img
                    src="./tix/tix/img/dongdacinema.png"
                    alt="iconDongdacinema"
                  />
                </a>
                <a href="#">
                  <img src="./tix/tix/img/TOUCH.png" alt="iconTOUCH" />
                </a>
                <a href="#">
                  <img src="./tix/tix/img/cnx.jpg" alt="iconCNX" />
                </a>
              </div>
              <div className="col-12">
                <a href="#">
                  <img src="./tix/tix/img/STARLIGHT.png" alt="iconStarlight" />
                </a>
                <a href="#">
                  <img src="./tix/tix/img/dcine.png" alt="iconDcine" />
                </a>
                <a href="#">
                  <img src="./tix/tix/img/zalopay_icon.png" alt="iconZalo" />
                </a>
                <a href="#">
                  <img src="./tix/tix/img/payoo.jpg" alt="iconPayoo" />
                </a>
                <a href="#">
                  <img src="./tix/tix/img/VCB.png" alt="iconVCB" />
                </a>
              </div>
              <div className="col-12">
                <a href="#">
                  <img src="./tix/tix/img/AGRIBANK.png" alt="iconAGRIBANK" />
                </a>
                <a href="#">
                  <img
                    src="./tix/tix/img/VIETTINBANK.png"
                    alt="iconVIETTINBANK"
                  />
                </a>
                <a href="#">
                  <img src="./tix/tix/img/IVB.png" alt="iconIVB" />
                </a>
                <a href="#">
                  <img src="./tix/tix/img/123go.png" alt="icon123go" />
                </a>
                <a href="#">
                  <img src="./tix/tix/img/laban.png" alt="iconLaban" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 footer__right">
            <div className="row">
              <div className="col-md-6 footer__hideOnMobile">
                <h6 className="footer__title">MOBILE APP</h6>
                <a href="#">
                  <img src="./tix/tix/img/apple-logo.png" alt="iconApple" />
                </a>
                <a href="#">
                  <img src="./tix/tix/img/android-logo.png" alt="iconAndroid" />
                </a>
              </div>
              <div className="col-md-6 col-sm-12">
                <h6 className="footer__title">SOCIAL</h6>
                <a href="#">
                  <img src="./tix/tix/img/facebook-logo.png" alt="iconFace" />
                </a>
                <a href="#">
                  <img src="./tix/tix/img/zalo-logo.png" alt="iconZalo" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="footer__hr" />
        <div className="row footer__rowSecond">
          <div className="col-sm-1 col-sm-12 footer__img">
            <div className="footer__logo">
              <img src="./tix/tix/img/zion-logo.jpg" alt="logoZion" />
            </div>
          </div>
          <div className="col-sm-9 col-sm-12">
            <h6>TIX-SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h6>
            <p>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </p>
            <p>
              Giấy chứng nhận đăn ký kinh doanh số: 0101659783,
              <br />
              đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
              hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
            </p>
            <p>Số Điện Thoại (Hotline): 1900 545 436</p>
            <p>
              Email:{" "}
              <a href="#" className="footer__email">
                support@tix.vn
              </a>
            </p>
          </div>
          <div className="col-sm-2 col-sm-12 footer__img">
            <div className="footer__BoCo">
              <img
                src="./tix/tix/img/d1e6bd560daa9e20131ea8a0f62e87f8.png"
                alt="logoBoCongThuong"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

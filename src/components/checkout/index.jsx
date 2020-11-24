import React, { Component } from 'react';

class Checkout extends Component {
    render() {
        return (
           <div>
  <div className="header">
    <div className="header__content">
      <div className="row header__hideOnMobile">
        <div className="header__colLeft">
          <ul>
            <li className="active"><span>01 </span> CHỌN GHẾ &amp; THANH TOÁN</li>
            <li><span>02 </span> KẾT QUẢ ĐẶT VÉ</li>
          </ul>
        </div>
        <div className="header__colRight">
          <div className="header__user">
            <img src="./tix/tix/img/avatar.png" alt="avatar" />
            <span>User</span>
          </div>
        </div>
      </div>
      <button className="header__mobile navbar-toggler" type="button" data-toggle="collapse" data-target="#sideMenu" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
        <img src="./tix/tix/img/align-left.png" alt />
      </button>
      <div id="sideMenu" className="header__sideMenu collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="active"><span>01 </span> CHỌN GHẾ &amp; THANH TOÁN</li>
          <li><span>02 </span> KẾT QUẢ ĐẶT VÉ</li>
        </ul>
      </div>
      <div className="header__responsivePay">
        <h6>03. THANH TOÁN</h6>
      </div>
    </div>
  </div>
  <div className="left">
    <div className="left__content">
      <div className="left__bg">
        <div className="left__overlay" />
      </div>
    </div>
  </div>
  <div className="right">
    <div className="right__content">
      <div className="row right__total">
        <div className="col-12">
          <p className="right__cash">0 đ</p>
        </div>
      </div>
      <div className="row right__filmName">
        <div className="col-12 right__text">
          <p className="right__name"><span>C18</span> Bloodshot</p>
          <div className="right__address">
            <span className="right__pcinema">CGV</span>
            <span className="cinemaName"> - Crescent Mall</span>
          </div>
          <div className="right__hour">Ngày 13/03/2020 - 19:40  Cinema 5</div>
        </div>
      </div>
      <div className="row right__chair">
        <div className="col-12">
          <div className="right__left">Ghế</div>
          <div className="right__right">0 đ</div>
        </div>
      </div>
      <div className="row right__infoUser">
        <div className="col-12">
          <input type="text" name id className="content" />
          <label htmlFor="emailCheckout">E-Mail</label>
        </div>
      </div>
      <div className="row right__infoUser">
        <div className="col-12">
          <input type="text" name id className="content" />
          <label htmlFor="phoneCheckout">Phone</label>
        </div>
      </div>
      <div className="row right__voucher">
        <div className="col-12">
          <div className="right__left">
            <input type="text" name id placeholder="Nhập tại đây./tix/tix." />
            <label htmlFor="voucherPromotion">Mã giảm giá</label>
          </div>
          <div className="right__right">
            <div className="right__apply">Áp dụng</div>
          </div>
        </div>
      </div>
      <div className="row right__methodPay">
        <div className="col-12">
          <p className="right__titleMethodPay">Hình thức thanh toán</p>
          <p className="right__warning">Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp.</p>
        </div>   
      </div>
      <div className="row right__notice">
        <div className="right__errorBook">
          <img src="./tix/tix/img/exclamation.png" alt="iconExclamation" />
          <span className="right__title">Vé đã mua không thể đổi hoặc hoàn tiền <br /></span>
          <span className="right__title">Mã vé sẽ được gửi qua tin nhắn <span className="right__item">ZMS</span> (tin nhắn Zalo) và <br /> <span className="right__item">Email</span> đã nhập</span>
        </div>
      </div>
    </div>
    <div className="right__button">Đặt Vé</div>
  </div>
  <div className="seatCheckOut">
    <div className="seatCheckOut__content">
      <div className="seatCheckOut__header">
        <div className="seatCheckOut__leftTitle">
          <div className="seatCheckOut__logo">
            <img src="./tix/tix/img/ee621ee05dcd4565caead4f29421b41e.png" alt="logoCGV" />
          </div>
          <div className="seatCheckOut__contentCinema">
            <p className="seatCheckOut__address">
              <span>CGV</span> - Crescent Mall
            </p>
            <p className="seatCheckOut__hour"> - 19:40 - Cinema 5</p>
          </div>
        </div>
        <div className="seatCheckOut__rightTitle">
          <p className="seatCheckOut__info1">thời gian giữ ghế</p>
          <p className="seatCheckOut__info2">5:00</p>
        </div>
      </div>
      <div className="clear" />
      <div className="seatCheckOut__seatMap">
        <div className="seatCheckOut__screen">
          <img src="./tix/tix/img/screen.png" alt />
        </div>
        <div className="seatCheckOut__listSeat">
          <div className="seatCheckOut__item"><p className="A1">A1</p></div>
          <div className="seatCheckOut__item"><p className="A2">A2</p></div>
          <div className="seatCheckOut__item"><p className="A3">A3</p></div>
          <div className="seatCheckOut__item"><p className="A4">A4</p></div>
          <div className="seatCheckOut__item"><p className="A5">A5</p></div>
          <div className="seatCheckOut__item"><p className="A6">A6</p></div>
          <div className="seatCheckOut__item"><p className="A7">A7</p></div>
          <div className="seatCheckOut__item"><p className="A8">A8</p></div>
          <div className="seatCheckOut__item"><p className="A9">A9</p></div>
          <div className="seatCheckOut__item"><p className="B1">B1</p></div>
          <div className="seatCheckOut__item"><p className="B2">B2</p></div>
          <div className="seatCheckOut__item"><p className="B3">B3</p></div>
          <div className="seatCheckOut__item"><p className="B4">B4</p></div>
          <div className="seatCheckOut__item"><p className="B5">B5</p></div>
          <div className="seatCheckOut__item"><p className="B6">B6</p></div>
          <div className="seatCheckOut__item"><p className="B7">B7</p></div>
          <div className="seatCheckOut__item"><p className="B8">B8</p></div>
          <div className="seatCheckOut__item"><p className="B9">B9</p></div>
          <div className="seatCheckOut__item"><p className="C1">C1</p></div>
          <div className="seatCheckOut__item"><p className="C2">C2</p></div>
          <div className="seatCheckOut__item"><p className="C3">C3</p></div>
          <div className="seatCheckOut__item"><p className="C4">C4</p></div>
          <div className="seatCheckOut__item"><p className="C5">C5</p></div>
          <div className="seatCheckOut__item"><p className="C6">C6</p></div>
          <div className="seatCheckOut__item"><p className="C7">C7</p></div>
          <div className="seatCheckOut__item"><p className="C8">C8</p></div>
          <div className="seatCheckOut__item"><p className="C9">C9</p></div>
          <div className="seatCheckOut__item"><p className="D1 seatChoosing seatChoosing">D1</p></div>
          <div className="seatCheckOut__item"><p className="D2 seatChoosing seatChoosing">D2</p></div>
          <div className="seatCheckOut__item"><p className="D3 seatChosen">D3</p></div>
          <div className="seatCheckOut__item"><p className="D4 seatChosen">D4</p></div>
          <div className="seatCheckOut__item"><p className="D5 seatChosen">D5</p></div>
          <div className="seatCheckOut__item"><p className="D6 seatChosen">D6</p></div>
          <div className="seatCheckOut__item"><p className="D7 seatChosen">D7</p></div>
          <div className="seatCheckOut__item"><p className="D8 seatChosen">D8</p></div>
          <div className="seatCheckOut__item"><p className="D9 seatChosen">D9</p></div>
          <div className="seatCheckOut__item"><p className="E1">E1</p></div>
          <div className="seatCheckOut__item"><p className="E2">E2</p></div>
          <div className="seatCheckOut__item"><p className="E3">E3</p></div>
          <div className="seatCheckOut__item"><p className="E4 seatChosen">E4</p></div>
          <div className="seatCheckOut__item"><p className="E5 seatChosen">E5</p></div>
          <div className="seatCheckOut__item"><p className="E6 seatChosen">E6</p></div>
          <div className="seatCheckOut__item"><p className="E7 seatChosen">E7</p></div>
          <div className="seatCheckOut__item"><p className="E8 seatChoosing">E8</p></div>
          <div className="seatCheckOut__item"><p className="E9 seatChoosing">E9</p></div>
          <div className="seatCheckOut__item"><p className="F1 seatChosen">F1</p></div>
          <div className="seatCheckOut__item"><p className="F2 seatChosen">F2</p></div>
          <div className="seatCheckOut__item"><p className="F3 seatChosen">F3</p></div>
          <div className="seatCheckOut__item"><p className="F4 seatChosen">F4</p></div>
          <div className="seatCheckOut__item"><p className="F5 seatChosen">F5</p></div>
          <div className="seatCheckOut__item"><p className="F6 seatChosen">F6</p></div>
          <div className="seatCheckOut__item"><p className="F7">F7</p></div>
          <div className="seatCheckOut__item"><p className="F8 seatChosen">F8</p></div>
          <div className="seatCheckOut__item"><p className="F9 seatChosen">F9</p></div>
          <div className="seatCheckOut__item"><p className="G1  seatChoosing seatChoosing">G1</p></div>
          <div className="seatCheckOut__item"><p className="G2 seatChoosing">G2</p></div>
          <div className="seatCheckOut__item"><p className="G3 seatChoosing">G3</p></div>
          <div className="seatCheckOut__item"><p className="G4 seatChoosing">G4</p></div>
          <div className="seatCheckOut__item"><p className="G5 seatChoosing">G5</p></div>
          <div className="seatCheckOut__item"><p className="G6 seatChoosing">G6</p></div>
          <div className="seatCheckOut__item"><p className="G7">G7</p></div>
          <div className="seatCheckOut__item"><p className="G8">G8</p></div>
          <div className="seatCheckOut__item"><p className="G9">G9</p></div>
          <div className="seatCheckOut__item"><p className="H1 seatNotChosen seatChosen">H1</p></div>
          <div className="seatCheckOut__item"><p className="H2 seatNotChosen seatChosen">H2</p></div>
          <div className="seatCheckOut__item"><p className="H3 seatNotChosen seatChosen">H3</p></div>
          <div className="seatCheckOut__item"><p className="H4 seatNotChosen seatChosen">H4</p></div>
          <div className="seatCheckOut__item"><p className="H5 seatNotChosen seatChosen">H5</p></div>
          <div className="seatCheckOut__item"><p className="H6 seatNotChosen seatChosen">H6</p></div>
          <div className="seatCheckOut__item"><p className="H7 seatNotChosen seatChosen">H7</p></div>
          <div className="seatCheckOut__item"><p className="H8 seatNotChosen seatChosen">H8</p></div>
          <div className="seatCheckOut__item"><p className="H9 seatNotChosen seatChosen">H9</p></div>
        </div>
        <div className="seatCheckOut__noteSeat">
          <div className="seatCheckOut__typeSeats">
            <span className="seatCheckOut__colorChoosing seatCheckOut__typeSeat">
              <span className="color" />
              <span className="nameSeat">Ghế đang chọn</span>
            </span>
            <span className="seatCheckOut__colorChosen seatCheckOut__typeSeat">
              <span className="color" />
              <span className="nameSeat">Ghế đã có người chọn</span>
            </span>
            <span className="seatCheckOut__colorNotChosen seatCheckOut__typeSeat">
              <span className="color" />
              <span className="nameSeat">Ghế không thể chọn</span>
            </span>
          </div>
          {/* <div class="seatCheckOut__positionViews">
                      <span class="seatCheckOut__positionView">
                          <span class="lineView lineCenter"></span>
                          <span class="titleView">Ghế trung tâm</span>
                      </span>
                      <span class="seatCheckOut__positionView">
                          <span class="lineView lineBeatiful"></span>
                          <span class="titleView">Ghế đẹp</span>
                      </span>
                  </div> */}
        </div>
      </div>
    </div>
  </div>
</div>

        );
    }
}

export default Checkout;
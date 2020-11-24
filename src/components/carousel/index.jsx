import React, { Component } from 'react';


class Carousel extends Component {
  render() {
    return (
      <section className="carousel">
      <div className="carousel__content">
        <div
          id="TixIndicators"
          className="carousel slide tixCarousel"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#TixIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#TixIndicators" data-slide-to={1} />
            <li data-target="#TixIndicators" data-slide-to={2} />
            <li data-target="#TixIndicators" data-slide-to={3} />
            <li data-target="#TixIndicators" data-slide-to={4} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <a href="./detail.html" className="carousel__changeDetail">
                <img
                  src="./tix/tix/img/vin-diesel-BLOODSHOT.png"
                  className="d-block w-100"
                  alt="BLOODSHOT"
                />
                <div className="carousel__bg" />
              </a>
              <button type="button" className="carousel__button">
                <a href="./detail.html" className="carousel__changeDetail"></a>
                <a
                  className="venobox"
                  data-vbtype="video"
                  href="https://www.youtube.com/embed/MG-BJBSeV64?autoplay=1"
                >
                  <img src="./tix/tix/img/play-video.png" alt="play-video" />
                </a>
              </button>
            </div>
            <div className="carousel-item">
              <img
                src="./tix/tix/img/sieu-ve-si-so-vo.jpg"
                className="d-block w-100"
                alt="sieu-ve-si-so-vo"
              />
              <div className="carousel__bg" />
              <button type="button" className="carousel__button">
                <a
                  className="venobox"
                  data-vbtype="video"
                  href="https://www.youtube.com/embed/-uOpDY8DAsM?autoplay=1"
                >
                  <img src="./tix/tix/img/play-video.png" alt="play-video" />
                </a>
              </button>
            </div>
            <div className="carousel-item">
              <img
                src="./tix/tix/img/vi-anh-van-tin.jpg"
                className="d-block w-100"
                alt="vi-anh-van-tin"
              />
              <div className="carousel__bg" />
              <button type="button" className="carousel__button">
                <a
                  className="venobox"
                  data-vbtype="video"
                  href="https://www.youtube.com/embed/OGfm7CNM5BY?autoplay=1"
                >
                  <img src="./tix/tix/img/play-video.png" alt="play-video" />
                </a>
              </button>
            </div>
            <div className="carousel-item">
              <img
                src="./tix/tix/img/dau-an-vo-cuc.jpg"
                className="d-block w-100"
                alt="dau-an-vo-cuc"
              />
              <div className="carousel__bg" />
              <button type="button" className="carousel__button">
                <a
                  className="venobox"
                  data-vbtype="video"
                  href="https://www.youtube.com/embed/sdkUce1q-n4?autoplay=1"
                >
                  <img src="./tix/tix/img/play-video.png" alt="play-video" />
                </a>
              </button>
            </div>
            <div className="carousel-item">
              <img
                src="./tix/tix/img/loan-nhip.jpg"
                className="d-block w-100"
                alt="loan-nhip"
              />
              <div className="carousel__bg" />
              <button type="button" className="carousel__button">
                <a
                  className="venobox"
                  data-vbtype="video"
                  href="https://www.youtube.com/embed/b5u8UTV0OWs?autoplay=1"
                >
                  <img src="./tix/tix/img/play-video.png" alt="play-video" />
                </a>
              </button>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#TixIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon button"
              aria-hidden="true"
            />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#TixIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon button"
              aria-hidden="true"
            />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="carousel__selectMovie">
        <div className="w30p widthByPercent dropdown selectFilm">
          <div
            className="dropdown-toggle selectMenu"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Phim
          </div>
          <ul className="dropdown-menu selectSroll">
            <li className="ng-scope">
              <a href="#">Bloddshot (C18)</a>
            </li>
            <li className="ng-scope">
              <a href="#">Nắng 3: Lời Hứa Của Cha (C16)</a>
            </li>
            <li className="ng-scope">
              <a href="#">Vì ANh Vẫn Tin - I Still Believe (C13)</a>
            </li>
            <li className="ng-scope">
              <a href="#">Siêu Vệ Sĩ Sợ Vợ - The Protector (C16)</a>
            </li>
            <li className="ng-scope">
              <a href="#">Ác Mộng Bên Hồ - Lake Of Death (C18)</a>
            </li>
            <li className="ng-scope">
              <a href="#">Truy Tìm Phép Thuật - Onward</a>
            </li>
            <li className="ng-scope">
              <a href="#">Dấu Ấn Vô Cực (C18)</a>
            </li>
            <li className="ng-scope">
              <a href="#">Loạn Nhịp - Heartbeats (C16)</a>
            </li>
            <li className="ng-scope">
              <a href="#">Căn Hộ Của Quỷ - 32 Malasana Street (C18)</a>
            </li>
            <li className="ng-scope">
              <a href="#">Kẻ Vô Hình - The Invisible Man (C18)</a>
            </li>
            <li className="ng-scope">
              <a href="#">Cậu Bé Ma 2 - Brahms: The Boy 2 (C16)</a>
            </li>
            <li className="ng-scope">
              <a href="#">Sát Thủ Vô Cùng Cực - Hitman: Agent Jun (C18)</a>
            </li>
          </ul>
        </div>
        <div className="smallBlock widthByPercent dropdown selectCinema">
          <div
            className="dropdown-toggle selectMenu"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Rạp
          </div>
          <ul className="dropdown-menu selectSroll">
            <li className="ng-scope">
              <a href="#">Vui lòng chọn phim</a>
            </li>
          </ul>
        </div>
        <div className="smallBlock widthByPercent dropdown selectDate">
          <div
            className="dropdown-toggle selectMenu"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Ngày xem
          </div>
          <ul className="dropdown-menu selectSroll">
            <li className="ng-scope">
              <a href="#">Vui lòng chọn phim và rạp</a>
            </li>
          </ul>
        </div>
        <div className="smallBlock widthByPercent dropdown selectSession">
          <div
            className="dropdown-toggle selectMenu"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Suất chiếu
          </div>
          <ul className="dropdown-menu selectSroll">
            <li className="ng-scope">
              <a href="#">Vui lòng chọn phim, rạp và ngày xem</a>
            </li>
          </ul>
        </div>
        <div className="smallBlock widthByPercent ">
          <button className="btn btn-primary buyTicket">MUA VÉ NGAY</button>
        </div>
      </div>
      <div className="clear" />
    </section>
    );
  }
}

export default Carousel;
import React from "react";

export default function Application() {
  return (
    <section className="application" id="homeApp">
      <div className="row">
        <div className="col-12">
          <div className="application__content">
            <div className="row">
              <div className="col-md-6 col-sm-12 application__left">
                <h2>Ứng dụng tiện lợi dành cho</h2>
                <h2>người yêu điện ảnh</h2>
                <br />
                <p>
                  Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                  và đổi quà hấp dẫn.
                </p>
                <br />
                <button>App miễn phí - Tải về ngay!</button>
                <p className="application__textAppUnder">
                  TIX có hai phiên bản <span>iOS</span> &amp;{" "}
                  <span>Android</span>
                </p>
              </div>
              <div className="col-md-6 col-sm-12 application__right">
                <img
                  src="./tix/tix/img/mobile.png"
                  alt="iconMobile"
                  className="application__phone-img"
                />
                <div className="application__slick-slider">
                  <div className="application__draggable owl-carousel">
                    <div className="application__picture">
                      <img src="./tix/tix/img/slide/slide1.jpg" alt="slide1" />
                    </div>
                    <div className="application__picture">
                      <img src="./tix/tix/img/slide/slide2.jpg" alt="slide2" />
                    </div>
                    <div className="application__picture">
                      <img src="./tix/tix/img/slide/slide3.jpg" alt="slide3" />
                    </div>
                    <div className="application__picture">
                      <img src="./tix/tix/img/slide/slide4.jpg" alt="slide4" />
                    </div>
                    <div className="application__picture">
                      <img src="./tix/tix/img/slide/slide5.jpg" alt="slide5" />
                    </div>
                    <div className="application__picture">
                      <img src="./tix/tix/img/slide/slide6.jpg" alt="slide6" />
                    </div>
                    <div className="application__picture">
                      <img src="./tix/tix/img/slide/slide7.jpg" alt="slide7" />
                    </div>
                    <div className="application__picture">
                      <img src="./tix/tix/img/slide/slide8.jpg" alt="slide8" />
                    </div>
                    <div className="application__picture">
                      <img src="./tix/tix/img/slide/slide9.jpg" alt="slide9" />
                    </div>
                    <div className="application__picture">
                      <img
                        src="./tix/tix/img/slide/slide10.jpg"
                        alt="slide10"
                      />
                    </div>
                    <div className="application__picture">
                      <img
                        src="./tix/tix/img/slide/slide11.jpg"
                        alt="slide11"
                      />
                    </div>
                    <div className="application__picture">
                      <img
                        src="./tix/tix/img/slide/slide12.jpg"
                        alt="slide12"
                      />
                    </div>
                    <div className="application__picture">
                      <img
                        src="./tix/tix/img/slide/slide13.jpg"
                        alt="slide13"
                      />
                    </div>
                    <div className="application__picture">
                      <img
                        src="./tix/tix/img/slide/slide14.jpg"
                        alt="slide14"
                      />
                    </div>
                    <div className="application__picture">
                      <img
                        src="./tix/tix/img/slide/slide15.jpg"
                        alt="slide15"
                      />
                    </div>
                    <div className="application__picture">
                      <img
                        src="./tix/tix/img/slide/slide16.jpg"
                        alt="slide16"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

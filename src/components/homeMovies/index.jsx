import React from "react";

export default function HomeMovies() {
  return (
    <section className="homeMovies" id="cinemaBlock">
      <div className="homeMovies__content">
        <div className="homeMovies__bg">
          <div className="row">
            <div className="col-12">
              <div className="parentListPCinemas col-sm-12">
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    className="nav-link active"
                    id="v-pills-CGV-tab"
                    data-toggle="pill"
                    href="#v-pills-CGV"
                    role="tab"
                    aria-controls="v-pills-CGV"
                    aria-selected="true"
                  >
                    <img
                      src="./tix/tix/img/ee621ee05dcd4565caead4f29421b41e.png"
                      alt="logoCGV"
                    />
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-BHD-tab"
                    data-toggle="pill"
                    href="#v-pills-BHD"
                    role="tab"
                    aria-controls="v-pills-BHD"
                    aria-selected="false"
                  >
                    <img
                      src="./tix/tix/img/f32670fd0eb083c9c4c804f0f3a252ed.png"
                      alt="logoBHD"
                    />
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-GALAXY-tab"
                    data-toggle="pill"
                    href="#v-pills-GALAXY"
                    role="tab"
                    aria-controls="v-pills-GALAXY"
                    aria-selected="false"
                  >
                    <img
                      src="./tix/tix/img/e520781386bd5436e94d6e15e193a005.png"
                      alt="logoGALAXY"
                    />
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-DDC-tab"
                    data-toggle="pill"
                    href="#v-pills-DDC"
                    role="tab"
                    aria-controls="v-pills-DDC"
                    aria-selected="false"
                  >
                    <img
                      src="./tix/tix/img/9b240f96a233bb43203ee514a21a6004.png"
                      alt="logoDDC"
                    />
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-MegaGS-tab"
                    data-toggle="pill"
                    href="#v-pills-MegaGS"
                    role="tab"
                    aria-controls="v-pills-MegaGS"
                    aria-selected="false"
                  >
                    <img
                      src="./tix/tix/img/7b078639bd8fdb09dd83652d207c7b90.png"
                      alt="logoMegaGS"
                    />
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-Dcine-tab"
                    data-toggle="pill"
                    href="#v-pills-Dcine"
                    role="tab"
                    aria-controls="v-pills-Dcine"
                    aria-selected="false"
                  >
                    <img
                      src="./tix/tix/img/9ff07a03371c4a09260309faa32caa55.jpg"
                      alt="logoDcine"
                    />
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-LOTTE-tab"
                    data-toggle="pill"
                    href="#v-pills-LOTTE"
                    role="tab"
                    aria-controls="v-pills-LOTTE"
                    aria-selected="false"
                  >
                    <img
                      src="./tix/tix/img/404b8c4b80d77732e7426cdb7e24be20.png"
                      alt="logoLOTTE"
                    />
                  </a>
                </div>
              </div>
              <div className="listCinemas col-sm-12">
                <div
                  className="tab-content selectScroll"
                  id="v-pills-tabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-CGV"
                    role="tabpanel"
                    aria-labelledby="v-pills-CGV-tab"
                  >
                    <div className="homeMovies__scope">
                      <div className="homeMovies__cinema active">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/cgv-aeon-binh-tan-15380175062534.jpg"
                            alt="CGV"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema">CGV</span>{" "}
                            - Aeon Bình Tân
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            Tầng 3, Trung tâm thương mại Aeon Mall Bình Tân, Số
                            1 đường số 17A, khu phố 11, phường Bình Trị Đông B,
                            quận Bình Tân, TPHCM
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/cgv-aeon-binh-tan-15380175062534.jpg"
                            alt="CGV"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema">CGV</span>{" "}
                            - Hùng Vương Plaza
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            Tầng 7, Hùng Vương Plaza 126 Hùng Vương Quận 5 Tp.
                            Hồ Chí Minh
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/cgv-aeon-binh-tan-15380175062534.jpg"
                            alt="CGV"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema">CGV</span>{" "}
                            - Vincom Thủ Đức
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            Tầng 5, TTTM Vincom Thủ Đức, 216 Võ Văn Ngân, Phường
                            Bình Thọ, Quận Thủ Đức
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/cgv-aeon-binh-tan-15380175062534.jpg"
                            alt="CGV"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema">CGV</span>{" "}
                            - Saigonres Nguyễn Xí
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            Tầng 4-5, Saigonres Plaza, 79/81 Nguyễn Xí, P 26, Q
                            Bình Thạnh
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/cgv-aeon-binh-tan-15380175062534.jpg"
                            alt="CGV"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema">CGV</span>{" "}
                            - Trường Sơn (CGV CT Plaza)
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            Tầng 10, Tòa nhà Vietjet Plaza, 60A Trường Sơn, P.2,
                            Q. Tân Bình, TP.HCM, Việt Nam
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/cgv-aeon-binh-tan-15380175062534.jpg"
                            alt="CGV"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema">CGV</span>{" "}
                            - Vivo City
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            Lầu 5, Trung tâm thương mại SC VivoCity - 1058
                            Nguyễn Văn Linh, Quận 7
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/cgv-aeon-binh-tan-15380175062534.jpg"
                            alt="CGV"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema">CGV</span>{" "}
                            - Sư Vạn Hạnh
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            Tầng 6, Vạn Hạnh Mall, 11 Sư Vạn Hạnh, Phường 12,
                            Quận 10
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/cgv-aeon-binh-tan-15380175062534.jpg"
                            alt="CGV"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema">CGV</span>{" "}
                            - Pandora City
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            Lầu 3, Pandora City 1/1 Trường Chinh Quận Tân Phú
                            TP. Hồ Chí Minh
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/cgv-aeon-binh-tan-15380175062534.jpg"
                            alt="CGV"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema">CGV</span>{" "}
                            - Pearl Plaza
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            Tầng 5, Pearl Plaza, 516A Điện Biên Phủ, P.25,
                            Q.Bình Thạnh, TP.HCM
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/290284596e800086d4f06054e56f26fa.jpg"
                            alt="CGV"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema">CGV</span>{" "}
                            - Satra Củ Chi
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            Tầng 3, TTTM Satra Củ Chi, Số 1239, Tỉnh Lộ 8, Ấp
                            Thạnh An, Xã Trung An, Huyện Củ Chi, TP.HCM
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/cgv-aeon-binh-tan-15380175062534.jpg"
                            alt="CGV"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema">CGV</span>{" "}
                            - Aeon Tân Phú
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            Lầu 3, Aeon Mall 30 Bờ Bao Tân Thắng, P. Sơn Kỳ Quận
                            Tân Phú TP. Hồ Chí Minh
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/cgv-aeon-binh-tan-15380175062534.jpg"
                            alt="CGV"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema">CGV</span>{" "}
                            - Parkson Đồng Khởi
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            Tầng 5, số 35 bis-45, đường Lê Thánh Tôn, Phường Bến
                            Nghé, Quận 1, Tp. Hồ Chí Minh, Việt Nam
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/cgv-aeon-binh-tan-15380175062534.jpg"
                            alt="CGV"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema">CGV</span>{" "}
                            - Vincom Gò Vấp
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            Tầng 5 TTTM Vincom Plaza Gò Vấp, 12 Phan Văn Trị,
                            Phường 7, Quận Gò Vấp
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/cgv-aeon-binh-tan-15380175062534.jpg"
                            alt="CGV"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema">CGV</span>{" "}
                            - Vincom Center Landmark 81
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            Tầng B1, TTTM Vincom Center Landmark 81, 772 Điện
                            Biên Phủ, P.22, Q. Bình Thạnh, HCM
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/cgv-aeon-binh-tan-15380175062534.jpg"
                            alt="CGV"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema">CGV</span>{" "}
                            - Crescent Mall
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            Lầu 5, Crescent Mall Đại lộ Nguyễn Văn Linh, Phú Mỹ
                            Hưng Quận 7 TP. Hồ Chí Minh
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/290284596e800086d4f06054e56f26fa.jpg"
                            alt="CGV"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema">CGV</span>{" "}
                            - Lý Chính Thắng
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            Tầng 3, 83 Lý Chính Thắng, Phường 8, Q.3, TP.HCM
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/cgv-aeon-binh-tan-15380175062534.jpg"
                            alt="CGV"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema">CGV</span>{" "}
                            - Hoàng Văn Thụ
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            Tầng 1 và 2, Gala Center, số 415, Hoàng Văn Thụ,
                            Phường 2, Quận Tân Bình, TPHCM
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/290284596e800086d4f06054e56f26fa.jpg"
                            alt="CGV"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema">CGV</span>{" "}
                            - Giga Mall Thủ Đức
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            Tầng 6, TTTM GIGAMALL, 240-242 Phạm Văn Đồng, P.
                            Hiệp Bình Chánh, Q. Thủ Đức, TPHCM
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/cgv-aeon-binh-tan-15380175062534.jpg"
                            alt="CGV"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema">CGV</span>{" "}
                            - Thảo Điền Pearl
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            Tầng 2, Thảo Điền Mall, 12 Quốc Hương, Phường Thảo
                            Điền, Quận 2, TP. Hồ Chí Minh
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-BHD"
                    role="tabpanel"
                    aria-labelledby="v-pills-BHD-tab"
                  >
                    <div className="homeMovies__scope">
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/bhd-star-vincom-thao-dien-15379553942188.jpg"
                            alt="BHD"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema BHD">
                              BHD star
                            </span>{" "}
                            - Vincom Thảo Điền
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            L5-Megamall, 159 XL Hà Nội, Q.2
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/bhd-star-vincom-3-2-15379527367766.jpg"
                            alt="BHD"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema BHD">
                              BHD star
                            </span>{" "}
                            - Vincom 3/2
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            L5-Vincom 3/2, 3C Đường 3/2, Q.10
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/bhd-star-pham-hung-15379533093101.jpg"
                            alt="BHD"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema BHD">
                              BHD star
                            </span>{" "}
                            - Phạm Hùng
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/bhd-star-vincom-quang-trung-15379536724871.jpg"
                            alt="BHD"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema BHD">
                              BHD star
                            </span>{" "}
                            - Vincom Quang Trung
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            B1-Vincom QT, 190 Quang Trung, Gò Vấp
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/bhd-star-vincom-le-van-viet-15379553262189.jpg"
                            alt="BHD"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema BHD">
                              BHD star
                            </span>{" "}
                            - Vincom Lê Văn Việt
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            L4-Vincom Plaza, 50 Lê Văn Việt, Q.9
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-GALAXY"
                    role="tabpanel"
                    aria-labelledby="v-pills-GALAXY-tab"
                  >
                    <div className="homeMovies__scope">
                      <div className="homeMovies__cinema active">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/galaxy-linh-trung-15791435324335.jpg"
                            alt="GLX"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema GLX">
                              GLX
                            </span>{" "}
                            - Linh Trung
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            Siêu thị Co.opXtra Thủ Đức 934 QL1A, Phường Linh
                            Trung, Quận Thủ Đức, Hồ Chí Minh
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/galaxy-quang-trung-15381040745219.jpg"
                            alt="GLX"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema GLX">
                              GLX
                            </span>{" "}
                            - Quang Trung
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            L3-Co.opmart Foodcosa, 304A Quang Trung, Gò Vấp
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/galaxy-trung-chanh-15381048160387.jpg"
                            alt="GLX"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema GLX">
                              GLX
                            </span>{" "}
                            - Trung Chánh
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            TTVH Q12-Q9, QL22, Trung Mỹ Tây, Q.12
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/galaxy-nguyen-van-qua-15381052937743.jpg"
                            alt="GLX"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema GLX">
                              GLX
                            </span>{" "}
                            - Nguyễn Văn Quá
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            119B Nguyễn Văn Quá, Đông Hưng Thuận, Q.12, TPHCM
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/galaxy-pham-van-chi-15381059548289.jpg"
                            alt="GLX"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema GLX">
                              GLX
                            </span>{" "}
                            - Phạm Văn Chí
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            Lầu 5, TTTM Platinum Plaza, 634 Phạm Văn Chí, Q.6
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/galaxy-tan-binh-15381063333729.jpg"
                            alt="GLX"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema GLX">
                              GLX
                            </span>{" "}
                            - Tân Bình
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            246 Nguyễn Hồng Đào, Tân Bình
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/galaxy-kinh-duong-vuong-15381065563489.jpg"
                            alt="GLX"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema GLX">
                              GLX
                            </span>{" "}
                            - Kinh Dương Vương
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            718bis Kinh Dương Vương, Q.6
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/galaxy-huynh-tan-phat-15381070102598.jpg"
                            alt="GLX"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema GLX">
                              GLX
                            </span>{" "}
                            - Huỳnh Tấn Phát
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            1362 Huỳnh Tấn Phát, KP1, Phú Mỹ, Q.7
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-DDC"
                    role="tabpanel"
                    aria-labelledby="v-pills-DDC-tab"
                  >
                    <div className="homeMovies__scope">
                      <div className="homeMovies__cinema active">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/ddc-dong-da-15379624326697.jpg"
                            alt="DDC"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema DDC">
                              DDC
                            </span>{" "}
                            - Đống Đa
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            890 Trần Hưng Đạo, Q.5
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-MegaGS"
                    role="tabpanel"
                    aria-labelledby="v-pills-MegaGS-tab"
                  >
                    <div className="homeMovies__scope">
                      <div className="homeMovies__cinema active">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/mega-gs-cao-thang-15380164745357.jpg"
                            alt="MegaGS"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema MegaGS">
                              MegaGS
                            </span>{" "}
                            - Cao Thắng
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            19 Cao Thắng, Q.3
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-Dcine"
                    role="tabpanel"
                    aria-labelledby="v-pills-Dcine-tab"
                  >
                    <div className="homeMovies__scope">
                      <div className="homeMovies__cinema active">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/dcine-ben-thanh-15738149453578.png"
                            alt="Dcine"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema Dcine">
                              Dcine
                            </span>{" "}
                            - Bến Thành
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            6 Mạc Đĩnh Chi, Bến Nghé, Quận 1, Hồ Chí Minh
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-LOTTE"
                    role="tabpanel"
                    aria-labelledby="v-pills-LOTTE-tab"
                  >
                    <div className="homeMovies__scope">
                      <div className="homeMovies__cinema active">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/lotte-cinema-phu-tho-15383865322515.jpg"
                            alt="LOTTE"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema Lotte">
                              Lotte
                            </span>{" "}
                            - Phú Thọ
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            L4-Lotte Mart Phú Thọ, Q.11
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/lotte-cinema-go-vap-15383873960955.jpg"
                            alt="LOTTE"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema Lotte">
                              Lotte
                            </span>{" "}
                            - Gò Vấp
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            L3-Lotte Mart, 242 Nguyễn Văn Lượng, Gò Vấp
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/lotte-cinema-thu-duc-15383864347748.jpg"
                            alt="LOTTE"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema Lotte">
                              Lotte
                            </span>{" "}
                            - Thủ Đức
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            L2-Joy Citipoint, KCX Linh Trung, Thủ Đức
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/lotte-cinema-cong-hoa-15383860949090.jpg"
                            alt="LOTTE"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema Lotte">
                              Lotte
                            </span>{" "}
                            - Cộng Hòa
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            L4-Pico Plaza, 20 Cộng Hòa, Tân Bình
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/lotte-cinema-cantavil-15383866510260.jpg"
                            alt="LOTTE"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema Lotte">
                              Lotte
                            </span>{" "}
                            - Cantavil
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            L7-Cantavil Premier, Xa Lộ Hà Nội, Q.2
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                      <div className="homeMovies__cinema">
                        <div className="homeMovies__picture">
                          <img
                            src="./tix/tix/img/lotte-cinema-nam-sai-gon-15383867312967.jpg"
                            alt="LOTTE"
                          />
                        </div>
                        <div className="homeMovies__text">
                          <p className="homeMovies__nameMovieCinema">
                            <span className="homeMovies__colorCinema Lotte">
                              Lotte
                            </span>{" "}
                            - Nam Sài Gòn
                          </p>
                          <p className="homeMovies__infoMovieCinema">
                            L3-Lotte Mart NSG, 469 Nguyễn Hữu Thọ, Q.7
                          </p>
                          <p className="homeMovies__showingDetailCinema">
                            <a href="#">[chi tiết]</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listMovies col-sm-12">
                <div className="homeMovies__contentCinema">
                  <p className="homeMoies__textCinema">Không có suất chiếu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

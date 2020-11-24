import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovieListRequest } from "../../redux/actions/movie.actions";
import CalenderItem from "../../components/calenderItem";
class Calender extends Component {
  renderMovieList = (count) => {
    const { movieList } = this.props;
    return movieList?.map((movie, index) => {
      if (index < count && index >= count - 4) {
        return <CalenderItem movie={movie} index={index} />;
      }
    });
  };
  renderMovieListArray = () => {
    const { movieList } = this.props;
    let length = movieList?.length;
    let htmlContent = [];
    for (let i = 8; i <= length; i += 8) {
      htmlContent += (
        <div className="row">
          <div className="col-12">
            <div className="row">{this.renderMovieList(i - 4)}</div>
          </div>
          <div className="col-12">
            <div className="row">{this.renderMovieList(i)}</div>
          </div>
        </div>
      );
    }
    return htmlContent;
  };
  render() {
    return (
      <section className="calendar" id="filmBlock">
        <div className="calendar__bg" id="homeMovies">
          <div className="calendar__content">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-home"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Đang Chiếu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-profile-tab"
                  data-toggle="pill"
                  href="#pills-profile"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Sắp Chiếu
                </a>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active owl-carousel"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                {this.renderMovieListArray()}

                <div className="row">
                  <div className="col-12">
                    <div className="row">{this.renderMovieList(4)}</div>
                  </div>
                  <div className="col-12">
                    <div className="row">{this.renderMovieList(8)}</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="row">{this.renderMovieList(12)}</div>
                  </div>
                  <div className="col-12">
                    <div className="row">{this.renderMovieList(16)}</div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade owl-carousel"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-3 col-sm-6 col-6 calendar__col3">
                        <div className="calendar__film">
                          <a className="calendar__picture">
                            <div
                              className="calendar__filmThumbnail"
                              style={{
                                backgroundImage:
                                  'url("../img/vo-dien-sat-nhan-15814785545936_215x318.jpg")',
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType-1 btn">P</span>
                              <div className="calendar__avgPoint calendar__avgPoint-1">
                                <p className="calendar__point">17/04</p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">
                              Vô Diện Sát Nhân
                            </p>
                            <p className="calendar__time">100 phút</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6 calendar__col3">
                        <div className="calendar__film">
                          <a className="calendar__picture">
                            <div
                              className="calendar__filmThumbnail"
                              style={{
                                backgroundImage:
                                  'url("../img/dreamkatcher-15843332002060_215x318.jpg")',
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType-1 btn">P</span>
                              <div className="calendar__avgPoint calendar__avgPoint-1">
                                <p className="calendar__point">17/04</p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">Dreamkatcher</p>
                            <p className="calendar__time">100 phút</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6 calendar__col3">
                        <div className="calendar__film">
                          <a className="calendar__picture">
                            <div
                              className="calendar__filmThumbnail"
                              style={{
                                backgroundImage:
                                  'url("../img/khu-vuon-huyen-bi-the-secret-garden-15839138137890_215x318.jpg")',
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType-1 btn">P</span>
                              <div className="calendar__avgPoint calendar__avgPoint-1">
                                <p className="calendar__point">24/04</p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">
                              Khu Vườn Huyền Bí - The Secret Garden
                            </p>
                            <p className="calendar__time">100 phút</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6 calendar__col3">
                        <div className="calendar__film">
                          <a className="calendar__picture">
                            <div
                              className="calendar__filmThumbnail"
                              style={{
                                backgroundImage:
                                  "url(../img/co-gai-tre-hua-hen-promising-young-woman-15839137850925_215x318.jpg)",
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType-1 btn">P</span>
                              <div className="calendar__avgPoint calendar__avgPoint-1">
                                <p className="calendar__point">24/04</p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">
                              Cố Gái Trẻ Hứa Hẹn - Promising Young Woman
                            </p>
                            <p className="calendar__time">113 phút</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-3 col-sm-6 col-6 calendar__col3">
                        <div className="calendar__film">
                          <a className="calendar__picture">
                            <div
                              className="calendar__filmThumbnail"
                              style={{
                                backgroundImage:
                                  'url("../img/truyen-thuyet-ve-quan-tien-the-legend-of-quan-tien-15825149843686_215x318.jpg")',
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType-1 btn">P</span>
                              <div className="calendar__avgPoint calendar__avgPoint-1">
                                <p className="calendar__point">30/04</p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">
                              Truyền Thuyết Về Quán Tiên - The Legend of Quan
                              Tien
                            </p>
                            <p className="calendar__time">100 phút</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6 calendar__col3">
                        <div className="calendar__film">
                          <a className="calendar__picture">
                            <div
                              className="calendar__filmThumbnail"
                              style={{
                                backgroundImage:
                                  'url("../img/run-15825155693999_215x318.jpg")',
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType-1 btn">P</span>
                              <div className="calendar__avgPoint calendar__avgPoint-1">
                                <p className="calendar__point">15/05</p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">Run</p>
                            <p className="calendar__time">100 phút</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6 calendar__col3">
                        <div className="calendar__film">
                          <a className="calendar__picture">
                            <div
                              className="calendar__filmThumbnail"
                              style={{
                                backgroundImage:
                                  'url("../img/greyhound-chien-ham-thu-linh-15839876955814_215x318.jpg")',
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType-1 btn">P</span>
                              <div className="calendar__avgPoint calendar__avgPoint-1">
                                <p className="calendar__point">12/06</p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">
                              Greyhound: Chiến Hạm Thủ Lĩnh
                            </p>
                            <p className="calendar__time">100 phút</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6 calendar__col3">
                        <div className="calendar__film">
                          <a className="calendar__picture">
                            <div
                              className="calendar__filmThumbnail"
                              style={{
                                backgroundImage:
                                  'url("../img/soul-15731929329007_215x318.jpg")',
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType-1 btn">P</span>
                              <div className="calendar__avgPoint calendar__avgPoint-1">
                                <p className="calendar__point">19/06</p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">Soul</p>
                            <p className="calendar__time">100 phút</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-3 col-sm-6 col-6 calendar__col3">
                        <div className="calendar__film">
                          <a className="calendar__picture">
                            <div
                              className="calendar__filmThumbnail"
                              style={{
                                backgroundImage:
                                  'url("../img/tenet-15768107031731_215x318.jpg")',
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType-1 btn">P</span>
                              <div className="calendar__avgPoint calendar__avgPoint-1">
                                <p className="calendar__point">17/07</p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">Tenet</p>
                            <p className="calendar__time">120 phút</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6 calendar__col3">
                        <div className="calendar__film">
                          <a className="calendar__picture">
                            <div
                              className="calendar__filmThumbnail"
                              style={{
                                backgroundImage:
                                  'url("../img/spongebob-bot-bien-dao-tau-15737863771484_215x318.jpg")',
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType-1 btn">P</span>
                              <div className="calendar__avgPoint calendar__avgPoint-1">
                                <p className="calendar__point">31/07</p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">
                              SpongBob: Bọt Biển Đào Tẩu
                            </p>
                            <p className="calendar__time">100 phút</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6 calendar__col3">
                        <div className="calendar__film">
                          <a className="calendar__picture">
                            <div
                              className="calendar__filmThumbnail"
                              style={{
                                backgroundImage:
                                  'url("../img/ban-dao-peninsula-15858185751467_215x318.jpg")',
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType-1 btn">P</span>
                              <div className="calendar__avgPoint calendar__avgPoint-1">
                                <p className="calendar__point">14/08</p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">
                              Bán Đảo - Peninsula
                            </p>
                            <p className="calendar__time">0 phút</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6 calendar__col3">
                        <div className="calendar__film">
                          <a className="calendar__picture">
                            <div
                              className="calendar__filmThumbnail"
                              style={{
                                backgroundImage:
                                  'url("../img/nu-than-chien-binh-1984-wonder-woman-1984-15761208385154_215x318.jpg")',
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType-1 btn">P</span>
                              <div className="calendar__avgPoint calendar__avgPoint-1">
                                <p className="calendar__point">14/08</p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">
                              Nữ Thần Chiến Binh 1984 - Wonder Woman 1984
                            </p>
                            <p className="calendar__time">100 phút</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-3 col-sm-6 col-6 calendar__col3">
                        <div className="calendar__film">
                          <a className="calendar__picture">
                            <div
                              className="calendar__filmThumbnail"
                              style={{
                                backgroundImage:
                                  "url(../img/the-hitman-s-bodyguard-2-15769177805759_215x318.jpg)",
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType-1 btn">P</span>
                              <div className="calendar__avgPoint calendar__avgPoint-1">
                                <p className="calendar__point">28/08</p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">
                              The Hitman's Bodyguard 2
                            </p>
                            <p className="calendar__time">100 phút</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6 calendar__col3">
                        <div className="calendar__film">
                          <a className="calendar__picture">
                            <div
                              className="calendar__filmThumbnail"
                              style={{
                                backgroundImage:
                                  "url(../img/tiec-trang-mau-blood-moon-party-15813929009211_215x318.jpg)",
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType-1 btn">P</span>
                              <div className="calendar__avgPoint calendar__avgPoint-1">
                                <p className="calendar__point">28/08</p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">
                              Tiệc Trăng Máu - Blood Moon Party
                            </p>
                            <p className="calendar__time">100 phút</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6 calendar__col3">
                        <div className="calendar__film">
                          <a className="calendar__picture">
                            <div
                              className="calendar__filmThumbnail"
                              style={{
                                backgroundImage:
                                  "url(../img/monster-hunter-15831375198444_215x318.jpg)",
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType-1 btn">P</span>
                              <div className="calendar__avgPoint calendar__avgPoint-1">
                                <p className="calendar__point">04/09</p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">Monster Hunter</p>
                            <p className="calendar__time">0 phút</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6 calendar__col3">
                        <div className="calendar__film">
                          <a className="calendar__picture">
                            <div
                              className="calendar__filmThumbnail"
                              style={{
                                backgroundImage:
                                  "url(../img/vung-dat-cam-lang-ii-a-quiet-place-part-ii-c18-15825341168754_215x318.jpg)",
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType-1 btn">P</span>
                              <div className="calendar__avgPoint calendar__avgPoint-1">
                                <p className="calendar__point">6.4</p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">
                              Vùng Đất Câm Lặng II - A Quiet Place Part II (C18)
                            </p>
                            <p className="calendar__time">100 phút - 7 IMDb</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-3 col-sm-6 col-6 calendar__col3">
                        <div className="calendar__film">
                          <a className="calendar__picture">
                            <div
                              className="calendar__filmThumbnail"
                              style={{
                                backgroundImage:
                                  'url("../img/am-anh-kinh-hoang-3-the-conjuring-3-c18-15742352934530_215x318.jpg")',
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType-1 btn">P</span>
                              <div className="calendar__avgPoint calendar__avgPoint-1">
                                <p className="calendar__point">10/09</p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">
                              Ám Ảnh Kinh Hoàng 3 - The Conjuring The Devil Made
                              Me
                            </p>
                            <p className="calendar__time">100 phút</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6 calendar__col3">
                        <div className="calendar__film">
                          <a className="calendar__picture">
                            <div
                              className="calendar__filmThumbnail"
                              style={{
                                backgroundImage:
                                  'url("../img/gia-dinh-mitchells-hanh-trinh-ket-noi-15832940018055_215x318.jpg")',
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType-1 btn">P</span>
                              <div className="calendar__avgPoint calendar__avgPoint-1">
                                <p className="calendar__point">18/09</p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">
                              Gia Đình Mitchells Hành Trình Kết Nối
                            </p>
                            <p className="calendar__time">0 phút</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6 calendar__col3">
                        <div className="calendar__film">
                          <a className="calendar__picture">
                            <div
                              className="calendar__filmThumbnail"
                              style={{
                                backgroundImage:
                                  'url("../img/kingsman-khoi-nguon-the-king-s-man-15668754953595_215x318.jpg")',
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType-1 btn">P</span>
                              <div className="calendar__avgPoint calendar__avgPoint-1">
                                <p className="calendar__point">18/09</p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">
                              Kinhsman Khỏi Nguồn - The King's Man
                            </p>
                            <p className="calendar__time">100 phút - 8 IMDb</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6 calendar__col3">
                        <div className="calendar__film">
                          <a className="calendar__picture">
                            <div
                              className="calendar__filmThumbnail"
                              style={{
                                backgroundImage:
                                  'url("../img/candyman-15828766263432_215x318.jpg")',
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType-1 btn">P</span>
                              <div className="calendar__avgPoint calendar__avgPoint-1">
                                <p className="calendar__point">25/09</p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">
                              Sát Nhân Trong Gương - Candyman
                            </p>
                            <p className="calendar__time">0 phút</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-3 col-sm-6 col-6 calendar__col3">
                        <div className="calendar__film">
                          <a className="calendar__picture">
                            <div
                              className="calendar__filmThumbnail"
                              style={{
                                backgroundImage:
                                  "url(../img/venom-2-15740591875202_215x318.jpg)",
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType-1 btn">P</span>
                              <div className="calendar__avgPoint calendar__avgPoint-1">
                                <p className="calendar__point">02/10</p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">Venom 2</p>
                            <p className="calendar__time">100 phút</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6 calendar__col3">
                        <div className="calendar__film">
                          <a className="calendar__picture">
                            <div
                              className="calendar__filmThumbnail"
                              style={{
                                backgroundImage:
                                  "url(../img/an-mang-tren-song-nile-death-on-the-nile-15700968460441_215x318.jpg)",
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType-1 btn">P</span>
                              <div className="calendar__avgPoint calendar__avgPoint-1">
                                <p className="calendar__point">09/10</p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">
                              Án Mạng Trên Sông Nile - Death on the Nile
                            </p>
                            <p className="calendar__time">100 phút</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6 calendar__col3">
                        <div className="calendar__film">
                          <a className="calendar__picture">
                            <div
                              className="calendar__filmThumbnail"
                              style={{
                                backgroundImage:
                                  "url(../img/the-witches-15779385107683_215x318.jpg)",
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType-1 btn">P</span>
                              <div className="calendar__avgPoint calendar__avgPoint-1">
                                <p className="calendar__point">16/10</p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">The Witches</p>
                            <p className="calendar__time">100 phút</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6 calendar__col3">
                        <div className="calendar__film">
                          <a className="calendar__picture">
                            <div
                              className="calendar__filmThumbnail"
                              style={{
                                backgroundImage:
                                  "url(../img/snake-eyes-15827765328751_215x318.jpg)",
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType-1 btn">P</span>
                              <div className="calendar__avgPoint calendar__avgPoint-1">
                                <p className="calendar__point">23/10</p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">Snake Eyes</p>
                            <p className="calendar__time">0 phút</p>
                          </div>
                        </div>
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
  componentDidMount() {
    this.props.dispatch(getMovieListRequest());
  }
}
const mapStateToProps = (state) => {
  return { movieList: state.movie.movieList };
};
export default connect(mapStateToProps)(Calender);

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
                 <div className="row">
                  <div className="col-12">
                    <div className="row">
                     {this.renderMovieList(4)}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                     {this.renderMovieList(8)}
                    </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-12">
                    <div className="row">
                     {this.renderMovieList(12)}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                     {this.renderMovieList(16)}
                    </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-12">
                    <div className="row">
                     {this.renderMovieList(20)}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                     {this.renderMovieList(24)}
                    </div>
                  </div>
               </div>
             
                {/* <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-lg-3 col-sm-6 col-6 calendar__col3">
                        <div className="calendar__film">
                          <a className="calendar__picture" href="./detail.html">
                            <div
                              className="calendar__filmThumbnail"
                              style={{
                                backgroundImage:
                                  'url("../img/bloodshot-15815812953448_215x318.jpg")',
                              }}
                            >
                              <div className="calendar__overlay">
                                <button
                                  type="button"
                                  className="playTrailer venobox"
                                  href="https://www.youtube.com/embed/MG-BJBSeV64?autoplay=1"
                                  data-vbtype="video"
                                >
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType">C18</span>
                              <div className="calendar__avgPoint">
                                <p className="calendar__point">6.4</p>
                                <p className="calendar__star">
                                  <img src="../img/star1.png" alt="star1" />
                                  <img src="../img/star1.png" alt="star1" />
                                  <img src="../img/star1.png" alt="star1" />
                                  <img src="../img/star1.2.png" alt="star1.2" />
                                </p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">
                              Bloodshot (C18)
                            </p>
                            <p className="calendar__time">110 phút</p>
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
                                  'url("../img/nang-3-loi-hua-cua-cha-c16-15827063492648_215x318.jpg")',
                              }}
                            >
                              <div className="calendar__overlay">
                                <button
                                  type="button"
                                  className="playTrailer venobox"
                                  href="https://www.youtube.com/embed/eAiroW6cZOE?autoplay=1"
                                  data-vbtype="video"
                                >
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType">C16</span>
                              <div className="calendar__avgPoint">
                                <p className="calendar__point">7.9</p>
                                <p className="calendar__star">
                                  <img src="../img/star1.png" alt="star1" />
                                  <img src="../img/star1.png" alt="star1" />
                                  <img src="../img/star1.png" alt="star1" />
                                  <img src="../img/star1.2.png" alt="star1.2" />
                                </p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">
                              Nắng 3: Lời Hứa Của Cha (C16)
                            </p>
                            <p className="calendar__time">109 phút</p>
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
                                  'url("../img/vi-anh-van-tin-i-still-believe-15828766569716_215x318.jpg")',
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType">C13</span>
                              <div className="calendar__avgPoint">
                                <p className="calendar__point">6.8</p>
                                <p className="calendar__star">
                                  <img src="../img/star1.png" alt="star1" />
                                  <img src="../img/star1.png" alt="star1" />
                                  <img src="../img/star1.png" alt="star1" />
                                  <img src="../img/star1.2.png" alt="star1.2" />
                                </p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">
                              Vì Anh Vẫn Tin - I Still believe (C13)
                            </p>
                            <p className="calendar__time">117 phút</p>
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
                                  "url(../img/sieu-ve-si-so-vo-the-protector-15838099906207_215x318.jpg)",
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType">C16</span>
                              <div className="calendar__avgPoint">
                                <p className="calendar__point">7.1</p>
                                <p className="calendar__star">
                                  <img src="../img/star1.png" alt="star1" />
                                  <img src="../img/star1.png" alt="star1" />
                                  <img src="../img/star1.png" alt="star1" />
                                  <img src="../img/star1.2.png" alt="star1.2" />
                                </p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">
                              Siêu Vệ Sĩ Sợ Vợ - The Protector (C16)
                            </p>
                            <p className="calendar__time">90 phút</p>
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
                                  'url("../img/ac-mong-ben-ho-lake-of-death-15827089775178_215x318.jpg")',
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType">C18</span>
                              <div className="calendar__avgPoint">
                                <p className="calendar__point">5.7</p>
                                <p className="calendar__star">
                                  <img src="../img/star1.png" alt="star1" />
                                  <img src="../img/star1.png" alt="star1" />
                                  <img src="../img/star1.2.png" alt="star1.2" />
                                </p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">
                              ÁC Mộng Bên Hồ - Lake Of Death (C18)
                            </p>
                            <p className="calendar__time">94 phút</p>
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
                                  'url("../img/truy-ti-m-phe-p-thua-t-onward-15813283695223_215x318.jpg")',
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span
                                className="calendar__ageType btn"
                                style={{ backgroundColor: "#00ac4d" }}
                              >
                                P
                              </span>
                              <div className="calendar__avgPoint">
                                <p className="calendar__point">7.7</p>
                                <p className="calendar__star">
                                  <img src="../img/star1.png" alt="star1" />
                                  <img src="../img/star1.png" alt="star1" />
                                  <img src="../img/star1.png" alt="star1" />
                                  <img src="../img/star1.2.png" alt="star1.2" />
                                </p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">
                              Truy Tìm Phép Thuật - Onward
                            </p>
                            <p className="calendar__time">
                              103 phút - 7.4 IMDb
                            </p>
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
                                  'url("../img/dau-an-vo-cuc-c18-15838132740193_215x318.jpg")',
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType">C18</span>
                              <div className="calendar__avgPoint">
                                <p className="calendar__point">5.9</p>
                                <p className="calendar__star">
                                  <img src="../img/star1.png" alt="star1" />
                                  <img src="../img/star1.png" alt="star1" />
                                  <img src="../img/star1.2.png" alt="star1.2" />
                                </p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">
                              Dấu Ấn Vô Cực (C18)
                            </p>
                            <p className="calendar__time">98 phút</p>
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
                                  'url("../img/loan-nhip-heartbeats-15833815597385_215x318.jpg")',
                              }}
                            >
                              <div className="calendar__overlay">
                                <button type="button" className="playTrailer">
                                  <img src="../img/play-video.png" alt />
                                </button>
                              </div>
                              <span className="calendar__ageType">C16</span>
                              <div className="calendar__avgPoint">
                                <p className="calendar__point">5.9</p>
                                <p className="calendar__star">
                                  <img src="../img/star1.png" alt="star1" />
                                  <img src="../img/star1.png" alt="star1" />
                                  <img src="../img/star1.2.png" alt="star1.2" />
                                </p>
                              </div>
                            </div>
                          </a>
                          <div className="calendar__text">
                            <p className="calendar__nameFilm">
                              Loạn Nhịp - Heartbeats (C16)
                            </p>
                            <p className="calendar__time">115 phút</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
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

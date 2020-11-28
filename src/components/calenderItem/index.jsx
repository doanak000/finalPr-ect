import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class CalenderItem extends Component {
  render() {
    return (
      <div className="col-lg-3 col-sm-6 col-6 calendar__col3">
        <div className="calendar__film">
          <a className="calendar__picture">
            <div
              className="calendar__filmThumbnail"
              style={{
                backgroundImage: `url(${this.props.movie.hinhAnh})`,
              }}
            >
              <div className="calendar__overlay">
                <a href={this.props.movie.trailer} className="playTrailer">
                  <img src="./tix/tix/img/play-video.png" alt />
                </a>
                
              </div>
              <span className="calendar__ageType">C18</span>
              <div className="calendar__avgPoint">
                <p className="calendar__point">{this.props.movie.danhGia}</p>
                <p className="calendar__star">
                  <img src="./tix/tix/img/star1.png" alt="star1" />
                  <img src="./tix/tix/img/star1.png" alt="star1" />
                  <img src="./tix/tix/img/star1.2.png" alt="star1.2" />
                </p>
              </div>
            </div>
          </a>
          <div className="calendar__text">
            <p className="calendar__nameFilm">{this.props.movie.tenPhim}</p>
            
            <NavLink to={`/movie-detail/${this.props.movie.maPhim}`} className="btn btn-primary">
            Chi tiết
            </NavLink>
            <p className="calendar__time">94 phút</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CalenderItem;

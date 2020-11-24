import React from "react";

export default function News() {
  return (
    <section className="news" id="newsBlock">
      <div className="news__content">
        <div className="news__bg">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="pills-dienAnh24h-tab"
                data-toggle="pill"
                href="#pills-dienAnh24h"
                role="tab"
                aria-controls="pills-dienAnh24h"
                aria-selected="true"
              >
                Điện Ảnh 24h
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-review-tab"
                data-toggle="pill"
                href="#pills-review"
                role="tab"
                aria-controls="pills-review"
                aria-selected="false"
              >
                Review
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-khuyenMai-tab"
                data-toggle="pill"
                href="#pills-khuyenMai"
                role="tab"
                aria-controls="pills-khuyenMai"
                aria-selected="false"
              >
                Khuyễn Mãi
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-dienAnh24h"
              role="tabpanel"
              aria-labelledby="pills-dienAnh24h-tab"
            >
              <div className="row">
                <div className="news__col col-ms-12 news__col-6">
                  <div className="news__picture">
                    <img
                      src="./tix/tix/img/cap-nhat-tinh-hinh-tam-ngung-hoat-dong-cua-cac-rap-phim-15856764487943.jpg"
                      alt="cap-nhat-tinh-hinh-tam-ngung-hoat-dong-cua-cac-rap-phim"
                    />
                  </div>
                  <div className="news__text">
                    <h6>
                      [Cập nhật] Tình hình tạm ngừng hoạt động của các Rạp Phim.
                    </h6>
                    <p className="content">
                      TIX cập nhật mới nhát về tình hình tạm ngừng hoạt động của
                      các Rạp Phim.
                    </p>
                  </div>
                  <div className="news__blockIcon">
                    <div className="news__wrapIcon like">
                      <img src="./tix/tix/img/like.png" alt="iconLike" />
                      <p className="news__amount like">0</p>
                    </div>
                    <div className="news__wrapIcon comment">
                      <img src="./tix/tix/img/comment.png" alt="iconComment" />
                      <p className="news__amount comment">0</p>
                    </div>
                  </div>
                </div>
                <div className="news__col col-ms-12 news__col-6">
                  <div className="news__picture">
                    <img
                      src="./tix/tix/img/dau-la-nhung-nhan-vat-dang-nho-xuat-than-tu-studio-ghibli-15852140916661.jpg"
                      alt="dau-la-nhung-nhan-vat-dang-nho-xuat-than-tu-studios"
                    />
                  </div>
                  <div className="news__text">
                    <h6>
                      Đâu là những nhân vật đáng nhớ xuất thân từ Studio Ghibli?
                    </h6>
                    <p className="content">
                      Totoro, phi công mặt heo Porco Rosso, công chúa San, Vô
                      Diện, ./tix/tix. là những biểu tượng mà Studio Ghibli từng
                      đem đến cho người hâm mộ trên toàn cầu.
                    </p>
                  </div>
                  <div className="news__blockIcon">
                    <div className="news__wrapIcon like">
                      <img src="./tix/tix/img/like.png" alt="iconLike" />
                      <p className="news__amount like">1</p>
                    </div>
                    <div className="news__wrapIcon comment">
                      <img src="./tix/tix/img/comment.png" alt="iconComment" />
                      <p className="news__amount comment">1</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="news__col col-ms-12 news__col-4">
                  <div className="news__picture">
                    <img
                      src="./tix/tix/img/so-do-se-buoc-len-man-anh-duoi-su-chi-dao-cua-phan-gia-nhat-linh-15851179528093.jpg"
                      alt="so-do-se-buoc-len-man-anh-duoi-su-chi-dao-cua-phan-gia-nhat-linh"
                    />
                  </div>
                  <div className="news__text">
                    <h6>
                      Số Đỏ sẽ bước lên màn ảnh dưới sự chỉ đạo của Phan Gia
                      Nhật Linh
                    </h6>
                    <p className="content">
                      Khán giả Việt Nam sẽ được gặp Xuân Tóc Đỏ, Phó Đoan,
                      ./tix/tix. trên màn bạc điện ảnh.
                    </p>
                  </div>
                  <div className="news__blockIcon">
                    <div className="news__wrapIcon like">
                      <img src="./tix/tix/img/like.png" alt="iconLike" />
                      <p className="news__amount like">0</p>
                    </div>
                    <div className="news__wrapIcon comment">
                      <img src="./tix/tix/img/comment.png" alt="iconComment" />
                      <p className="news__amount comment">0</p>
                    </div>
                  </div>
                </div>
                <div className="news__col col-ms-12 news__col-4">
                  <div className="news__picture">
                    <img
                      src="./tix/tix/img/acd6fae7353783fb3a928ad01ba92e98.jpg"
                      alt="picture"
                    />
                  </div>
                  <div className="news__text">
                    <h6>
                      Cigarettes After Sex chợt thoáng xuất hiện trong trailer
                      phim tâm lý Promising Young Woman
                    </h6>
                    <p className="content">
                      Toxic của Britney Spears cũng vang lên luôn đấy.
                    </p>
                  </div>
                  <div className="news__blockIcon">
                    <div className="news__wrapIcon like">
                      <img src="./tix/tix/img/like.png" alt="iconLike" />
                      <p className="news__amount like">0</p>
                    </div>
                    <div className="news__wrapIcon comment">
                      <img src="./tix/tix/img/comment.png" alt="iconComment" />
                      <p className="news__amount comment">0</p>
                    </div>
                  </div>
                </div>
                <div className="news__col col-ms-12 news__col-4 news">
                  <div className="row">
                    <div className="news__col-12">
                      <div className="news__picture">
                        <img
                          src="./tix/tix/img/cap-nhat-tinh-hinh-tam-ngung-hoat-dong-cua-cac-rap-phim-15844327854800.jpg"
                          alt
                        />
                      </div>
                      <p className="news__Title">
                        [Cập nhật] Tình hình tạm ngừng hoạt động của các Rạp
                        Phim.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="news__col-12">
                      <div className="news__picture">
                        <img
                          src="./tix/tix/img/cac-rap-chieu-phim-tai-thanh-pho-ho-chi-minh-hue-tam-dung-hoat-dong-tu-18h00-ngay-15-03-2020-den-31-03-2020-15843569717655.jpg"
                          alt="cac-rap-chieu-phim-tai-thanh-pho-ho-chi-minh-hue-tam-dung-hoat-dong"
                        />
                      </div>
                      <p className="news__Title">
                        Các rạp chiếu phim tại Thành phố Hồ Chí Minh &amp; Huế
                        tạm dừng hoạt động từ 18g00 ngày 15/03/2020 đến
                        31/03/2020
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="news__col-12">
                      <div className="news__picture">
                        <img
                          src="./tix/tix/img/36490413320529b966dc79bb1e3a8114.jpg"
                          alt
                        />
                      </div>
                      <p className="news__Title">
                        Dàn diễn viên 'siêu hot' góp mặt trong Bloodshot gồm có
                        những ai?
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="news__col-12">
                      <div className="news__picture">
                        <img
                          src="./tix/tix/img/bd24770fa902275cd5e1fcbdc504e660.jpg"
                          alt
                        />
                      </div>
                      <p className="news__Title">
                        Jungle Cruise - Hé lộ cặp đôi mới của nhà Chuột
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="news__button">
                <button type="button">XEM THÊM</button>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-review"
              role="tabpanel"
              aria-labelledby="pills-review-tab"
            >
              <div className="row">
                <div className="news__col col-ms-12 news__col-6">
                  <div className="news__picture">
                    <img
                      src="./tix/tix/img/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843500427339.jpg"
                      alt="covid-19"
                    />
                  </div>
                  <div className="news__text">
                    <h6>
                      COVID-19 là bản chính thức của MEV-1 phim contagion (2011)
                    </h6>
                    <p className="content">
                      Là một bộ phim chính kịch được ra mắt vào năm 2011, với bộ
                      đôi đạo diễn và biên kịch là Steven Soderbergh và Scott Z.
                      Burns, cùng sự tham gia của dàn sao như Gwyneth Paltrow,
                      Matt Damon, Kate Winslet, Marion Cotillard, Laurence
                    </p>
                  </div>
                  <div className="news__blockIcon">
                    <div className="news__wrapIcon like">
                      <img src="./tix/tix/img/like.png" alt="iconLike" />
                      <p className="news__amount like">0</p>
                    </div>
                    <div className="news__wrapIcon comment">
                      <img src="./tix/tix/img/comment.png" alt="iconComment" />
                      <p className="news__amount comment">0</p>
                    </div>
                  </div>
                </div>
                <div className="news__col col-ms-12 news__col-6">
                  <div className="news__picture">
                    <img
                      src="./tix/tix/img/review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the-15840925415754.jpg"
                      alt="review-sieu-ve-si-so-vo"
                    />
                  </div>
                  <div className="news__text">
                    <h6>
                      [Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao
                      giờ lầy lội và hài hước đến thế
                    </h6>
                    <p className="content">
                      Nhây vô đối, cười ngả nghiêng với phong cách cứu sếp sòng
                      đậm chất Thái.
                    </p>
                  </div>
                  <div className="news__blockIcon">
                    <div className="news__wrapIcon like">
                      <img src="./tix/tix/img/like.png" alt="iconLike" />
                      <p className="news__amount like">1</p>
                    </div>
                    <div className="news__wrapIcon comment">
                      <img src="./tix/tix/img/comment.png" alt="iconComment" />
                      <p className="news__amount comment">1</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="news__col col-ms-12 news__col-4">
                  <div className="news__picture">
                    <img
                      src="./tix/tix/img/review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant-15840731228555.jpg"
                      alt="review-bloodshot"
                    />
                  </div>
                  <div className="news__text">
                    <h6>
                      [Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ Siêu anh
                      hùng Valiant
                    </h6>
                    <p className="content">
                      Với chất lượng hành động tốt, nội dung ở mức ổn, Bloodshot
                      đã hoàn thành xuất sắc vai trò mở màn cho một vũ trụ siêu
                      anh hùng mới của hãng Valiant
                    </p>
                  </div>
                  <div className="news__blockIcon">
                    <div className="news__wrapIcon like">
                      <img src="./tix/tix/img/like.png" alt="iconLike" />
                      <p className="news__amount like">0</p>
                    </div>
                    <div className="news__wrapIcon comment">
                      <img src="./tix/tix/img/comment.png" alt="iconComment" />
                      <p className="news__amount comment">0</p>
                    </div>
                  </div>
                </div>
                <div className="news__col col-ms-12 news__col-4">
                  <div className="news__picture">
                    <img
                      src="./tix/tix/img/review-nang-3-loi-hua-cua-cha-cau-chuyen-tinh-than-cam-dong-cua-kha-nhu-va-kieu-minh-tuan-15834049872311.jpg"
                      alt="review-nang-3"
                    />
                  </div>
                  <div className="news__text">
                    <h6>
                      [Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình thân
                      cảm động của Khả Như và Kiều Minh Tuấn
                    </h6>
                    <p className="content">
                      Như hai phần phim trước, Nắng 3 tiếp tục mang đến câu
                      chuyện tình cha, mẹ - con đầy nước mắt của bộ ba nhân vật
                      chính.
                    </p>
                  </div>
                  <div className="news__blockIcon">
                    <div className="news__wrapIcon like">
                      <img src="./tix/tix/img/like.png" alt="iconLike" />
                      <p className="news__amount like">0</p>
                    </div>
                    <div className="news__wrapIcon comment">
                      <img src="./tix/tix/img/comment.png" alt="iconComment" />
                      <p className="news__amount comment">0</p>
                    </div>
                  </div>
                </div>
                <div className="news__col col-ms-12 news__col-4 news">
                  <div className="row">
                    <div className="news__col-12">
                      <div className="news__picture">
                        <img
                          src="./tix/tix/img/review-onward-khi-phep-thuat-manh-me-nhat-chinh-la-tinh-than-15832047862392.jpg"
                          alt="review-onward"
                        />
                      </div>
                      <p className="news__Title">
                        [Review] Onward - Khi phép thuật mạnh mẽ nhất chính là
                        tình thân.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="news__col-12">
                      <div className="news__picture">
                        <img
                          src="./tix/tix/img/review-ke-vo-hinh-con-gi-dang-so-hon-ke-giet-nguoi-benh-hoan-vo-hinh-15828835271071.jpg"
                          alt="review-ke-vo-hinh"
                        />
                      </div>
                      <p className="news__Title">
                        [Review] Kẻ Vô Hình - Còn gì đáng sợ hơn kẻ giết người
                        bệnh hoạn vô hình?
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="news__col-12">
                      <div className="news__picture">
                        <img
                          src="./tix/tix/img/review-cau-be-ma-2-ban-trai-cua-be-beo-la-day-chu-dau-xa-15823608496772.jpg"
                          alt="review-cau-be-ma-2"
                        />
                      </div>
                      <p className="news__Title">
                        [Review] Cậu Bé Ma 2 - Bạn trai của 'bé Beo' là đây chứ
                        đâu xa.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="news__col-12">
                      <div className="news__picture">
                        <img
                          src="./tix/tix/img/review-nhim-sonic-cuoi-tha-ga-cung-chang-nhim-sieu-thanh-lay-loi-15821907793369.jpg"
                          alt="review-nhim-sonic"
                        />
                      </div>
                      <p className="news__Title">
                        [Review] Nhím Sonic - Cười thả ga cùng chàng nhím siêu
                        thanh lầy lội.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="news__button">
                <button type="button">XEM THÊM</button>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-khuyenMai"
              role="tabpanel"
              aria-labelledby="pills-khuyenMai-tab"
            >
              <div className="row">
                <div className="news__col col-ms-12 news__col-6">
                  <div className="news__picture">
                    <img
                      src="./tix/tix/img/cgv-bhd-star-mua-2-ve-tinh-tien-1-khi-thanh-toan-qua-zalopay-15831471540618.jpg"
                      alt="cgv-bhd-star"
                    />
                  </div>
                  <div className="news__text">
                    <h6>
                      CGV &amp; BHD Star - Mua 2 vé tính tiền 1 khi thanh toán
                      qua ZaloPay
                    </h6>
                    <p className="content">
                      Áp dụng cho khách hàng mới của ZaloPay khi mua tại CGV
                      HOẶC BHD Star các suất chiếu Thứ 6, Thứ 7, Chủ Nhật
                    </p>
                  </div>
                  <div className="news__blockIcon">
                    <div className="news__wrapIcon like">
                      <img src="./tix/tix/img/like.png" alt="iconLike" />
                      <p className="news__amount like">0</p>
                    </div>
                    <div className="news__wrapIcon comment">
                      <img src="./tix/tix/img/comment.png" alt="iconComment" />
                      <p className="news__amount comment">0</p>
                    </div>
                  </div>
                </div>
                <div className="news__col col-ms-12 news__col-6">
                  <div className="news__picture">
                    <img
                      src="./tix/tix/img/mua-ve-phim-bhd-star-nhan-ngay-hoan-tien-20-15832109446679.jpg"
                      alt="mua-ve-phim-bhd-star"
                    />
                  </div>
                  <div className="news__text">
                    <h6>Mua vé phim BHD Star - Nhận ngay Hoàn Tiền 20%</h6>
                    <p className="content">
                      Mua vé BHD Star thả ga, nhận ngay hoàn tiền xả láng 20%
                      khi thanh toán qua ZaloPay
                    </p>
                  </div>
                  <div className="news__blockIcon">
                    <div className="news__wrapIcon like">
                      <img src="./tix/tix/img/like.png" alt="iconLike" />
                      <p className="news__amount like">0</p>
                    </div>
                    <div className="news__wrapIcon comment">
                      <img src="./tix/tix/img/comment.png" alt="iconComment" />
                      <p className="news__amount comment">0</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="news__col col-ms-12 news__col-4">
                  <div className="news__picture">
                    <img
                      src="./tix/tix/img/chao-ban-moi-bhd-star-mua-2-tinh-tien-1-15815658151639.png"
                      alt="chao-ban-moi-bhd-star"
                    />
                  </div>
                  <div className="news__text">
                    <h6>Chào bạn mới - BHD Star Mua 2 Tính Tiền 1</h6>
                    <p className="content">
                      Ưu đãi cực chất: Mua 2 vé BHD Star chỉ cần trả tiền 1 vé
                      khi thanh toán qua ZaloPay.
                    </p>
                  </div>
                  <div className="news__blockIcon">
                    <div className="news__wrapIcon like">
                      <img src="./tix/tix/img/like.png" alt="iconLike" />
                      <p className="news__amount like">0</p>
                    </div>
                    <div className="news__wrapIcon comment">
                      <img src="./tix/tix/img/comment.png" alt="iconComment" />
                      <p className="news__amount comment">0</p>
                    </div>
                  </div>
                </div>
                <div className="news__col col-ms-12 news__col-4">
                  <div className="news__picture">
                    <img
                      src="./tix/tix/img/vui-tet-cung-zalopay-cgv-mua-1-tang-1-15796786620561.jpg"
                      alt="vui-tet-cung-zalopay"
                    />
                  </div>
                  <div className="news__text">
                    <h6>Vui Tết cùng ZaloPay - CGV Mua 1 Tặng 1</h6>
                    <p className="content">
                      Ưu đãi mua 1 tặng 1 vé xem phim tại CGV cho khách hàng mới
                      khi thanh toán bằng ZaloPay.
                    </p>
                  </div>
                  <div className="news__blockIcon">
                    <div className="news__wrapIcon like">
                      <img src="./tix/tix/img/like.png" alt="iconLike" />
                      <p className="news__amount like">0</p>
                    </div>
                    <div className="news__wrapIcon comment">
                      <img src="./tix/tix/img/comment.png" alt="iconComment" />
                      <p className="news__amount comment">0</p>
                    </div>
                  </div>
                </div>
                <div className="news__col col-ms-12 news__col-4 news">
                  <div className="row">
                    <div className="news__col-12">
                      <div className="news__picture">
                        <img
                          src="./tix/tix/img/cgv-79-000d-ve-cuoi-tuan-khi-thanh-toan-bang-zalopay-15810729436513.png"
                          alt="cgv-79-000d"
                        />
                      </div>
                      <p className="news__Title">
                        CGV - 79.000Đ/vé cuối tuần khi thanh toán bằng ZaloPay!
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="news__col-12">
                      <div className="news__picture">
                        <img
                          src="./tix/tix/img/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746757294099.jpg"
                          alt="123phim-thu-6-khong-den-toi"
                        />
                      </div>
                      <p className="news__Title">
                        [123Phim] Thứ 6 Không Đen Tối - Ưu đãi hủy diệt 11k/vé
                        Anh Trai Yêu Quái
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="news__col-12">
                      <div className="news__picture">
                        <img
                          src="./tix/tix/img/review-cau-be-ma-2-ban-trai-cua-be-beo-la-day-chu-dau-xa-15823608496772.jpg"
                          alt="review-cau-be-ma-2"
                        />
                      </div>
                      <p className="news__Title">
                        [Review] Cậu Bé Ma 2 - Bạn trai của 'bé Beo' là đây chứ
                        đâu xa.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="news__col-12">
                      <div className="news__picture">
                        <img
                          src="./tix/tix/img/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106082164.jpg"
                          alt="mega-gs-mot-doa-hoa-thay-ngan-loi-yeu"
                        />
                      </div>
                      <p className="news__Title">
                        [Mega GS] Một đóa hoa thay ngàn lời yêu
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="news__button">
                <button type="button">XEM THÊM</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

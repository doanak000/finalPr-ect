import React from 'react'

export default function Login() {
    return (
        <div className="login">
  <div className="login__content">
    <div className="login__cover">
      <div className="login__signIn">
        <img src="./tix/tix/img/group@2x.png" alt="iconGroup@2x" />
        <div className="login__text">
          <p>Đăng nhập để được nhiều ưu đãi, mua vé <br />và bảo mật thông tin!</p>
        </div>
        <div className="row login__social">
          <div className="col-md-12 login__facebook">
            <a href="#" className="signIn">
              <img src="./tix/tix/img/btn-FB.png" alt="btnFB" />
            </a>
          </div>
          <div className="col-md-12 login__zalo">
            <a href="#">
              <img src="./tix/tix/img/btn-Zalo.png" alt="btnZalo" />
            </a>
          </div>
          <div className="col-md-12 login__google">
            <a href="#">
              <img src="./tix/tix/img/btn-Google.png" alt="btnGoogle" />
            </a>
          </div>
        </div>
        <a href="./tix/tix/views/index.html" className="login__signClose" />
      </div>
    </div>
  </div>
</div>

    )
}

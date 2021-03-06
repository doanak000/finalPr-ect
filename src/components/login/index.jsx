import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { loginRequest } from "../../redux/actions/user.action";
import {NavLink} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch(); // giống this.props.dispatch
  const history = useHistory();
  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
    console.log(user);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginRequest(user,history));
    
  };

  return (
    <div className="login">
      <div className="login__content">
        <div className="login__cover">
          <div className="login__signIn">
            <img
              src="./tix/tix/img/group@2x.png"
              alt="iconGroup@2x"
              style={{ marginBottom: "0" }}
            />
            <div className="login__text">
              <p>
                Đăng nhập để được nhiều ưu đãi, mua vé <br />
                và bảo mật thông tin!
              </p>
              <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="taiKhoan"
                  label="Account"
                  name="taiKhoan"
                  autoComplete="taiKhoan"
                  autoFocus
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="matKhau"
                  label="Password"
                  type="password"
                  id="matKhau"
                  autoComplete="matKhau"
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item>
                    <NavLink  to="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </NavLink >
                  </Grid>
                </Grid>
              </form>
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
  );
}

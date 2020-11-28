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
import { signupRequest } from "../../redux/actions/user.action";
import {NavLink} from "react-router-dom";
import { MenuItem } from '@material-ui/core';
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
export default function Signup() {
  const classes = useStyles();
  const dispatch = useDispatch(); // giống this.props.dispatch
  const history = useHistory();
  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen:"",
    soDt: "",
    maNhom: "",
    email: "",
    
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
    dispatch(signupRequest(user, history));
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
                Đăng ký để được nhiều ưu đãi, mua vé <br />
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
            
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="email"
                  label="Email"
                  type="text"
                  id="email"
                  autoComplete="email"
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="soDt"
                  label="phone number"
                  type="text"
                  id="soDt"
                  autoComplete="soDt"
                  onChange={handleChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="hoTen"
                  label="Full name"
                  type="text"
                  id="hoTen"
                  autoComplete="hoTen"
                  onChange={handleChange}
                />
                <TextField id="select" label="GroupCode" value="GP01" select onChange={handleChange} name="maNhom">
                  <MenuItem value="GP01">GP01</MenuItem>
                  <MenuItem value="GP02">GP02</MenuItem>
                  <MenuItem value="GP03">GP03</MenuItem>
                </TextField>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign Up
                </Button>
                <Grid container>
                  <Grid item>
                    <NavLink to="/sign-in" variant="body2">
                      {"You have an account? Sign In right now"}
                    </NavLink>
                  </Grid>
                </Grid>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

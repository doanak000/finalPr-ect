import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBookingRequest } from "../../redux/actions/booking.action";
import {useSelector} from "react-redux";
import {Button } from "@material-ui/core";
import useStyles from "./style";
import { useParams } from "react-router-dom";

export default function BookingHome() {
  //Hook
  const maLichChieu=useParams();
  const dispatch = useDispatch();
  const classes=useStyles();
 const danhSachGhe = useSelector(state => state.booking.danhSachGhe);
    function trangThaiGhe(daDat) {
        if(daDat) {
            return classes.daDat;
        }
        else {
            return classes.chuaDat;
        }
    }
    function renderGhe(){
        danhSachGhe.map((ghe,index)=>{
            return <>
                <Button key={index} className={classes.chuaDat}
                onClick={()=>{
                    dispatch({
                        type:"CHON GHE",
                        payload:ghe,
                    })
                }}
                >{ghe.stt}</Button>
            </>
        })
    }


  //chỉ chay 1 lần duy nhất khi component được gọi
  useEffect(function () {
    //dispatch action đã tương tác với api
    dispatch(getBookingRequest(maLichChieu));
  }, []);
  return <div>Booking
      <div>{renderGhe()}</div>
  </div>;
}
function getBookingSuccess(booking) {
  return {
    type: "GET BOOKING SUCCESS",
    payload: booking,
  };
}
function getBookingFailed(error) {
  return {
    type: "GET BOOKING FAILED",
    payload: error,
  };
}

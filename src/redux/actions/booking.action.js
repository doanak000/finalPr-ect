import Axios from "axios";

export function getBookingRequest() {
  //hàm chịu trách nhiệm xử lý các tác vụ bất đồng bộ
  return async (dispatch) => {
    //call api
    try {
      //request
      //   const res= await Axios({
      //       method: "GET",
      //   })
      // success
    } catch (error) {
      //failed
      console.log(error);
    }
  };
}

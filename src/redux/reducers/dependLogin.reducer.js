const initialState = {
  isLogin: false,
  user: null,
};
const dependLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN": {
      state.user = action.payload;
      return { ...state, isLogin: true };
    }
    case "LOGOUT": {
      
      let user = JSON.parse(localStorage.getItem("user"));
      if(user!=null){
        localStorage.removeItem("user");
        window.location.reload();
      }
      return { ...state, isLogin: false, user: null };
    }
    default:
      return state;
  }
};
export default dependLoginReducer;

import {createMuiTheme} from "@material-ui/core";
const theme=createMuiTheme({
    palette: {
        primary:{
            light:"#ea515a",
            main:"#e5101d",
            dark:"#fb0001",
        },
        // sửa theme của material-ui
        newColor:"yellow", //tạo màu mới

    },
  
});
export default theme;
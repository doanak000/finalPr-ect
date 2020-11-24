import { makeStyles } from "@material-ui/core";
 const useStyles = makeStyles(() => ({
  // key:value
  //theem daua ngoac tròn để thành object
  chuaDat: {
    backgroundColor: "red",
    "&:hover": { backgroundColor: "red" },
  },
  daDat: {
    backgroundColor: "blue",
    "&:hover": { backgroundColor: "blue" },
  },
  dangChon: {
    backgroundColor: "yellow",
    "&:hover": { backgroundColor: "yellow" },
  },
}));
export default useStyles;
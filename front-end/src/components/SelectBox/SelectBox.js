import React from "react";

import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Container,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

const styles = (theme) => ({
  selectBoxContainer: {
    maxWidth: "none",
    marginLeft: "10px",
    marginRight: "10px",
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  selectBox: {
    width: "100%",
    marginTop: "5px",
  },
  input: {
    color: "black",
    backgroundColor: "rgba(225,225,225,0.6)",
    "&:hover": {
      backgroundColor: "rgba(225,225,225,0.8)",
    },
    fontSize: "medium",
    height: "40px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "small",
      height: "30px",
    },
  },
  title: {
    color: "white",
    fontSize: "medium",
    paddingLeft: "5px",
    fontWeight: "bold",
  },
  menuList: {
    backgroundColor: theme.palette.paperBackground.onPage,
    color: "white",
  },
  menuItem: {
    "&:hover": {
      backgroundColor: theme.palette.menuItemHover.main,
    },
    "&.MuiListItem-root": {
      "&.Mui-selected": {
        backgroundColor: theme.palette.menuItemHover.main,
      },
    },
  },
  hide: {
    display: "none",
  },
});

function SelectBox(props) {
  const { classes, items, name, value, onChange } = props;

  return (
    <Container className={classes.selectBoxContainer}>
      <Typography className={classes.title}>{name}</Typography>
      <FormControl variant="outlined" className={classes.selectBox}>
        <Select
          id={name}
          value={value}
          onChange={onChange}
          className={classes.input}
          MenuProps={{ classes: { paper: classes.menuList } }}
        >
          {value || (
            <MenuItem className={classes.hide} aria-label="None" value="">
              {" "}
            </MenuItem>
          )}
          {items.map((item) => (
            <MenuItem key={item} value={item} className={classes.menuItem}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
}

export default withStyles(styles)(SelectBox);

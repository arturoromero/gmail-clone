import * as React from "react";
import { makeStyles, Button, Paper, Grid, Box } from "@material-ui/core";
import ColorPlusIcon from "../../assets/images/colored_plus_icon.png";
import sidebarStyles from "./sidebarStyles";

const useStyles = makeStyles(sidebarStyles);

interface IHeader {}

const Header: React.FC<IHeader> = (props) => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.composeButtonWrapper}>
        <Button className={classes.composeButton}>
          <img src={ColorPlusIcon} className={classes.plusIcon} />
          Compose
        </Button>
      </Box>
    </Box>
  );
};

export default Header;

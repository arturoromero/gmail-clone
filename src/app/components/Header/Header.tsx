import * as React from "react";
import { makeStyles, IconButton, Paper, Grid, Box } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import GmailLogo from "../../assets/images/logo.png";
import GmailLogoAlt from "../../assets/images/logo_alt.png";
import headerStyles from "./headerStyles";

const useStyles = makeStyles(headerStyles);

interface IHeader {}

const Header: React.FC<IHeader> = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid xs={2} className={classes.header_left}>
        <IconButton className={classes.menuIcon}>
          <MenuIcon />
        </IconButton>
        <img src={GmailLogo} className={classes.logo} />
      </Grid>
      <Grid xs={7} className={classes.header_middle}>
        <Paper component="div" className={classes.inputbar}>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search mail"
            className={classes.headerInput}
          />
          <IconButton className={classes.dropDownIcon}>
            <ArrowDropDownIcon />
          </IconButton>
        </Paper>
      </Grid>
      <Grid xs={3} className={classes.header_right}>
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <AppsRoundedIcon />
        </IconButton>
        <Paper className={classes.userMenuContainer}>
          <Box className={classes.avatarWrapper}>
            <img src={GmailLogoAlt} className={classes.logoAlt} />
            <img
              src="https://i.pravatar.cc/300"
              className={classes.randomAvatar}
            />
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Header;

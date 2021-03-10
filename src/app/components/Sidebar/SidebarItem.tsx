import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import sidebarStyles from "./sidebarStyles";
import clsx from "clsx";
import { history } from "../../../App";

const useStyles = makeStyles(sidebarStyles);

interface ISidebarItem {
  location?: string;
  Icon: any;
  title: string;
  counter: number;
  active?: boolean;
}

const SidebarItem: React.FC<ISidebarItem> = (props) => {
  const classes = useStyles();
  const goToSection = () => {
    if (props.location) {
      history.push(props.location);
    }
  };
  return (
    <Box
      onClick={goToSection}
      className={clsx(classes.sidebarItem, props.active ? "--active" : "")}
    >
      <Box>{<props.Icon />}</Box>
      <Box
        className={clsx(
          classes.sidebarItemText,
          props.active ? "--active" : ""
        )}
      >
        {props.title}
      </Box>
      <Box
        className={clsx(
          classes.sidebarItemCounter,
          props.active ? "--active" : ""
        )}
      >
        {props.active ? props.counter : ""}
      </Box>
    </Box>
  );
};

export default SidebarItem;

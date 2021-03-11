import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import sidebarStyles from "./sidebarStyles";
import clsx from "clsx";
import { history } from "../../../App";
import {
  resetOriginalList,
  setFilterMailList,
} from "../../../features/mail/mailListSlice";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles(sidebarStyles);

interface ISidebarItem {
  location?: string;
  tag?: any;
  isTag?: boolean;
  Icon: any;
  title: string;
  counter: number;
  active?: boolean;
}
const SidebarItem: React.FC<ISidebarItem> = (props) => {
  const { getMailList } = useSelector((state) => ({
    getMailList: state,
  }));
  const dispatch = useDispatch();
  const classes = useStyles();

  const goToSection = () => {
    dispatch(resetOriginalList());
    if (props.location) {
      history.push(props.location);
    }
  };

  const filterByTag = () => {
    const mailList: any = getMailList;
    const mailItems: [] = mailList.mailList.original;
    const filteredList: any[] = [];
    mailItems.map((item: any) => {
      if (item.tags.includes(props.tag)) {
        filteredList.push(item);
      }
      return 0;
    });
    dispatch(setFilterMailList(filteredList));
  };
  return (
    <Box
      onClick={!props.isTag ? goToSection : filterByTag}
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

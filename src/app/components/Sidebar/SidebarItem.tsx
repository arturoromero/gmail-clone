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

  const { location, tag, isTag, active, title, counter, Icon } = props;
  const dispatch = useDispatch();
  const classes = useStyles();

  const goToSection = () => {
    dispatch(resetOriginalList());
    if (location) {
      history.push(location);
    }
  };

  const filterByTag = () => {
    const mailList: any = getMailList;
    const mailItems = [...mailList.mailList.original];
    const filteredList: any[] = [];

    mailItems.filter((item: any) => {
      if (!item.tags.includes(tag)) {
        return item;
      }
      filteredList.push(item);
      return 0;
    });

    dispatch(setFilterMailList(filteredList));
    history.push("/");
  };
  return (
    <Box
      onClick={!isTag ? goToSection : filterByTag}
      className={clsx(classes.sidebarItem, active ? "--active" : "")}
    >
      <Box>{<Icon />}</Box>
      <Box className={clsx(classes.sidebarItemText, active ? "--active" : "")}>
        {title}
      </Box>
      <Box
        className={clsx(classes.sidebarItemCounter, active ? "--active" : "")}
      >
        {active ? counter : ""}
      </Box>
    </Box>
  );
};

export default SidebarItem;

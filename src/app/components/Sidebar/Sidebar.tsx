import * as React from "react";
import { makeStyles, Button, Box } from "@material-ui/core";
import ColorPlusIcon from "../../assets/images/colored_plus_icon.png";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import SendIcon from "@material-ui/icons/Send";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import LabelIcon from "@material-ui/icons/Label";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import sidebarStyles from "./sidebarStyles";
import SidebarItem from "./SidebarItem";
import { useSelector } from "react-redux";

const useStyles = makeStyles(sidebarStyles);

interface ISidebar {}

const Sidebar: React.FC<ISidebar> = (props) => {
  const { getMailList } = useSelector((state) => ({
    getMailList: state,
  }));
  const classes = useStyles();
  const mailList: any = getMailList;
  const mailItems: [] = mailList.mailList.data;

  const getTags = (mailItems: any) => {
    let tags: any[] = [];
    mailItems.map((mail: any, i: any) => tags.push(mail.tags));
    return [].concat.apply([], tags).filter(function (elem, index, self) {
      return self.indexOf(elem) === index;
    });
  };
  const obtainTags = getTags(mailItems);
  return (
    <Box className={classes.sidebarWrapper}>
      <Box className={classes.composeButtonWrapper}>
        <Button className={classes.composeButton}>
          <img
            alt="Compose new mail icon"
            src={ColorPlusIcon}
            className={classes.plusIcon}
          />
          Compose
        </Button>
      </Box>
      <SidebarItem
        location={"/"}
        active
        Icon={InboxIcon}
        title={"Inbox"}
        counter={53}
      />
      <SidebarItem Icon={StarIcon} title={"Starred"} counter={10} />
      <SidebarItem Icon={WatchLaterIcon} title={"Snoozed"} counter={0} />
      <SidebarItem Icon={SendIcon} title={"Sent"} counter={0} />
      <SidebarItem Icon={InsertDriveFileIcon} title={"Draft"} counter={0} />
      <SidebarItem Icon={LabelIcon} title={"Notes"} counter={0} />
      {obtainTags.map((tags: any, i: any) => (
        <SidebarItem
          isTag
          tag={tags}
          key={tags}
          Icon={LabelIcon}
          title={tags}
          counter={0}
        />
      ))}
      <SidebarItem Icon={KeyboardArrowDownIcon} title={"More"} counter={0} />
    </Box>
  );
};

export default Sidebar;

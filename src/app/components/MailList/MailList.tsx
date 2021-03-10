import * as React from "react";
import {
  makeStyles,
  Box,
  Checkbox,
  IconButton,
  Button,
} from "@material-ui/core";
import MailRow from "../MailRow/MailRow";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RefreshIcon from "@material-ui/icons/Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { useSelector } from "react-redux";

import mailListStyles from "./mailListStyles";

const useStyles = makeStyles(mailListStyles);

interface IMailList {}

const MailList: React.FC<IMailList> = (props) => {
  const { getMailList } = useSelector((state) => ({
    getMailList: state,
  }));
  const classes = useStyles();
  const mailList: any = getMailList;
  const mailItems: [] = mailList.mailList.data;

  return (
    <Box>
      <Box className={classes.mailListWrapper}>
        <Box className={classes.mailListHeader}>
          <Box className={classes.mailListHeaderLeft}>
            <Checkbox />
            <IconButton>
              <ArrowDropDownIcon />
            </IconButton>
            <IconButton>
              <RefreshIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Box>
          <Box className={classes.mailListHeaderRight}>
            <Button className={classes.paginationText}>1-23 of 23</Button>
            <Box className={classes.paginationIconsWrapper}>
              <KeyboardArrowLeftIcon />
              <KeyboardArrowRightIcon />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.mailListContent}>
        {mailItems.map((mail: any, i: any) => (
          <MailRow
            key={mail.id}
            id={mail.id}
            subject={mail.subject}
            sender={mail.sender}
            body={mail.body}
            tags={mail.tags}
            date={mail.date}
            starred={mail.starred}
          />
        ))}
      </Box>
    </Box>
  );
};

export default MailList;

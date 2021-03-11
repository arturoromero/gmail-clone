import React, { useState } from "react";
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
import DeleteIcon from "@material-ui/icons/Delete";
import { useSelector, useDispatch } from "react-redux";
import { setFilterMailList } from "../../../features/mail/mailListSlice";

import mailListStyles from "./mailListStyles";

const useStyles = makeStyles(mailListStyles);

interface IMailList {}

const MailList: React.FC<IMailList> = (props) => {
  const { getMailList } = useSelector((state) => ({
    getMailList: state,
  }));
  const dispatch = useDispatch();
  const classes = useStyles();
  const mailList: any = getMailList;
  const mailItems: [] = mailList.mailList.data;

  const [isAllSelected, setIsAllSelected] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAllSelected(event.target.checked);
  };
  const deleteItems = () => {
    const deleteList: any[] = [];
    //@ts-ignore
    const selectedItems = [...document.getElementsByClassName("--activerow")];
    selectedItems.forEach((element) => deleteList.push(element.id));
    const filteredList: any[] = [];
    // eslint-disable-next-line array-callback-return
    mailItems.map((item: any) => {
      // eslint-disable-next-line array-callback-return
      deleteList.map((element: any) => {
        if (item.id === element) {
          filteredList.push(item);
        }
      });
    });

    console.log(mailItems, "ORIGINAL");
    console.log(filteredList, "TO_REMOVE");
    const newshit = mailItems.filter((val) => !filteredList.includes(val));

    dispatch(setFilterMailList(newshit));
  };
  return (
    <Box>
      <Box className={classes.mailListWrapper}>
        <Box className={classes.mailListHeader}>
          <Box className={classes.mailListHeaderLeft}>
            <Checkbox onChange={handleChange} />
            <IconButton>
              <ArrowDropDownIcon />
            </IconButton>
            <IconButton>
              <RefreshIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
            <IconButton onClick={deleteItems}>
              <DeleteIcon />
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
            allselected={isAllSelected}
          />
        ))}
      </Box>
    </Box>
  );
};

export default MailList;
function e(e: any, arg1: (any: any) => void) {
  throw new Error("Function not implemented.");
}

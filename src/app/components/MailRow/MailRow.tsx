import React, { useState } from "react";
import moment from "moment";
import { makeStyles, Box, Checkbox, IconButton } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import mailRowStyles from "./mailRowStyles";
import { history } from "../../../App";
import clsx from "clsx";

const useStyles = makeStyles(mailRowStyles);

interface IMailRow {
  id: number;
  subject: string;
  sender: string;
  body: string;
  tags: Array<string>;
  date: string;
  starred?: boolean;
  allselected: boolean;
}
function removeHtmlTags(str: string) {
  if (str === null || str === "") return false;
  else str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, "");
}

const MailRow: React.FC<IMailRow> = (props) => {
  const historyClick = () => {
    history.push("/mail");
  };
  const classes = useStyles();
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Box
      key={props.id}
      id={props.id.toString()}
      className={
        isChecked || props.allselected
          ? clsx(classes.mailRowWrapper, "--activerow")
          : classes.mailRowWrapper
      }
    >
      <Box className={classes.rowOptions}>
        <Checkbox
          onChange={handleChange}
          checked={isChecked || props.allselected}
        />
        <IconButton>
          {props.starred ? (
            <StarIcon className={classes.yellowStar} />
          ) : (
            <StarBorderIcon />
          )}
        </IconButton>
      </Box>
      <Box></Box>
      <Box onClick={historyClick} className={classes.rowSender}>
        {props.sender}
      </Box>
      <Box className={classes.rowSubject}>
        {props.subject}
        <span className={classes.rowBody}> - {removeHtmlTags(props.body)}</span>
      </Box>
      <Box className={classes.rowDate}>
        {moment(props.date).format("MMM D")}
      </Box>
    </Box>
  );
};
export default MailRow;

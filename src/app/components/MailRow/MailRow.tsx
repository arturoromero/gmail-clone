import * as React from "react";
import moment from "moment";
import { makeStyles, Box, Checkbox, IconButton } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import mailRowStyles from "./mailRowStyles";
import { history } from "../../../App";

const useStyles = makeStyles(mailRowStyles);

interface IMailRow {
  id: number;
  subject: string;
  sender: string;
  body: string;
  tags: Array<string>;
  date: string;
  starred?: boolean;
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
  return (
    <Box key={props.id} className={classes.mailRowWrapper}>
      <Box className={classes.rowOptions}>
        <Checkbox />
        <IconButton>
          {props.starred ? (
            <StarIcon className={classes.yelloStar} />
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

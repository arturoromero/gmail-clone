import React, { useState } from "react";
import moment from "moment";
import { makeStyles, Box, Checkbox, IconButton } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import mailRowStyles from "./mailRowStyles";
import { history } from "../../../App";
import clsx from "clsx";
import { removeHtmlTags } from "../../utils/htmlcleaner";

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

const MailRow: React.FC<IMailRow> = (props) => {
  const { id, allselected, starred, sender, subject, body, date } = props;
  const goToMail = () => {
    history.push(`/mail/?mail=${id}`);
  };
  const classes = useStyles();
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Box
      id={id.toString()}
      className={
        isChecked || allselected
          ? clsx(classes.mailRowWrapper, "--activerow")
          : classes.mailRowWrapper
      }
    >
      <Box className={classes.rowOptions}>
        <Checkbox onChange={handleChange} checked={isChecked || allselected} />
        <IconButton>
          {starred ? (
            <StarIcon className={classes.yellowStar} />
          ) : (
            <StarBorderIcon />
          )}
        </IconButton>
      </Box>
      <Box></Box>
      <Box onClick={goToMail} className={classes.rowSender}>
        {sender}
      </Box>
      <Box onClick={goToMail} className={classes.rowSubject}>
        {subject}
        <span className={classes.rowBody}> - {removeHtmlTags(body)}</span>
      </Box>
      <Box className={classes.rowDate}>{moment(date).format("MMM D")}</Box>
    </Box>
  );
};
export default MailRow;

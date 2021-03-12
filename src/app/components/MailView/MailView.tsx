import React from "react";
import { makeStyles, Box, IconButton, Button } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArchiveIcon from "@material-ui/icons/Archive";
import ReportIcon from "@material-ui/icons/Report";
import MarkunreadIcon from "@material-ui/icons/Markunread";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import FolderIcon from "@material-ui/icons/Folder";
import LabelIcon from "@material-ui/icons/Label";
import mailListStyles from "./mailViewStyles";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { history } from "../../../App";

const useStyles = makeStyles(mailListStyles);

interface IMailView {}

const MailView: React.FC<IMailView> = (props) => {
  const { search } = useLocation();
  const urlParams = new URLSearchParams(search);
  const currentMail = urlParams.getAll("mail");
  const { getMailList } = useSelector((state) => ({
    getMailList: state,
  }));
  const mailList: any = getMailList;
  const mailItems: [] = mailList.mailList.data;
  const goBack = () => {
    history.goBack();
  };
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.mailListHeader}>
        <Box className={classes.mailListHeaderLeft}>
          <Box className={classes.iconGroup}>
            <IconButton onClick={goBack}>
              <ArrowBackIcon />
            </IconButton>
            <IconButton>
              <ArchiveIcon />
            </IconButton>
            <IconButton>
              <ReportIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Box>
          <Box className={classes.iconGroup}>
            <IconButton>
              <MarkunreadIcon />
            </IconButton>
            <IconButton>
              <WatchLaterIcon />
            </IconButton>
            <IconButton>
              <CheckCircleIcon />
            </IconButton>
          </Box>
          <Box className={classes.iconGroup}>
            <IconButton>
              <FolderIcon />
            </IconButton>
            <IconButton>
              <LabelIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Box>
        </Box>
        <Box className={classes.mailListHeaderRight}>
          <Button className={classes.paginationText}>1 of 1</Button>
          <Box className={classes.paginationIconsWrapper}>
            <KeyboardArrowLeftIcon />
            {"  "} <KeyboardArrowRightIcon />
          </Box>
        </Box>
      </Box>
      <Box className={classes.mailBody}>
        {mailItems.map((item: any, index) =>
          item.id === currentMail.toString() ? (
            <Box key={item.id}>
              <Box className={classes.mailBodySubject}>{item.subject}</Box>
              <Box className={classes.mailSender}>
                <Box>
                  <img
                    alt="avatar"
                    src="https://i.pravatar.cc/100"
                    className={classes.randomAvatar}
                  />
                </Box>
                <Box className={classes.mailSenderText}>{item.sender}</Box>
              </Box>
              <Box
                dangerouslySetInnerHTML={{
                  __html: item.body,
                }}
              />
            </Box>
          ) : (
            ""
          )
        )}
      </Box>
    </Box>
  );
};

export default MailView;

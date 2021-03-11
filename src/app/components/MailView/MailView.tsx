import * as React from "react";
import { makeStyles, Box } from "@material-ui/core";

import mailListStyles from "./mailViewStyles";

const useStyles = makeStyles(mailListStyles);

interface IMailView {}

const MailView: React.FC<IMailView> = (props) => {
  const classes = useStyles();
  return <Box className={classes.mailViewWrapper}></Box>;
};

export default MailView;

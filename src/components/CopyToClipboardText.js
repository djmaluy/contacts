import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import classes from "./CopyToClipboardText.module.css";
import { useCopyToClipboard } from "react-use";
import Tooltip from "@material-ui/core/Tooltip";
import { Box, ClickAwayListener } from "@material-ui/core";

const STATUS_COPY = {
  COPY: "copy",
  COPIED: "copied",
};
const TITLE_BY_STATUS = {
  [STATUS_COPY.COPY]: "Copy",
  [STATUS_COPY.COPIED]: "Copied",
};

export const CopyToClipboardText = ({ text }) => {
  const [statusCopy, setStatusCopy] = useState(STATUS_COPY.COPY);
  const [, copyToClipboard] = useCopyToClipboard();

  const handleClickCopy = useCallback(() => {
    copyToClipboard(text);
    setStatusCopy(STATUS_COPY.COPIED);
  }, [copyToClipboard, text]);

  const onClickAway = useCallback(() => {
    setStatusCopy(STATUS_COPY.COPY);
  }, [setStatusCopy]);
  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <Tooltip title={TITLE_BY_STATUS[statusCopy]} placement="top">
        <Box className={classes.link} onClick={handleClickCopy}>
          <FileCopyOutlinedIcon fontSize="small" className={classes.copyIcon} />
          <div>{text}</div>
        </Box>
      </Tooltip>
    </ClickAwayListener>
  );
};

CopyToClipboardText.propTypes = {
  text: PropTypes.string.isRequired,
};

// Installed react-use for custom hook useCopyToClipboard

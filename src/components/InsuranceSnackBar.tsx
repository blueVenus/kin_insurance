import { Snackbar, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SnackBarProps } from "../types";

const useStyles = makeStyles((theme: Theme) => ({
  snackBarClass: {
    "& .css-1eqdgzv-MuiPaper-root-MuiSnackbarContent-root": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

const InsuranceSnackBar = (props: SnackBarProps) => {
  const classes = useStyles();
  const { isOpen, handleClose, message } = props;

  return (
    <Snackbar
      open={isOpen}
      className={classes.snackBarClass}
      message={message}
      onClose={handleClose}
      anchorOrigin={{vertical: "bottom", horizontal: "right"}}
      transitionDuration={1000}
    />
  );
};

export default InsuranceSnackBar;

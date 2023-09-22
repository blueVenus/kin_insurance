import { Send } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { LoadingButtonProps } from "../types";

const useStyles = makeStyles((theme: Theme) => ({
  submitButton: {
    "&.css-1r79052-MuiButtonBase-root-MuiButton-root-MuiLoadingButton-root": {
      backgroundColor: theme.palette.primary.main,
      marginTop: "20px",
      color: "white",
      padding: "8px 20px",
      borderRadius: "5px",
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
      },
    },
  },
}));
const InsuranceLoadingButton = (props: LoadingButtonProps) => {
  const classes = useStyles();

  const { handleSubmit, isLoading, isPossible, buttonText } = props;

  return (
    <LoadingButton
      className={classes.submitButton}
      onClick={handleSubmit}
      loading={isLoading}
      loadingPosition="end"
      disabled={isPossible}
      endIcon={<Send />}
    >
      {buttonText}
    </LoadingButton>
  );
};

export default InsuranceLoadingButton;

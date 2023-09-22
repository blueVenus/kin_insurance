import { HelpOutline } from "@mui/icons-material";
import { TextField, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Fragment } from "react";
import { Controller } from "react-hook-form";
import MaskedInput from "react-text-mask";
import { createAutoCorrectedDatePipe } from "text-mask-addons";
import { TextFieldProps } from "../types";

const useStyles = makeStyles((theme: Theme) => ({
  inputClass: {
    "&.css-1u3bzj6-MuiFormControl-root-MuiTextField-root": {
      margin: "0 10px 10px 0",
      height: "70px",
    },
    "& label": {
      color: theme.palette.primary.main,
    },
    "& .css-v4u5dn-MuiInputBase-root-MuiInput-root:before": {
      borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
    "& .css-v4u5dn-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before":
      {
        borderBottom: `2px solid ${theme.palette.primary.main}`,
      },
    "& .css-v4u5dn-MuiInputBase-root-MuiInput-root:after": {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
    "& .css-v4u5dn-MuiInputBase-root-MuiInput-root": {
      color: theme.palette.secondary.main,
    },
    "& .css-v4u5dn-MuiInputBase-root-MuiInput-root:hover": {
      color: theme.palette.secondary.dark,
    },
    "& span": {
      display: "none",
    },
  },
  helpIconClass: {
    "&.css-i4bv87-MuiSvgIcon-root": {
      marginTop: "5px",
      height: "16px",
    },
  },
}));

const InsuranceTextField = (props: TextFieldProps) => {
  const { control, name, label, placeholder, helperText, error, mask, icon } =
    props;

  const classes = useStyles();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...inputProps } }) => (
        <MaskedInput
          className={classes.inputClass}
          {...inputProps}
          id={name}
          guide={false}
          pipe={
            name === "expirationDate"
              ? createAutoCorrectedDatePipe("mm/yy")
              : null
          }
          mask={mask}
          render={(ref, props) => (
            <TextField
              inputRef={ref}
              {...props}
              variant={"standard"}
              helperText={helperText}
              label={
                <Fragment>
                  {label}
                  {icon ? (
                    <HelpOutline className={classes.helpIconClass} />
                  ) : null}
                </Fragment>
              }
              placeholder={placeholder}
              error={error ? true : false}
              required
            />
          )}
        />
      )}
    />
  );
};

export default InsuranceTextField;

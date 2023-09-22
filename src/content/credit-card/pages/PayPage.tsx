import { Paper, Theme, Typography } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { makeStyles } from "@mui/styles";
import { FormValues } from "../../../types";
import { CreditCardForm } from "../Components";
import { validationSchema } from "../../../constants";

const useStyles: any = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px",
  },
}));

const PayPage: React.FC = () => {
  const classes = useStyles();

  const methods = useForm<FormValues>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
    defaultValues: {
      cardNumber: "",
      expirationDate: "",
      cvv: "",
      firstName: "",
      lastName: "",
      billingCode: "",
    },
  });

  return (
    <Paper className={classes.root}>
      <Typography variant="h4">Pay with Credit Card</Typography>
      <FormProvider {...methods}>
        <CreditCardForm />
      </FormProvider>
    </Paper>
  );
};

export default PayPage;

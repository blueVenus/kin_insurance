import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import http from "../../../api";
import {
  InsuranceLoadingButton,
  InsuranceSnackBar,
  InsuranceTextField,
} from "../../../components";
import {
  billingCodeMask,
  cardNumberMask,
  cvvMask,
  dateMask,
  firstNameMask,
  lastNameMask,
} from "../../../constants";
import CreditCard from "./CreditCardDisplay";

const useStyles: any = makeStyles((theme: Theme) => ({
  inputPanel: {
    marginTop: "70px",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    width: "700px",
  },
}));

const CreditCardForm: React.FC = () => {
  const methods = useFormContext();

  const classes = useStyles();

  const { control, formState, handleSubmit, watch } = methods;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const { errors } = formState;

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);

    http
      .request({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "post",
        data: data,
      })
      .then(({ data }) => {
        setSubmitSuccess(true);
        setIsSubmitting(false);
        if (data.id !== undefined) {
          setMessage("Failed");
        } else {
          setMessage("success");
        }
      })
      .catch((err) => {
        console.log(err)
        setSubmitSuccess(true);
        setIsSubmitting(false);
        setMessage(err.message);
      });
  };

  const handleClose = () => {
    setSubmitSuccess(false);
  };

  return (
    <>
      <CreditCard
        cvv={watch("cvv")}
        cardNumber={watch("cardNumber")}
        firstName={watch("firstName")}
        lastName={watch("lastName")}
        expirationDate={watch("expirationDate")}
      />

      <div className={classes.inputPanel}>
        <InsuranceTextField
          mask={cardNumberMask}
          control={control}
          name="cardNumber"
          value={watch("cardNumber")}
          label={"Credit Card Number"}
          icon={true}
          placeholder="XXXX XXXX XXXX XXXX"
          helperText={errors?.cardNumber?.message as string}
          error={errors?.cardNumber}
        />

        <InsuranceTextField
          mask={dateMask}
          control={control}
          name="expirationDate"
          value={watch("expirationDate")}
          label="Expiration Date"
          placeholder="XX/XX"
          helperText={errors?.expirationDate?.message as string}
          error={errors?.expirationDate}
          icon={false}
        />

        <InsuranceTextField
          mask={cvvMask}
          control={control}
          name="cvv"
          value={watch("cvv")}
          label={"CVV"}
          placeholder="XXXX"
          helperText={errors?.cvv?.message as string}
          error={errors?.cvv}
          icon={true}
        />

        <InsuranceTextField
          mask={firstNameMask}
          control={control}
          name="firstName"
          value={watch("firstName")}
          label="Cardholder's First name"
          placeholder="First Name"
          helperText={errors?.firstName?.message as string}
          error={errors?.firstName}
          icon={false}
        />

        <InsuranceTextField
          mask={lastNameMask}
          control={control}
          name="lastName"
          value={watch("lastName")}
          label="Cardholder's Last name"
          placeholder="Last Name"
          helperText={errors?.lastName?.message as string}
          error={errors?.lastName}
          icon={false}
        />

        <InsuranceTextField
          mask={billingCodeMask}
          control={control}
          name="billingCode"
          value={watch("billingCode")}
          label="Billing Zip Code"
          placeholder="XXXXX"
          helperText={errors?.billingCode?.message as string}
          error={errors?.billingCode}
          icon={false}
        />

        <InsuranceLoadingButton
          handleSubmit={handleSubmit(onSubmit)}
          isLoading={isSubmitting}
          isPossible={!formState.isValid}
          buttonText="Submit"
        />

        <InsuranceSnackBar
          isOpen={submitSuccess}
          message={message}
          handleClose={handleClose}
        />
      </div>
    </>
  );
};

export default CreditCardForm;

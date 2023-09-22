import { Card, CardContent, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CreditCardProps } from "../types";

const cardSize = {
  width: "300px",
  height: "180px",
};

const useStyles: any = makeStyles((theme: Theme) => ({
  panel: {
    position: "relative",
    marginTop: "50px",
  },
  backCard: {
    position: "relative",
    background: "url('/assets/images/credit-card-back.png')",
    backgroundSize: `${cardSize.width} ${cardSize.height}`,
    borderRadius: "10px",
    height: `${cardSize.height}`,
    width: `${cardSize.width}`,
  },
  frontCard: {
    position: "absolute",
    background: "url('/assets/images/credit-card-front.jpg')",
    marginTop: "-170px",
    left: "-80px",
    borderRadius: "10px",
    height: `${cardSize.height}`,
    width: `${cardSize.width}`,
  },
  cvvDisplayPanel: {
    position: "absolute",
    bottom: "10px",
    right: "30px",
  },
  frontCardContent: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  },
  logoImg: {
    width: "30px",
    height: "auto",
  },
  cardNumberDisplayPanel: {
    position: "absolute",
    top: "60px",
  },
  nameDisplayPanel: {
    position: "absolute",
    bottom: "20px",
    marginRight: "70px",
  },
  expirationDateDisplayPanel: {
    position: "absolute",
    bottom: "20px",
    right: "20px",
  },
}));

const CreditCard = (props: CreditCardProps) => {
  const { cvv, cardNumber, firstName, lastName, expirationDate } = props;

  const classes = useStyles();

  return (
    <div className={classes.panel}>
      <Card className={classes.backCard}>
        <CardContent>
          <div className={classes.cvvDisplayPanel}>
            <Typography variant="body1" color="white">
              cvv
            </Typography>
            <Typography variant="body2" color={"white"}>
              {cvv === "" ? "XXX" : cvv}
            </Typography>
          </div>
        </CardContent>
      </Card>
      <Card className={classes.frontCard}>
        <CardContent className={classes.frontCardContent}>
          <img
            className={classes.logoImg}
            src="/assets/images/credit-card-logo.png"
            alt="logo"
          />
          <Typography
            className={classes.cardNumberDisplayPanel}
            variant="h6"
            color={"white"}
          >
            {cardNumber === "" ? "XXXX XXXX XXXX XXXX" : cardNumber}
          </Typography>
          <div className={classes.nameDisplayPanel}>
            <Typography variant="body1" color="white">
              {firstName !== "" && lastName !== ""
                ? `${firstName} ${lastName}`
                : "YOUR NAME"}
            </Typography>
          </div>
          <div className={classes.expirationDateDisplayPanel}>
            <Typography variant="body2" color={"white"}>
              {"EXPIRY"}
            </Typography>

            <Typography variant="body2" color={"white"}>
              {expirationDate === "" ? "XX/XX" : expirationDate}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreditCard;

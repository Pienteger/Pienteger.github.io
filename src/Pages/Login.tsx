import React from "react";
import {
  makeStyles,
  shorthands,
  useId,
  Input,
  Label,
  Button,
} from "@fluentui/react-components";
import { CalendarMonthRegular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap("20px"),
    maxWidth: "400px",
    // Stack the label above the field (with 2px gap per the design system)
    "> div": {
      display: "flex",
      flexDirection: "column",
      ...shorthands.gap("2px"),
    },
  },
});

const Login = () => {
  const emailId = useId("input-email");
  const urlId = useId("input-url");
  const passwordId = useId("input-password");
  const styles = useStyles();

  return (
    <div className={`${styles.root} shadow p-5 rounded my-5`}>
      <h2 className="fw-bold">Sign in</h2>

      <div>
        <Label htmlFor={emailId}>Email input</Label>
        <Input type="email" id={emailId} />
      </div>

      <div>
        <Label htmlFor={passwordId}>Password input</Label>
        <Input type="password" defaultValue="" id={passwordId} />
      </div>

      <Button appearance="primary" className="py-2">
        Sign in
      </Button>
    </div>
  );
};

export default Login;

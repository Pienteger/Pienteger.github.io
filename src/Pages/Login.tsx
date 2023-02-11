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
import style from "./Css/Login.module.css";

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

  // CSS modules

  return (
    <div className="w-100 d-flex justify-content-center justify-content-lg-end mt-5 ">
      <div className={`${styles.root} shadow p-5 rounded my-5 me-0 me-lg-5`}>
        <h2
          className={`${style["login_primary_border_left"]} fw-bold text-uppercase ps-3 mb-5 `}
        >
          Sign in
        </h2>

        <div className={`mt-3`}>
          {/* <Label htmlFor={emailId}>Email</Label> */}
          <Input
            type="email"
            id={emailId}
            className={`${style["genuine_width"]} p-2 fw-bold`}
            placeholder="example@gmail.com"
          />
        </div>

        <div>
          {/* <Label htmlFor={passwordId}>Password</Label> */}
          <Input
            type="password"
            defaultValue=""
            id={passwordId}
            className={`${style["genuine_width"]} p-2 fw-bold`}
            placeholder="password"
          />
        </div>

        <Button appearance="primary" className={` py-2 my-4`}>
          Sign in
        </Button>

        <div className="d-flex ">
          <p className="text-center">
            Forgot Password?
            <a href="#" className="">
              Click here
            </a>
          </p>
          <p className="text-center">
            Don't have an account?
            <a href="#" className="">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

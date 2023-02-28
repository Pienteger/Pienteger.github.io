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

const Register = () => {
    const firstName = useId("firstName");
    const lastName = useId("lastName");
    const userEmail = useId("userEmail");
    const selectCountry = useId("userCountry");
    const userGender = useId("userGender");
    const userCompany = useId("userCompany");
    const userAddress = useId("userAddress");
    const password = useId("password");
    const confirmPassword = useId("confirmPassword");
    const submitRegister = useId("submitRegister");    
    const styles = useStyles();

  // CSS modules

  return (
    <div className="w-100 d-flex justify-content-center justify-content-lg-end mt-5 ">
        <div>
            <img src="../images/5721113.png" alt="" />
        </div>
        <div className="d-flex flex-column gap-3 p-4 rounded shadow fs-6">
            <h2 className="border border-top-0 border-bottom-0 border-end-0 ps-2 border-primary">
                Sign Up
            </h2>
            <div className="d-flex gap-2">
                <Input type="text" name="" id={firstName} className="w-50 p-1 rounded" placeholder="First Name"/>
                <Input type="text" name="" id={lastName} className="w-50 p-1 rounded" placeholder="Last Name"/>
            </div>
            <div className="">
                <Input type="email" name="" id={userEmail} className="w-100 p-1 rounded" placeholder="Email Address"/>
            </div>
            <div className="">
                <select name="" id={selectCountry} className="w-100 p-1 rounded">
                    <option value="default">Select Country</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
            </div>
            <div className="">
                <h2 className="fs-6">Select Gender</h2>
                <div className="d-flex justify-content-between align-items-center" id={userGender}>
                    <div className="d-flex align-items-center gap-2">
                        <span>Male</span>
                        <input type="radio" name="gender" id="" className=""/>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <span>Female</span>
                        <input type="radio" name="gender" id="" className=""/>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <span>Prefer not to say</span>
                        <input type="radio" name="gender" id="" className=""/>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center gap-2">
                <Input type="text" name="" id={userCompany} className="w-100 p-1 rounded" placeholder="Company name"/>
                <span>(Optional)</span>
            </div>
            <div className="">
                <textarea name="" id={userAddress} className="w-100 p-1 rounded" placeholder="Present address"></textarea>
            </div>
            <div className="d-flex gap-2">
                <Input type="password" name="" id={password} className="w-50 p-1 rounded" placeholder="Password"/>
                <Input type="password" name="" id={confirmPassword} className="w-50 p-1 rounded" placeholder="Confirm password"/>
            </div>
            <div className="">
                <input type="submit" value="Submit" id={submitRegister} className="w-25 p-1 bg-primary text-white rounded border-0"/>
            </div>
        </div>

    </div>
  );
};

export default Register;

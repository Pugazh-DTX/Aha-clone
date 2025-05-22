"use client";
import "./styles.scss";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CountryCodeDropdown from "../../components/organisms/CountryCode/index"; // Adjust path accordingly

import backArrow from "../../../public/Assets/icons/SubscriptionPage/mob-arrow-left-subs-page.svg";
import flag from "../../../public/Assets/icons/Flag_of_India.svg";
import dropdownArrow from "../../../../public/Assets/icons/Login/drop-down-arrow.svg";
import emailIcon from "../../../public/Assets/icons/Login/mail.svg";
import phoneIcon from "../../../public/Assets/icons/Login/mobile-icon.svg";
import penIcon from "../../../public/Assets/icons/Login/pen-icon.svg";
import rightOtpArrow from "../../../public/Assets/icons/Login/right-arrow-resend-otp.svg";
import { useDispatch } from "react-redux";
import {
  hideFooter,
  hideHeader,
  showFooter,
  showHeader,
} from "@/store/slices/layoutSlice";
import { Button } from "@/components/atoms";
import InputBox from "@/components/atoms/Inputbox";
import { loginSocial } from "./LoginSocial";
import { useRouter } from "next/navigation";
import OTPInput from "@/components/atoms/OtpInput";
import AppBackground from "@/components/atoms/AppBackgroud";
//Time for resend OTP
const resendOtpTime = 30;
const otpLength = 5;
const LoginPage = () => {
  const [page, setPage] = useState<"Login" | "Enter_otp" | "Resend_otp">(
    "Login"
  );
  const [email, setEmail] = useState("");
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [mobile, setMobile] = useState("");
  const [mobileError, setMobileError] = useState<string | null>(null);
  const [loginMode, setLoginMode] = useState<"Mobile" | "Email">("Mobile");
  const [resendTimer, setResendTimer] = useState(resendOtpTime); // seconds
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [otpValue, setOtpValue] = useState("");

  const isOtpComplete = otpValue.length >= otpLength && /^\d+$/.test(otpValue);

  const [selectedCountry, setSelectedCountry] = useState({
    code: "+91",
    name: "India",
    flag: flag,
  });
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideHeader());
    dispatch(hideFooter());
    return () => {
      dispatch(showHeader());
      dispatch(showFooter());
    };
  }, [dispatch]);

  const validateMobile = (value: string): string | null => {
    const basicFormat = /^[6-9]\d*$/; // starts with 6-9 and only digits

    if (!basicFormat.test(value)) {
      return "Invalid mobile number";
    }

    if (value.length !== 10) {
      return "Phone number length should be 10 digits.";
    }

    return null; // valid
  };

  const handleProceed = () => {
    const error = validateMobile(mobile);
    if (error) {
      setMobileError(error);
    } else {
      setMobileError(null);
      // proceed with submission
      setPage("Enter_otp");
    }
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMobile(value);

    const error = validateMobile(value);
    if (!error || value.length < 10) {
      // Hide error while typing or if correct
      setMobileError(null);
    }
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.toLowerCase());
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsErrorEmail(false); // reset error on typing
  };

  const handleEmailNext = () => {
    const isValid = validateEmail(email);
    if (!isValid) {
      setIsErrorEmail(true);
    } else {
      setIsErrorEmail(false);
      setPage("Enter_otp");
    }
  };
  // Starts the timer when user reaches Enter_otp
  useEffect(() => {
    if (page === "Enter_otp") {
      setResendTimer(resendOtpTime);
      setIsResendDisabled(true);
    }
  }, [page]);

  // Handles countdown interval
  useEffect(() => {
    if (!isResendDisabled) return;

    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          setIsResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isResendDisabled]);

  const handleResendOtp = () => {
    // Trigger resend logic (API call etc.)
    console.log("OTP Resent");

    // Restart the timer
    setResendTimer(resendOtpTime);
    setIsResendDisabled(true);
  };

  return (
    <AppBackground>
      <section className="login-parent-body">
        <div className="login__card-body">
          <div
            className="cursor-pointer login__back-arrow"
            onClick={() => {
              router.back();
            }}
          >
            <Image src={backArrow} alt={""} />
          </div>
          {page === "Login" ? (
            <div>
              <h2 className="login__card-heading">
                LET'S GET STARTED
                <span className="login__card-heading-dot">.</span>
              </h2>
              {loginMode === "Mobile" ? (
                <div className="login__card-mobile-part">
                  <h6 className="login__card-mobile-no">Mobile Number</h6>
                  <div>
                    <InputBox
                      type="number"
                      placeholder="Phone Number"
                      value={mobile}
                      onChange={handleMobileChange}
                      autoFocus
                      onWheel={(e) => e.currentTarget.blur()}
                      inputElementClass="login__number-input"
                      leftIcon={
                        <>
                          {/* <Image
                          src={selectedCountry.flag}
                          alt={selectedCountry.name}
                          width={24}
                          height={16}
                          className="border"
                        /> */}
                          {/* <span
                          style={{
                            marginLeft: "6px",
                            fontSize: "14px",
                            color: "white",
                          }}
                        >
                          +91
                        </span>
                        <Image
                          src={dropdownArrow}
                          alt={""}
                          style={{ cursor: "pointer" }}
                        /> */}

                          <CountryCodeDropdown
                            value={selectedCountry}
                            onChange={(country) => setSelectedCountry(country)}
                          />
                          <div
                            className="input-divider"
                            style={{ marginLeft: "5px" }}
                          />
                        </>
                      }
                    />
                  </div>

                  <Button
                    wrapperClass="login__proceed-button"
                    children="Proceed"
                    onClick={handleProceed}
                  />
                  {mobileError && (
                    <p className="login__text--error">{mobileError}</p>
                  )}
                </div>
              ) : (
                <div className="login__card-mobile-part">
                  <h6 className="login__card-mobile-no">Email Id</h6>
                  <InputBox
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    autoFocus
                    inputElementClass="login__number-input"
                  />
                  {isErrorEmail && (
                    <p className="login__text--error">Invalid email</p>
                  )}
                  <Button
                    wrapperClass="login__proceed-button"
                    children="Next"
                    onClick={handleEmailNext}
                  />
                </div>
              )}
              <div className="login__social-use-options">
                <p className="login__use-options">
                  Or, Use one of the following options
                </p>
                <div
                  className="login-flex-jc-ac"
                  style={{ gap: "10px", justifyContent: "space-evenly" }}
                >
                  {/* Toggle Button: Email ↔ Mobile */}
                  <div
                    className="login-flex-jc-ac login__social-media cursor-pointer"
                    onClick={() =>
                      setLoginMode((prev) =>
                        prev === "Mobile" ? "Email" : "Mobile"
                      )
                    }
                  >
                    <Image
                      src={loginMode === "Mobile" ? emailIcon : phoneIcon}
                      alt=""
                    />
                    <p className="login__social-text">
                      {loginMode === "Mobile" ? "Email" : "Mobile"}
                    </p>
                  </div>

                  {/* Static Social Buttons (Facebook, Google, etc.) */}
                  {loginSocial.map((social, index) => (
                    <div
                      className="login-flex-jc-ac login__social-media cursor-pointer"
                      key={index}
                    >
                      <Image src={social.icon} alt={social.socialName} />
                      <p className="login__social-text">{social.socialName}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="login__otp-container">
              <div
                className="cursor-pointer login__back-arrow"
                onClick={() => {
                  setPage("Login");
                }}
              >
                <Image src={backArrow} alt={""} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "25px",
                }}
              >
                <h2 className="login__card-heading">
                  VERIFY YOUR OTP
                  <span className="login__card-heading-dot">.</span>
                </h2>
                <div>
                  <h6 className="login__card-otp-text">OTP was sent to</h6>
                  <div className="login__card-otp-mobileno-change">
                    <p className="login__card-otp-mobile-no">
                      {loginMode === "Mobile"
                        ? `${selectedCountry.code} ${mobile}`
                        : email}
                    </p>
                    <div
                      className="login-flex-jc-ac cursor-pointer"
                      onClick={() => {
                        setPage("Login");
                      }}
                    >
                      <Image src={penIcon} alt={""} />
                      <p>Change</p>
                    </div>
                  </div>
                </div>
                <OTPInput
                  onChange={(value) => setOtpValue(value)}
                  length={otpLength}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  {isResendDisabled ? (
                    <p className="login__otp-seconds">
                      Resend OTP in {resendTimer} seconds
                    </p>
                  ) : (
                    <div
                      className="login-flex-jc-ac cursor-pointer"
                      onClick={handleResendOtp}
                    >
                      <p className="login__resend-otp">Resend OTP </p>
                      <div style={{ marginLeft: "5px" }}>
                        <Image src={rightOtpArrow} alt={""} />
                      </div>
                    </div>
                  )}
                  {isOtpComplete && (
                    <Button
                      wrapperClass="login__proceed-button"
                      children="Verify OTP"
                      onClick={() => console.log("Verifying OTP:", otpValue)}
                    />
                  )}
                </div>
              </div>
              <div>
                <p className="login__policy-text">
                  By creating an account, you adhere to the{" "}
                  <span className="login__policy-orange-text">
                    Terms Of Service
                  </span>{" "}
                  and
                  <span className="login__policy-orange-text">
                    {" "}
                    Privacy Policy.
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </AppBackground>
  );
};

export default LoginPage;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hanleClickButton, resetApp } from "../redux/actions.js";
const Button = () => {
  const { buttonStatus } = useSelector((state) => state);
  const [resetButtonStatus, setResetButtonStatus] = useState(false);
  const dispatch = useDispatch();

  const clickButton = () => {
    dispatch(hanleClickButton(true));
    setResetButtonStatus(true);
    setTimeout(() => {
      setResetButtonStatus(false);
    }, [7000]);
  };

  const resetButton = () => {
    dispatch(resetApp());
  };

  return (
    <>
      {!buttonStatus ? (
        <button className="cloud-btn" onClick={clickButton}>
          SHAKE
        </button>
      ) : (
        <button
          className="cloud-btn"
          onClick={() => resetButton()}
          disabled={resetButtonStatus}
        >
          RESET
        </button>
      )}
    </>
  );
};

export default Button;

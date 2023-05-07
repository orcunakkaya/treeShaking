import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import appleImage from "../assets/apple.svg";
import { dropApple } from "../redux/actions";

const Apple = () => {
  const { buttonStatus, apples } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [drop, setDrop] = useState(false);

  useEffect(() => {
    if (!buttonStatus) {
      setDrop(false);
      return;
    }
    let changeAppleLocation = apples.map((apple) => ({
      ...apple,
    }));
    setTimeout(() => {
      dispatch(dropApple(changeAppleLocation));
      setDrop(true);
    }, [4000]);
  }, [dispatch, apples, buttonStatus]);

  return (
    <>
      {apples.map((apple, index) => (
        <img
          key={index}
          src={appleImage}
          alt={`apple ${index}`}
          style={{
            width: "40px",
            height: "40px",
            top: apple.positionTop,
            left: apple.positionLeft,
          }}
          className={`apple ${buttonStatus && "shake apple-shake"}  ${
            drop && "drop"
          }`}
        />
      ))}
    </>
  );
};

export default Apple;

import React from "react";
import tree from "../assets/tree.svg";
import { useSelector } from "react-redux";
const Tree = () => {
  const { buttonStatus } = useSelector((state) => state);

  return (
    <>
      <img
        src={tree}
        alt="tree"
        className={`tree ${buttonStatus && "shake"}`}
      />
    </>
  );
};

export default Tree;

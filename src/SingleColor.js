import React, { useEffect, useState } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const backGround = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  const copyToClipboard = () => {
    setAlert(true);
    navigator.clipboard.writeText(hex);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 2500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [alert]);

  return (
    <article
      style={{ backgroundColor: `rgb(${backGround})` }}
      className={`color ${index > 10 && "color-light"}`}
      onClick={copyToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hexValue}</p>
      {alert && <p className="alertMessage">Copied.</p>}
    </article>
  );
};

export default SingleColor;

import React from "react";
import { Parallax } from "react-scroll-parallax";
import "./Fixed.css";

export default function fixed() {
  return (
    <>
      <Parallax speed={-10}>
        <div className="fixed">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSgXklznVClCqXG5OiTH_kcws_ulK5GBkpxBktn2NeCLnMGv1HjBdhHxITxXuQ1LBixg&usqp=CAU"
            alt=""
          />
          <p>Dhiraj Singh</p>
          <hr />
          <p>Developer</p>
        </div>
      </Parallax>
    </>
  );
}

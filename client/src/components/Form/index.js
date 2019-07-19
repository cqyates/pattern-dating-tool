import React from "react";
import "./style.css"

function FormBtn(props) {
  return (
    <button {...props} style={{ marginBottom: 10}} className="btn btn-block">
      {props.children}
    </button>
  );
}

export default FormBtn;

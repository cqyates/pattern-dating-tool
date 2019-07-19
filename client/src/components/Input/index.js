import React from "react";

function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" style={{borderColor:"#758696"}}{...props} />
    </div>
  );
}

export default Input;
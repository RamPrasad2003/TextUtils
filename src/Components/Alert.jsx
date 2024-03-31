import React from "react";

export default function Alert(props) {
  return (
    props.alert && <center><div className={`alert alert-${props.alert.type} alert-dismissible fade show mt-4`} role="alert" style={{width:"400px"}}>
      <strong>{props.alert.type}</strong>: {props.alert.msg}
    </div></center>
  );
}

import React from "react";
import InputMask from "react-input-mask";
import MaterialInput from "@mui/material/Input";

const InputMaska = ({ radius, ...props }) => {
  return (
    <InputMask
      mask="(+\9\98) 99 999-99-99"
      placeholder="(+998) •• ••• •• ••"
      {...props}
      style={{ borderRadius: radius ? "15px" : "0" }}
    >
      {(inputProps) => (
        <MaterialInput
          {...inputProps}
          {...props}
          type="tel"
          disableUnderline
          sx={{
            fontSize: "22px",
            padding: "10px 10px",
            background: "#f4f4f8",
            borderRadius: "15px",
            width: "100%",
            border: "1px solid black",
          }}
        />
      )}
    </InputMask>
  );
};

export default InputMaska;

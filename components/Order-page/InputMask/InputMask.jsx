import React from "react";
import InputMask from "react-input-mask";
import MaterialInput from "@mui/material/Input";

const InputMaska = ({ radius, ...props }) => {
  return (
    <InputMask
      mask="(+\9\98) 99 999-99-99"
      placeholder="(+998) •• ••• •• ••"
      {...props}
      style={{ borderRadius: radius ? "15px" : "0"}}
    >
      {(inputProps) => (
        <MaterialInput
          {...inputProps}
          {...props}
          type="tel"
          disableUnderline
          sx={{
            fontSize: "16px",
            padding: "10px 10px",
            background: "white",
            borderRadius: "15px",
            width: "100%",
            border: "1px solid #13316d",
          }}
        />
      )}
    </InputMask>
  );
};

export default InputMaska;

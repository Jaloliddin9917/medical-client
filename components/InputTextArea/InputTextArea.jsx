import cn from "classnames";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const InputTextArea = ({ className, border, borderRadius, ...props }) => {
  const classNames = cn(className);

  return (
    <div className={classNames}>
      <TextareaAutosize
        variant="outlined"
        color="primary"
        style={{
          width: "100%",
          padding: "20px",
          borderRadius: borderRadius ? "15px" : "0",
          border: "1px solid black",
          backgroundColor: "#F4F4F8",
          borderColor: "black",
        }}
        sx={{
          backgroundColor: "#F4F4F8",
        }}
        {...props}
      />
    </div>
  );
};

export default InputTextArea;

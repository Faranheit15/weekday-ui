import React from "react";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";

const Input = ({
  label,
  value,
  onChange,
  type = "text",
  variant = "outlined",
  fullWidth = true,
  helperText,
  error = false,
}) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      variant={variant}
      fullWidth={fullWidth}
      helperText={helperText}
      error={error}
    />
  );
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]),
  fullWidth: PropTypes.bool,
  helperText: PropTypes.string,
  error: PropTypes.bool,
};

export default Input;

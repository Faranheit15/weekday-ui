import MUIButton from "@mui/material/Button";
import PropTypes from "prop-types";

const Button = ({
  name = "Hello",
  onClick,
  color = "primary",
  Icon = null,
}) => {
  return (
    <MUIButton
      variant="contained"
      color={color}
      onClick={onClick}
      startIcon={Icon ? <Icon /> : null}
    >
      {name}
    </MUIButton>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "success",
    "error",
    "info",
    "warning",
  ]),
  Icon: PropTypes.elementType,
};

export default Button;

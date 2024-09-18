import { Button } from "@mui/material";
import PropTypes from "prop-types";

const PrimaryButton = (props) => {
  const { className, btnLabel, type, ...rest } = props;
  return (
    <>
      <Button className={`primary_btn ${className}`} type={type} {...rest}>
        {btnLabel}
      </Button>
    </>
  );
};

PrimaryButton.propTypes = {
  className: PropTypes.string,
  btnLabel: PropTypes.string,
  type: PropTypes.string,
};
export default PrimaryButton;

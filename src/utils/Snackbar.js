import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ReusableSnackbar = ({ message, openSnackbar }) => {
  const handleClose = () => {
    openSnackbar(false);
  };

  return (
    <Snackbar
      open={true}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        Hello
      </Alert>
    </Snackbar>
  );
};

export default ReusableSnackbar;

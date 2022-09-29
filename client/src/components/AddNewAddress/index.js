import React from "react";
import classes from "./AddNewAddress.module.scss";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import '../../styles/buttonStyles.scss'

const AddNewAddress = () => {
  return (
    <div className={classes.addNewAddress}>
      <h3>Add New Address</h3>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Full Name"
            id="filled-size-small"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Phone Number"
            id="filled-size-small"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address"
            id="filled-size-small"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Town/City"
            id="filled-size-small"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="State"
            id="filled-size-small"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Postal Code"
            id="filled-size-small"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Country"
            id="filled-size-small"
            size="small"
            fullWidth
          />
        </Grid>
      </Grid>
      <div className={classes.buttons}>
        <Button variant="contained" className="add-address-btn" size="small">Add Address</Button>
        <Button variant="outlined" size="small">Cancel</Button>
      </div>
    </div>
  );
};

export default AddNewAddress;

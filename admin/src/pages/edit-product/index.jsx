import React from "react";
import classes from "./edit-product.module.scss";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import uploadImage from "assets/images/upload.svg";
const EditProduct = () => {
  return (
    <div className={classes.editProduct}>
      <div className={classes.head}>
        <h3>Edit Product</h3>{" "}
      </div>
      <div className={classes.productCard}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <TextField fullWidth label="Product Name" size="small" />
          </Grid>
          <Grid item xs={6} md={6}>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="In Stock"
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              fullWidth
              label="Description"
              size="small"
              multiline
              maxRows={6}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={6}>
            <div className={classes.fileInputArea}>
            <input type="file" name="" id="" />
              <div className={classes.imageWrapper}>
                <img src={uploadImage} alt="upload" />
              </div>
              <div className={classes.content}>
                <h3>Drop or Select file</h3>
                <p>Drop files here or click browse thorough your machine</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default EditProduct;

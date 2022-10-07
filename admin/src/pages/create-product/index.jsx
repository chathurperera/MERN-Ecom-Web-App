import React from "react";
import classes from "../edit-product/edit-product.module.scss";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import uploadImage from "assets/images/upload.svg";
import closeIcon from "assets/images/close.png";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

const CreateProduct = () => {
  return (
    <div className={classes.editProduct}>
      <div className={classes.head}>
        <h3>Create Product</h3>{" "}
      </div>
      <div className={classes.productCard}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <TextField
              fullWidth
              label="Product Name"
              size="small"
              margin="dense"
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="In Stock"
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField fullWidth label="Description" size="small" multiline />
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
            <TextField fullWidth label="Brand" size="small" />
          </Grid>
          <Grid item xs={6} md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" size="small">
                Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size="small"
                label="Category"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
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
            <div className={classes.filesPreview}>
              <div className={classes.imagePreview}>
                <div className={classes.closeIconWrapper}>
                  <img className={classes.closeIcon} src={closeIcon} alt="" />
                </div>
                <img
                  className={classes.fileImage}
                  src="https://minimal-assets-api.vercel.app/assets/images/products/product_2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className={classes.uploadButtons}>
              <button>Upload Files</button>
            </div>
          </Grid>
          <Grid item xs={6} md={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-amount" size="small">
                Price
              </InputLabel>
              <OutlinedInput
                size="small"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Amount"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={12}>
            <div className={classes.saveButtonWrapper}>
              <button className={classes.saveButton}>Save Changes</button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CreateProduct;

import React from "react";
import { Button, TextField, Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import './form.css'

export default function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} id="form">
        <Typography
          variant="h6"
          gutterBottom
          sx={{ textAlign: "start", paddingLeft: "10px", marginBottom: "25px",}}
        >
          Entre em contato
        </Typography>

        <Grid container column={12}>
          <Grid
            container
            xs={12}
            sm={6}
            md={6}
            sx={{ padding: "0 10px", fontSize: "14px", marginBottom: "25px" }}
          >
            <TextField
              className="textField"
              id="fullName"
              label="Full Name"
              variant="outlined"
              fullWidth
              {...register("fullName")}
            />
          </Grid>
          <Grid
            container
            xs={12}
            sm={6}
            md={6}
            sx={{
              padding: "0 10px",
              fontSize: "14px",
              marginBottom: "25px",
              marginTop: "5px",
            }}
          >
            <TextField
              className="textField"
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              {...register("email")}
            />
          </Grid>
        </Grid>
        <Grid container column={12}>
          <Grid
            container
            xs={12}
            sm={6}
            md={6}
            sx={{
              padding: "0 10px",
              fontSize: "14px",
              marginBottom: "25px",
              marginTop: "5px",
            }}
          >
            <TextField
              className="textField"
              id="phoneNumber"
              label="Phone Number"
              variant="outlined"
              // type='number'
              fullWidth
              {...register("phoneNumber")}
            />
          </Grid>
          <Grid
            container
            xs={12}
            sm={6}
            md={6}
            sx={{
              padding: "0 10px",
              fontSize: "14px",
              marginBottom: "25px",
              marginTop: "5px",
            }}
          >
            <TextField
              className="textField"
              id="subject textField"
              label="Subject"
              variant="outlined"
              fullWidth
              {...register("subject")}
            />
          </Grid>
        </Grid>
        <Grid
          container
          xs={12}
          md={12}
          sx={{
            padding: "0 10px",
            fontSize: "14px",
            marginBottom: "25px",
            marginTop: "5px",
          }}
        >
          <TextField
            fullWidth
            className="textField"
            multiline
            rows={6}
            id="message"
            label="Message"
            variant="outlined"
            {...register("message")}
          />
        </Grid>

        <Button id="msg-btn" variant="outlined" type="submit">
          Send Message
        </Button>
      </form>
    </>
  );
}

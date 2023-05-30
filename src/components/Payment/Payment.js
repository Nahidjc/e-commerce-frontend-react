import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
const Payment = () => {
  const handleSubmit = e => {
    console.log("================submit===============");
    e.preventDefault();
    const data = {
      "name": "Nahid",
       "total_amount": 100,
       "phone": "01910125428",
       "doctor Name": "Ashraful Islam",
       "email": "nahid@gmail.com"
    }

    fetch("http://localhost:5000/user/payment", {
      method: "POST",
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        window.location.replace(data.url);
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained" onClick={handleSubmit}>
          Payment
        </Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
};

export default Payment;

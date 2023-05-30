import * as React from 'react';
import Box from '@mui/material/Box';
import RingLoader from "react-spinners/RingLoader";

export default function Loader() {
  return (
    <Box style={{display: 'flex', justifyContent: 'center',alignItems:'center',height: "80vh", width: "100vw" }}>
     <RingLoader 
     loading={true}
     
     size={80}
     aria-label="Loading Spinner"
     data-testid="loader"
     color="#36d7b7" />
    </Box>
  );
}
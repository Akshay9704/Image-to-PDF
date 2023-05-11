import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Stack from "@mui/material/Stack";
import { jsPDF } from "jspdf";

const PDF = () => {
  const [Image, setImage] = useState("");

const handleClick = (e) => {
  const doc = new jsPDF({
    orientation: "landscape"
  });
  doc.addImage(Image, "JPEG", 15, 40, 260, 180);
  doc.save("image.pdf");
}

    return (
    <div>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          marginLeft: "10px",
          marginTop: "20px"
        }}
      >
        <Stack direction="row" spacing={2}>
          <div>
          <TextField
            fullWidth
            label="Enter URL here"
            id="input"
            onChange={(e) => setImage(e.target.value)}
          />
            <Button variant="contained" onClick={handleClick} sx={{ paddingY: "10px", marginTop: "5px", marginLeft: "10px" }}>Generate PDF</Button>
          </div>
        </Stack>
      </Box>
    </div>
  )
}

export default PDF

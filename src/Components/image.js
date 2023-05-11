import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { jsPDF } from "jspdf";
const image = () => {
    const [txt, setTxt] = useState("");

    const handleClick = (e) => {
    const doc = new jsPDF("p", "pt", "a4");
    const textLines = doc.splitTextToSize(txt, doc.internal.pageSize.width - 60);
    doc.text(textLines, 30, 50 );
    doc.save("text.pdf");
    };
  return (
    <>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          marginTop: "180px",
          marginLeft: "270px",
        }}
      >
        <Stack direction="row" spacing={2}>
          <TextField
            fullWidth
            label="Enter TEXT here"
            id="input"
            onChange={(e) => setTxt(e.target.value)}
            multiline
          />
          <div>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              sx={{ paddingY: "0px", marginTop: "5px" }}
              onClick={handleClick}
            >
              Generate PDF
            </Button>
          </div>
        </Stack>
      </Box>
    </>
  )
}

export default image

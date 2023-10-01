import React from "react";
import { Box, Avatar, Stack, Divider } from "@mui/material";
import Typography from "@mui/joy/Typography";

const GenericComponent = ({ title, description, avatarSrc, renderDivider }) => {
  return (
    <>
      <Box
        sx={{
          p: 3,
          border: 1,
          borderRadius: 2,
          borderColor: "grey.500",
          width: "600px",
          margin: "auto",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Avatar
            variant="rounded"
            src={avatarSrc}
            sx={{ height: "30px", width: "30px" }}
          />
          <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
            {title}
          </Typography>
        </Stack>
        <Typography sx={{ marginLeft: "45px" }}>{description}</Typography>
      </Box>
      {renderDivider && (
        <Divider
          orientation="vertical"
          variant="middle"
          sx={{
            height: "70px",
            color: "grey.500",
            width: "0px",
            margin: "auto",
          }}
        />
      )}
    </>
  );
};

export default GenericComponent;

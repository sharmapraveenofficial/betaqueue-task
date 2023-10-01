import React from "react";
import { Box, Avatar, Stack } from "@mui/material";
import { Input, Typography } from "@mui/joy";
import IntroLogo from "../../assets/images/intro-logo.png";
import AddQuestionDivider from "../questions/AddQuestionDivider";
import useIntroductionData from "../../hooks/useIntroductionData";

const IntroductionComponent = () => {
  const { data, loading, updateDescription } = useIntroductionData();
  const [isDescriptionFocused, setIsDescriptionFocused] = React.useState(false);

  const handleDescriptionClick = () => {
    setIsDescriptionFocused(true);
  };

  const handleDescriptionBlur = () => {
    setIsDescriptionFocused(false);
  };

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
            src={IntroLogo}
            sx={{ height: "30px", width: "30px" }}
          />
          <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
            {loading ? "Loading..." : data.title}
          </Typography>
        </Stack>
        {!isDescriptionFocused ? (
          <Typography
            sx={{ marginLeft: "45px", cursor: "pointer" }}
            onClick={handleDescriptionClick}
          >
            {loading ? "Loading..." : data.description}
          </Typography>
        ) : (
          <Input
            autoFocus
            value={data.description}
            sx={{ marginLeft: "45px", width: "500px" }}
            onChange={(event) => updateDescription(event.target.value)}
            onBlur={handleDescriptionBlur}
          />
        )}
      </Box>
      <AddQuestionDivider />
    </>
  );
};

export default IntroductionComponent;

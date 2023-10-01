import React, { useEffect, useState } from "react";
import { Divider, Box, Stack } from "@mui/material";
import Typography from "@mui/joy/Typography";
import { getParticipants } from "../../services/Participants";
import ParticipantList from "./ParticipantList";

export default function Participants() {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const participantResponse = await getParticipants();
        setParticipants(participantResponse);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
  }, []);

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
          marginTop: "20px",
        }}
      >
        <Stack spacing={2}>
          <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
            Participants
          </Typography>
          <ParticipantList participants={participants} />
        </Stack>
      </Box>
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
    </>
  );
}

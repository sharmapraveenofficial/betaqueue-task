import React from "react";
import Avatar from "../../utils/Avatar";
import Stack from "@mui/material/Stack";

export default function ParticipantList({ participants }) {
  return (
    <Stack direction="row" spacing={2}>
      {participants.map((participant) => (
        <Avatar
          key={participant.id}
          id={participant.id}
          name={participant.name}
        />
      ))}
    </Stack>
  );
}

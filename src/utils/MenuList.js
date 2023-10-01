import React, { useState } from "react";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListDivider from "@mui/joy/ListDivider";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteForever from "@mui/icons-material/DeleteForever";
import MenuButton from "@mui/joy/MenuButton";
import Dropdown from "@mui/joy/Dropdown";
import Edit from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { removeQuestion } from "../services/Questions";

export default function PositionedMenu(props) {
  const dispatch = useDispatch();

  const handleDeleteQuestion = () => {
    removeQuestion(props.questionId);

    dispatch({
      type: "question/removeQuestion",
      payload: props.questionId,
    });
  };

  return (
    <>
      <Dropdown>
        <MenuButton
          slots={{ root: IconButton }}
          slotProps={{ root: { variant: "outlined", color: "neutral" } }}
          sx={{ border: "none" }}
        >
          <MoreHorizIcon />
        </MenuButton>
        <Menu placement="bottom-end">
          <MenuItem onClick={() => props.openEditModel(true)}>
            <ListItemDecorator>
              <Edit />
            </ListItemDecorator>
            Edit Question
          </MenuItem>
          <ListDivider />
          <MenuItem
            variant="soft"
            color="danger"
            onClick={handleDeleteQuestion}
          >
            <ListItemDecorator sx={{ color: "inherit" }}>
              <DeleteForever />
            </ListItemDecorator>
            Delete
          </MenuItem>
        </Menu>
      </Dropdown>
    </>
  );
}

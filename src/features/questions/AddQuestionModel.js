import { useState } from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import Stack from "@mui/joy/Stack";
import { useDispatch } from "react-redux";
import { createQuestion } from "./questionSlice";

export default function Model(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        open={props.open}
        onClose={() => props.setOpenAddQuestionModel(false)}
      >
        <ModalDialog>
          <DialogTitle>{props.title}</DialogTitle>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              dispatch(createQuestion(title, description, props.index));
              props.setOpenAddQuestionModel(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Question</FormLabel>
                <Input
                  autoFocus
                  required
                  onChange={(event) => setTitle(event.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input
                  required
                  onChange={(event) => setDescription(event.target.value)}
                />
              </FormControl>
              <Button type="submit">{props.buttonName}</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
}

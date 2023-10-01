import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import Stack from "@mui/joy/Stack";

export default function Model(props) {
  return (
    <React.Fragment>
      <Modal
        open={props.open}
        onClose={() => props.setOpenAddQuestionModel(false)}
      >
        <ModalDialog>
          <DialogTitle>{props.title}</DialogTitle>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              props.setOpenAddQuestionModel(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Question</FormLabel>
                <Input autoFocus required />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input required />
              </FormControl>
              <Button type="submit">{props.buttonName}</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}

import React, { useState } from "react";
import { Divider } from "@mui/material";
import CustomButton from "../../utils/CustomButton";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AddQuestionModel from "./AddQuestionModel";

const QuestionsComponent = (props) => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [openAddQuestionModel, setOpenAddQuestionModel] = useState(false);

  const handleMouseEnter = () => {
    setIsButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setIsButtonVisible(false);
  };

  const handleOpenModel = () => {
    setOpenAddQuestionModel(true);
  };

  return (
    <>
      <Divider
        orientation="vertical"
        variant="middle"
        sx={{
          height: "70px",
          color: "grey.500",
          width: "0px",
          margin: "auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isButtonVisible ? (
          <CustomButton onClick={handleOpenModel}>
            <AddOutlinedIcon />
          </CustomButton>
        ) : null}
      </Divider>
      {openAddQuestionModel ? (
        <AddQuestionModel
          open={openAddQuestionModel}
          setOpenAddQuestionModel={setOpenAddQuestionModel}
          title={"Create new question!"}
          buttonName={"Add Question"}
          index={props.index}
        />
      ) : null}
    </>
  );
};

export default QuestionsComponent;

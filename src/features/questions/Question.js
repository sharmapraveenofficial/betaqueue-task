// QuestionsComponent.jsx
import React, { useState, useEffect } from "react";
import { Box, Avatar, Stack, Grid } from "@mui/material";
import Typography from "@mui/joy/Typography";
import QuestionLogo from "../../assets/images/question-logo.png";
import MenuList from "../../utils/MenuList";
import AddQuestionDivider from "./AddQuestionDivider";
import Input from "@mui/joy/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  updateQuestion,
  getQuestions,
  updateQuestionOrder,
} from "../../services/Questions";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const QuestionsComponent = () => {
  const dispatch = useDispatch();
  const questionsStore = useSelector((store) => store.question);

  const [questions, setQuestions] = useState([]);
  // const [openUpdateTitleModel, setOpenUpdateTitleModel] = useState(false);
  const [descriptionFocusStates, setDescriptionFocusStates] = useState(
    Array(questionsStore.length).fill(false)
  );
  const [titleFocusStates, setTitleFocusStates] = useState(
    Array(questionsStore.length).fill(false)
  );

  useEffect(() => {
    setQuestions(questionsStore);
  }, [questionsStore]);

  useEffect(() => {
    async function fetchData() {
      try {
        const questionsResponse = await getQuestions();
        setQuestions(questionsResponse);
        dispatch({
          type: "question/updateQuestionOrder",
          payload: questionsResponse,
        });
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
  }, [dispatch]);

  const handleFocus = (index, isTitle) => {
    if (isTitle) {
      const newFocusStates = [...titleFocusStates];
      newFocusStates[index] = true;
      setTitleFocusStates(newFocusStates);
    } else {
      const newFocusStates = [...descriptionFocusStates];
      newFocusStates[index] = true;
      setDescriptionFocusStates(newFocusStates);
    }
  };

  const handleBlur = (index, isTitle) => {
    if (isTitle) {
      const newFocusStates = [...titleFocusStates];
      newFocusStates[index] = false;
      setTitleFocusStates(newFocusStates);
    } else {
      const newFocusStates = [...descriptionFocusStates];
      newFocusStates[index] = false;
      setDescriptionFocusStates(newFocusStates);
    }
  };

  const handleUpdateTitle = (index, value) => {
    console.log(index, value);
    console.log(questionsStore);
    dispatch({
      type: "question/updateQuestion",
      payload: {
        id: questionsStore[index].id,
        title: value,
        description: questionsStore[index].description,
      },
    });

    try {
      updateQuestion(
        questionsStore[index].id,
        value,
        questionsStore[index].description
      );
    } catch (error) {
      console.error("Error updating title in Supabase:", error);
    }
  };

  const handleUpdateDescription = (index, value) => {
    dispatch({
      type: "question/updateQuestion",
      payload: {
        id: questionsStore[index].id,
        title: questionsStore[index].title,
        description: value,
      },
    });

    try {
      updateQuestion(
        questionsStore[index].id,
        questionsStore[index].title,
        value
      );
    } catch (error) {
      console.error("Error updating description in Supabase:", error);
    }
  };

  function handleOnDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const reorderedQuestions = Array.from(questions);

    const [movedQuestion] = reorderedQuestions.splice(result.source.index, 1);
    reorderedQuestions.splice(result.destination.index, 0, movedQuestion);
    setQuestions(reorderedQuestions);
    dispatch({ type: "question/updateQuestion", payload: reorderedQuestions });

    try {
      updateQuestionOrder(reorderedQuestions);
    } catch (error) {
      console.error("Error updating question order in Supabase:", error);
    }
  }

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <ul
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                marginBottom: "0px",
                marginLeft: "-40px",
                marginTop: "0px",
              }}
            >
              {questions.map(({ id, title, description }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <>
                        <Box
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          sx={{
                            p: 3,
                            border: 1,
                            borderRadius: 2,
                            borderColor: "grey.500",
                            width: "600px",
                            margin: "auto",
                          }}
                        >
                          <Grid container spacing={3}>
                            <Grid item xs={0.8}>
                              <Avatar
                                variant="rounded"
                                src={QuestionLogo}
                                sx={{ height: "30px", width: "30px" }}
                              />
                            </Grid>
                            <Grid item xs={10}>
                              <Stack direction="column" spacing={1} key={index}>
                                {!titleFocusStates[index] ? (
                                  <>
                                    <Typography
                                      sx={{ fontSize: "18px", fontWeight: 600 }}
                                      onClick={() => handleFocus(index, true)}
                                    >
                                      {title}
                                    </Typography>
                                  </>
                                ) : (
                                  <Input
                                    autoFocus
                                    value={title}
                                    sx={{ marginLeft: "45px", width: "500px" }}
                                    onChange={(event) =>
                                      handleUpdateTitle(
                                        index,
                                        event.target.value
                                      )
                                    }
                                    onBlur={() => handleBlur(index, true)}
                                  />
                                )}

                                {!descriptionFocusStates[index] ? (
                                  <>
                                    <Typography
                                      sx={{ marginLeft: "45px" }}
                                      onClick={() => handleFocus(index, false)}
                                    >
                                      {description}
                                    </Typography>
                                  </>
                                ) : (
                                  <Input
                                    autoFocus
                                    value={description}
                                    sx={{ marginLeft: "45px", width: "500px" }}
                                    onChange={(event) =>
                                      handleUpdateDescription(
                                        index,
                                        event.target.value
                                      )
                                    }
                                    onBlur={() => handleBlur(index, false)}
                                  />
                                )}
                              </Stack>
                            </Grid>
                            <Grid item xs={1.2}>
                              <MenuList
                                questionId={id}
                                // openEditModel={setOpenUpdateTitleModel}
                              />
                            </Grid>
                          </Grid>
                        </Box>
                        <AddQuestionDivider index={index} />
                      </>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default QuestionsComponent;

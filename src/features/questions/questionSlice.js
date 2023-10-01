import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { updateQuestionOrder } from "../../services/Questions";

const initialState = [];

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    createQuestion: {
      reducer(state, action) {
        return action.payload;
      },
    },
    updateQuestion(state, action) {
      const { id, title, description } = action.payload;
      const existingQuestion = state.find((item) => item.id === id);
      if (existingQuestion) {
        existingQuestion.title = title;
        existingQuestion.description = description;
      }
    },
    updateQuestionOrder: (state, action) => {
      return action.payload;
    },
    removeQuestion(state, action) {
      const idToRemove = action.payload;
      return state.filter((question) => question.id !== idToRemove);
    },
  },
});

export const { updateQuestion, removeQuestion } = questionSlice.actions;

export function createQuestion(title, description, index) {
  return async function (dispatch, getState) {
    const currentState = getState();

    let updatedQuestions = [...currentState.question];
    let order = index ? index : 0;

    let newQuestion = {
      id: uuidv4(),
      title,
      description,
      order,
      createdAt: new Date().toISOString(),
    };

    if (index === undefined) {
      updatedQuestions = [newQuestion, ...updatedQuestions];
    } else {
      updatedQuestions.splice(index + 1, 0, newQuestion);
    }

    try {
      console.log(updatedQuestions);
      updateQuestionOrder(updatedQuestions);
    } catch (error) {
      console.error("Error updating question order in Supabase:", error);
    }

    dispatch({
      type: "question/createQuestion",
      payload: updatedQuestions,
    });
  };
}

export default questionSlice.reducer;

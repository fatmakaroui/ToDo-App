import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../shared/Models/Tesk";
import { v4 as uuidv4 } from "uuid";

const initialState = [] as Task[];

const taskSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action: PayloadAction<Task>) => {
        state.push(action.payload);
      },
      prepare: (description: string) => ({
        payload: {
        id: uuidv4(),
          description,
          status: false,
        } as Task,
      }),
    },
    removeTask(state, action: PayloadAction<string>) {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    },
    setTaskStatus(
      state,
      action: PayloadAction<{ status: boolean; id: string }>
    ) {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].status = action.payload.status;
    },
  },
});
const { reducer, actions } = taskSlice;
export const { addTask, removeTask, setTaskStatus } = actions;
export default reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../shared/Models/Task";
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
      prepare: (name:string,description: string) => ({
        payload: {
        id: uuidv4(),
          description,
          name,
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
    updateTask(
      state,
      action: PayloadAction<{name:string, description: string; id: string }>
    ) {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].description = action.payload.description;
      state[index].name = action.payload.name;
    },
  },
});
const { reducer, actions } = taskSlice;
export const { addTask, removeTask, setTaskStatus, updateTask } = actions;
export default reducer;
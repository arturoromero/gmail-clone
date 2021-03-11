import { createSlice } from '@reduxjs/toolkit';

interface IMenuStateSlice {
  isCollapsed: boolean;

}
const menuStateSlice = createSlice({
  name: 'MENU_STATE',
  initialState: {        
  } as IMenuStateSlice,
  
  reducers: {
      setMenuState(state, action: any) {
          state.isCollapsed = action.payload;
      },   
  },
});
export const {
  setMenuState,
} = menuStateSlice.actions;

export default menuStateSlice.reducer;

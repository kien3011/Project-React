import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { userInfo } from './types';


const initialState: userInfo = {

  userName: "Kien3011",
  fullName: "Ngô Viết Kiên",
  phoneNumber: "0912880210",
  email: "vietkienn3011@gmail.com",
  password: "kien3011",
  role: 0,
  avatar: "https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-9/84610836_2608773666066359_4012123989953478656_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=HJ83F5pcFosAX8F71Qi&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT_FXiDNzHeWCX3xpdpeeb-YFnWO4QZ2qkcGhEDYaLZoAg&oe=62C32BE3"
}

  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      login: (state, actions) => {
        state.email = actions.payload.email
      },
      logout: (state) => {
        state.email = ""
      }
    },
  });
  
  // To able to use reducers we need to export them.
  export const { login, logout } = userSlice.actions;
  
  export default userSlice.reducer;
import { configureStore } from '@reduxjs/toolkit';
import mailListSlice from '../features/mail/mailListSlice';
import menuStateSlice from '../features/mail/menuStateSlice';

export default configureStore({
  reducer: {
    mailList: mailListSlice,
    menuState: menuStateSlice,
  },
}
);


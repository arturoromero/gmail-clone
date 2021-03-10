import { configureStore } from '@reduxjs/toolkit';
import mailListSlice from '../features/mail/mailListSlice';

export default configureStore({
  reducer: {
    mailList: mailListSlice,
  },
});

import { useSelector, useDispatch } from 'react-redux';
// import i18n from './translation/i18n.ts';
import { useTranslation } from "react-i18next";
import { is_correct_selector, set_in_local_storage, in_local_storage_selector } from './redux/main_slice';
import { Password_modal } from './componants/Password_modal';
import { Change_language } from './componants/Change_language.tsx'
import './App.css'

function App() {
  const dispatch = useDispatch();
  const is_correct = useSelector(is_correct_selector);
  const in_local_storage = useSelector(in_local_storage_selector);
  const { t, i18n } = useTranslation();

  if(localStorage.getItem('tim_and_carmen_password') === 'is_in_local_storage') {
    dispatch(set_in_local_storage(true));
  }

  if(!is_correct && !in_local_storage) {
    return (
      <>
        <Password_modal />
      </>
    )
  }

  return (
    // I need to set up routes here. There might be an error when loading the password modal when not in a route but let's see. 
    <>
      <Change_language />
      <p className="read-the-docs">This represents the homepage, which should only be visible once the password has been submitted!</p>
    </>
  )
}

export default App

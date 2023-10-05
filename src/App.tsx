import { useSelector, useDispatch } from 'react-redux'
import { is_correct_selector, set_in_local_storage, in_local_storage_selector } from './redux/main_slice';
import { Password_modal } from './componants/Password_modal';
import './App.css'

function App() {
  const dispatch = useDispatch();
  const is_correct = useSelector(is_correct_selector);
  const in_local_storage = useSelector(in_local_storage_selector);
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
    <>
      <p className="read-the-docs">This represents the homepage, which should only be visible once the password has been submitted!</p>
    </>
  )
}

export default App

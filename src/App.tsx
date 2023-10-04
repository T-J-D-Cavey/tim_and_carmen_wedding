import { useSelector } from 'react-redux'
import { is_correct_selector } from './redux/main_slice';
import { Password_modal } from './componants/Password_modal';
import './App.css'

function App() {
  const is_correct = useSelector(is_correct_selector);

  if(!is_correct) {
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

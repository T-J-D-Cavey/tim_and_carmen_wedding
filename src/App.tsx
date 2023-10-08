import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { is_correct_selector, set_in_local_storage, in_local_storage_selector } from './redux/main_slice';
import { Password_modal } from './componants/widgets/Password_modal.tsx';
import { Navbar } from './componants/widgets/Navbar.tsx';
import { Mobile_navbar } from './componants/widgets/Mobile_navbar.tsx';
import { Homepage } from './componants/pages/Homepage.tsx';
import { About_us } from './componants/pages/About_us.tsx';
import { Malaysia_page } from './componants/pages/Malaysia_page.tsx';
import { UK_page } from './componants/pages/UK_page.tsx';
import { Footer } from './componants/widgets/Footer.tsx';
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
      <Navbar />
      <Mobile_navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<About_us />} />
        <Route path="/malaysia-celebration" element={<Malaysia_page />} />
        <Route path="uk-celebration" element={<UK_page />} />
        <Route  path="*" element={<Navigate to="/" />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App

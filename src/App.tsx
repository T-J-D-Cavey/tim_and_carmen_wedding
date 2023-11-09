import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { is_correct_selector, set_in_local_storage, in_local_storage_selector } from './redux/main_slice';
import { Password_modal } from './componants/widgets/Password_modal.tsx';
import { Homepage } from './pages/Homepage.tsx';
import { UKPage } from './pages/UKpage.tsx';
import { KLPage } from './pages/KLPage.tsx';
import { Footer } from './componants/widgets/Footer.tsx';
import './App.css';

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
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/uk-celebration-fact-sheet" element={<UKPage />} />
        <Route path="/kl-wedding-fact-sheet" element={<KLPage />} />
        <Route  path="*" element={<Navigate to="/" />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import LoaderWrapper from './components/HOCs/LoaderWrapper';
import ProtectedRoute from './components/HOCs/ProtectedRoutr';
import HomePage from './components/HomePage';
import MainPage from './components/MainPage';
// import NavBar from './components/NavBar';
import NoPage from './components/NoPage';
import SignUpPage from './components/SignUp/SignUpPage';
import './index.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'CHECK_USER' });
    // dispatch(fetchPosts());
  }, []);
  const user = useSelector((state) => state.user);
  return (
    <LoaderWrapper>
      {/* <NavBar /> */}
      <Routes>
        <Route element={<ProtectedRoute redirect="/" isAllowed={!user.id} />}>
          <Route path="/signup" element={<SignUpPage type />} />
          <Route path="/login" element={<SignUpPage type={false} />} />
        </Route>
        <Route element={<ProtectedRoute redirect="/login" isAllowed={!!user.id} />}>
          <Route path="/*" element={<MainPage />} />
          {/* <Route path="/home" element={<HomePage />} /> */}
        </Route>
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </LoaderWrapper>
  );
}

export default App;

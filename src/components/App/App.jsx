import { useEffect } from 'react';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'Redux/selectors';
import { fetchContacts } from 'Redux/operations';
import { Routes, Route } from 'react-router-dom';
import  SharedLayout from 'components/SharedLayout/SharedLayout'
import HomePage from 'pages/HomePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="contacts" element={<MoviesPage />}></Route>
        <Route path="movies/:movieId" element={<MoviesDetailsPage />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
};

export { App };

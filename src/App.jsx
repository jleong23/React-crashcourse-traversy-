import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import React from 'react'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPages from './pages/NotFoundPages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <MainLayout /> }>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/jobs" element={ <JobsPage /> } />
      <Route path="*" element={ <NotFoundPages /> } />
    </Route>
  )
    
);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;
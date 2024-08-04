// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider ,Route , Routes , Router} from 'react-router-dom';
import HomePage from './Home';
import Login from './Login';
import Register from './Register';
import Layout from './Layout';
import ChatRoom  from './Chat'; 

// An <Outlet> should be used in parent route elements to render 
// their child route elements. This allows nested UI to show up when 
// child routes are rendered. If the parent route matched exactly, it 
// will render 
// a child index route or nothing if there is no index route.

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path='chat' element={<ChatRoom/>}  />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

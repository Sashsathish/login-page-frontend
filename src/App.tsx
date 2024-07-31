import {
  Navigate,
  RouterProvider,
  createBrowserRouter,

} from 'react-router-dom';
import SignUp from './Layouts/auth/routes/signup/SignUp';
import Login from './Layouts/auth/routes/login/Login';

import Loader from './ui/Loader';
import { AuthLayout } from './Layouts/auth/AuthLayout';
import { ThemeProvider } from './wrapppers/themeprovider';


function App() {
 
     
    
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: 
            <Navigate to="/signup" />
     
        },
        {
          path: '/signup',
          element:  <SignUp />,
        },
        {
          path: '/login',
          element: <Login />,
        },
       
       
        
      ],
    },

   
  ]);

  return (
    <ThemeProvider defaultTheme="dark">
      <RouterProvider router={router}></RouterProvider>
      <Loader />
      
    </ThemeProvider>
  );
}

export default App;

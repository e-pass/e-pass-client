import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Test from './components/Test.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1><Outlet/></h1>,
    children: [
      {
        path: '/register',
        element: <h1>Register </h1>,
      },
      {
        path: '/login',
        element: <h1>Login</h1>,
      },
      {
        path: '/test',
        element: <Test/>,
      },
      {
        path: '*',
        element: <h1>Not found page</h1>,
      },
    ],
  },
  {
    element: <h1>Secondary layout</h1>,
    children: [
      {
        path: '/path',
        element: <h1>Path</h1>,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App

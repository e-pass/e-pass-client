import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Main layout</h1>,
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

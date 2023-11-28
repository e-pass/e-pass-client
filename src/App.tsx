import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home page</h1>,
  },
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
])

function App() {
  return <RouterProvider router={router} />
}

export default App

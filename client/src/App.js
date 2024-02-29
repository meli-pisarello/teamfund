import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import SalesIndex from './pages/sales';
import ErrorPage from './pages/error';

const router = createBrowserRouter([
  {
    path: '/',
    element: (<h1>This is the Home page</h1>),
    errorElement: <ErrorPage />,
  },
  {
    path: '/sales',
    element: <SalesIndex />,
    errorElement: <ErrorPage />,
    exact: true
  }
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;

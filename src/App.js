import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {CssBaseline , ThemeProvider} from '@mui/material';
import { theme } from './theme/theme';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
const router = createBrowserRouter([
  {
    element:<Layout></Layout>,
    path:'/',
    children:[
      {
        element:<Home></Home>,
        path:'/',
      },
    ]
  },
]);

function App() {
  return (
      <ThemeProvider theme={theme}>
   <RouterProvider router={router}>
     <CssBaseline></CssBaseline>
   </RouterProvider>
   </ThemeProvider>
  );
}

export default App;

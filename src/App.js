import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './Home';
import Cursos from './Cursos';
import Nosotros from './Nosotros';
import Galeria from './Galeria';
import { useState } from 'react';

function Cosa() {
  const [courseType, setselectedCourseType] = useState("tradicionales");

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Homepage />
    },
    {
      path: '/cursos',
      element: <Cursos courseType={courseType} setselectedCourseType={setselectedCourseType} />
    },
    {
      path: '/nosotros',
      element: <Nosotros />
    },
    {
      path: '/galeria',
      element: <Galeria />
    }

  ]);

  return (<RouterProvider router={router} />)

}

export default Cosa;
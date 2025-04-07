import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './Home';
import Cursos from './Cursos';
import Bio from './Bio';
import Galeria from './Galeria';
import Servicios from './Servicios';
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
      path: '/bio',
      element: <Bio />
    },
    {
      path: '/galeria',
      element: <Galeria />
    },
    {
      path: '/servicios',
      element: <Servicios />
    }

  ]);

  return (<RouterProvider router={router} />)

}

export default Cosa;
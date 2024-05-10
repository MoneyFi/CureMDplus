# Bienvenida al Proyecto CureMd+ - Equipo Frontend

¡Bienvenidos al equipo frontend del proyecto CureMd+!

## Tecnologías Utilizadas

En este proyecto, utilizamos las siguientes tecnologías:

- **React**
- **Redux-toolkit**
- **TailwindCss**
- **React-icons**
- **React-router-dom**

## Estructura de Carpetas

### `pages`

La carpeta `pages` contiene los distintos índices o páginas de la aplicación. Por ejemplo, aquí estaría localizada la landing page.

### `router`

En la carpeta `router` encontramos un archivo de un `BrowserRouter` customizado. Utilizamos layouts para la optimización del código. La idea es crear Layouts siempre que sea conveniente, los cuales se llaman como el elemento principal, y el children pasa a ser el contenido de la pagina.

```javascript
export const router = createBrowserRouter([
    {
        path:'/',
        element: <LandingLayout/>,
        children:[{
            element: <App/>,
            path: '/'
        }]
    }
]);
```
El `Layout` esta dispuesto de la siguiente forma:
````javascript
import React from 'react'
import { Outlet } from 'react-router-dom'

const LandingLayout = () => {
  return (
    <div>
        <header>navbar</header>
        <Outlet/>
        <footer>Footer</footer>
    </div>
  )
}

export default LandingLayout
````
### `Components`

La carpeta `Components` aloja los componentes globales como la Navbar, Footer, o cualquier otro componente requerido para la interfaz de usuario.

### `app`

En la carpeta `app` se encuentra el store de Redux, donde podemos agregar reducers a Redux Toolkit para manejar el estado global de la aplicación.

**Reducer**  ubicacion: src/app/store.js

````javascript
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../features/themeSlice/themeSlice'


export const store = configureStore({
  reducer: {
   theme: themeReducer
  },
});
````

### `features`

En la carpeta `features`, encontraremos los reducers que creamos para el manejo de estado de la aplicación. Por ejemplo, `themeSlice` contiene reducers relacionados con el tema de la aplicación.

**themeSlice** ubicacion: src/features/themeSlice/themeSlice.js

````javascript
import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: true,
  reducers: {
    changeTheme: (state, action) => action.payload,
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;

````



Explicamos que la carpeta se llama `themeSlice` para mantener todo ordenado y legible.



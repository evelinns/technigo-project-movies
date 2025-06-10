// import { BrowserRouter, Link, Routes } from "react-router-dom";
import { BrowserRouter, Link, Routes } from "react-router-dom";
import { routes } from './routes/routes'

export const App = () => {

  return <>
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <main>
        <Routes>
          {routes()}
        </Routes>
      </main>
    </BrowserRouter>
  </>
}

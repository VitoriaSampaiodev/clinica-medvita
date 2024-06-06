import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavMenu } from './components/NavMenu/index.tsx'
import { Home } from './pages/Home/index.tsx'
import GlobalUserContext from './contexts/UserContext.tsx'
import LoginForm from './pages/Login/index.tsx'
import { Consultas } from './pages/Consultas/index.tsx'
import { Agendar } from './components/Agendar/index.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalUserContext>
    <BrowserRouter>
      <NavMenu />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route
          path='/login'
          element={<LoginForm />}
        />
        <Route path='/consultas' element={<Consultas />} />
        <Route path='/consultas/agendar' element={<Agendar />} />
      </Routes>
    </BrowserRouter>
  </GlobalUserContext>
)

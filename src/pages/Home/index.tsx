import { useContext, useEffect } from 'react';
import './style.css';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const context = useContext(UserContext);
  
  return (
    <>
      {console.log(context)}
      {
        context?.user != null &&  
        <header className="header">
          <h1 className="title">Bem-vindo, {context?.user.name}</h1>
          <h2 className="subtitle">Clínica MedVital</h2>
        </header>
      } 

      {
        context?.user == null &&
        <header className="header">
          <h1>Faça login para acessar suas consultas</h1>
          <Link className='btn-login-header' to='/login'>Login</Link>
        </header>
      }
      <section className="section">
        <p className="paragraph">
          Na Clínica MedVital, nossa missão é proporcionar cuidados médicos de alta qualidade para toda a sua família.
        </p>
        <p className="paragraph">
          Com uma equipe dedicada de profissionais de saúde e instalações modernas, estamos comprometidos em ajudar você a alcançar e manter um estilo de vida saudável.
        </p>
      </section>
    </>
  )
}

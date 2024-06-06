import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import User from "../../types/User";
import './style.css';
import { Link } from "react-router-dom";

export const Consultas = () => {
    const context = useContext(UserContext);
    let user : User | null;

    if(context && context.user) {
        user = context.user;
    } else {
        user = null;
    }

    const handleCancelar = (id : number) : void => {
        context?.handleCancelarConsulta(id);
    } 

    function formatarData(data : string) : string {
        // Divida a string da data pelos hífens para obter ano, mês e dia
        const partesData = data.split('-');
      
        // Extraia o ano, mês e dia das partes da data
        const ano = partesData[0];
        const mes = partesData[1];
        const dia = partesData[2];
      
        // Formate a data no formato desejado (DD/MM/YYYY)
        const dataFormatada = `${dia}/${mes}/${ano}`;
      
        // Retorne a data formatada
        return dataFormatada;
      }

    return (

        <div className="consultas-container">
            <h2>Consultas</h2>
            {user && user.consultas && user.consultas.map(consulta => (
                <div className="consulta" key={consulta.id}>
                    <h3>{formatarData(consulta.date)}</h3>
                    <p>{consulta.status}</p>
                    <button className="cancelar" onClick={() => handleCancelar(consulta.id)}>Cancelar</button>
                    <button className="reagendar">Reagendar</button>
                </div>
            ))}

            {
                user && user?.consultas?.length == 0 && 
                <>
                    <p>Vocẽ não possui nenhuma consulta agendada. Gostaria de agendar?</p>
                    <button><Link to="/consultas/agendar">Agendar</Link></button>
                </>
            }
        </div>
    );
}
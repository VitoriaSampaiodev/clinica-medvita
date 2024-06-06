import { useState } from "react";
import './style.css'

export const Agendar = () => {

    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e)
    }

    return (
        <div className="form-container">
          <h2>Agendar Consulta</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Data:</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Status:</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
              >
                <option value="">Selecione um status</option>
                <option value="AGENDADA">Agendada</option>
                <option value="CANCELADA">Cancelada</option>
                <option value="CONCLUÍDA">Concluída</option>
                {/* Adicione outros status aqui, se necessário */}
              </select>
            </div>
            <button type="submit">Agendar Consulta</button>
          </form>
        </div>
      );

}
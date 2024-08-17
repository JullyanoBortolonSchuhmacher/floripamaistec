import './history.css'
import { Status } from '../../components/status'

export function HistoryPage() {
    return (
        <div className="container--history">  
        <h1>Meu histórico</h1>

        <table>
          <thead>
            <tr> 
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Conserto de débitos técnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 30 Minutos</td>
              <td>Concluido</td>
              <td>
                <Status>Concluido</Status>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
    )
}

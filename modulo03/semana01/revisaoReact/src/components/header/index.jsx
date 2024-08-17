import { Moon, Sun, Timer, ScrollText } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import './header.css'

export function Header() {
  return (
    <header className='container--header'>
      <img src="/logotipo.png" alt="Logotipo do LAB Timer365" />  
      <div>
        <nav>
          <NavLink to="/" end>
            <Timer size={24} />
          </NavLink>
          <NavLink to="/historico" end>
            <ScrollText size={24} />
          </NavLink>
        </nav>
        <select>
          <option value="dark">
            <Moon />
          </option>
          <option value="light">
            <Sun />
          </option>
        </select>
      </div>
    </header>
    )
}
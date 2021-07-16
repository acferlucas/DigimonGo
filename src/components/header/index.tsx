import './style.scss'
import logoIMG from '../../assets/logo.svg'
import {FiToggleLeft} from 'react-icons/fi'

export function Header(){
  return (
    <div id="header">
      <div className="logo">
        <img src={logoIMG} alt="Logo" />
        <a href="/">DigimonGO</a>
      </div>
      <nav>
        <a href="#">Github</a>
        <a href="#">Linkedin</a>
      </nav>
    </div>
  )
}
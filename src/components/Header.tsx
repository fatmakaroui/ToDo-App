//icons
import Logo from '../assets/logo.svg';
//styles
import '../styles/header.scss'

const Header = () => {

return(
    <div>
    <div className='header'>
         <img src={Logo} alt="Steps" className='logo'/>
         <p className='title'>Test ToDo Steps</p>
    </div>
    <hr/>
    </div>
)

}

export default Header
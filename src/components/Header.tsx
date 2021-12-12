//icons
import Logo from '../assets/logo.svg';
//styles
import '../styles/header.scss'

const Header = () => {

return(
    <div className='header'>
         <img src={Logo} alt="Steps" className='logo'/>
         <h4>header</h4>
    </div>
)

}

export default Header
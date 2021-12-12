//styles
import '../styles/header.scss';
//Redux
import { AppDispatch} from '../redux/store';
import { useDispatch } from 'react-redux';
import { logoutSuccess } from '../redux/slices/loginSlices';
//components
import  Button  from './button';

const Logout = () => {
    const dispatch = useDispatch<AppDispatch>();
     const logout = () => {
         dispatch(logoutSuccess())
     }
return(
 
    <div className='logout'>
         <Button name='Déconnexion' onClick={()=>logout()} color={'#060000'} radius={'10px'}/>
         
    </div>
  
)

}

export default Logout
import {Formik,Form,} from 'formik';
//styles
import '../styles/Login.scss';
//icons
import Logo from '../assets/logo.svg';
//models
import { User } from "../shared/Models/User";
//components
import { Input,Button } from '../components';
//Redux
import { AppDispatch,RootState } from '../redux/store';
import { useSelector,useDispatch } from 'react-redux';
import { loginFail,loginSuccess } from '../redux/slices/loginSlices';

const Login = () => {
    const initialValues: User = { email:'',password:''};
    const error = useSelector((state: RootState) => state.login.error);
    const dispatch = useDispatch<AppDispatch>();
    const login = (values:User)=>{
        if(values.email !=='test@test.com' || values.password !=='test'){
          dispatch(loginFail('Email ou mot passe invalide'))
        }else{
          dispatch(loginSuccess(values.email))
        }
    }
    return (
        <div className='container_login'>
            <div className='login_form'>
                <img src={Logo} alt="Steps" className='logo'/>
                <Formik
         initialValues={initialValues}
         onSubmit={(values, actions) => {
            
             login(values);
           actions.setSubmitting(false);
         }}
       >
         <Form className='form'>
           <Input id='email' name='email' placeholder='Adresse e-mail' type='text'/>
           <Input id='password' name='password' placeholder='Mot de passe' type='password'/>
           <p className='error'>{error}</p>
           <Button name='se connecter'/>
         </Form>
       </Formik>
            </div>
          
        </div>
    )
}

export default Login;
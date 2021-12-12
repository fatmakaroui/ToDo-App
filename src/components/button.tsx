import React from "react";
import '../styles/button.scss';
interface Props {
  color:string;
  name:string;
  radius:string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ 
color,
name,
radius,
onClick, 
  }) => { 
  return (
    <button  type="submit" className='button' onClick={onClick} style={{background:color,borderRadius:radius}} >
      {name}
    </button>
  );
  };

export default Button;
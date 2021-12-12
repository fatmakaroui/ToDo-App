import React from "react";
import '../styles/button.scss';
interface Props {
  name:string;
}

const Button: React.FC<Props> = ({ 
name
  }) => { 
  return (
    <button  type="submit" className='button'>
      {name}
    </button>
  );
  };

export default Button;
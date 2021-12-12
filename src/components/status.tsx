import React from "react";
import '../styles/button.scss';
interface Props {
  status:boolean;
  onClick:()=>void;
}

const Status: React.FC<Props> = ({ 
status, 
onClick
  }) => { 
  return (
     <div className="status" style={{ background:status?'green':'red' ,cursor: 'pointer'}} onClick={onClick}>
         {
             status && <p style={{ color:'white',margin:'0px'}}>Complété</p>
         }
          {
             !status && <p style={{ color:'white',margin:'0px'}}>Non complété</p>
         }
     </div>
  );
  };

export default Status;
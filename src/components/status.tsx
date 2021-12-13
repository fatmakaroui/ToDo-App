import React from "react";
import '../styles/status.scss';
interface Props {
  status: boolean;
  onClick: () => void;
}

const Status: React.FC<Props> = ({
  status,
  onClick
}) => {
  return (
    <div className="status" style={{ background: status ? 'green' : 'red', cursor: 'pointer' }} onClick={onClick}>
      {
        status && <p className="text">Complété</p>
      }
      {
        !status && <p className="text">Non complété</p>
      }
    </div>
  );
};

export default Status;
import React, { useEffect, useState } from "react";

const SuccessMessage = ({ successMessage, className = "", dataset = "" }) => {
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    setAlert(true);
    const timer = setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, [dataset]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {alert && (
        <div className={`${className} inline-message success mt8 full-width`}>
   
          <img className="icon" src={""} alt="" />
          {successMessage}
        </div>
      )}
    </>
  );
};

export default SuccessMessage;

import React from 'react';
import {  useNavigate } from 'react-router-dom';

const BackToButton = () => {
  const navigation = useNavigate();
  return (
    <div>
      <button onClick={() => navigation(-1)}>Back</button>
    </div>
  );
};

export default BackToButton;

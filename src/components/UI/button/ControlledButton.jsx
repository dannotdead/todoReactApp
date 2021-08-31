import React from 'react';
import classes from './ControlledButton.module.css'

const ControlledButton = ({children, ...props}) => {
  return (
    <button {...props} className={classes.button}>
      {children}
    </button>
  );
};

export default ControlledButton;
import React, { FC } from 'react';
import classes from '../styles/MyButton.module.css';

interface IMyButtonProps {
    children: string;
    disabled?: boolean;
    onClick?: () => void;
    style?: React.CSSProperties;
}

const MyButton: FC<IMyButtonProps> = ({children, disabled = false, onClick, style={}}) => {
  return (
    <button style={style} onClick={onClick} className={classes.myButton} disabled={disabled}>{children}</button>
  );
}

export default MyButton;
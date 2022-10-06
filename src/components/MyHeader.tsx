import React, { FC } from 'react';
import classes from '../styles/MyHeader.module.css';

const MyHeader: FC = () => {
  return (
    <div className={classes.myHeader}>Notes App - create, edit and manage your notes!</div>
  );
};

export default MyHeader;
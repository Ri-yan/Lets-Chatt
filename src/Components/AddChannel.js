import React from 'react';
import add from '../Icons/add.svg'
export const AddChannel = ({ setCreateType, setIsCreating, setIsEditing, setToggleContainer, type }) => (
  <>
  <label htmlFor="img">add</label>
  <img src={add} style={{height:20, width:20, cursor:'pointer',margin:3}}
    onClick={() => {
      setCreateType(type);
      setIsCreating((prevState) => !prevState);
      setIsEditing(false);
      if(setToggleContainer) setToggleContainer((prevState) => !prevState) 
    }}
  />
  </>
);
import React from 'react';
import NavbarSearch from './NavbarSearch';

const Navbar = ({ onSearchKey }) => {
  return (
    <div className='note-app__header'>
      <h1>Cloud Notes</h1>
      <NavbarSearch searchKey={onSearchKey} />
    </div>
  )
}

export default Navbar;

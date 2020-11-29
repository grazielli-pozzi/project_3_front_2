import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li><Link to="/" style={{ textDecoration: 'none' }}>Página inicial</Link></li>
        <li><Link to="/processos" style={{ textDecoration: 'none' }}>Gerenciar processos</Link></li>
        <li><Link to="/processos" style={{ textDecoration: 'none' }}>Gerenciar clientes</Link></li>
        <li><Link to="/processos" style={{ textDecoration: 'none' }}>Gerenciar blog</Link></li>
        <li><Link to="/processos" style={{ textDecoration: 'none' }}>Sair</Link></li>
    </ul>
    </nav>
  )
}

export default navbar;
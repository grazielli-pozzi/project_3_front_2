import React from 'react';
import { Link } from 'react-router-dom';

const navbar = (props) => {
  return (
    <nav className="nav-style">
      <ul>
    {props.isUserLogged && props.role==="advogado" && (
      <>
      <li><Link to="/adv/pagina-inicial" style={{ textDecoration: 'none' }}>Página inicial</Link></li>
      <li><Link to="/adv/processos" style={{ textDecoration: 'none' }}>Gerenciar processos</Link></li>
      <li><Link to="/adv/clientes/novo-cliente" style={{ textDecoration: 'none' }}>Gerenciar clientes</Link></li>
      <li><Link to="/adv/blog" style={{ textDecoration: 'none' }}>Gerenciar blog</Link></li>
      <li><Link to="/" style={{ textDecoration: 'none' }}>Sair</Link></li>
      </>
    )}
        {props.isUserLogged && props.role==="cliente" && (
      <>
      <li><Link to="/cliente/pagina-inicial" style={{ textDecoration: 'none' }}>Página inicial</Link></li>
      <li><Link to="/cliente/processos" style={{ textDecoration: 'none' }}>Processos</Link></li>
      <li><Link to="/cliente/blog" style={{ textDecoration: 'none' }}>Blog</Link></li>
      <li><Link to="/" style={{ textDecoration: 'none' }}>Sair</Link></li>
      </>
    )}
    {!props.isUserLogged && (
      <>
      <li><Link to="/" style={{ textDecoration: 'none' }}>Página inicial</Link></li>
      <li><Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></li>
      <li><Link to="/blog" style={{ textDecoration: 'none' }}>Blog</Link></li>
      </>
    )}
 
    </ul>
    </nav>
  )
}

export default navbar;
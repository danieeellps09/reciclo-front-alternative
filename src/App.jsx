import React from 'react';
import Header from './components/header'
import HeaderLogin from './components/header-login';
import Login from './pages/login';
import Adm from './pages/adm';
import Cadastro from './pages/cadastro';
import Perfil from './pages/perfil';
import Catador from './pages/catador';
import OperadorLogistico from './pages/operadorLogistico';
import Assosiacao from './pages/associacao';
import HeaderResponsive from './components/header-responsive';
import AcompanhamentoColeta from './pages/acompanhamento-coleta';

export default function App() {
  return (
    <>

    <HeaderResponsive/>
    <AcompanhamentoColeta/>
    <Cadastro/>
      
    </>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '../Notifications';

import { Container, Content, Profile } from './styles';

import logoPurple from '../../assets/logo-purple.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logoPurple} alt="gobarber" />
          </Link>
          <Link to="/dashboard">
            <span>DASHBOARD</span>
          </Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>Nome de exemplo</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>

            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Matheus"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

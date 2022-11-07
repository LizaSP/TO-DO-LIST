/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation" style={{ marginBottom: '2.5%' }}>
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo" />
        </Link>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        {user?.id
          && (
            <div className="navbar-start">
              <a className="navbar-item" onClick={() => navigate('/home')}>
                Home
              </a>
            </div>
          )}

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {user?.id
                ? (
                  <a onClick={() => { dispatch({ type: 'LOGOUT_USER' }); navigate('/login'); }} className="button is-primary">
                    <strong>Выйти</strong>
                  </a>
                )
                : (
                  <>
                    <a onClick={() => navigate('/signup')} className="button is-primary">
                      <strong>Sign up</strong>
                    </a>
                    <a onClick={() => navigate('/login')} className="button is-primary">
                      Login
                    </a>
                  </>
                )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

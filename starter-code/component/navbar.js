import React, { Component } from 'react'

class Nav extends Component {
render () {
      return (
        <div>
          <nav className="navbar is-transparent" role="navigation" aria-label="dropdown navigation">
            <a className="navbar-item">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width={112} height={28} />
            </a>
            <div className="navbar-item has-dropdown is-active">
              <a className="navbar-link">
                Home
              </a>
            
              <button class="button is-small is-success">
                Login
              </button>
              <button class="button is-small is-success">
                Signup
              </button>
            </div>
          </nav>
          <section className="hero">
            <div className="hero-body">
              <p className="title">
                Documentation
              </p>
              <p className="subtitle">
                Everything you need to <strong>create a website</strong> with Bulma
              </p>
            </div>
          </section>
        </div>
      );
    }
  };

  export default Nav;
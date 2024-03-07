import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onLogoutClicked = () => {
    const {history} = props
    Cookies.remove('token')
    history.replace('/login')
  }

  return (
    <nav className="nav-main-container">
      <Link to="/">
        <img
          className="nav-website-logo"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        />
      </Link>
      <ul className="nav-ul-container">
        <Link className="link-item" to="/">
          <li>Home</li>
        </Link>
        <Link className="link-item" to="/jobs">
          <li>Jobs</li>
        </Link>
      </ul>
      <button type="button" onClick={onLogoutClicked} className="logout-button">
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)

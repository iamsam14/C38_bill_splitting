import React, { useState } from 'react';
import axios from 'axios';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import { IoMdContact } from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../App.css';
import { IconContext } from 'react-icons';
import { Navbar } from 'react-bootstrap';

const HomeNav = ({ history }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const handleLogout = () => {
    axios
      .post('/api/users/logout', { withCredentials: true })
      .then(() => {
        sessionStorage.removeItem('user');
        history.push('/login');
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Navbar className="homenav justify-content-between">
        <Navbar.Brand href="./home">
          <img
            src={
              'https://res.cloudinary.com/jeanniet89/image/upload/v1598582455/Cuenta%20App/cuentaLogo.png'
            }
            alt="Cuentalogo"
            style={{
              width: '100px'
            }}
          />
        </Navbar.Brand>
        <IconContext.Provider value={{}}>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <IoMdContact onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars1">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              <li className="nav-text">
                <Link to="/profile">
                  <IoIcons.IoIosPaper /> <span>Profile</span>
                </Link>
              </li>
              <li className="nav-text">
                <Link to="/history">
                  <FaIcons.FaCartPlus /> <span>Bill History</span>
                </Link>
              </li>
              <li className="nav-text">
                <Link>
                  <IoIcons.IoIosPeople />
                  <span onClick={() => handleLogout()}>Logout</span>
                </Link>
              </li>
            </ul>
          </nav>
        </IconContext.Provider>
      </Navbar>
    </>
  );
};

export default HomeNav;

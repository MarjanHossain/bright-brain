import { useNavigate } from 'react-router-dom';
import { brandLogo } from '../assets/image'
const Navbar = () => {
  const navigate = useNavigate();
  const handleAchorLink = async (e, hashroute) => {
    e.preventDefault();
    await navigate('/');
    window.location.hash = hashroute;
  }
  return (
    <header id="header" className="header fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

        <a href="/#" className="logo d-flex align-items-center">
          <img src={brandLogo} alt="" />

          {/* <!-- <span>FlexStart</span> --> */}
        </a>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="/#">Home</a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about"
                onClick={(e) => handleAchorLink(e, 'about')}
              >About</a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services"
                onClick={(e) => handleAchorLink(e, 'services')}
              >Services</a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#portfolio"
                onClick={(e) => handleAchorLink(e, 'portfolio')}
              >Portfolio</a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#team"
                onClick={(e) => handleAchorLink(e, 'team')}
              >Team</a>
            </li>



            {/* <li><a href='' onClick={(e) => handleAchorLink(e, 'home')}>Home</a></li>
            <li><a href='' onClick={(e) => handleAchorLink(e, 'services')}>Services</a></li>
            <li><a href='' onClick={(e) => handleAchorLink(e, 'project')}>Projects</a></li> */}

            {/* <!-- <li><a href="blog.html">Blog</a></li> */}
            {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 2</a></li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                </ul>
              </li> */}
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            <li><a className="getstarted scrollto" href="/#">Get Started</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        {/* <!-- .navbar --> */}

      </div>
    </header>
  );
};

export default Navbar;
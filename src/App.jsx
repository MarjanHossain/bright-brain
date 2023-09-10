import './assets/css/style.css'
import { useEffect } from "react"
import { handleDomCodes } from './assets/dom';
import Navbar from './shared/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './shared/Footer';


const App = () => {
  const location = useLocation().pathname;
  const blogSingle = location.includes('blog-single');
  const portfolioDetails = location.includes('portfolio-details');

  useEffect(() => {
    /**
* Template Name: FlexStart
* Updated: Mar 10 2023 with Bootstrap v5.2.3
* Template URL: https://bootstrapmade.com/flexstart-bootstrap-startup-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/


    //* ==> Handle Dom Manipulation
    handleDomCodes();
  }, [blogSingle, portfolioDetails]);

  return (
    <div>
      <Navbar />

      {/* <======= Main =======> */}
      <main id="main" className=''>
        <Outlet />
      </main >
      {/* <!-- End #main --> */}

      {/* <!-- ======= Footer ======= --> */}
      <Footer />
      {/* <!-- End Footer --> */}
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </div >
  );
};

export default App;
import React from 'react';
import { Container } from 'reactstrap';
import './Header.css';

const navLinks = [
    {
        display: 'Home',
        url:'#',
    },

    {
        display: 'About',
        url:'#',
    },

    {
        display: 'Courses',
        url:'#',
    },

    {
        display: 'Pages',
        url:'#',
    },

    {
        display: 'Blog',
        url:'#',
    },
];

const Header = () => {
  return( 
  <header className="header">
    <Container>
        <div className="navigation d-flex align-items-centre justify-content-between">
            <div className="logo">
                <h2 className="d-flex align-items-centre">
                    <i class="ri-pantone-line"></i>Learners.</h2>
            </div>

            <div className="nav d-flex align-items-centre gap-5">
                <div className="nav_menu">
                    <ul className="nav_list">

                        {navLinks.map((item,index) => (
                                <li key={index} className="nav_item">
                                    <a href={item.url}>{item.display}</a>
                                </li>
                            ))} 
                    </ul>
                </div>
                <div className="nav_right">
                    <p className="mb-0 d-flex align-items-center gap-2">
                        <i class="ri-phone-line"></i> +94 70 2199 588
                    </p>
                </div>
            </div>
            <div className="moblie_menu">
                <span><i class="ri-menu-line"></i></span>
            </div>
        </div>
    </Container>
  </header>
  );
  
};

export default Header;
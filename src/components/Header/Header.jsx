import React from 'react';
import { Container } from 'reactstrap';
import './Header.css';

const navLinks = [
    {
        dispay: 'Home',
        url:''
    },

    {
        dispay: 'About',
        url:''
    },

    {
        dispay: 'Courses',
        url:''
    },

    {
        dispay: 'Pages',
        url:''
    },

    {
        dispay: 'Blog',
        url:''
    },
]

const Header = () => {
  return <section>
    <Container>
        <div className="navigation d-flex .align-items-center justify-content-between">
            <div className="logo">
                <h2><i class="ri-pantone-line"></i>Learners</h2>
            </div>

            <div className="nav">
                <div className="nav_menu">
                    <ul className="nav_list">

                        {
                            navLinks.map((item,index)=>(
                                <li key={index} className="nav_item">
                                    <a href={item.url}>{item.display}</a>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>
                <div className="nav_right">
                    <p><i class="ri-phone-line"></i>+94 70 2199 588</p>
                    <p>About</p>        
                    <p>Courses</p>
                    <p>Pages</p>
                    <p>Blog</p>
                </div>
            </div>
        </div>
    </Container>
  </section>
    
  
}

export default Header
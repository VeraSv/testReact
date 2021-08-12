import React from 'react';
import { NavLink } from 'react-router-dom';
import './PagesLinks.css';

function PagesLinks() {


    return (
        <div >
            <NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">Todo list</NavLink>
            <NavLink to="/form1" className="PageLink" activeClassName="ActivePageLink">Form1</NavLink>
            <NavLink to="/form2" className="PageLink" activeClassName="ActivePageLink">Form2</NavLink>

        </div>
    );
}

export default PagesLinks;
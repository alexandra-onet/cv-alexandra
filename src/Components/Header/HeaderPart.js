import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HeaderPartStyle.css";
import './responsive.css'
import BurgerButton from './menu.png';
import NameLogo from '../../Contact-Me-Photos/Name-logo1.png'

export default class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                <div className='header-content'>
                <div className='logo-namme'>
                <Link className='button-header-container'
                            to='/'>
                        <img className='name-logo' src={NameLogo}></img>
                        </Link>
                    </div>

                    <div className='header-content-full'>
                        <Link className='button-header-container'
                            to='/'>
                            <button className='button-header-content' id='home-button'>Home</button>
                        </Link>
                        <Link className='button-header-container'
                            to='/Aboutme'>
                            <button className='button-header-content' id='about-me-button'>About me</button>
                        </Link>
                        <Link className='button-header-container'
                            to='/Myskills'>
                            <button className='button-header-content' id='myskill-button'>My Skills</button>
                        </Link>
                        <Link className='button-header-container'
                            to='/Contact'>
                            <button className='button-header-content' id='contact-button'>Contact</button>
                        </Link>
                    </div>
                    <div className='burger-button-container'>
                        <div className='burger-button-content'>
                            <img className='burger-button-img' src={BurgerButton}></img>
                        </div>
                            <ul className='list-burger-button'>
                                <li>
                                    <Link className='burger-button-header-container'
                                        to='/'>
                                        <button className='burger-button-header-content' id='home-button'>Home</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link className='burger-button-header-container'
                                        to='/Aboutme'>
                                        <button className='burger-button-header-content' id='about-me-button'>About me</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link className='burger-button-header-container'
                                        to='/Myskills'>
                                        <button className='burger-button-header-content' id='myskill-button'>My Skills</button>
                                    </Link>
                                </li>
                                <li>
                                    <Link className='burger-button-header-container'
                                        to='/Contact'>
                                        <button className='burger-button-header-content' id='contact-button'>Contact</button>
                                    </Link>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        )
    }
}
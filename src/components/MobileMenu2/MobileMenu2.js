import React, { Fragment, useState } from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import { Link } from "react-router-dom";
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/',
    },
    {
        id: 2,
        title: 'Nosotros',
        link: '/gallery',
    },
    {
        id: 3,
        title: 'Cuando y Donde',
        link: '/event',
    },
    {
        id: 4,
        title: 'Preguntas frecuentes',
        link: '/faq',
    },
    {
        id: 5,
        title: 'Confirmar asistencia',
        link: '/RSVP',
    },

    // {
    //     id: 3,
    //     title: 'Wedding',
    //     link: '/wedding',
    //     submenu: [
    //         {
    //             id: 31,
    //             title: 'Wedding',
    //             link: '/wedding',
    //         },
    //         {
    //             id: 32,
    //             title: 'Wedding Details',
    //             link: '/wedding-details'
    //         },
    //     ]
    // },

    // {
    //     id: 5,
    //     title: 'Pages',
    //     link: '/',
    //     submenu: [
    //         {
    //             id: 51,
    //             title: 'Our story',
    //             link: '/story'
    //         },
    //         {
    //             id: 52,
    //             title: 'When & Where',
    //             link: '/event'
    //         },
    //         {
    //             id: 53,
    //             title: 'Accomodation',
    //             link: '/accomodation'
    //         },
    //         {
    //             id: 54,
    //             title: 'Bridesmaid & Groomsman',
    //             link: '/groom-bride'
    //         },
    //         {
    //             id: 55,
    //             title: 'Coming Soon',
    //             link: '/coming'
    //         },
    //         {
    //             id: 58,
    //             title: '404 Error',
    //             link: '/404'
    //         },
    //         {
    //             id: 59,
    //             title: 'Login',
    //             link: '/login'
    //         },
    //         {
    //             id: 591,
    //             title: 'Register',
    //             link: '/register'
    //         },
    //     ]
    // },
]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null}  key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                          <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler} className="active"
                                                                    to={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link className='active'
                                        to={item.link}>{item.title}</Link>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;
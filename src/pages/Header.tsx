const Header = () => {
    return (

        <header className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="header__logo">
                            <a>
                                <img src="src/assets/img/logo.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="header__nav__option">
                            <nav className="header__nav__menu mobile-menu">
                                <ul>
                                    <li className="active"><a style={{ color: 'white' }}>Home</a></li>
                                    {/* <li><a href="./about.html">About</a></li>
                                    <li><a href="./portfolio.html">Portfolio</a></li>
                                    <li><a href="./services.html">Services</a></li>
                                    <li><a href="#">Pages</a>
                                        <ul className="dropdown">
                                            <li><a href="./about.html">About</a></li>
                                            <li><a href="./portfolio.html">Portfolio</a></li>
                                            <li><a href="./blog.html">Blog</a></li>
                                            <li><a href="./blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="./contact.html">Contact</a></li> */}
                                </ul>
                            </nav>
                            <div className="header__nav__social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-dribbble"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-youtube-play"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="mobile-menu-wrap"></div>
            </div>
        </header>
    )
}

export default Header
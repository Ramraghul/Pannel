import React from 'react'

function Sidebar() {
    return (
        <>
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion Side text-light" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <a className="nav-link text-light" href="/">
                                <div className="sb-nav-link-icon "><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </a>
                            {/* Interface */}
                            {/* Package */}
                            <div className="sb-sidenav-menu-heading text-light">Interface</div>
                            <a className="nav-link collapsed text-light" href="!#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Package
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav ">
                                    <a className="nav-link text-light" href="/Package">Package List</a>
                                    <a className="nav-link text-light" href="layout-sidenav-light.html">Light Sidenav</a>
                                </nav>
                            </div>

                            {/* Category */}
                            <a className="nav-link collapsed text-light" href="!#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                Category
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a className="nav-link collapsed text-light" href="!#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse " id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav ">
                                            <a className="nav-link text-light" href="login.html">Login</a>
                                            <a className="nav-link text-light" href="register.html">Register</a>
                                            <a className="nav-link text-light" href="password.html">Forgot Password</a>
                                        </nav>
                                    </div>
                                    <a className="nav-link collapsed text-light" href="!#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                        Error
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link text-light" href="401.html">401 Page</a>
                                            <a className="nav-link text-light" href="404.html">404 Page</a>
                                            <a className="nav-link text-light" href="500.html">500 Page</a>
                                        </nav>
                                    </div>
                                </nav>
                            </div>

                            {/* Banner */}
                            <a className="nav-link collapsed text-light" href="!#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts1" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Banner
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseLayouts1" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link text-light" href="/Package">Static</a>
                                    <a className="nav-link text-light" href="layout-sidenav-light.html">Light</a>
                                </nav>
                            </div>

                            {/* Channel */}
                            <a className="nav-link collapsed text-light" href="!#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts2" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Channel
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseLayouts2" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link text-light" href="/Package">Channel 1</a>
                                    <a className="nav-link text-light" href="layout-sidenav-light.html">Channel 2</a>
                                </nav>
                            </div>
                            {/* Addons */}
                            <div className="sb-sidenav-menu-heading">Addons</div>
                            <a className="nav-link text-light" href="charts.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                User
                            </a>
                            <a className="nav-link text-light" href="tables.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                Device Detail
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Sidebar
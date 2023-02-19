import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

function Portal() {
    return (
        <>
            <div className="sb-nav-fixed">
                <Topbar />
                <div id="layoutSidenav">
                    <Sidebar />
                    <div id="layoutSidenav_content">
                        <main>
                            <Outlet />
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portal
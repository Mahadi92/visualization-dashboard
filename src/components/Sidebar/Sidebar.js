import React from 'react';
import './Sidebar.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faChartBar, faTable } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (

        <div className="sidebar d-flex justify-content-center">
            <div className="pt-5 mt-5  sidebarLink">

                <h5 className="mb-4"><Link to="/"><FontAwesomeIcon icon={faChartBar} className="me-2" />Dashboard</Link></h5>

                <h5 className="mb-5"><Link to="/allData"><FontAwesomeIcon icon={faTable} className="me-2" />All Data</Link></h5>

                <h4 className="mt-5">
                    <Link to=""><FontAwesomeIcon icon={faSignOutAlt} className="me-2" />Log Out</Link>
                </h4>
            </div>
        </div>

    );
};

export default Sidebar;
import React from 'react';
import {Link} from 'react-router-dom'
function Navbar() {
    return (
            <div className='navbar'>
                <div className='navbar__list'>
                    <ul>
                        <li>
                            <Link to="/App">Home</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
    )
}
export default Navbar
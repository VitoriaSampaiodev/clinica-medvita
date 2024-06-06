import { Link } from 'react-router-dom';
import './style.css';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

export const NavMenu: React.FC = () => {
    const context = useContext(UserContext);

    return(
        <nav>
            <ul>
                {/* Always show */}
                <li><Link to="/">Home</Link></li>

                {/* When users are logged */}
                {context?.user && <li><Link to="/consultas">Consultas</Link></li>}
                {context?.user && <li><Link onClick={() => context.handleLogout()} to="/">Logout</Link></li>}
                
                {/* When users aren't logged */}
                {context?.user == null && <li><Link to="/login">Consultas</Link></li>}
                {context?.user == null && <li><Link to="/login">Login</Link></li>}
            </ul>
        </nav>
    )
}
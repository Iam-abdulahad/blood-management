import { Outlet } from 'react-router-dom';
import NavMenu from './NavMenu';

const Header = () => {
    return (
        <div>
            <NavMenu></NavMenu>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;
import { Outlet } from 'react-router-dom';
import NavMenu from './NavMenu';
import Footer from '../Footer/Footer';

const Header = () => {
    return (
        <div>
            <NavMenu></NavMenu>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Header;
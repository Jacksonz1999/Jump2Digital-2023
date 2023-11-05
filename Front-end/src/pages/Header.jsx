import logo from '../assets/logo-title.png';
import Search from '../components/Search';

const Header = () => {
    return (
        <nav className="bg-white shadow mb-8 py-4">
            <div className="container mx-auto px-4 flex flex-col items-center sm:flex-row sm:justify-between sm:items-center">
                <img src={logo} alt="Rick and Morty Logo" className="h-12 mb-4 sm:mb-0" />
                <Search />
            </div>
        </nav>
    );
};

export default Header;

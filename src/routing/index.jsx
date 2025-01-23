import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './home';
import AboutPage from './about';
import ContectPage from './contect'; 

const ScreeenNavigation = () => {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/home">Home</Link><br />
                <Link to="/about">About</Link><br />
                <Link to="/contect">Contact</Link><br />
            </nav>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contect" element={<ContectPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default ScreeenNavigation;

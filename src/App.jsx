import { Route, Routes } from 'react-router-dom';
import Home from './views/pages/Home';
import ContactUs from './views/pages/ContactUs';

function App() {
    return (
        <>  
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
        </>
    );
}
export default App;

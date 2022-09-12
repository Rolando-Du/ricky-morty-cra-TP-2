import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CardPage from "./components/CardPage";
import UsersPage from "./components/UsersPage";
import ContactForm from "./components/ContactForm";
import NavBar from "./components/NavBar";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/card" element={<CardPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/contact-us" element={<ContactForm />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

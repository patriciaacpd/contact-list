import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact.jsx";
import AddContact from "./AddContact.jsx";
import Landing from "./Landing.jsx";


const App = () => {
    return (
    <Contact>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/AddContact" element={<AddContact/>}/>
            </Routes>
        </BrowserRouter>
    </Contact>
    );
};

export default App;
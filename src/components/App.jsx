import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Menu from "./Topmenu";
import Notice from "./Notice"
import {
    BrowserRouter as Router, Routes,
    Route,
    useMatch,
} from "react-router-dom"

function App() {
    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState(
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
    );

    const addContactHandler = (contact) => {
        console.log(contact);
        setContacts([...contacts, { id: uuid(), ...contact }]);
    };

    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact) => {
            return contact.id !== id;
        });

        setContacts(newContactList);
    };


    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);

    return (
        <Router>
            <div className="ui container">
                <div>
                    <Header />
                    <Menu />
                    <Notice />

                </div>

                <Routes>
                    <Route path="/" element={
                        <AddContact addContactHandler={addContactHandler} />
                    } />
                    <Route path="/contacts" element={
                        <ContactList contacts={contacts} getContactId={removeContactHandler} />
                    } />

                </Routes>
            </div>
        </Router>
    )
}

export default App;
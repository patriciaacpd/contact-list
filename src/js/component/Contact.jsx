import React, {useState, createContext} from "react";

export const ContactContext = createContext()

const Contact = ({ children }) => {
    const [contactList, setContactList] = useState([])
    const [editingContact, setEditingContact] = useState(null)
    const handleAddContact = (contact) => {
        if (editingContact != null) {
            const newList =contactList.filter((contact,index)=>index != editingContact)
            setContactList([...newList,contact])
            setEditingContact(null)
            return 
        } 
        setContactList([...contactList, contact])
    }
    const handleDeleteContact = (index) => {
        setContactList(contactList.filter((contact, i) => index != i))
    }
    const handleEditContact = (index) => {
        setEditingContact(index)
    }
    return (
        <ContactContext.Provider value={{ contactList, handleAddContact, handleDeleteContact,handleEditContact}}>
            {children}
        </ContactContext.Provider>
    )
}

export default Contact;


import { useState } from "react";
import { createContext } from "react";
import { BaseURL } from "../assets/assets";
import { useEffect } from "react";

export const EmailContext = createContext();

const EmailProvider = ({children}) => {

    const [emails, setEmails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedEmail, setSelectedEmail] = useState(null);

    useEffect(()=>{
        const fetchEmails = async () => {
            try {
                const res = await fetch(`${BaseURL}/emails`);
                const data = await res.json();
                
                if(data.success){
                    setEmails(data.emails);
                } else {
                    alert("Error while fetching emails...");
                }
            } catch(e) {
                console.log(e);
                alert("Error while fetching emails..");
            } finally {
                setIsLoading(false);
            }
        }

        fetchEmails();
    }, []);

    const removeEmail = async (id) => {
        try {
            const res = await fetch(`${BaseURL}/emails/${id}`, {
                method: "DELETE",
            });

            const data = await res.json();

            if(data.success){
                setEmails(emails.filter(email => email._id !== id));
                alert("Email deleted successfully!");
            } else {
                alert(data.message);
            }

        } catch(e) {
            console.log(e);
            alert("Error while deleting email");
        }
    };

    const viewEmail = (id) => {
        const email = emails.find(mail => mail._id === id);
        setSelectedEmail(email);
    }

    const removeSelectedEmail = () => {
        setSelectedEmail(null);
    }

    const emailsData = {
        emails,
        isLoading,
        removeEmail,
        viewEmail,
        selectedEmail,
        removeSelectedEmail,
    }


  return (
    <EmailContext.Provider value={emailsData}>
      {children}
    </EmailContext.Provider>
  )
}

export default EmailProvider;

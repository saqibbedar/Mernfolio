import { useState } from "react";
import { createContext } from "react";
import { BaseURL } from "../assets/assets";
import { useEffect } from "react";
import { formatDateTime } from "../assets/assets";

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

    const saveAsPDF = () => {

        const newWindow = window.open('', '_blank', 'width=800,height=600');

        const content = `
            <html>
                <head>
                    <title>${formatDateTime(new Date(selectedEmail.createdAt))}-Client-${selectedEmail.name}-Email</title>
                    <style>
                    *,
                    *::before,
                    *::after {
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                    }
                    a {
                        text-decoration: none;
                        color: #333;
                    }
                    @page{
                        size: auto;
                        margin: 0;
                    }
                    body {
                        font-family: Arial, sans-serif;
                        background: #f4f4f4;
                        color: #333;
                    }
                    .container {
                        max-width: 800px;
                        display: flex;
                        flex-direction: column;
                        gap: 20px;
                        padding: 30px;
                    }
                    .email-header {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        border-bottom: 1px solid;
                        padding-bottom: 15px;
                    }
                    h1 {
                        font-size: 20px;
                        font-weight: 600;
                    }
                    span {
                        font-size: 22px;
                        font-weight: 700;
                    }
                    .client-email span {
                        font-weight: 600;
                        font-size: 1rem;
                    }
                    .client-message span {
                        font-weight: 600;
                        font-size: 1rem;
                    }
                    .email-body {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                    }
                    @print {
                        body {
                            font-size: 12pt;
                        }
                    }
                    </style>
                </head>
                <body>
                    <div class="container">
                    <div class="email-header">
                        <h1><span>Name:</span> ${selectedEmail.name}</h1>
                        <div class="timestamps">${formatDateTime(new Date(selectedEmail.createdAt))}</div>
                    </div>
                    <div class="email-body">
                        <div class="client-email">
                        <span>Email:</span> <a href='mailto:${selectedEmail.email}'>${selectedEmail.email}</a>
                        </div>
                        <div class="client-message">
                        <span>Message:</span> ${selectedEmail.message}
                        </div>
                    </div>
                    </div>
                </body>
            </html>
        `;
        
        newWindow.document.write(content);
        
        newWindow.document.close();
        
        newWindow.print();

        setTimeout(()=>{
            newWindow.close();
        }, 2000)
        
    }

    const emailsData = {
        emails,
        isLoading,
        removeEmail,
        viewEmail,
        selectedEmail,
        removeSelectedEmail,
        saveAsPDF,
    }

  return (
    <EmailContext.Provider value={emailsData}>
      {children}
    </EmailContext.Provider>
  )
}

export default EmailProvider;

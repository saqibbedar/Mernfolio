import './Emails.css'
import Spiner from '../Spiner/Spiner';
import { useContext } from 'react';
import { EmailContext } from '../../Context/EmailContext';


const Emails = () => {

  const {emails, isLoading, viewEmail, removeEmail, selectedEmail} = useContext(EmailContext);

  console.log(selectedEmail);

  return (
    <div className="emails">
      {
        isLoading ? 
        (<div className='loading-handler'><Spiner width={"50px"} height={"50px"}/></div>) :
        (emails.map((mail, index) => (
          <div className="email-box" key={index} onClick={()=> viewEmail(mail._id)}>
            <div className='email-content'>
              <div className="client-name">{mail.name}</div>
              <div className="client-message">{mail.message}</div>
            </div>
            <div className="email-utilities">
              <div className="email-timestamp">{new Date(mail.createdAt).toLocaleString()}</div>
              <div className="email-action" onClick={()=> removeEmail(mail._id)}>delete</div>
            </div>
          </div>
        )))
      }
    </div>
  );
};

export default Emails;

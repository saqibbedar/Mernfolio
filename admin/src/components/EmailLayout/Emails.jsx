import './Emails.css'
import Spiner from '../Spiner/Spiner';
import { useContext } from 'react';
import { EmailContext } from '../../Context/EmailContext';
import { icons} from '../../assets/assets';
import { formatDateTime } from 'easy-datetime-fmt';

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
              <div className="email-timestamp">{formatDateTime(new Date(mail.createdAt))}</div>
              <div className="email-action" onClick={()=> removeEmail(mail._id)}><icons.remove/></div>
            </div>
          </div>
        )))
      }
    </div>
  );
};

export default Emails;

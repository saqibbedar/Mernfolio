import './Emails.css'
import Spiner from '../Spiner/Spiner';
import { useContext } from 'react';
import { EmailContext } from '../../Context/EmailContext';
import { icons} from '../../assets/assets';
import { formatDateTime } from 'easy-datetime-fmt';
import { Link } from 'react-router-dom';

const Emails = () => {

  const {emails, isLoading, removeEmail} = useContext(EmailContext);

  return (
    <div className="emails">
      {
        isLoading ? 
        (<div className='loading-handler'><Spiner width={"50px"} height={"50px"}/></div>) :
        (emails.map((mail, index) => (
          <Link to={`/emails/${mail._id}`} className="email-box" key={index}>
            <div className='email-content'>
              <div className="client-name">{mail.name}</div>
              <div className="client-message">{mail.message}</div>
            </div>
            <div className="email-utilities">
              <div className="email-timestamp">{formatDateTime(new Date(mail.createdAt))}</div>
              <div className="email-action" onClick={()=> removeEmail(mail._id)}><icons.remove/></div>
            </div>
          </Link>
        )))
      }
    </div>
  );
};

export default Emails;

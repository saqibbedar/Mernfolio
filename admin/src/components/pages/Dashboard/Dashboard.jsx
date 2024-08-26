import React, { useContext, useEffect } from 'react'
import { EmailContext } from '../../../Context/EmailContext';
import { Link, useNavigate } from 'react-router-dom';
import Spiner from "../../Spiner/Spiner"
import './Dashboard.css'

const Dashboard = () => {

    const { totalEmails, latestEmail, selectedEmail } = useContext(EmailContext);
    const navigate = useNavigate();

    useEffect(()=>{
      latestEmail();
    }, [latestEmail])

  return (
    <div className='dashboard'>
      <div className="dashboard-box-1">

        <div className="totalEmails"><span style={{fontWeight: "bold", fontSize: "1.2rem"}}>Total emails </span>
        {totalEmails()}</div>

        <div className="latest-email">
          <div><span style={{fontWeight: "bold", fontSize: "1.2rem"}}>Latest email</span> <span style={{fontSize: "1.1rem", cursor: 'pointer'}} onClick={()=> navigate(`/emails/${selectedEmail._id}`)}>{selectedEmail ? selectedEmail.name : (<div><Spiner width={"15px"} height={"15px"} borderWidth={"2px"}/></div>)}</span></div>
        </div>

          <div className="redirect">
              <Link to={'/emails'}><button>View emails</button></Link>
          </div>

      </div>
    </div>
  )
}

export default Dashboard;

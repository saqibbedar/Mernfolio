import "./ContactPageLayout.css"

const ContactPageLayout = () => {
  return (
    <form onSubmit={(e)=> e.preventDefault()} className='contact-page-layout'>
      <div className="contact-page-inputs">
        <h1>Get in touch</h1>
        <div className="contact-us-msg">I would love to hear from you! If you have any questions, comments or feedback, please use the form below or reach me through my social media handles.</div>
        <input type="text" placeholder='Name' required/>
        <input type="email" placeholder='Email' required/>
        <textarea placeholder='Message' rows={"10"}></textarea>
        <button type="submit">Send</button> 
      </div>
    </form>
  )
}

export default ContactPageLayout



	  import React, { Component } from 'react';
      import './contact.css';
      import './venue.css';
     
  
   export class Contact extends Component {
   render(){
    return( 
      <div>
       
                          {/* contact form */}
 
          <h2 className="col-lg-12 margin-bottom-30" style={{color:'#dda24f'}}><b>Send us a message</b></h2>
          <form action="#" method="get" className="tm-contact-form">
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
              <input type="text" id="contact_name" className="form-control1" placeholder="Name" />
              </div>
              <div className="form-group">
                <input type="email" id="contact_email" className="form-control1" placeholder="E-mail" />
              </div>
              <div className="form-group">
                <input type="text" id="contact_subject" className="form-control1" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea id="contact_message" className="form-control1" rows="6" placeholder="Your Message"></textarea>
              </div>
              <div className="form-group">
                <button className="tm-more-button" type="submit" name="submit">Send message</button> 
              </div>               
            </div><hr className="Hrule"></hr>
            <div className="form-group">
                <label className="tm-more-button">Address: A-34/1143 Main Street, New Colony,10030<br></br>Contact: 9501252557</label> 
              </div> 
            <div className="col-lg-6 col-md-6">
              <div id="google-map"></div>
            </div> 
          </form>
       
  
       
    </div>
  
  
  )
  }
  
   }
  export default Contact;
  
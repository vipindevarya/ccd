import React, { Component } from 'react';
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.webp';
import card3 from '../assets/card3.jpg';
import card4 from '../assets/card4.jpg';



import { Card, CardDeck } from 'react-bootstrap';

import  {Fade,Zoom} from 'react-reveal';

export class Services extends Component {
    render(){
      return( 
          <div>
              
               <div class="container" >
                   <Zoom Top>
                        <h2 className="h2">About Us</h2>
                        </Zoom>
                 </div>
              <div class ="container" id="cards"  >
             
                        <CardDeck >
                            <Card className="card1" border="transparent" >
                               <Card.Link href ="/Galleries">
                                   <Zoom Top>
                             
                                <Card.Body>
                                
                                <Card.Title className="ctitle"><b>Old Town Cafe`: From Bean to Cup</b></Card.Title>
                                <Card.Text className="ctext">
                                <i>As our motto suggests, we make every cup of coffe from scratch,everything from choosing the best coffee beans ,creating and grinding our own blends to a beautiful Aromatic cup of Coffee that is served to you with all our Love. 
                                Our Beautiful Ambience adds perfectly to the experience of our customers, whom we treat like Family.
                                We also offer a range of coffee products: Coffee Beans, blends, Creamers etc., customers can buy products from our cart system.
                                We also offer the option of venue booking for your special occasions.
                                </i>
                                </Card.Text>
                                
                                <Card.Img  class="cimg" variant="top"  src={card4}  />
                                <Card.Img  class="cimg" variant="top"  src={card1}  />
                                <Card.Img  class="cimg" variant="top"  src={card2}  />
                                <Card.Img  class="cimg" variant="top"  src={card3}  />
                                
                                </Card.Body>
                                </Zoom>
                                </Card.Link>
                            </Card>
                            </CardDeck>
                         
                        
                 </div>
               
            </div>
            
      );
    }
}

export  default Services


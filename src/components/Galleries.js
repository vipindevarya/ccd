import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './galleries.css';
import g1 from '../assets/g1.jpg';
import g2 from '../assets/g2.jpg';
import g3 from '../assets/g3.jpg';
import g4 from '../assets/g4.jpg';
import pw from '../assets/pw.jpg';
import pw1 from '../assets/pw1.jpg';
import pw3 from '../assets/pw3.jpg';
import pw4 from '../assets/pw4.jpg';
import g5 from '../assets/g5.webp';
import g6 from '../assets/g6.jpg';
import g7 from '../assets/g7.jpg';
import g8 from '../assets/g8.webp';
import f1 from '../assets/f1.jpg';
import f2 from '../assets/f2.jpg';
import f3 from '../assets/f3.jpg';
import f4 from '../assets/f4.jpg';
import t1 from '../assets/t1.jpg';
import t2 from '../assets/t2.jpg';
import t3 from '../assets/t3.jpg';
import b1 from '../assets/b1.jpg';
import b2 from '../assets/b2.jpg';
import b3 from '../assets/b3.jpg';
import b4 from '../assets/b4.webp';
import t4 from '../assets/t4.jpg';
import card8 from '../assets/card8.jpeg';
import card9 from '../assets/card9.jpg';
import card10 from '../assets/card10.jpeg';
import card11 from '../assets/card11.jpg';



import  {Roll,LightSpeed,Rotate,Slide,Fade,Zoom} from 'react-reveal';

import {  Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

export class Galleries extends Component {
	render() {
	
		return (


			<div id="body">
				
						{/* Gallery */}
				<div className="container-fluid" >
					
					<div className="row">
				<div className="container" style={{position:'fixed'}}>
						
						</div>



						<div className="column" >
							<div>
								<Zoom Top>
								<h1 className="h1Galleries">Our Galleries</h1>
								</Zoom>
							</div>
							<Container> 
								<div className ="container " id="pet">
								<div>
									<Zoom Top>
									<h2 className="h2Galleries">Latte` Art </h2>
									</Zoom>
								</div>
                                <Zoom Top>
								<Row className="galleryjs">
									<Col xs={6} md={3} lg={3}>
										<Image src={g1} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={g2} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={g3} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={g4} thumbnail />
									</Col>

								</Row>
								</Zoom>
								</div>
								<div>
									<Zoom Top>
									<h2 className="h2pre mt-3">Our Other Drinks</h2>
									</Zoom>
								</div>
								<Zoom Top>
								<Row className="galleryjs">
									<Col xs={6} md={3} lg={3}>
										<Image src={card11} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={pw} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={card9} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={card10} thumbnail />
									</Col>
									
								</Row>
								</Zoom>

								<div>
									<Zoom Top>
									<h2 className="h2pre ">Our pastries and cakes</h2>
									</Zoom>
								</div>
								<Zoom Top>
								<Row className="galleryjs">
									<Col xs={6} md={3} lg={3}>
										<Image src={g5} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={g6} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={g7} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={g8} thumbnail />
									</Col>

								</Row>
								</Zoom>
								<div>
									<Zoom Top>
									<h2 className="h2pre">Our Pies</h2>
									</Zoom>
								</div>
								<Zoom Top>
								<Row className="galleryjs">
									<Col xs={6} md={3} lg={3}>
										<Image src={f1} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={f2} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={f3} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={f4} thumbnail />
									</Col>

								</Row>
								</Zoom>
								<div>
									<Zoom>
									<h2 className="h2pre">Our Ambience</h2>
									</Zoom>
								</div>
								<Zoom Top>
								<Row className="galleryjs" >
									<Col xs={6} md={3} lg={3}>
										<Image src={t1} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={t2} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={t3} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={t4} thumbnail />
									</Col>
								</Row>
								</Zoom>
								<div>
								<Zoom Top>

									<h2 className="h2pre">Organised party events</h2>
									</Zoom>
								</div>
								<Zoom Top>
								<Row className="galleryjs">
									<Col xs={6} md={3} lg={3}>
										<Image src={b1} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={b2} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={b3} thumbnail />
									</Col>
									<Col xs={6} md={3} lg={3}>
										<Image src={b4} thumbnail />
									</Col>

								</Row>
								</Zoom>

							</Container>

						</div>
					</div>
				</div>
			</div>



		)
	}
}

export default Galleries
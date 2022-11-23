import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
// import ParticipateProject from './ParticipateProject';


export default function AppsCard(props) {


    return (
        <>
            <div className='dashboardListing'>
                <Card style={{ width: '20rem', borderRadius: '2rem' }}>
                    {/* <Card.Img src="https://picsum.photos/seed/picsum/400/300" alt="Card image" /> */}
                    {/* <Card.ImgOverlay> */}



                    <Card.Body>
                        <Card.Title>{props.Title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Subtitle</Card.Subtitle>
                        <Card.Text>
                            <Badge pill bg="dark">
                                {/* {x.maxAmt} ETH */}
                            </Badge>{' '}
                        </Card.Text>
                        {/* <Button onClick={() => { setModal(x) }}>Participate</Button> */}
                    </Card.Body>
                    {/* </Card.ImgOverlay> */}
                </Card>
            </div>
        </>

    )
}

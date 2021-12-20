import React from 'react';
import { Card } from 'react-bootstrap';

const Blogg = ({blog}) => {
    return (
       <section className="col-md-4">
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={blog.img} />
  <Card.Body>
    <Card.Title>{blog.name}</Card.Title>
    <Card.Text>
      {blog.description}
    </Card.Text>
    
  </Card.Body>
</Card>
           
       </section>
            
        
    );
};

export default Blogg;
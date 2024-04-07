import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useRef } from "react";


function Login() {
    const emailref=useRef()
    const passwordref=useRef()
    
   
    const signInHandler = async()=>{}
    

  return (
    <div style={{  backgroundColor: "#f1f3f4",minHeight: "100vh" }}>
          <center style={{paddingTop: "160px" }}> 
        <Card style={{ width: "52rem" ,height:"14rem",boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",borderRadius: "12px", backgroundColor: "#ffffff" }}>
           <Card.Body>
             <Card.Header>Log In</Card.Header>
            <Card.Text>
            <Form>
      <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
          ref={emailref} />
    </Form.Group>
   <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" 
          ref={passwordref}/>
 </Form.Group>
         </Row>
      </Form>
        </Card.Text>
         <Card.Footer className="text-muted"> 
            <Button size="lg" variant="primary"
            onClick={signInHandler}>Log In</Button>
        </Card.Footer>
     </Card.Body>
    </Card>
      </center> 
    </div>
  );
}

export default Login;
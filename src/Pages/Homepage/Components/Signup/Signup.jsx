import React, {useState, useEffect} from "react";
import {Container, Row, Col, Button, Modal, Stack, ModalHeader} from "react-bootstrap";
import { Form, InputGroup, FormControl, FloatingLabel} from "react-bootstrap";
import { Facebook, Apple, Twitter, PersonFill, } from 'react-bootstrap-icons';
import '../Signup/Signup.css';
  

function Signup() {

  const [signupModal, setSignupModal] = useState(true);
  const [signinModal, setSigninModal] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [firstName, setFirstName] = useState("");
  //const [lastName, setLastName] = useState("");
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [showSuccessModal, setShowSuccessModal] = useState(false);

const [account, setAccount] = useState({
  firstName: '',
  lastName: '',
  email: '',
  password: ''
})
 



 const showSigninModal = (event) => {
  event.preventDefault();
  setSignupModal(false);
  setSigninModal(true);
 }

 const showSignupModal = (event) => {
  event.preventDefault();
  setSignupModal(true);
  setSigninModal(false);
 }

 const handleSubmit = (event) => {
  alert('A form was submitted');

  fetch('http://localhost:3001/api/users/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(account)
    }).then(function(response) {
      console.log(response)
      response.json();
    });

  event.preventDefault();
}
 
    



    return (
        <div>

<Button className="navbar-btn nbtn-2" onClick={() => setShow(true)}>
        Sign Up
        </Button>

{signupModal && 
 <Modal 
 show={show}
 onHide={handleClose}
 aria-labelledby="example-custom-modal-styling-title"
 centered
 className="signin-modal"
>
<Container>
   <Row className="center">
       <Col>
       <Modal.Header className="signin-header" closeButton>
   
 </Modal.Header>
 <Modal.Body>

 <Modal.Title id="example-custom-modal-styling-title">
     <h3 className="text-center">Signup</h3>
   </Modal.Title>

 <div className="signin-icon-div">
  <Button className="icon-btns"><Facebook /></Button>
 <Button className="icon-btns"><Twitter /></Button>
 <Button className="icon-btns"><Apple /></Button>
 </div>

 <div className="line-div">
 <p className="line"></p>
 <p className="m-0">OR</p>
 <p className="line"></p>
 </div>

 <div className="form-div">
 <Form className="signin-form" onSubmit={handleSubmit}>

 <InputGroup className="mb-1">
<InputGroup.Text id="basic-addon1">b</InputGroup.Text>
<FloatingLabel label="Your Name"  className="label">
<FormControl
placeholder="Your Name"
aria-label="name"
type="text"
defaultValue={account.firstName}
onChange={(e) => {
e.preventDefault();
let acc = account
acc.firstName = e.target.value
setAccount(acc)
}}
aria-describedby="basic-addon1"
/>
</FloatingLabel>

</InputGroup>
<InputGroup className="mb-1">
<InputGroup.Text id="basic-addon1">b</InputGroup.Text>
<FloatingLabel label="Your Name"  className="label">
<FormControl
placeholder="Your Name"
aria-label="name"
type="text"
defaultValue={account.lastName}
onChange={(e) => {
  e.preventDefault();
  let acc = account
  acc.lastName = e.target.value
  setAccount(acc)
  }}
aria-describedby="basic-addon1"
/>
</FloatingLabel>

</InputGroup>


 
 <InputGroup className="mb-1">
<InputGroup.Text id="basic-addon1"><PersonFill /></InputGroup.Text>
<FloatingLabel controlId="floatingInput" label="Email or Phone number" className="label">
<FormControl
placeholder="Email or Phone number"
aria-label="Email address"
type="email"
defaultValue={account.email}
onChange={(e) => {
  e.preventDefault();
  let acc = account
  acc.email = e.target.value
  setAccount(acc)
  }}
aria-describedby="basic-addon1"
/>
</FloatingLabel>

</InputGroup>


<InputGroup className="mb-1">
<InputGroup.Text id="basic-addon1">b</InputGroup.Text>
<FloatingLabel label="Create password"  className="label">
<FormControl
placeholder="Create password"
aria-label="Password"
type="password"
defaultValue={account.password}
onChange={(e) => {
  e.preventDefault();
  let acc = account
  acc.password = e.target.value
  setAccount(acc)
  }}
aria-describedby="basic-addon1"
className="s-form"
/>
</FloatingLabel>

</InputGroup>







<Form.Group className="mb-3 d-flex fs-md-13" controlId="formBasicCheckbox">
<Form.Check type="checkbox" label="Remember me" className="me-auto"/>
<a>Forgot password?</a>
</Form.Group>
<Button variant="primary" type="submit" size="lg" className="signin-btn mb-05"> Signup</Button>
<p className="fs-md-13 text-center">I already have an account <Button variant="link" onClick={showSigninModal} className="signup-cta">Sign in</Button></p>
</Form>
 </div>




 </Modal.Body>
       </Col>
       </Row>
</Container>
 
</Modal>
        }
        
{ signinModal && 
 <Modal
 show={show}
 onHide={() => setShow(false)}
 aria-labelledby="example-custom-modal-styling-title"
 centered
 className="signin-modal"
>
<Container>
   <Row className="center">
       <Col>
       <Modal.Header className="signin-header" closeButton>
       </Modal.Header>
   
 
 <Modal.Body>

 <Modal.Title id="example-custom-modal-styling-title">
     <h3 className="text-center">Login</h3>
   </Modal.Title>

 <div className="signin-icon-div">
  <Button className="icon-btns"><Facebook /></Button>
 <Button className="icon-btns"><Twitter /></Button>
 <Button className="icon-btns"><Apple /></Button>
 </div>

 <div className="line-div">
 <p className="line"></p>
 <p className="m-0">OR</p>
 <p className="line"></p>
 </div>

 <div className="form-div">
 <Form className="signin-form">
 <InputGroup className="mb-1">
<InputGroup.Text id="basic-addon1"><PersonFill /></InputGroup.Text>
<FloatingLabel controlId="floatingInput" label="Email or Phone number" className="label">
<FormControl
placeholder="Email or Phone number"
aria-label="Email address"
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
aria-describedby="basic-addon1"
/>
</FloatingLabel>

</InputGroup>


<InputGroup className="mb-1">
<InputGroup.Text id="basic-addon1">  </InputGroup.Text>
<FloatingLabel label="Password"  className="label">
<FormControl
placeholder="Password"
aria-label="Password"
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
aria-describedby="basic-addon1"
className="s-form"
/>
</FloatingLabel>

</InputGroup>



<Form.Group className="mb-3 d-flex fs-md-13" controlId="formBasicCheckbox">
<Form.Check type="checkbox" label="Remember me" className="me-auto"/>
{/*<Link to="/reset">Forgot password?</Link>*/}
</Form.Group>
<Button variant="primary" type="submit" size="lg" className="signin-btn mb-05" 
>Login</Button>
<p className="fs-md-13 text-center">Don't have an account? <Button variant="link" onClick={showSignupModal} className="signup-cta">Sign up</Button></p>
</Form>
 </div>




 </Modal.Body>
       </Col>
   </Row>
</Container>
 
</Modal>

}

{
          showSuccessModal && <Modal
          show={show}
          onHide={() => setShow(false)}
          aria-labelledby="example-custom-modal-styling-title"
          centered
          className="signin-modal"
        >
          <Container>
            <Row className="center">
              <Col>
                <Modal.Header className="success-modal-header">
                  <Modal.Title id="example-custom-modal-styling-title" className="text-center">
                    Show something
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="success-modal-body">
                  <p className="p">We can't thank you enough!</p>
                  <p className="p2">Your registration was successful</p>
                  {/*<Link to="/dashboard">
                  <Button className="navbar-btn nbtn-2" onClick={handleClose}>Go to Dashboard</Button>
</Link>*/}
                  
  
  
  
  
                </Modal.Body>
              </Col>
            </Row>
          </Container>
  
        </Modal>
    }
        
        </div>
    )

}

export default Signup;
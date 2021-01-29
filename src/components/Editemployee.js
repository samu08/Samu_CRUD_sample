import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  

function Editemployee(props){


    const [employee, setemployee] = useState({ id:'',name: '', email: '', gender: ''});  
    const [showLoading, setShowLoading] = useState(false);  
    const apiUrl = "http://localhost:4000/Sampleinfo?id=" + props.match.params.id;  

    useEffect(() => {
        const fetchData = async () => {
         const result = await axios(apiUrl);
         setemployee(result.data);
         //setShowLoading(false);
        };
       
        fetchData();
       }, []);

       const UpdateEmployee = (e) => {  
        
        e.preventDefault();  
    
        debugger;  
    
        const data = {id:props.match.params.id, name:employee.name, email: employee.email,gender: employee.gender};  
    
        axios.put(`http://localhost:4000/Sampleinfo/${this.props.match.params.id}`, data)  
    
          .then((result) => {  
    
            props.history.push('/EmployeList')  
    
          });  
    
      };  
    
      const onChange = (e) => {  
    
        e.persist();  
    
        debugger;  
    
        setemployee({...employee, [e.target.name]: e.target.value});  
    
      }


      return (  
                
        <div className="app flex-row align-items-center">  
    
          <Container>  
    
            <Row className="justify-content-center">  
    
              <Col md="12" lg="10" xl="8">  
    
                <Card className="mx-4">  
    
                  <CardBody className="p-4">  
    
                    <Form onSubmit={UpdateEmployee}>  
    
                      <h1>Update form</h1>  
    
                      <InputGroup className="mb-3">  

      
    
                        <Input type="text" name="name" id="name" placeholder="Name" value={employee.name} onChange={onChange}  />  
    
                      </InputGroup>  
    
                       <InputGroup className="mb-3">  
    
      
    
                        <Input type="text" placeholder="Email" name="email" id="email" value={employee.email} onChange={onChange}/>  
    
                      </InputGroup>  
    
                      <InputGroup className="mb-3">  
    
      
    
                        <Input type="text" placeholder="gender" name="gender" id="gender"  value={employee.gender} onChange={onChange}  />  
    
                      </InputGroup>  
    
                      
                 <CardFooter className="p-4">  
    
                    <Row>  
    
                      <Col xs="12" sm="6">  
    
                        <Button type="submit" className="btn btn-info mb-1" block ><span>update</span></Button>  
    
                      </Col>  
    
                      <Col xs="12" sm="6">  
    
                        <Button className="btn btn-info mb-1" block><span>Cancel</span></Button>  
    
                      </Col>  
    
                    </Row>  
    
                  </CardFooter>  
    
                    </Form>  
    
                  </CardBody>  
    
                </Card>  
    
              </Col>  
    
            </Row>  
    
          </Container>  
    
        </div>  
    
      )  
    

}
export default Editemployee
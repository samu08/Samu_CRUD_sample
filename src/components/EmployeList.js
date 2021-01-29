import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap'; 

function EmployeList(props){
    const [data, setData] = useState([]);  
    useEffect(() => {
        const fetchData = async () => {
         const result = await axios("http://localhost:4000/Sampleinfo");
         setData(result.data);
         //setShowLoading(false);
        };
       
        fetchData();
       }, []);


       const deleteeployee = (id) => {  
        
            debugger;  
        
            axios.delete('http://localhost:4000/Sampleinfo?id='+ id)  
        
              .then((result) => {  
        
                props.history.push('/EmployeList')  
        
              });  
        
          };  
        
          const editemployee = (id) => {  
        
            props.history.push({  
        
              pathname: '/edit/' + id  
        
            });  
        
          };  
         
       
       return (  
     
         <div className="animated fadeIn">  
     
           <Row>  
     
             <Col>  
     
               <Card>  
     
                 <CardHeader>  
     
                   <i className="fa fa-align-justify"></i> Employee List  
     
                   </CardHeader>  
     
                 <CardBody>  
     
                   <Table hover bordered striped responsive size="sm">  
     
                     <thead>  
     
                       <tr>  
                       <th>ID</th>  
                         <th>Name</th>  
     
                         <th>Email</th>  
     
                         <th>Gender</th>  
     
                        
     
                       </tr>  
     
                     </thead>  
     
                     <tbody>  
     
                       {  
     
                         data.map((item, idx) => {  
     
                           return <tr key={item.id}>  
                             <td>{item.id}</td>  
                             <td>{item.name}</td>  
     
                             <td>{item.email}</td>  
     
                             <td>{item.gender}</td>  
     
                            
     
     
                             <td>  
     
                               <div className="btn-group">  
     
                                 <button className="btn btn-warning" onClick={() => { editemployee(item.Id) }}>Edit</button>  
     
                                 <button className="btn btn-warning" onClick={() => { deleteeployee(item.Id) }}>Delete</button>  
     
                               </div>  
     
                             </td>  
     
                           </tr>  
     
                         })}  
     
                     </tbody>  
     
                   </Table>  
     
                 </CardBody>  
     
               </Card>  
     
             </Col>  
     
           </Row>  
     
         </div>  
     
       )  
     
     }  
     
       











export default EmployeList
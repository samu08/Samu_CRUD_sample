import React, { useState, useEffect } from 'react'  
import { Jumbotron, Button } from 'reactstrap';
//import {Card,  CardBody, Button,Row,Col} from 'reactstrap';
//import { PaginationControls,Pagination } from '@availity/pagination';
import EmployeList from './EmployeList';

//import {Form,Field} from '@availity/form'
//import {SelectField} from '@availity/select'


function Page1(){


    return (


        <div>
          <Jumbotron>
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-2" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
          
          </Jumbotron>
        </div>
        /*
        <div>
<Card>

    <CardBody>
       
        <form>
        <col md ="6">
            <SelectField lable="Action" name="action" lableclass="required" />
              </col>

            </form>

        </CardBody>
    </Card>
            </div>*/
        
      );
}

export default Page1


























/*
<div>
          <Jumbotron>
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-2" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
          
          </Jumbotron>
        </div>
        */
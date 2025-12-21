import React from 'react';
import { Link } from 'react-router';
import Button from 'react-bootstrap/Button';
// import sell from '../images/Sellpageimg.png';


export default function SellPage() {
  return (
    <>
    <div className='d-flex flex-wrap backgroundofsell1'>  
        <div className='p-5 sellleft'>
        <h2>welcome, Our site</h2>
        <p>Zero referal fee on multiple product</p>
        <h5>if not signup than sign up</h5>
        <Button className='btn btn-info'>
            <Link to={'/signup'} className='linkstyle'>
            Sign Up
            </Link>
        </Button>
      </div>
        <div className='p-5 logo flex-norepeat'>
        </div>
    </div>
    </>
  )
}

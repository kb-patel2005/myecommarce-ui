import React from 'react'

export default function About() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ textAlign: 'center', margin: '20px 0' }}>About This E-commerce App</h1>
        <p style={{ textAlign: 'center', margin: '20px 0', fontSize: '1.2em' }}>
            
            In this E-commerce app, a new user can sign up by entering their email address. The email is saved in the local storage so the user can stay logged in easily. After logging in, the user can upload and sell their own products by filling out a product form with details like name, price, and description. These product details are stored safely in the database. The app also has a shopping cart where users can add the products they want to buy. This makes the app simple to use, as users can both shop and sell products on the same platform.
            
            </p>
            </div>
    </div>
  )
}

import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function ErrorPage() {
  const navigate = useNavigate()
  return <div>
    <p>Page Not Found</p>
    <button className='btn btn-primary' onClick={() => navigate('/')}>Go To main page</button>
    </div>;
}

import React from 'react';
import './ImageBlock.css';
import { Link } from 'react-router-dom';

function ImageBlock({title,url}) {
  return (
    <Link to="/store">
    <div className='category-block'>
        <img alt="img" src={url} className='category-image'/>
        <p style={{color:'black',textDecoration:'none'}} className=''>{title}</p>
    </div>
    </Link>
  )
}

export default ImageBlock
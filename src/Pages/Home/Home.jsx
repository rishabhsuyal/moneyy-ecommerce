import React from 'react';
import './Home.css';
import ImageBlock from '../../Component/ImageBlock/ImageBlock';
import {img} from '../../data'; 


function Home() {
   
    return (
        <div className='home'>
            <div className='category-section-image'>
            {
                img.map(i=> <ImageBlock title={i.title} url={i.url} />)
            }
               
            </div>
            <div className='image-div-1'>
                <img alt="img" className='image-1' src="https://static.toiimg.com/photo/80482428.cms?imgsize=99038"/>
                <img alt="img" className='image-1' src='https://www.malemodelscene.net/wp-content/uploads/2020/02/Useful-Tips-for-Improving-Your-Career-as-a-Male-Model-2.jpg'/>
                <img alt="img" className='image-1' src="https://static.toiimg.com/photo/80482428.cms?imgsize=99038"/>
                <img alt="img" className='image-1' src='https://www.malemodelscene.net/wp-content/uploads/2020/02/Useful-Tips-for-Improving-Your-Career-as-a-Male-Model-2.jpg'/>
                <img alt="img" className='image-1' src="https://static.toiimg.com/photo/80482428.cms?imgsize=99038"/>
                <img alt="img" className='image-1' src='https://www.malemodelscene.net/wp-content/uploads/2020/02/Useful-Tips-for-Improving-Your-Career-as-a-Male-Model-2.jpg'/>
            </div>
        </div>
    )
}

export default Home
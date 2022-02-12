import '../styles/profileSlider.css';
import appData from '../backend/appData';
import { KeyboardArrowLeft, KeyboardArrowRight} from '@material-ui/icons';
import { useState } from 'react';

function ProfileSlider() {
    const [current, setCurrent] = useState(0);
    const length = appData.length;

    const nextSlide = () =>{
        setCurrent(current === length-1 ? 0 : current+1);
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? length-1 : current-1);
    }

    if(!Array.isArray(appData) || appData.length <= 0){
        return 0;
    }
    return (
        <div className='profileSlider'>
            <div className='arrow-button'>
                <div className='leftArrow' onClick={ prevSlide } >
                    <KeyboardArrowLeft fontSize='large'/>
                    <span>Previous</span>
                </div>
                <div className='rightArrow' onClick={ nextSlide } >
                    <span>Next</span>
                    <KeyboardArrowRight fontSize='large'/>
                </div>
            </div>
            {
                appData.map((slide, index) =>{
                    return (
                        <div className={ index === current ? 'slider active' : 'slider'} key={index}>
                            {
                                index === current && (
                                    <div className='slider-container'>
                                        <div className='doc-section'>
                                            <h3>{ slide.title }</h3>
                                            <p>{ slide.desc }</p>
                                        </div>
                                        <div className='image'>
                                            <img src={ slide.image } alt="slider" />
                                        </div>                                    </div>
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProfileSlider
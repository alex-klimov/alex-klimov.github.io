import React from 'react'
import SkodyImpactData from '../SkodyImpact.json'
import Impact from './Impact/Impact'
import Testimonial from './Testimonial/Testimonial'
import ContinuousSlider from '../../Slider/ImageSlider'

const SkodyImpact = () => {

    const slideData = [
        { bgColor: '#4CAF50', content: '/assets/sliderImages/proshop-logo.png' },
        { bgColor: '#4CAF50', content: '/assets/sliderImages/Dynamics-365-logo.png' },
        { bgColor: '#4CAF50', content: '/assets/sliderImages/acumatica-logo.png' },
        { bgColor: '#4CAF50', content: '/assets/sliderImages/fulcrump-logo.png' },
        { bgColor: '#4CAF50', content: '/assets/sliderImages/SAP_Logo.png' },
        { bgColor: '#4CAF50', content: '/assets/sliderImages/Sage-logo 1.png' },
      ];

    const ImpactData = SkodyImpactData.page.sections[0]
    const TestimoniaData = SkodyImpactData.page.sections[1]
    return (
        <>
            <Impact ImpactData={ImpactData}/>
            <ContinuousSlider slidesData={slideData} rtl={false} />
            <Testimonial TestimoniaData={TestimoniaData}/>
        </>
    )
}

export default SkodyImpact

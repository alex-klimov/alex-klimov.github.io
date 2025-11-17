import styles from "./TestimonialsSection.module.css";
import HeaderSection from "../../CommonComponent/HeaderSection/HeaderSection";
import testimonialData from "./TestimonialsSection.json";
import TestimonialSlider from "./TestimonialSlider/TestimonialSlider";
const TestimonialsSection = () => {
    const testimonials = testimonialData.testimonialsSection.testimonials;
  return (
    <>
    <div className={` ${styles.testimonialContainer}`}>

      <HeaderSection tag={testimonialData.testimonialsSection.tag} title={testimonialData.testimonialsSection.title} />
      <TestimonialSlider testimonials={testimonials} />
      <div className={styles.statsBox}>
          <div>
            <h2 className={`title-h2 regular ${styles.colTesti}`}>15%</h2>
            <p className={`label-sub2 ${styles.colTesti}`}>Fewer<br />late jobs</p>
          </div>
          <div>
            <h2 className={`title-h2 regular ${styles.colTesti}`}>12%</h2>
            <p className={`label-sub2 ${styles.colTesti}`}>Higher<br />throughput</p>
          </div>
          <div>
            <h2 className={`title-h2 regular ${styles.colTesti}`}>30%</h2>
            <p className={`label-sub2 ${styles.colTesti}`}> Setup variance<br />reduced</p>
          </div>
        </div>
    </div>

    </>
  );
};

export default TestimonialsSection;

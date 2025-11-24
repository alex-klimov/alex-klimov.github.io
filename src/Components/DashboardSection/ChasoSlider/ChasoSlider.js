import styles from './ChasoSlider.module.css';
import images from './ChasoSlider.json';
import CommonText from '../../CommonText/CommonText';

const ContineslySlider = () => (
  <div className={styles.marqueeContainer}>
    <div className={styles.marquee}>
      {images.map((item, idx) => (
        <div
          key={idx}
          className={styles.imageBox}
          style={{ backgroundColor: item.bgColor }}
        >
          <img src={item.image} alt={`slide-${idx}`} className={styles.image} />
          <div className={styles.overlay}>
            <CommonText subHeading={item.title} size="title-h3" weight="font-weight-500"/>
            <CommonText subHeading={item.desc} size="label-sub2" fontFamily="prompt"/>

          </div>
        </div>
      ))}
      {images.map((item, idx) => (
        <div
          key={`dup-${idx}`}
          className={styles.imageBox}
          style={{ backgroundColor: item.bgColor }}
        >
          <img src={item.image} alt={`slide-dup-${idx}`} className={styles.image} />
          <div className={styles.overlay}>
            <CommonText subHeading={item.title} size="title-h3" weight="font-weight-500"/>
            <CommonText subHeading={item.desc} size="label-sub2" fontFamily="prompt"/>

          </div>
        </div>
      ))}
      
    </div>
  </div>
);

export default ContineslySlider;

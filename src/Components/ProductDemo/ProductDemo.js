import React, { useState } from "react";
import productDemo from './ProductDemo.json'
import styles from './ProductDemo.module.css'
import CommonText from "../CommonText/CommonText";


function ProductDemo() {
    const benefitSections = productDemo.benefitSections;
    const slogna = benefitSections.content.paragraph;
    const description = benefitSections.content.description;
    const arrow = benefitSections.arrows;

    const highlightedText = slogna.split(/(sequence)/gi).map((part, index) =>
        part.toLowerCase() === "sequence" ? (
          <span key={index} style={{ backgroundColor: `var(--blue-background)` }}>{part}</span>
        ) : (
          part
        )
      );
    const [currentImage, setCurrentImage] = useState(productDemo.images[0]);

    const handleButtonClick = (imageId) => {
        const newImage = productDemo.images.find((image) => image.id === imageId);
        setCurrentImage(newImage);
    };

    return (
        <div className={`homePageContainer ${styles.outerContainer}`}>
            <div className={styles.mainContainer}>
                <div className={styles.imageContainer}>
                    <img src={currentImage.url} alt={currentImage.description} className={styles.image} />
                </div>

                <div className={styles.buttonContainer}>
                    {productDemo.buttons.map((button) => (
                        <button
                            key={button.id}
                            onClick={() => handleButtonClick(button.imageId)}
                            className={styles.button}
                        >
                            {button.label}
                        </button>

                    ))}
                </div>
            </div>
            <div className={styles.benefitContainer}>
                <CommonText heading={benefitSections.title} size="title-h2" weight="bold" />
                <div className={styles.detailContainer}>
                    <div className={styles.details}>
                        <CommonText smallDescription={highlightedText} size='label-sub1' weight='medium' />
                        <div className={styles.descriptionPoint}>

                            <CommonText smallDescription={description} size='body-lg' weight='medium' />
                        </div>
                    </div>
                    <div className={styles.detailPoints}>
                        {benefitSections.points.map((item, index) => (
                            <div key={index} className={styles.points}>
                                <img src={arrow.scr} alt={arrow.alt} />
                                <CommonText smallDescription={item} size='label-sub2' fontFamily='prompt' />
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProductDemo;

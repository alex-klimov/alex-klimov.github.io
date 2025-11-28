import styles from './CommonText.module.css';
import ReactMarkdown from 'react-markdown';

export default function CommonText({
    heading,
    smallDescription,
    subHeading,
    size, 
    subHeadingh4,
    weight,
    newDescription,
    fontFamily,  
}) {
    const combinedClass = `${[size]} ${[weight]}`;
    const customStyles = fontFamily ? { fontFamily } : {}; 
    return (
        <div className={`${styles.root} commonText`}>
            {heading ? <h2 className={combinedClass} style={customStyles}>{heading}</h2> : null}
            {subHeading ? <h3 className={combinedClass} style={customStyles}>{subHeading}</h3> : null}
            {subHeadingh4 ? <h4 className={combinedClass} style={customStyles}>{subHeadingh4}</h4> : null}
            {smallDescription ? <p className={combinedClass} style={customStyles}>{smallDescription}</p> : null}
            {newDescription ? <p className={combinedClass} style={customStyles} ><ReactMarkdown>{newDescription}</ReactMarkdown></p> : null}
        </div>
    );
}


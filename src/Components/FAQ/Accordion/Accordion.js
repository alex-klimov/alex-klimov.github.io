// import React, { useState } from 'react';
// import styles from './Accordion.module.css'; // Optional for custom styles

// const Accordion = ({ items }) => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const handleClick = idx => {
//     setOpenIndex(openIndex === idx ? null : idx);
//   };

//   return (
//     <div className={styles.accordion}>
//       {items.map((item, idx) => (
//         <div key={idx} className={styles.item}>
//           <button
//             className={styles.title}
//             onClick={() => handleClick(idx)}
//             aria-expanded={openIndex === idx}
//             aria-controls={`faq-panel-${idx}`}
//           >
//             {item.question}
//             <span className={styles.plus}>{openIndex === idx ? '-' : '+'}</span>
//           </button>
//           {openIndex === idx && (
//             <div
//               id={`faq-panel-${idx}`}
//               className={styles.content}
//             >
//               <span>{item.answer}</span>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Accordion;
import React, { useState } from "react";
import styles from "./Accordion.module.css";
import CommonText from "../../CommonText/CommonText";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const handleClick = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, idx) => (
        <div key={idx} className={styles.item}>
          <button
            className={styles.title}
            onClick={() => handleClick(idx)}
            aria-expanded={openIndex === idx}
            aria-controls={`faq-panel-${idx}`}
          >
            <div>
              <CommonText
                subHeading={item.question}
                size="label-H3"
                weight="font-weight-500"
              />
              <p className={styles.shortAnswer}>
                {/* <CommonText
                    subHeading='A:'
                    size="label-H3-sub3"
                    fontFamily="prompt"
                  /> */}
                {/* <strong>A:</strong>{" "} */}
                {/* {openIndex === idx ? (
                  <CommonText
                    subHeading={item.answer.split(".")[0]}
                    size="label-H3-sub3"
                    fontFamily="prompt"
                  />
                ) : (
                  <CommonText
                    subHeading={item.answer.split(".")[0]}
                    size="label-H3-sub3"
                    fontFamily="prompt"
                  />
                )} */}
              </p>
            </div>

            <span className={styles.plus}>{openIndex === idx ? "−" : "+"}</span>
          </button>

          {openIndex === idx && (
            <div id={`faq-panel-${idx}`} className={styles.content}>
              <CommonText
              subHeading={item.answer}
              size="label-H3-sub3"
              fontFamily='prompt'
            />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

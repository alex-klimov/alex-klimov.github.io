import React from 'react'
import termsData from './terms.json'
import styles from './terms.module.css'
import ReactMarkdown from 'react-markdown';

const TermsConditions = () => {
  return (
   <div
    id='term-conditions'
      className={`homePageContainer ${styles.markdown}`}
      style={{ padding: '1rem' }}>
      <ReactMarkdown>{termsData.content}</ReactMarkdown>
    </div>
  )
}

export default TermsConditions

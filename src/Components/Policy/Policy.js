import React from 'react';
import ReactMarkdown from 'react-markdown';
import policyData from './Policy.json'; 
import styles from './Policy.module.css'

const Policy = () => {
  return (
    <div
      className={`homePageContainer ${styles.markdown}`}
      style={{ padding: '1rem' }}>
      <ReactMarkdown>{policyData.content}</ReactMarkdown>
    </div>
  );
};

export default Policy;

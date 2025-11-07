import React from "react";
import HeaderSection from "../../CommonComponent/HeaderSection/HeaderSection";
import statistics from "./StatisticsSection.json";
import CommonText from "../CommonText/CommonText";
import styles from './StatisticsSection.module.css';

const StatisticsSection = () => {
  const statisticsData = statistics.statisticsSection.stats;
  return (
    <>
      <HeaderSection
        tag={statistics.statisticsSection.tag}
        title={statistics.statisticsSection.title}
        subtitle={statistics.statisticsSection.subtitle}
      />
      <div className={`homePageContainer ${styles.performanceStatsContainer}`}>
        {statisticsData.map((value,index)=>(
          <div key={index} className={styles.statBox}>
            <CommonText
              smallDescription={value.value}
              size="title-64"
              weight="font-weight-500"
              fontFamily='SF Pro'
            />
            <CommonText
              smallDescription={value.description}
              size="title-24"
              fontFamily='SF Pro'


            />
          </div>
          
        ))}
      </div>
    </>
  );
};

export default StatisticsSection;

import React from 'react';
import PageHeaderContent from '../../PageHeaderContent/PageHeaderContent';
import { GrDocument } from 'react-icons/gr'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import utills from './utills';
import './Resume.scss'

const Resume = () => {
  return (
    <section id='resume' className='resume'>
      <PageHeaderContent headerText ='My Resume' icon={<GrDocument size={40}/>}></PageHeaderContent>
      <div className='timeline'>
         <div className='timeline__experience'>
          <h3 className='timeline__experience__header-text'>Experience</h3>
          <VerticalTimeline
           layout={"1-column"}
           lineColor='var(--yellow-theme-main-color)'
          >
            {
              utills.experience.map((item,i)=>(
                <VerticalTimelineElement key={i} className='timeline__experience__vertical-timeline-element'>

                 <div className='vertical-timeline-element-title-wrapper'>
                  <h3 className='vertical-timeline-element-title'></h3>

                 </div>

                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
         </div>

         <div className='timeline__education'>
          <h3 className='timeline__education__header-text'>Education</h3>

         </div>
      </div>
    </section>
  );
};

export default Resume;
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

function Experience() {
  return (
    <div className='experience'>
    <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement className="vertical-timeline-element--education" date="2016-2018" iconStyle={{background: "#3e497a", color: "#fff"}}/>
    </VerticalTimeline>
    </div>

  )
}

export default Experience
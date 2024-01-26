import React from 'react';
import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector } from '@mui/lab';
import "./koulutus.scss";
function Koulutus() {
  return (
    <div id='maincenter'>
    <h1 id='koulu'>Koulutus</h1>
    <section id="koulutus">
    <div className="big-box">
    <Timeline className='TimeLine'>
      <TimelineItem>
        <TimelineOppositeContent variant='h5' color="white">
          2013-2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} variant='h5' color="white" >Ylikiimingin Koulu</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent variant='h5' color="white">
          2022-2025
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} variant='h5' color='white'>Osao Tieto-ja Viestintätekniikka</TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
    </section>
    </div>
  );
}

export default Koulutus;
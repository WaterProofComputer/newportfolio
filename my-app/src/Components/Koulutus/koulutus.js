import React from 'react';
import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector } from '@mui/lab';
import "./koulutus.scss";


function Koulutus() {
  return (
    <div id='maincenter'>
    <h1 id='koulu'>Koulutus Ja Työkokemus</h1>
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
        <TimelineContent sx={{ py: '12px', px: 2 }} variant='h5'  color="white" >Ylikiimingin Koulu</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent variant='h5' color="white">
          2022-2025
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} variant='h5'  color='white'>Osao Tieto-ja Viestintätekniikka</TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
    <div className='big-box'>
    <div className='box-100'>
    <h3>
    Oulun Rakennusteho Oy
    </h3>
    <p className='työteksti'>
    Työskentelin Oulun Rakennusteholla työmää apulaisena kesällä 2023, 2022 ja 2021. Työtehtäviini kuului rakennusmateriaalien lajitteleminen ja muut rakennusapumiehen työt.
    </p>
    <h3>
    Telatek Oy
    </h3>
    <p className='työteksti'>
    Työskentelin kesätöissä Telatekillä 2020. Työtehtäviini kuului siivoaminen, tavaroiden lajitteleminen, uppopumppujen huoltaminen, maalaaminen ja metallisahan käyttö.
    </p>
    </div>
    </div>
    </section>
    </div>
  );
}

export default Koulutus;
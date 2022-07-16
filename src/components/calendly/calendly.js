import React from 'react'
import Section from '../section/Section'
import { PopupWidget } from "react-calendly";

function calendly() {
  return (
    <Section title="Schedule your Meeting" >
  <PopupWidget
  branding
  color="rgba(129,74,212,1)"
  iframeTitle="Calendly Scheduling Page"
  pageSettings={{
    backgroundColor: 'ffffff',
    hideEventTypeDetails: false,
    hideGdprBanner: true,
    hideLandingPageDetails: false,
    primaryColor: '00a2ff',
    textColor: '4d5055'
  }}
  prefill={{
    customAnswers: {
      a1: 'a1',
      a10: 'a10',
      a2: 'a2',
      a3: 'a3',
      a4: 'a4',
      a5: 'a5',
      a6: 'a6',
      a7: 'a7',
      a8: 'a8',
      a9: 'a9'
    },
    date: new Date('2022-07-14T09:24:40.534Z'),
    email: 'test@test.com',
    firstName: 'Jon',
    guests: [
      'janedoe@example.com',
      'johndoe@example.com'
    ],
    lastName: 'Snow',
    name: 'Jon Snow'
  }}
  rootElement={document.getElementById("root")}
  text="Click here to schedule!"
  textColor="#ffffff"
  url="https://calendly.com/saurabhsuranse/let-s-connect"
  utm={{
    utmCampaign: 'Spring Sale 2019',
    utmContent: 'Shoe and Shirts',
    utmMedium: 'Ad',
    utmSource: 'Facebook',
    utmTerm: 'Spring'
  }}
/>
    </Section>
  )
}

export default calendly

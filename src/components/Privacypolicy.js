import React from 'react'
import {
    Container,
    Header,
   
    Segment,
   
  } from 'semantic-ui-react';

export default function Privacypolicy() {
  return (
    <div style={{backgroundImage:'url(https://h2.gifposter.com/gifs/wow/8d4b1152fc01c302c363b041f35106f9.gif)',backgroundRepeat:'no-repeat',backgroundSize:'cover',color:'white',zIndex:'0.2'}}>
      <Container>
      <Segment>
        <Header as='h2'>Privacy Policy</Header>
        <p>
          Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website, including any other sites we own and operate.
        </p>
        <Header as='h3'>1. Information We Collect</Header>
        <p>
          We only collect information about you if we have a reason to do so – for example, to provide our services, to communicate with you, or to make our services better.
        </p>
        <p>
          We collect information in three ways: if and when you provide information to us, automatically through operating our services, and from outside sources.
        </p>
        <Header as='h3'>2. How We Use Information</Header>
        <p>
          We use the information we collect in a variety of ways in providing our service, including:
        </p>
        <ul>
          <li>Providing, operating, and maintaining our services</li>
          <li>Improving, personalizing, and expanding our services</li>
          <li>Understanding and analyzing how you use our services</li>
          <li>Developing new products, services, features, and functionality</li>
          <li>Communicating with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the service, and for marketing and promotional purposes</li>
          <li>Processing your transactions</li>
        </ul>
        <Header as='h3'>3. Security</Header>
        <p>
          We take the security of your personal information seriously and take measures to protect it. However, no method of transmission over the internet, or method of electronic storage, is 100% secure. Therefore, we cannot guarantee its absolute security.
        </p>
        <Header as='h3'>4. Changes to This Policy</Header>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>
        <Header as='h3'>5. Contact Us</Header>
        <p>
          If you have any questions about this Privacy Policy, please contact us at: info@example.com.
        </p>
      </Segment>
    </Container>


    </div>
  )
}

import Container from 'react-bootstrap/Container';


import { Form } from './Form';

export const FirstComponent = (props) => {
  return (
    <>
  <div className='TitlePage'>
     <Container className=''>
        <h1>Unlimited movies, TV</h1>
        <h1>shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>Ready to watch? Enter your email to create or restart your membership</p>
           <Form log={props.inFormSwitch} correct={props.first} set={props.second}/>
     </Container>
  </div>
    </>
  )
}

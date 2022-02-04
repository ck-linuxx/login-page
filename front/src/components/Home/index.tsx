import { CheckBoxDiv, Container, ForgotDiv, Form, Img, Section } from "./styles"
import { Button } from "../Button"

import homeImg from "../../assets/illustration.svg"
import logoImg from "../../assets/Logo.svg"
import { api } from "../../services/api"

export const Home = () => {
  


  return (
    <Container>
      <Img>
        <img src={homeImg} alt="" />
      </Img>

      <Section>
        <img src={logoImg} alt="" />
        <h2>Login to your Account</h2>
        <p>Sign in with Email</p>

        <Form>
          <p>Email</p>
          <input type="email" name="email"  
            placeholder="email@abc.com"
          />

          <p>Password</p>
          <input type="password" name="password" 
            placeholder="***********" 
          />
          
          <ForgotDiv>
            <CheckBoxDiv>
              <input type="checkbox" name=""  />
              <p>Remember Me</p>
            </CheckBoxDiv>
            <p><a href="#">Forgot Password?</a></p>
          </ForgotDiv>

          <Button>Login</Button>
        </Form>

        <p>Not Registered Yet? <strong /*onClick={#}*/>Create an account</strong></p>
      </Section>
      <a href="https://www.figma.com/community/file/1032944260806485156" 
        target="_blank">
        Desing by Tony Sebastian
      </a>
    </Container>
  )
}
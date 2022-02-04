import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 100%;
  max-height: 100%;

  overflow-y: none;

  border-radius: .375rem 0 .375rem 0;

  > a{
      text-decoration: none;
      position: fixed;
      color: #E0E0E0;
  }

  @media(max-width: 720px){
    > a{
      display: none;
    }
  }

  @media(max-width: 768px){
    margin-top: 1rem;
  }
`

export const Img = styled.div`
  > img{
    max-width: 98vw;
    max-height: 98vh;
    margin: .375rem .375rem 0 .375rem;
    border-radius: .375rem;   
  }

  @media(min-width: 2560px){
    > img {
      height: 100vh;
      margin: .375rem .375rem 0 .375rem;
      border-radius: .375rem;
      margin-bottom: 0;
    }
  }


  @media(max-width: 768px){
    > img{
      display: none;
    }
  }
`

export const Section = styled.div`
  margin: auto auto;
  align-items: center;
  max-width: 26.25rem;

  > img{
    margin-bottom: 2.25rem;
  }

  > h2{
    font-size: 2.25rem;
    font-weight: bold;
    font-family: "Nunito Sans", sans-serif;
    color: #525252;

    margin-bottom: 0.1875rem;
  }

  > p{
    font-family: "Nunito Sans", sans-serif;
    color: #525252;
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  > p:last-child{
    color: #828282;
    font-size: 1.125rem;
  }

  > p > strong{
    color: #7F265B;
    font-size: 1.125rem;

    cursor: pointer;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  > p {
    font-family: "Nunito Sans", sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    color: #828282;

    margin-bottom: 0.25rem;
  }

  > input{
    padding: 0.8125rem 0.625rem 0.8125rem 0.625rem;
    border-radius: 0.3125rem;
    border: 1px solid #DED2D9;
    margin-bottom: 1.5rem;
  }

  > button{
    align-items: center;
    justify-content: center;

    color: #FFFFFF;
    font-size: 1.125rem;
    font-weight: 800;
    font-family: "Nunito Sans", sans-serif;

    height: 3.125rem;

    cursor: pointer;

    transition: 0.2s;
  }

  > button:hover{
    opacity: 0.8;
  }
`

export const ForgotDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  > p > a{
    text-decoration: none;
    color: #7F265B;
    font-family: "Nutito Sans", sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
  }
`

export const CheckBoxDiv = styled.div`
  display: flex;
  align-items: center;

  > input{
    all: unset;
    margin-right: 0.5rem;

    width: 0.75rem;
    height: 0.75rem;
    border: 1px solid #828282;
    border-radius: 3px;

    cursor: pointer;
  }

  >input:checked{
    background: #7F265B;
  }

  > p {
    color: #A1A1A1;
    font-family: "Nutito Sans", sans-serif;
    font-size: 0.75rem;
  }
`
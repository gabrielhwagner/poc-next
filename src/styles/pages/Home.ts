import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 24px;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
  background-color: ${props => props.theme.colors.secondary};
  padding: 64px;
  border-radius: 10px;
  margin-top: 30px;
`

export const Input = styled.input`
  height: 50px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  padding: 4px 20px;
  font-size: 16px;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.white};
`

export const Button = styled.button`
  height: 50px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border-radius: 5px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 25px;
`

import styled from "styled-components";
const Wrappers = styled.div`
  background-color: lightblue;
  height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
  .form {
    padding: 8rem 2rem;
    margin: auto 0;
    width: 300px;
    background-color: #c8b5b5;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }

  .login-btn {
    width: 200px;
    margin: 0 auto;
    padding: 1rem 0;
    border-radius: 1rem;
    border: 1px solid black;
  }

  .form-row {
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
  }
  .form-label {
    margin-bottom: 0.5rem;
  }
  .form-input {
    padding: 0.5rem;
  }
  .bottom {
    font-size: 0.8rem;
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
  }
`;

export default Wrappers;

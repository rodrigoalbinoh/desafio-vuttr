import styled from 'styled-components';

export const Container = styled.div`
  header {
    h1 {
      margin: 10px 0 20px 0;
    }

    h2 {
      margin-bottom: 20px;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > form {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div.input {
      width: 60%;
    }

    div.checkbox {
      > label {
        margin-left: 5px;
        color: #170c3a;
      }
    }
  }
`;

export const ToolsContainer = styled.div`
  margin-top: 15px;
`;

export const Tool = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  opacity: 1;
  padding: 15px;

  & + div {
    margin-top: 10px;
  }

  div.tool-header {
    display: flex;
    justify-content: space-between;

    > a {
      font-size: 24px;
    }

    > button {
      background-color: transparent;
      border: none;
      font-weight: 600;
    }
  }

  div.tool-body {
    margin-top: 10px;

    > p {
      font-size: 18px;
    }
  }

  div.tool-footer {
    width: 100%;
    margin-top: 10px;

    div.tags {
      display: flex;
      flex-wrap: wrap;
      margin: -12px 0 0 -12px;
      width: calc(100% + 12px);

      > * {
        margin: 10px 0 0 10px;
      }

      span.tool-tag {
        font-weight: 600;
        & + span {
          /*margin-left: 10px;*/
        }
      }
    }
  }
`;

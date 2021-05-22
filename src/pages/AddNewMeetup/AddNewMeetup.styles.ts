import styled from "styled-components";

export const Container = styled.section`
  .form {
    display: flex;
    flex-direction: column;

    padding: 2rem 4rem;

    &__item {
      display: flex;
      flex-direction: column;

      &:not(:last-child) {
        margin-bottom: 0.8rem;
      }

      label {
        font-size: 1.1rem;
        font-weight: 500;
        letter-spacing: 1.3px;
        padding-bottom: 5px;
      }

      &--input {
        padding: 0.5rem 1rem;
        font-size: 1rem;
      }
    }
    &__btn {
      display: flex;
      justify-content: flex-end;
      margin: 1rem 0;

      button {
        background-color: darkcyan;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 0.5rem 1.5rem;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 1.4px;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
  }
`;

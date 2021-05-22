import styled from "styled-components";

export const ItemContainer = styled.div<{ itemIsFavorite: boolean }>`
  --button-color: ${(props) => (props.itemIsFavorite ? "red" : "darkcyan")};

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  .item-img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }

  .item-desc {
    padding: 0 1.5rem;
  }
  .item-btn {
    margin: 3rem 0;
    border: 1px solid var(--button-color);
    background-color: transparent;
    border-radius: 3px;
    padding: 1rem 2rem;
    cursor: pointer;
    color: var(--button-color);
  }
`;

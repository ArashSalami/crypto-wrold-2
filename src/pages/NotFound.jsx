import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFound = () => {
  return (
    <StyledNotFound>
      <StyledInnerDiv>
        <h2>404!</h2>
        <p>The Page You Requested Does Not Exist!</p>
        <Link className='link' to='/'>
          Back Home
        </Link>
      </StyledInnerDiv>
    </StyledNotFound>
  );
};

export default NotFound;

const StyledNotFound = styled.div`
  display: grid;
  place-items: center;
  height: calc(100vh - 14rem);
`;
const StyledInnerDiv = styled.div`
  text-align: center;
  display: grid;
  gap: 1rem;
  .link {
    background: var(--clr-grey-3);
    justify-self: center;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    color: var(--clr-grey-9);
    transition: var(--transition);
    &:hover {
      background: var(--clr-grey-1);
    }
  }
`;

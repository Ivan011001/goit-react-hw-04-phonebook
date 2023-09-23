import styled, { css } from 'styled-components';

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  padding: 0.25em 1em;
  transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    background: #bf4f74;
    color: white;
  }

  ${props =>
    props.$primary &&
    css`
      background: #bf4f74;
      color: white;

      &:hover,
      &:focus {
        background: transparent;
        color: #bf4f74;
      }
    `}
`;

export const Input = styled.input`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  padding: 0.25em 1em;
  width: 155px;
  transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;

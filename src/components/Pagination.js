import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Pagination = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;
const NumberPage = styled.a`
  border: 2px solid transparent;
  padding: 10px;
  margin: 10px 0;

  ${props =>
    props.selected ? `color: red; font-weight: bold;` : `color: black`};

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #444444;
  }
`;

const Pages = ({ match }) => {
  const pageNumbers = [];
  let currentPage = parseInt(match.params.page);
  let nextPage = String(currentPage + 1);
  let previousPage = String(currentPage - 1);

  for (let i = 1; i <= 25; i++) {
    i === currentPage
      ? pageNumbers.push(
          <Link to={`/${i}`} style={{ textDecoration: "none" }}>
            <NumberPage selected key={i}>
              {i}
            </NumberPage>
          </Link>
        )
      : pageNumbers.push(
          <Link to={`/${i}`} style={{ textDecoration: "none" }}>
            <NumberPage key={i}>{i}</NumberPage>
          </Link>
        );
  }
  return (
    <Pagination>
      <Link to={`/${previousPage}`} style={{ textDecoration: "none" }}>
        <NumberPage>previous</NumberPage>
      </Link>
      {pageNumbers}
      <Link to={`/${nextPage}`} style={{ textDecoration: "none" }}>
        <NumberPage>next</NumberPage>
      </Link>
    </Pagination>
  );
};

export default Pages;

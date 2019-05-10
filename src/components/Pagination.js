import React from 'react';
import styled from "styled-components";

const Pagination = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;

`
const NumberPage = styled.a`
    border: 2px solid transparent;
    padding: 10px;
    margin: 10px 0;

    ${props => props.selected ? `color: red; font-weight: bold;` : `color: black`};

    &:hover {

        cursor: pointer;
        border-bottom: 2px solid #444444;
    }
`



const Pages = ({ pageChange, nextPage, previousPage, pageSelected }) => {
    const pageNumbers = [];

    for (let i = 1; i <= 25; i++) {
        i === pageSelected 
            ? pageNumbers.push(<NumberPage selected onClick={() => pageChange(i)} key={i}>{i}</NumberPage>)
            : pageNumbers.push(<NumberPage onClick={() => pageChange(i)} key={i}>{i}</NumberPage>)
    }
    return (
        <Pagination>
            <NumberPage onClick={() => previousPage()} >previous</NumberPage>
            {pageNumbers}
            <NumberPage onClick={() => nextPage()} >next</NumberPage>

        </Pagination>
    )
}

export default Pages;
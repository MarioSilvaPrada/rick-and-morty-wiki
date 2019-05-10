import React from 'react';

import { Query } from "react-apollo";
import gql from "graphql-tag";

import styled from "styled-components";

import { Link } from 'react-router-dom';

const Card = styled('div')`
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    margin-bottom: 40px;
    padding:20px;
    transition: 0.4s;
    background-color: #FFE53B;
    background-image: linear-gradient(147deg, #FFE53B 0%, #FF2525 74%);
    color: black;

    &:hover {
        cursor:pointer;
        transform: scale(1.1);
    }

`;

const Character = ({ searchFilter, pageSelected }) => {

  let page = pageSelected;

  return (
    <Query
      query={CHARACTER} variables={{ page }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error</p>;

        let chars = data.characters.results;

        const filterCharacters = chars.filter(char => {
          return char.name.toLowerCase().includes(searchFilter.toLowerCase())
        })

        return filterCharacters.map((char, i) => (
          <Link to={`/${char.id}`} style={{ textDecoration: 'none' }}>
            <Card>
              <img alt='' src={char.image} />
              <div>
                <h2>{char.name}</h2>
              </div>
            </Card>
          </Link>
        ));
      }}
    </Query>
  )
}

const CHARACTER = gql`
query($page:Int) { 
  characters(page:$page){
    results{
      name,
      image,
      id
    }
  }
}
`

export default Character;
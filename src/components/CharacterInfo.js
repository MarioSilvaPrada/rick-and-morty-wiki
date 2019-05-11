import React from 'react';

import { Query } from "react-apollo";
import gql from "graphql-tag";

import styled from "styled-components";



const CardInfo = styled('div')`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin: 40px auto;
    width: 800px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    margin-bottom: 40px;
    padding:20px;
    font-size: 1.5em;
    font-weight: bold;
    background-color: #FFE53B;
    background-image: linear-gradient(147deg, #FFE53B 0%, #FF2525 74%);
    
`


const CharacterInfo = ({ match }) => {
    const id = match.params.id;

    return (
        <Query query={QUERY_CHARACTER_INFO} variables={{ id }}>
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                {/* if (error) return <p>Error</p>; */}

                return (
                    <CardInfo>
                        <img alt='' src={data.character.image} />
                        <p>Name: {data.character.name}</p>
                        <p>Gender: {data.character.gender}</p>
                        <p>Specie: {data.character.species}</p>
                        <p>Status: {data.character.status}</p>
                        <p>Origin: {data.character.origin.name}</p>
                        <p>Location: {data.character.location.name}</p>
                        

                    </CardInfo>
                );
            }}
        </Query>
    )
}


const QUERY_CHARACTER_INFO = gql`
    query($id:ID) { 
        character(id:$id){
            id,
            name,
            status,
            gender,
            image,
            species,
            origin{
              name
            },
            location{
                name
            }
        }
    }
`


export default CharacterInfo;
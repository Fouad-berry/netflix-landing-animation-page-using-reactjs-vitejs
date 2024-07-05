import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const TheImage = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    const fetchNarutoCharacters = async () => {
      try {
        const response = await axios.post(
          'https://graphql.anilist.co',
          {
            query: `
              query {
                Media(search: "Naruto", type: ANIME) {
                  characters(page: 1, perPage: 50) {
                    edges {
                      node {
                        name {
                          full
                        }
                        image {
                          large
                        }
                      }
                    }
                  }
                }
              }
            `
          }
        );

        const charactersData = response.data.data.Media.characters.edges;
        setCharacters(charactersData);
      } catch (error) {
        console.error('Erreur lors de la récupération des personnages :', error);
      }
    };

    fetchNarutoCharacters();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const result = characters.find((character) =>
      character.node.name.full.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResult(result);
  };

  return (
    <div>
      <h1>Personnages de Naruto</h1>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Rechercher un personnage"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {searchResult ? (
        <div>
          <h3>{searchResult.node.name.full}</h3>
          <div style={{ maxWidth: '100%' }}>
            <img
              src={searchResult.node.image.large}
              alt={searchResult.node.name.full}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          {characters.map((character) => (
            <div key={character.node.name.full} style={{ display: 'inline-block' }}>
              <h3>{character.node.name.full}</h3>
              {character.node.image && (
                <div style={{ maxWidth: '100%' }}>
                  <img
                    src={character.node.image.large}
                    alt={character.node.name.full}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

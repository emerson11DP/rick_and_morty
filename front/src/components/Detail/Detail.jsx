import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
  <div>
    <h1>Name: "{character.name && character.name}"</h1>
    <h1>Status: "{character.status && character.status}"</h1>
    <h1>Species: "{character.species && character.species}"</h1>
    <h1>Gender: "{character.gender && character.gender}"</h1>
    <h1>Origin: "{character.origin?.name && character.origin?.name}"</h1>
    <img src={character.image && character.image}></img>
  </div>
  )
};

export default Detail;

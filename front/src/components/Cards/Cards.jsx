import style from "./Cards.module.css";

import Card from "../Card/Card";
const Cards = ({ characters, onClose }) => {
  return (
    <div className={style.container}>
      {characters.map((character) => {
        return (
          <Card
            id={character.id}
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            origin={character.origin.name}
            status={character.status}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
};

export default Cards;

//Acá no se trabaja con destructuring

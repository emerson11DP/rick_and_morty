import { useSelector } from "react-redux";
import Card from "../Card/Card";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);
  return (
    <>
      {favorites.map((character) => {
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
          />
        );
      })}
    </>
  );
};

export default Favorites;

import { useContext } from "react";
import { Meetup } from "../../../models/MeetupModel";
import { FavoriteContext } from "../../../store/favoriteContext";
import { ItemContainer } from "./ListItems.styles";

type Props = {
  meetup: Meetup;
};

const ListItems: React.FC<Props> = ({ meetup }) => {
  const favoriteCtx = useContext(FavoriteContext);
  const itemIsFavorite = favoriteCtx.itemIsFavorite(meetup.id);

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(meetup.id);
    } else {
      favoriteCtx.addFavorite(meetup);
    }
  };

  return (
    <ItemContainer itemIsFavorite={itemIsFavorite}>
      <img className="item-img" src={meetup.image} alt={meetup.title} />
      <h3 className="item-heading">{meetup.title}</h3>
      <p>{meetup.address}</p>
      <p className="item-desc">{meetup.description}</p>
      <button className="item-btn" onClick={toggleFavoriteStatusHandler}>
        {itemIsFavorite ? "Remove from Favorite" : "Add to Favorites"}
      </button>
    </ItemContainer>
  );
};

export default ListItems;

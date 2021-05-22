import { useContext } from "react";
import MeetupList from "../../components/MeetupList/MeetupList";
import { FavoriteContext } from "../../store/favoriteContext";

const MyFavorite = () => {
  const favoriteCtx = useContext(FavoriteContext);

  return (
    <section>
      <h1>My Favorites</h1>
      <MeetupList meetups={favoriteCtx.favorites} />
    </section>
  );
};

export default MyFavorite;

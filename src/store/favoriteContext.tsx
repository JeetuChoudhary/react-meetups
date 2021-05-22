import { createContext, useState } from "react";

import { Meetup } from "../models/MeetupModel";

type FavoritesType = {
  favorites: Meetup[];
  totalFavorites: number;
  addFavorite: (favoriteMeetup: Meetup) => void;
  removeFavorite: (meetupId: string) => void;
  itemIsFavorite: (meetupId: string) => boolean;
};

export const FavoriteContext = createContext<FavoritesType>({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favorieMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => false,
});

export const FavoritesContextProvider: React.FC = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState<Meetup[]>([]);

  const addFavoriteHandler = (favoriteMeetup: Meetup) => {
    setUserFavorites((prevState) => prevState.concat(favoriteMeetup));
  };
  const removeFavoriteHandler = (meetupId: string) => {
    setUserFavorites((prevState) =>
      prevState.filter((meetup) => meetup.id !== meetupId)
    );
  };

  const itemIsFavoriteHandler = (meetupId: string) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  const context: FavoritesType = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoriteContext.Provider value={context}>
      {children}
    </FavoriteContext.Provider>
  );
};

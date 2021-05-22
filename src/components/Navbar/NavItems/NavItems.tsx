import { useContext } from "react";
import { FavoriteContext } from "../../../store/favoriteContext";
import { Menu, MenuLink } from "./NavItems.styles";

const NavItems = () => {
  const favortieCtx = useContext(FavoriteContext);
  return (
    <Menu>
      <li className="menu-item">
        <MenuLink to="/" exact favorite={0}>
          All Meetups
        </MenuLink>
      </li>
      <li className="menu-item">
        <MenuLink to="/addNewMeetup" favorite={0}>
          Add New Meetup
        </MenuLink>
      </li>
      <li className="menu-item">
        <MenuLink to="/myFavorites" favorite={favortieCtx.totalFavorites}>
          My Favorites
          <span>
            {favortieCtx.totalFavorites > 0 ? favortieCtx.totalFavorites : null}
          </span>
        </MenuLink>
      </li>
    </Menu>
  );
};

export default NavItems;

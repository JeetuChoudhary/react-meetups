import { memo } from "react";
import { Route, Switch } from "react-router";
import Layout from "./components/Layout/Layout";
import AddNewMeetup from "./pages/AddNewMeetup/AddNewMeetup";
import AllMeetup from "./pages/AllMeetup/AllMeetup";
import MyFavorite from "./pages/MyFavorite/MyFavorite";
import { FavoritesContextProvider } from "./store/favoriteContext";

const App = memo(() => {
  return (
    <FavoritesContextProvider>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetup />
          </Route>
          <Route path="/addNewMeetup">
            <AddNewMeetup />
          </Route>
          <Route path="/myFavorites">
            <MyFavorite />
          </Route>
        </Switch>
      </Layout>
    </FavoritesContextProvider>
  );
});

export default App;

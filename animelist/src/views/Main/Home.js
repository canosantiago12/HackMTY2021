import AppBarC from "../../components/AppBarC";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import UserCard from "../../components/UserCard";
import AnimeCard from "../../components/AnimeCard";
import MangaCard from "../../components/MangaCard";

const Home = () => {
  return (
    <div>
      <AppBarC />
      <div>
        {/* Top row */}
        <div>
          {/* Datos Nacionales */}
          <div>
            <UserCard></UserCard>
          </div>

          {/* Datos de Vacunacion */}
          <div></div>
        </div>
        <AnimeCard></AnimeCard>
        {/* Bottom row */}
        <div>
          {/* Tabla estados */}
          <MangaCard></MangaCard>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

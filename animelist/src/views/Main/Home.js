import AppBarC from "../../components/AppBarC";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import UserCard from "../../components/UserCard";

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

        {/* Bottom row */}
        <div>
          {/* Tabla estados */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { logUserOut } from "../apollo";
import routes from "../routes";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  history.replace(routes.home, null);
  return (
    <div>
      <h1>Welcome we did it!</h1>
      <button onClick={() => logUserOut()}>Log out now!</button>
    </div>
  );
}
export default Home;

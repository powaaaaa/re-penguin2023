import { HomePage } from "./components/pages/home";
import { Helmet } from "react-helmet-async";

function App() {
  // return <>Re: penguin hack 2023</>;
  return (
    <>
      <Helmet>
        <title>TODOのなかまたち</title>
      </Helmet>
      <HomePage />
    </>
  );
}

export default App;

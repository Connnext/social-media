import { AppRouter } from "./app/router/AppRouter";
import { Provider } from "./components/ui/provider";
import Layout from "./widgets";

function App() {
  return (
    <Provider>
      {/* <Layout> 
        <AppRouter />
      </Layout> */}
      <AppRouter />
    </Provider>
  );
}

export default App;

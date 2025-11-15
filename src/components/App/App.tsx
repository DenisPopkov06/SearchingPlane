import Header from "../header/header";
import Main from "../main/main";

import { Provider } from "react-redux";
import { store } from "../../redux/store";
import "./app.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <Header />
          <Main />
        </div>
      </div>
    </Provider>
  );
}

export default App;

import Root from "@/pages/Root";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "@/store/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;

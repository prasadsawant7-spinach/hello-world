import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Flask from "./pages/Flask";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          index
          path="/"
          element={<Home />}
        />
        <Route
          path="/flask"
          element={<Flask />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

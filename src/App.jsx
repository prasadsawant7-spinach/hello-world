import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path="/"
          element={<Home />}
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

import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import HomePage from "./pages/HomePage";
import Task1Page from "./pages/Task1Page";
import Task2Page from "./pages/Task2Page";
import Task3Page from "./pages/Task3Page";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <h1></h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/task-1" element={<Task1Page />} />
          <Route path="/task-2" element={<Task2Page />} />
          <Route path="/task-3" element={<Task3Page />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

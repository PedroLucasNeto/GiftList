import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import { Main } from "../components/Main";

const Home = () => {
  return (
    <>
      <div className="min-h-screen">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route index element={<Main />} />
        </Routes>
      </div>
    </>
  );
};

export default Home;

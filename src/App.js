import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./pages/landing";
import Result from "./pages/result";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={`/`} element={<Landing />}> </Route>
          <Route path={`/result`} element={<Result />}> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

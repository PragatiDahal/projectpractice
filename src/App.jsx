import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Featured from './Component/Featured';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Featured />} />
      </Routes>
    </Router>
  );
}

export default App;

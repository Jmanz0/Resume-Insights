import { Route, Routes } from 'react-router-dom';
import Application from './Application';
import JobDescriptionProcessor from './JobDescriptionProcessor';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/process" Component={JobDescriptionProcessor} />
        <Route path="/apply" Component={Application} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
// import { useLocation } from 'react-router';

import List from './components/List'

function App() {
  // const { search } = useLocation();
  // const searchParams = new URLSearchParams(search);
  // const name = searchParams.get('name');
  // const age = searchParams.get('age');

  // console.log(search);

  return (
    <div style={{ maxWidth: "980px", margin: "70px auto 0"}}>
      <List />
    </div>
  );
}

export default App;

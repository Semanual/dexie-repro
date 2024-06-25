import { useLiveQuery } from 'dexie-react-hooks';
import { db } from './dexie';

function App() {
  const table = useLiveQuery(() => db.example.toArray(), []);
  console.log(table)
  return <>
    <div>{table ? table[0].value : "Loading"}</div>
    <button onClick={() => {
        db.example.update(0, {value: parseInt(Math.random() * 1000)});
    }}>Randomize</button>
  </>;
}

export default App;

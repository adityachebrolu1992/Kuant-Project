import './App.css';
import ShortList from './ShortListedData';

const list = ["Bigcorp"
  ,
  "Bigcorp"
  ,
  "Acme"
  ,
  "Bigcorp"
  ,

  "Zork"
  ,
  "Zork"
  ,
  "Abc"
  ,
  "Bigcorp"
  ,
  "Acme"
  ,
  "Bigcorp"
  ,
  "Bigcorp"
  ,
  "Zork"
  ,
  "Bigcorp"
  ,
  "Zork"
  ,
  "Zork"
  ,
  "Bigcorp"
  ,
  "Acme"
  ,
  "Bigcorp"
  ,
  "Acme"
  ,
  "Bigcorp"
  ,
  "Acme"
  ,
  "Littlecorp"
  ,
  "Nadircorp"
]

const clientList=[];

const data = new Map();
for (let i = 0; i < list.length; i++) {
  if (data.has(list[i])) {
    data.set(list[i], data.get(list[i]) + 1);

  } else {
    data.set(list[i], 1);
    clientList.push(list[i])
  }

}
const length=list.length;

console.log("clientList", clientList)


function App() {
  return (
    <div className="App">
      <p><b><h1 id="header">Kuant Project</h1></b></p>
      <ShortList data={data} clientList={clientList} length={length} />
    </div>
  );
}

export default App;

import DedinaElement from "./DedinaElement";

const build = <i class="fa-solid fa-house"></i>;
const tree = <i class="fa-solid fa-tree"></i>;
const carSide = <i class="fa-solid fa-car-side"></i>;
const home = <i class="fa-solid fa-house-chimney-window"></i>;

const Dedina = [{ type: build, color: 'gray', size: '50px' },
{ type: carSide, color: 'red', size: '20px' },
{ type: home, color: '#000000', size: '30px' },
{ type: build, color: 'yellow', size: '80px' },
{ type: tree, color: 'green', size: '40px' },
{ type: tree, color: 'green', size: '60px' },
{ type: tree, color: 'green', size: '15px' },
{ type: home, color: 'brown', size: '25px' },
{ type: home, color: '#88cfe5', size: '35px' }
]

function App(){
  return Dedina.map( (element)=>
    <DedinaElement type={element.type} color={element.color} size={element.size}/>
  );
}

export default App;
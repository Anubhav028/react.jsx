function App(){

  // alert(sum())
  return(
    <div>
    <h1>First Component {sum()}</h1>
     <Fruit />
     <Colors />
    </div>
  )
}
function Fruit(){
  return(
    <h1>Apple</h1>
  )
}

function Colors(){
  return(
    <h1>Red Color</h1>
  )
}

function sum(){
  return 10+10
}
export default App;
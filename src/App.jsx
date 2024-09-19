import './App.css'
import Changebtn from './Changebtn'
const App = () => {

  const changeBlue = () => {
    document.body.style.backgroundColor = "blue";

  };

  const changeGray = () => {
    document.body.style.backgroundColor = "gray";
  };

  const changeRed = () => {
    document.body.style.backgroundColor = "red";
  };

  const changeGreen = () => {
    document.body.style.backgroundColor = "green";
  };

  const changeYellow = () => {
    document.body.style.backgroundColor = "yellow";
  };

  const changeSkyblue = () => {
    document.body.style.backgroundColor = "skyblue";
  };

  const changeWhite = () => {
    document.body.style.backgroundColor = "white";
  };

  const changeBlack = () => {
    document.body.style.backgroundColor = "black";
  };

  const myStyle = {
    backgroundImage:
      "url('https://creativenerds.co.uk/wp-content/uploads/2023/08/vibrant-gradient.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: '300px',
    marginTop: "130px",
    borderRadius: "20px"

  }

  const h1Style = {
    textAlign: "center",
    marginTop: "10px",
    marginBottom: "20px",
    color: "black",
    fontWeight: "700"
  }

  return (
    <>
      <div style={myStyle} className='container p-5 '>

        <h1 style={h1Style}>Background Color Changing App</h1>
        <button onClick={changeBlue} className="btn btn-primary m-3">Click Me</button>
        <button onClick={changeGray} className="btn btn-secondary m-3">Click Me</button>
        <button onClick={changeGreen} className="btn btn-success m-3">Click Me</button>
        <button onClick={changeRed} className="btn btn-danger m-3">Click Me</button>
        <button onClick={changeYellow} className="btn btn-warning m-3">Click Me</button>
        <button onClick={changeSkyblue} className="btn btn-info m-3">Click Me</button>
        <button onClick={changeWhite} className="btn btn-light m-3">Click Me</button>
        <button onClick={changeBlack} className="btn btn-dark m-3">Click Me</button>

      </div>
      <Changebtn />
    </>

  )


}

export default App


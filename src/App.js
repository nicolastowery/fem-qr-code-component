import "./style.css";
function App() {
  return (
    <div className="app">
      <div className="card">
        <img src="qr-code.png" alt="QR Code" className="card__qr" />
        <h1 className="card__header">
          Improve your front-end skills by building projects
        </h1>
        <p className="card__text">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;

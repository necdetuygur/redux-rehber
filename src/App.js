import KisiAdd from "./components/KisiAdd";
import KisiList from "./components/KisiList";

function App() {
  return (
    <div className="container-fluid pt-3">
      <div className="row">
        <div className="col-md-6">
          <KisiAdd />
        </div>
        <div className="col-md-6">
          <KisiList />
        </div>
      </div>
    </div>
  );
}

export default App;

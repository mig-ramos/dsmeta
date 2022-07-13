import "./App.css";
import Header from "./componetns/Header";
import NotificationButton from "./componetns/NotificationButton";
import SalesCard from "./componetns/SalesCard";

function App() {
  return (
    <>
      <h1>Olá mundo!</h1>
      <NotificationButton />
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

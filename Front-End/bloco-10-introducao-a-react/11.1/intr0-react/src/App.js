import "./App.css";
import ReactClass from "./Component";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const arr = ['estudar react', 'fazer os exercícios desta mera', 'chorar no banho'];
  return(
  <section>
    <ReactClass/>
    <Header />
    {arr.map((e) => Task(`${e}`))}
    <Content />
    <Footer />
  </section>)
}

export default App;

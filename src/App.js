import Accordion from './Accordion';
import faqs from './util.js';
import './style.css';
function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

export default App;

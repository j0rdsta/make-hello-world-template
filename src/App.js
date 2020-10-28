import PropTypes from "prop-types";
import './App.css';
import Shapes from './components/shapes'

function App({ headline, backgroundImage }) {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>{headline}</h1>
      <div className="shape-container">
        <Shapes />
      </div>
    </div>
  );
}

App.propTypes = {
  headline: PropTypes.string,
  backgroundImage: PropTypes.string,
}

App.defaultProps = {
  headline: 'Hello World',
  backgroundImage: 'https://zjf683hopnivfq5d12xaooxr-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg',
}

export default App;

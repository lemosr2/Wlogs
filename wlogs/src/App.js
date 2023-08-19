
import Rank from './components/Rank';
import toc from './zone-1018.png'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './styles.css'

function _onSelect(){
  alert(123);
}

function App() {

  const options = [
    'Damage'
  ];
  const defaultOption = "Damage";

  const list = [
    {
      name: 'Rlemos',
      point: 123,
      guild: 'Teste'
    },
    {
      name: 'Rlemos',
      point: 123,
      guild: 'Teste'
    },
    {
      name: 'Rlemos',
      point: 123,
      guild: 'Teste'
    }
  ]

 

  return (
    <div className="container">
      <div className="geral-rank">

        <div className="graph-loading" /*style="display: none;"*/>
          <p>Loading Data...</p>
          <p>
            <span class="zmdi zmdi-spinner zmdi-hc-spin" /*style="color:white; font-size:36px"*/></span>
          </p>
        </div>


        <div className="trial-of-the-crusader">
          <img src={toc} className="toc-logo" alt="Trial of the Crusader" />
          <div className="toc-ranks">
            <h2 className="toc-title">
              Trial of the Crusader
            </h2>
            <div className="toc-content">
              <Rank title={"Boss Damage (DPS)"} list={list} />
              <Rank title={"Boss Damage (Tank)"} list={list} />
              <Rank title={"Healing (Healer)"} list={list} />
            </div>
          </div>
        </div>

        <div className="rank-filter">
          <Dropdown options={options} onChange={_onSelect} value={defaultOption} placeholder="Select an option" />
          <Dropdown options={options} onChange={_onSelect} value={defaultOption} placeholder="Select an option" />
          <Dropdown options={options} onChange={_onSelect} value={defaultOption} placeholder="Select an option" />
          <Dropdown options={options} onChange={_onSelect} value={defaultOption} placeholder="Select an option" />
        </div>
      </div>
    </div>
  );
}

export default App;

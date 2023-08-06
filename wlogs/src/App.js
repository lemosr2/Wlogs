
import Rank from './components/Rank';
import toc from './zone-1018.png'
import './styles.css'

function App() {

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
        <div className="trial-of-the-crusader">
          <img src={toc} className="toc-logo" alt="Trial of the Crusader" />
          <div className="toc-ranks">
            <h2 className="toc-title">
              Trial of the Crusader
            </h2>
            <div className="toc-content">
              <Rank title={"Boss Damage (DPS)"} list={list} />
              <Rank title={"Boss Damage (Tank)"} list={list}/>
              <Rank title={"Healing (Healer)"} list={list}/>              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

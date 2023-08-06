import '../styles.css'
import RankItem from './RankItem';

function Rank({ title, list }) {
    return (
        <section className="tile-subbox">
            <h3 className="tile-title">{title}</h3>
            <ul className="tile-list">
                <RankItem type={"gold"} character={(list && list.length > 0 ? list[0] : {})} />
                <RankItem type={"silver"} character={(list && list.length > 1  ? list[1] : {})} />
                <RankItem type={"bronze"} character={(list && list.length > 2  ? list[2] : {})} />
            </ul>
        </section>
    );
}

export default Rank
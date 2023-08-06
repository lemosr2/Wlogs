import '../styles.css'

function RankItem({ type, character }) {
    return (
        <li className="sidebar-item">
            <div className="sidebar-line">
                <img className="sidebar-zone-icon" src={'/' + type + '.png'} alt={type} />
                <div className="sidebar-line-contents">
                    <span className="tile-guild-name">
                        {character?.name ?? ""}
                    </span>
                    <span className="primary">
                        {character?.point ?? ""}
                    </span>
                    <span className="tile-guild-commands">
                        {character?.guild ?? ""}
                    </span>
                </div>
            </div>
        </li>
    );
}

export default RankItem
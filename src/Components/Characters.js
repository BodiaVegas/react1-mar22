import './Characters.css'
function Character(props) {
    let {name, dcr, pict} = props;
    return(
        <div>
            <h2 className={`target`}>{name}</h2>
            <p>{dcr}</p>
            <img src={pict} alt="Bart"/>
        </div>
    )
}
export default Character;
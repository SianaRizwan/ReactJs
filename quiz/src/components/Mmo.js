import "./style.css";
function Mmo(props) {
  return (
    <div className="game">
      <img src={props.thumbnail} />
      <h3>{props.name}</h3>
      <p>
        <b>
          <i>Description: </i>
        </b>{" "}
        {props.short_description}
      </p>
    </div>
  );
}

export default Mmo;

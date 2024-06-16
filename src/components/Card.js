import "./Card.css"

export default function Card(props) {
  return (
    <div className="card-backdrop">
      <div className="card-main">
        <div class="card-date">{props.gift.date}</div>
        <br></br>
        <br></br>
        <div class="card-image">
          <img src={props.gift.image} alt="Bracelet"></img>
        </div>
        <div class="card-content">
          <h2>{props.gift.name}</h2>
          <p>{props.gift.description}</p>
        </div>
      </div>
    </div>
  );
}

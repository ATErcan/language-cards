import "./Main.scss";
import { data } from "../../helper/data";

const Card = () => {
  return (
    <div className="language-cards">
      {data.map((item) => {
        return (
          <div key={item.id} className="card-body">
            <img
              src={item.img}
              alt={item.name}
              className="card-img"
              id={item.name}
            />
            <h2 className="name">{item.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Card;

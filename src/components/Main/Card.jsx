import "./Main.scss";
import { languages } from "../../helper/data";
import Languages from "./Languages";

const Card = () => {
  return (
    <div className="language-cards">
      {languages.map((item, i) => {
        return <Languages key={i} {...item} />;
      })}
    </div>
  );
};

export default Card;

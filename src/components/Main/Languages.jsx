import { useState } from "react";

const Languages = ({ id, name, img, options }) => {
  const [changeShown, setChangeShown] = useState(true);

  return (
    <div
      key={id}
      className="card-body"
      onClick={() => setChangeShown(!changeShown)}
    >
      {changeShown && (
        <>
          <img src={img} alt={name} className="card-img" id={name} />
          <h2 className="name">{name}</h2>
        </>
      )}
      {!changeShown && (
        <ul className="card-ul">
          {options.map((list, index) => {
            return (
              <li key={index} className="list">
                {list}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Languages;

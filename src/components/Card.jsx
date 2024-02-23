import { useEffect, useState } from "react";

const Card = ({ imageNumber }) => {
  const [sary, setSary] = useState([]);
  useEffect(() => {
    setSary([imageNumber]);
  }, []);

  const image_number = sary[0];
  return (
    <div className="card">
      <div className="image">
        <img src={"../src/assets/img/img-" + image_number + ".png"} alt="dmj" />
      </div>
      <div className="details">
        <h2>Illustration</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor itaque
          perferendis, ab ullam necessitatibus atque odio eum voluptate
          similique, quisquam quasi odit nisi, eligendi quas voluptatibus fugiat
          voluptatem neque dolorem?
        </p>
        <a href="#">Commander</a>
      </div>
    </div>
  );
};

export default Card;

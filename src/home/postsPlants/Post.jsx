import { useEffect, useState } from "react";
import { useShop } from "../../context/ProductContext";
import scss from "./Post.module.scss";
const Post = () => {
  const { addShop, readShop } = useShop();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  useEffect(() => {
    readShop;
  }, []);
  const handleChange = () => {
    let add = {
      image: image,
      name: name,
      price: price,
      category: category,
      id: Date.now(),
    };
    addShop(add);
  };
  return (
    <div id={scss.post}>
      <div className="container">
        <div className={scss.post}>
          <div className={scss.inputs}>
            <input
              onChange={(e) => setImage(e.target.value)}
              type="text"
              placeholder="URL"
            />
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="NAME"
            />
            <input
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              placeholder="PRICE"
            />
            <input
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="CATEGORY"
            />
          </div>
          <button onClick={handleChange} className={scss.btn}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;

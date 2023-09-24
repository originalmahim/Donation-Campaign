import { Link } from "react-router-dom";

const Donate = ({ donate }) => {
  const { id, picture_url, category, title, category_bg_color, card_bg_color, text_color } = donate;

  return (
    <Link to={`/donation/${id}`} className={`border-2 rounded-md ${card_bg_color}`}>
      <div>
        <img src={picture_url} alt={title} />
      </div>
      <div className={`text-color py-4 pl-4`}>
        <button className={` p-1 rounded-md ${text_color}`}>{category}</button>
        <h1 className={`text_color`}>{title}</h1>
      </div>
    </Link>
  );
};

export default Donate;

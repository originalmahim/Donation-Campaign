import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
  const Donate = ({ donate }) => {
  const { id, picture_url, category, title, button_bg_color, card_bg_color, text_color } = donate;

  return (
        <Link to={`/donation/${id}`} className= "border-2 rounded-md" style={{background: card_bg_color, color: text_color}}>
        <div>
        <img className="w-96" src={picture_url} alt={title} />
        </div>
        <div className={`text-color py-4 pl-4`}>
        <button className= "p-1 rounded-md " style={{background: button_bg_color}} >{category}</button>
        <h1 className= "">{title}</h1>
        </div>
        </Link>
          );
              };

Donate.propTypes = {
    donate: PropTypes.shape({
    id: PropTypes.number.isRequired,
    picture_url: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    button_bg_color: PropTypes.string.isRequired,
    card_bg_color: PropTypes.string.isRequired,
    text_color: PropTypes.string.isRequired,
  }).isRequired,
};

export default Donate;

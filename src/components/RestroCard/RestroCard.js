
import './RestroCard.css';

const RestroCard = (props) => {
  const { restro } = props;
  const { name, image, cusines, rating } = restro || {};
  return (
    <div className="card">
      <img alt="dd" src={image} />
      <h2>{name}</h2>
      <h3>{cusines.join(', ')}</h3>
      <h4>{rating + '*'}</h4>
    </div>
  );
}


export default RestroCard;
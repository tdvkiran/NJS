import RestroCard from "../RestroCard/RestroCard";

import './Body.css'

const burgerKing = {
  name: 'Burger King',
  image: 'https://b.zmtcdn.com/data/pictures/chains/2/18549832/c9fbbf2eed4d4ab83ce63b114e76b57f.jpg',
  cusines: ['Burgers', 'American'],
  rating: 4
}

const Body = () => {
  const data = [burgerKing, burgerKing];
  return (
    <div className="body">
      {data.map((restro) => {
        return <RestroCard restro={restro} />
      })}
    </div>
  )
}

export default Body;
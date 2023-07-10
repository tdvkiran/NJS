import { useState } from "react";

import RestroCard from "../RestroCard/RestroCard";
import { restros } from '../../constants/restro.general'

import './Body.css'

const Body = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState(restros);
  const handleOnChange = (e) => {
    console.warn(e.target.value);
    setValue(e.target.value);
  }
  const handleOnClick = (e) => {
    console.warn(value);
    const updatedData = restros.filter((restro) => {
      return restro.name.toLowerCase().includes(value.toLowerCase());
    })
    setData(updatedData);
  }

  const handleReset = (e) => {
    setValue('');
    setData(restros);
  }
  return (
    <>
      <div className="search-bar">
        <input type="text" value={value} onChange={handleOnChange} placeholder="search..." />
        <button className={'search-btn'} onClick={handleOnClick}>Search</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="restro-card">
        {data.length === 0 ? <label>{"no data, please search something else!!"}</label>
          :
          data.map((restro, index) => {
            return <RestroCard key={index} restro={restro} />
          })

        }
      </div>
    </>
  )
}

export default Body;
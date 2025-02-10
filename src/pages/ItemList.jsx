import { Typography } from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const ItemList = () => {
  const { label } = useParams();
  const nav = useNavigate();
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();


  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {
        params: {
          c: label
        }
      });
      setLoad(false);
      setData(response.data);

    } catch (err) {
      setLoad(false);
      setErr(err.message);
    }
  }


  useEffect(() => {
    getData();
  }, []);

  if (load) {
    return <h1>Loading.....</h1>
  }

  if (err) {
    return <h1>{err}</h1>
  }


  console.log(data);


  return (
    <div className='grid grid-cols-4 gap-4 p-7 msm:grid-cols-1 mmd:grid-cols-2 mlg:grid-cols-3 cursor-pointer '>
      {data && data.meals.map((meal) => {
        return <div key={meal.idMeal} className='shadow-2xl' onClick={() => { nav(`/item-detail/${meal.idMeal}`) }}  >
          <img className='w-full' src={meal.strMealThumb} alt={meal.strMeal} />
          <Typography variant='h6' color='blue-gray' className='mt-2 px-5'>{meal.strMeal}</Typography>

        </div>
      })}
    </div>
  )
}

export default ItemList
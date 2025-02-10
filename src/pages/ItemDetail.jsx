
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ItemDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();


  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php', {
        params: {
          i: id
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
    <div className="">
      {data && data.meals.map((meal) => {
        const steps = meal.strInstructions.split(/STEP \d+/).filter(step => step.trim());
        const url = meal.strYoutube.split('=')[1];
        return <div key={meal.idMeal} className='space-y-5'>
          <iframe className='h-[300px] w-[500px]'
            src={`https://www.youtube.com/embed/${url}`}>
          </iframe>

          <div className='flex gap-10'>
            <div>
              <Typography>Ingredients</Typography>
              {
                Object.keys(meal).map((mealKey, i) => {

                  if (mealKey.startsWith('strIngredient')) {
                    if (meal[mealKey]) return <h1 key={mealKey}>{mealKey.substring(13)}. {meal[mealKey]}</h1>
                  }
                })
              }
            </div>
            <div>
              <Typography>Measures</Typography>
              {
                Object.keys(meal).map((mealKey, i) => {

                  if (mealKey.startsWith('strMeasure')) {
                    if (meal[mealKey]?.trim()) return <h1 key={mealKey}>{mealKey.substring(10)}. {meal[mealKey]}</h1>
                  }
                })
              }

            </div>
          </div>




          <div>
            <Typography>Instructions</Typography>
            {steps.map((step, index) => (
              <div key={index} className="step">
                <h3>Step {index + 1}</h3>
                <p>{step.trim()}</p>
              </div>
            ))}
          </div>

        </div>
      })}
    </div >
  )
}

export default ItemDetail
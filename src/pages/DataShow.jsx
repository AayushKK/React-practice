import axios from 'axios'
import React, { useEffect, useState, useTransition } from 'react'
import { ListWithAvatar } from '../components/ListWithAvatar';

export const DataShow = () => {

  const [data, setData] = useState();
  const [err, setErr] = useState();
  const [isPending, startTransition] = useTransition();

  const getData = () => {
    startTransition(async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        setData((prev) => response.data)
      } catch (err) {
        setErr(err.message);
      }
    })

  }


  useEffect(() => {
    getData();
  }, []);

  if (isPending) {
    return <h1>Loading.....</h1>
  }

  if (err) {
    return <h1>{err}</h1>
  }



  return (
    <div className='p-4'>

      {data && <ListWithAvatar categories={data.categories} />}


    </div>
  )
}


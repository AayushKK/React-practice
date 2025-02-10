import { faker } from '@faker-js/faker';
import { faL } from '@fortawesome/free-solid-svg-icons';



// const addUser = () => {

//   const newUser = {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     birthdate: faker.date.birthdate(),
//   }

//   console.log(newUser);

// }


// const numbers = [11, 22, 33, 44, 55, 66, 77];

// const persons = [
//   { name: 'ram', age: 90, id: 1 },
//   { name: 'shyam', age: 95, id: 2 },
//   { name: 'sita', age: 70, id: 3 },
// ];

// const posts = [
//   {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "qui est esse",
//     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//   },
//   {
//     "userId": 1,
//     "id": 3,
//     "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porroeius odio et labore et velit aut"
//   },

// ];


// const photos = [
//   {
//     "albumId": 1,
//     "id": 1,
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://via.placeholder.com/600/92c952",
//     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
//   },
//   {
//     "albumId": 1,
//     "id": 2,
//     "title": "reprehenderit est deserunt velit ipsam",
//     "url": "https://via.placeholder.com/600/771796",
//     "thumbnailUrl": "https://via.placeholder.com/150/771796"
//   },
//   {
//     "albumId": 1,
//     "id": 3,
//     "title": "officia porro iure quia iusto qui ipsa ut modi",
//     "url": "https://via.placeholder.com/600/24f355",
//     "thumbnailUrl": "https://via.placeholder.com/150/24f355"
//   },
// ];
import { Button, Rating, Typography } from '@material-tailwind/react'
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';

const Home = () => {

  // axios.get('https://jsonplaceholder.typicode.com/posts').then((val) => { console.log(val.data) }).catch((err) => { console.log(err) }).finally(() => {
  //   console.log('hello users')
  // });
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(false);
  const getData = async () => {
    setLoading(true)
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      console.log(response.data)
      setLoading(false);
      setError(false);
      setData((prev) => response.data)
    } catch (err
    ) {

      setError(err.message)
      setLoading(false);

    }
  }

  useEffect(() => {
    getData();
  }, [])

  const [display, setDisplay] = useState(false);
  const recipes = [
    {
      "id": 1,
      "name": "Classic Margherita Pizza",
      "ingredients": [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste"
      ],
      "instructions": [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot."
      ],
      "prepTimeMinutes": 20,
      "cookTimeMinutes": 15,
      "servings": 4,
      "difficulty": "Easy",
      "cuisine": "Italian",
      "caloriesPerServing": 300,
      "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
      "rating": 4.6,

    },
    {
      "id": 2,
      "name": "Vegetarian Stir-Fry",
      "ingredients": [
        "Tofu, cubed",
        "Broccoli florets",
        "Carrots, sliced",
        "Bell peppers, sliced",
        "Soy sauce",
        "Ginger, minced",
        "Garlic, minced",
        "Sesame oil",
        "Cooked rice for serving"
      ],
      "instructions": [
        "In a wok, heat sesame oil over medium-high heat.",
        "Add minced ginger and garlic, sauté until fragrant.",
        "Add cubed tofu and stir-fry until golden brown.",
        "Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp.",
        "Pour soy sauce over the stir-fry and toss to combine.",
        "Serve over cooked rice."
      ],
      "prepTimeMinutes": 15,
      "cookTimeMinutes": 20,
      "servings": 3,
      "difficulty": "Medium",
      "cuisine": "Asian",
      "caloriesPerServing": 250,
      "image": "https://cdn.dummyjson.com/recipe-images/2.webp",
      "rating": 4.7,
    },
  ]


  if (loading) {
    return <h1>Loadding</h1>
  }
  if (err) {
    return <h1>{err.message}</h1>
  }

  return (
    <div className='p-5 space-y-3' >
      <Typography variant='h2'>Recipes Listings</Typography>
      <Button
        onClick={() => {
          setDisplay(!display)
        }}
        size='sm' color='red'>{display ? "Hide recipes" : "Show recipes"}
      </Button>
      {display && <Typography variant='h3'>{Object.keys(recipes[0]).filter((n, i) => i < 4).join(" ")}</Typography>}
      {display
        &&

        recipes.map(({ id, name, ingredients, instructions, image, rating }) => {
          return <div className='flex flex-row p-5 gap-3 flex-wrap items-center' key={id}>
            <h1 >{id}</h1>
            <h2 className='max-w-20'>{name}</h2>
            <ul className='max-w-48'>
              {ingredients.map((ingredientlist, i) => {
                return <li key={i}>{ingredientlist}</li>
              })}
            </ul>
            <ul>
              {instructions.map((instructionslist, i) => {
                return <li key={i}>{instructionslist}</li>
              })}
            </ul>
            <img className='h-20 w-20' src={image} />
            <Typography variant='h3'>{rating}</Typography>
            <Rating title={rating} value={Math.floor(rating)} readonly />

          </div>
        })}
      <>
        {data && data.map((post) => {
          return <div key={post.id}>
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
            <hr className='h-10' />
          </div>
        })}
      </>

    </div >
  )
}

export default Home
import { Button, Typography } from "@material-tailwind/react";
import { useState } from "react";

const About = () => {

  const quotes = [
    {
      "id": 1,
      "quote": "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
      "author": "Rumi"
    },
    {
      "id": 2,
      "quote": "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
      "author": "Abdul Kalam"
    },
    {
      "id": 3,
      "quote": "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
      "author": "Abdul Kalam"
    },
    {
      "id": 4,
      "quote": "If You Can'T Make It Good, At Least Make It Look Good.",
      "author": "Bill Gates"
    },
    {
      "id": 5,
      "quote": "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing.",
      "author": "Rumi"
    },
    {
      "id": 6,
      "quote": "It is bad for a young man to sin; but it is worse for an old man to sin.",
      "author": "Abu Bakr (R.A)"
    },
  ];

  const [display, setDisplay] = useState(false);
  return (
    <>
      <div className="p-[5%] flex flex-col flex-shrink-0 sm:p-[10%]">

        <Typography variant='h2'>Quotes Listings</Typography>
        <Button
          onClick={() => {
            setDisplay(!display)
          }}
          size='sm' color='red'>{display ? "Hide Quotes" : "Show Quotes"}
        </Button>
        {display && quotes.map(({ id, quote, author }) => {
          return <div key={id}>
            <Typography variant="h4">{id}</Typography>
            <Typography variant="h4">{author}</Typography>
            <Typography variant="h5">{quote}</Typography>
          </div>
        })}

      </div>
    </>


  );
};

export default About;

import { Button, Typography } from "@material-tailwind/react";
import { TestimonialCard } from "../components/TestimonialCard";



const Home = () => {
  let count = 0;
  const increment = () => {
    count++;
  }
  const person = ['ram', 'shyam', 'hari'];
  return (
    <>
      <div>
        <TestimonialCard />
        <Typography variant='h3'>{count}</Typography>

      </div>
      <Button
      >Click Me</Button>
      {console.log(person)}

    </>

  );
};

export default Home;
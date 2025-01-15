import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireFlameCurved, faClock, faFileInvoiceDollar, faCameraRetro } from '@fortawesome/free-solid-svg-icons';
const Moviecard = () => {


  const movie = {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.8,
    posterUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQovCe0H45fWwAtV31ajOdXRPTxSsMQgPIQ3lcZX_mAW0jXV3kH",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    runtime: "148 minutes",
    language: "English",
    boxOffice: "$829.9 million"
  };
  return (
    <>
      <div className="relative mx-auto flex min-h-80 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-200 to-pink-200 ">
        <div className="relative m-7 flex  max-w-5xl overflow-hidden rounded-lg bg-white shadow-2xl">

          <div className="w-2/5">
            <img src={movie.posterUrl} alt="Movie Poster" className="h-full w-full object-cover" />
          </div>


          <div className="w-3/5 p-10 ">

            <div className="flex w-10/12  items-center justify-between">

              <div className="flex gap-2">
                <h1 className=" font-bold text-4xl text-blue-400">
                  {movie.title}
                </h1>
                <FontAwesomeIcon icon={faFireFlameCurved} size="2x" color='orange' />
              </div>

              <div className="mt-2 flex items-center gap-2">
                <span className="rounded-full bg-blue-200 px-3 py-1 text-lg font-medium text-white">{movie.genre.filter((num, index) => index === 0)}</span>
                <span className="rounded-full bg-pink-200 px-3 py-1 text-lg font-medium text-white">{movie.genre.filter((num, index) => index === 1)}</span>
                <span className="rounded-full bg-pink-200 px-3 py-1 text-lg font-medium text-white">{movie.genre.filter((num, index) => index === 2)}</span>
              </div>
            </div>

            <div className="mt-8 w-10/12  text-2xl  text-gray-500">
              <h2>
                {movie.description}
              </h2>
            </div>

            <div className="mt-8 flex items-center gap-8 text-lg text-gray-500">

              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCameraRetro} size="lg" color='red' />
                {movie.director}
              </div>

              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faClock} size="lg" color='grey' /> {movie.runtime}</div>

              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faFileInvoiceDollar} size="lg" color='lime' />{movie.boxOffice}</div>
            </div>

            <div className="absolute right-0 top-0 flex  h-full w-14 items-center justify-center rounded-bl-lg bg-gradient-to-b from-blue-300 to-pink-300 px-4 py-0 text-lg font-bold text-white">
              <div className="rotate-90 transform">$12.56</div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default Moviecard
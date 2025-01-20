export const Card = ({ url, heading, subheading, description }) => {
  return (
    <>
      <div className="font-semibold w-[300px] shadow-lg p-2">
        <img className="h-[220px] w-[100%]" src={url}
          alt="" />
        <div className="space-y-2 mt-3">
          <div className="text-2xl">
            {heading}
          </div>
          <div className="text-lg mb-5 text-gray-400">
            {subheading}
          </div>
          <p className="line-clamp-4 text-gray-400 ">
            {description}
          </p>
          <div className="flex align-middle">
            <button className="bg-white text-red-500 border-2 border-red-500 px-4 py-2 rounded-md mt-4 ">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
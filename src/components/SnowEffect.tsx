import Snowfall from "react-snowfall"

const SnowEffect = () => {
  return (
    <div className="w-full max-sm:min-h-[2250px] absolute inset-0">
      <Snowfall speed={[0.01, 0.5]} snowflakeCount={750} />
    </div>
  )
}

export default SnowEffect

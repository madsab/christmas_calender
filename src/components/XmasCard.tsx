import { useEffect, useState, type FC } from "react"
import daysToChristmas from "../actions/daysToChristmas"
import XmasDialog from "./XmasDialog"

interface Props {
  id: number
  content: string
  details?: string
}

const XmasCard: FC<Props> = ({ id, content, details }) => {
  const [flipped, setFlipped] = useState<boolean>(false)
  const [trigger, setTrigger] = useState<boolean>(false)
  const handleClick = () => {
    if (24 - id >= daysToChristmas()) {
      setTrigger(true)
      setTimeout(() => {
        setFlipped(true)
      }, 300)

      localStorage.setItem(`card-${id}`, "flipped")
    }
  }

  useEffect(() => {
    if (localStorage.getItem(`card-${id}`) === "flipped") {
      setFlipped(true)
      setTrigger(true)
    }
  }, [])

  return (
    <div
      className={`${trigger && "animate-flip"} relative w-40 h-40 border-[1px] border-white rounded-lg shadow-lg ease-linear duration-100 cursor-pointer overflow-hidden`}
      onClick={handleClick}
    >
      {/* Front Card */}
      <div
        className={`${flipped ? "hidden" : ""} font-bold w-full h-full bg-gradient-to-br from-blue-950 to-blue-700 flex justify-center items-center`}
      >
        {id}
      </div>
      {/* Back Card */}
      <XmasDialog content={content} details={details || ""}>
        <div
          className={`${flipped ? "" : "hidden"} absolute top-0 left-0 font-bold w-full h-full border-2 flex justify-center items-center`}
        >
          {content}
        </div>
      </XmasDialog>
    </div>
  )
}

export default XmasCard

import type { Door } from "@/data/XmasDoors"

const DoorList = ({ doors }: { doors: Door[] }) => {
  const sortedDoors = [...doors].sort((a, b) => a.num - b.num)
  return (
    <>
      {sortedDoors.map((door) => (
        <div className="rounded-md border w-fit flex flex-col items-center m-4 p-1">
          <h1 className="text-lg font-bold">{door.num}</h1>
          <h2>{door.content}</h2>
          <p className="italic">{door.details}</p>
        </div>
      ))}
    </>
  )
}

export default DoorList

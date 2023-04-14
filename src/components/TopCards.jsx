import { Gi3DStairs,GiMoneyStack,GiMachineGunMagazine} from "react-icons/gi";
import { useSelector } from "react-redux";

function TopCards() {
  const { user } = useSelector((state) => state.auth)
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
        <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
            <h3></h3> 
            <div className="flex flex-col w-full pb-4">
                <Gi3DStairs className="text-2xl" />
                <p className="text-2xl font-bold"> Rank</p>
                <p className="text-gray-600">Bronze Medal</p>
            </div>
            <p className="bg-green-500 flex justify-center items-center p-2 rounded-lg">
                <span>3rd</span>
            </p>
        </div>
        <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
                <GiMoneyStack className="text-2xl" />
                <p className="text-2xl font-bold">Total Revenue</p>
                <p className="text-gray-600">Remaining: {user.balance} birr</p>
            </div>
            <p className="bg-green-500 flex justify-center items-center p-2 rounded-lg">
                <span>1.2k</span>
            </p>
        </div>
        <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
                <GiMachineGunMagazine className="text-2xl" />
                <p className="text-2xl font-bold">1,322</p>
                <p className="text-gray-600">Total Players</p>
            </div>
            <p className="bg-green-500 flex justify-center items-center p-2 rounded-lg">
                <span>100%</span>
            </p>
        </div>
    </div>
  )
}

export default TopCards
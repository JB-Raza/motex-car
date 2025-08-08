import { IMAGES } from '../../../files'

// icons
import { FaList, FaRegEye } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";



export default function Dashboard() {


  return (
    <div className="flex flex-col gap-y-6" >
      {/* stats cards */}
      <div className="grid grid-cols-1 min-[530px]:grid-cols-2 md:grid-cols-3 gap-6 w-full" >

        {/* col 1 / active listings */}
        < div className="w-full px-5 py-7 flex justify-between items-center rounded-xl bg-[rgba(98,89,202,0.15)] text-[#6259CA]" >
          {/* state */}
          < div className="flex flex-col" >
            <h3 className="font-bold text-[30px]">450</h3>
            <p className="font-medium">Active Listings</p>
          </div >
          {/* icon */}
          < div className="min-w-[65px] h-[65px] w-[65px] rounded-full bg-[#6259CA] text-white flex items-center justify-center" >
            <FaList className='text-[25px]' />
          </div >

        </div >
        {/* col 2 / views */}
        < div className="px-5 py-7 flex justify-between items-center rounded-xl bg-[rgba(14,198,198,0.15)] text-[#29BF6C]" >
          {/* state */}
          < div className="flex flex-col" >
            <h3 className="font-bold text-[30px]">18.6k</h3>
            <p className="font-medium">Total Views</p>
          </div >
          {/* icon */}
          < div className="min-w-[65px] h-[65px] w-[65px] rounded-full bg-[#29BF6C] text-white flex items-center justify-center" >
            <FaRegEye className='text-[25px]' />
          </div >

        </div >
        {/* col 3 / total listings */}
        < div className="px-5 py-7 flex justify-between items-center rounded-xl bg-[rgba(239,29,38,0.15)] text-[#EF1D26]" >
          {/* state */}
          < div className="flex flex-col" >
            <h3 className="font-bold text-[30px]">1560</h3>
            <p className="font-medium">Total Listings</p>
          </div >
          {/* icon */}
          < div className="min-w-[65px] h-[65px] w-[65px] rounded-full bg-[#EF1D26] text-white flex items-center justify-center" >
            <FiLayers className='text-[25px]' />
          </div >

        </div >
      </div >

      {/* recent listings */}
      <div className="px-5 py-3 bg-white rounded-lg shadow-[1px_1px_30px_5px_rgba(0,0,0,0.05)]">
        <h4 className="text-[20px] text-[var(--dark-color)] font-semibold">Recent Listings</h4>
        <hr className="border-b- border-neutral-200 my-4" />

        <div className="relative overflow-x-auto">
          <table className="w-full text-left rtl:text-right text-gray-500">
            {/* heading */}
            <thead className="text-[#212529] capitalize border-b border-neutral-200">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Car Info
                </th>
                <th scope="col" className="px-6 py-3">
                  Brand
                </th>
                <th scope="col" className="px-6 py-3">
                  Publish
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Views
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>

            {/* body */}
            <tbody>
              
              <tr className="bg-white border-b border-gray-200">
                <td scope="row" className="flex gap-x-2 group cursor-pointer px-6 py-3 text-gray-900 whitespace-nowrap">
                  <img src={IMAGES.Inventory_Car_1} className='max-w-[80px] w-[80px] rounded-lg' alt="" />
                  <div className="flex flex-col justify-between">
                    <h5 className="text-[var(--dark-color)] line-clamp-1 group-hover:text-[var(--theme-color)] transition-colors duration-300 cursor-pointer capitalize font-semibold">Mercedes Benz Car</h5>
                    <p>Car ID: #123456</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  Ferrari
                </td>
                <td className="px-6 py-4">
                  5 days ago
                </td>
                <td className="px-6 py-4">
                  $50,999
                </td>
                <td className="px-6 py-4">
                  340k+
                </td>
                <td className="px-6 py-4">
                  <span className="rounded-md px-2 py-0.5 text-[12px] bg-[#DCFCE7] text-[#22C79C] font-semibold capitalize">Active</span>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

    </div >
  )
}

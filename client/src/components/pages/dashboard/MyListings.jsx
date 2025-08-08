import React, { useState } from 'react'

// component
import { Button } from '../../universalComponents/index'

import { IMAGES } from '../../../files'
import { FaPen, FaRegEye, FaRegTrashAlt, FaSearch } from 'react-icons/fa'
import { faArrowLeft, faArrowRight, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function MyListings() {
  const [activePageNumber, setActivePageNumber] = useState(1)
  return (
    <div>
      {/* my listings */}
      <div className="px-5 py-3 bg-white rounded-lg shadow-[1px_1px_30px_5px_rgba(0,0,0,0.05)]">
        {/* topbar */}
        <div className="flex justify-between items-center">
          <h4 className="text-[20px] text-[var(--dark-color)] font-semibold">My Listings</h4>
          <div className="flex items-center gap-3">

            <div className="relative">
              <input type='text'
                placeholder='Search...'
                className='text-sm sm:text-[16px] py-2.5 ps-10 pe-4 w-full max-w-[250px] focus:outline-1 outline-[var(--theme-color)] border rounded-xl border-neutral-200' />
              <FaSearch className='absolute top-1/2 -translate-y-1/2 left-4 text-[var(--body-text-color)] opacity-60' />
            </div>
            <Button text={"Add Listing"} icon={faPlusCircle} className='!py-2.5 !px-3 !font-medium' />
          </div>
        </div>

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
                <th scope="col" className="px-6 py-3">
                  Actions
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
                <td className="px-6 py-4 text-nowrap">
                  22-Dec-2024
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
                {/* actions */}
                <td className="px-6 py-4">
                  <div className=" flex items-center gap-x-1">
                    {/* view listing */}
                    <button aria-label='Details' className="flex items-center justify-center w-[33px] h-[31px] cursor-pointer transition-colors duration-300 rounded-md border border-neutral-400 text-gray-500 hover:bg-gray-500 hover:text-white">
                      <FaRegEye />
                    </button>
                    {/* edit listing */}
                    <button aria-label='Edit' className="flex items-center justify-center w-[33px] h-[31px] cursor-pointer transition-colors duration-300 rounded-md border border-neutral-400 text-gray-500 hover:bg-gray-500 hover:text-white">
                      <FaPen className='text-[14px]' />
                    </button>
                    {/* delete listing */}
                    <button aria-label='Delete' className="flex items-center justify-center w-[33px] h-[31px] cursor-pointer transition-colors duration-300 rounded-md border border-[var(--theme-color)] text-[var(--theme-color)] hover:bg-[var(--theme-color)] hover:text-white">
                      <FaRegTrashAlt className='text-[14px]' />
                    </button>
                  </div>

                </td>
              </tr>

            </tbody>
          </table>
        </div>

         {/* pagination */}
          <div className="flex items-center justify-center gap-3 my-6">
            {/* page left */}
            <button
              onClick={() => {
                if (activePageNumber > 1) {
                  setActivePageNumber(p => p - 1)
                }
              }}
              className="w-[37px] h-[37px] bg-[var(--dark-color)] rounded-lg flex items-center justify-center transition-all duration-500 cursor-pointer hover:bg-[var(--theme-color)] text-white">
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            {/* page 1 */}
            <button
              onClick={() => setActivePageNumber(1)}
              className={`w-[37px] h-[37px] ${activePageNumber == 1 ? "hover:bg-[var(--dark-color)] bg-[var(--theme-color)]" : " bg-[var(--dark-color)] hover:bg-[var(--theme-color)]"} rounded-lg flex items-center justify-center transition-all duration-500 cursor-pointer  text-white`}>
              1
            </button>
            {/* page 2 */}
            <button
              onClick={() => setActivePageNumber(2)}
              className={`w-[37px] h-[37px] ${activePageNumber == 2 ? "hover:bg-[var(--dark-color)] bg-[var(--theme-color)]" : " bg-[var(--dark-color)] hover:bg-[var(--theme-color)]"} rounded-lg flex items-center justify-center transition-all duration-500 cursor-pointer  text-white`}>
              2
            </button>
            {/* page 3 */}
            <button
              onClick={() => setActivePageNumber(3)}
              className={`w-[37px] h-[37px] ${activePageNumber == 3 ? "hover:bg-[var(--dark-color)] bg-[var(--theme-color)]" : " bg-[var(--dark-color)] hover:bg-[var(--theme-color)]"} rounded-lg flex items-center justify-center transition-all duration-500 cursor-pointer  text-white`}>
              3
            </button>
            {/* page right */}
            <button
              onClick={() => {
                setActivePageNumber(p => p + 1)
              }}
              className="w-[37px] h-[37px] bg-[var(--dark-color)] rounded-lg flex items-center justify-center transition-all duration-500 cursor-pointer hover:bg-[var(--theme-color)] text-white">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
      </div>
    </div>
  )
}

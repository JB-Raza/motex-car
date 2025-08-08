import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { carListings } from "../../../sampleData";
import { ListingCard } from "../../universalComponents/Cards";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function MyFavourites() {
  const [activePageNumber, setActivePageNumber] = useState(1)


  return (
    <div>
      <div className="px-5 py-3 bg-white rounded-lg shadow-[1px_1px_30px_5px_rgba(0,0,0,0.05)]">
        <h4 className="text-[20px] text-[var(--dark-color)] font-semibold">My Favorites</h4>
        <hr className="border-b- border-neutral-200 my-4" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {(carListings || []).slice(0, 6).map((car, i) => (
            <div key={i} className="border-2 border-slate-100 rounded-lg mx-auto">
              <ListingCard data={car} />
            </div>
          ))}
        </div>

         {/* pagination */}
                  <div className="flex items-center justify-center gap-3 mt-12 mb-6">
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

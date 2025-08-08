import { useState } from 'react'
import { IMAGES } from '../../files'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faArrowLeft, faArrowRight, faGridVertical, faList, faSearch } from '@fortawesome/free-solid-svg-icons'
import { availableCarBrands, carListings } from '../../sampleData'

import { Range } from 'react-range'
import { ListingCard, SelectOption } from '../universalComponents'

export default function InventoryGrid() {

    const [priceRange, setPriceRange] = useState([1200, 7000])
    const [listStyle, setListStyle] = useState("grid")
    const [activePageNumber, setActivePageNumber] = useState(1)

    const [sortFilterVal, setSortFilterVal] = useState("")

    return (
        <div className='bg-[#F9F9F9]'>
            {/* hero */}
            <div className="py-40 relative before:absolute before:inset-0 before:bg-[#01060F] before:opacity-80" style={{ backgroundImage: `url(${IMAGES.Inventory_Hero_Bg})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                {/* content */}
                <div className="relative z-10">
                    <h1 className="text-center text-white font-bold text-[40px]">Inventory Grid</h1>
                    <p className="text-white font-medium mt-2 flex items-center justify-center">
                        Home
                        <FontAwesomeIcon icon={faAngleDoubleRight} className='mx-1' />
                        <span className='text-[var(--theme-color)]'>Inventory Grid</span></p>
                </div>
            </div>

            {/* listings section */}

            <div className="custom-container px-5 py-30 grid grid-cols-12 gap-y-6 sm:gap-x-6">
                {/* filter col */}
                <div className="col-span-12 flex flex-col gap-7 md-lg:!col-span-3">
                    {/* search */}
                    <div className='rounded-xl px-3.5 py-4 bg-white'>
                        <h5 className="text-[20px] text-[var(--darkIndigo)] font-semibold py-0 px-2 relative after:absolute after:left-[50px] after:bottom-0 after:h-[3px] after:w-[5px] after:translate-y-[200%] after:bg-[var(--theme-color)] before:absolute before:left-2 before:bottom-0 before:h-[3px] before:w-[35px] before:translate-y-[200%] before:bg-[var(--theme-color)]">Search</h5>

                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className='mt-8 relative'>
                            <input type="text"
                                // value={searchQuery}
                                // onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder='Search here...'
                                className='p-3 focus:outline-1 outline-[var(--theme-color)] border-1 border-neutral-200 rounded-lg w-full'
                            />

                            <button className="absolute right-4 top-1/2 -translate-y-1/2">
                                <FontAwesomeIcon icon={faSearch} className='text-[var(--theme-color)]' />
                            </button>
                        </form>
                    </div>

                    {/* brands */}
                    <div className='rounded-xl px-3.5 py-4 bg-white'>
                        <h5 className="text-[20px] text-[var(--darkIndigo)] font-semibold py-0 px-2 relative after:absolute after:left-[50px] after:bottom-0 after:h-[3px] after:w-[5px] after:translate-y-[200%] after:bg-[var(--theme-color)] before:absolute before:left-2 before:bottom-0 before:h-[3px] before:w-[35px] before:translate-y-[200%] before:bg-[var(--theme-color)]">Brands</h5>

                        <div className="flex flex-col gap-6 mt-8">
                            <div className="input-group flex gap-3 w-max">
                                <input type="checkbox" id={"allBrands"} className='w-4 accent-[var(--theme-color)]' />
                                <label htmlFor={"allBrands"} className='cursor-pointer select-none '>All Brands</label>
                            </div>
                            {(availableCarBrands || []).map((brand, index) => (
                                <div key={brand + index}
                                    className={`flex gap-5 cursor-pointer w-max duration-200 items-center`}>

                                    <div key={index} className="input-group flex gap-3">
                                        <input type="checkbox" id={brand._id} className='w-4 accent-[var(--theme-color)]' />
                                        <label className={"cursor-pointer select-none"} htmlFor={brand._id}>{brand.title}</label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* range */}
                    <div className='rounded-xl px-3.5 py-4 bg-white'>
                        {/* <PriceRangeSlider /> */}
                        <h5 className="text-[20px] text-[var(--darkIndigo)] font-semibold py-0 px-2 relative after:absolute after:left-[50px] after:bottom-0 after:h-[3px] after:w-[5px] after:translate-y-[200%] after:bg-[var(--theme-color)] before:absolute before:left-2 before:bottom-0 before:h-[3px] before:w-[35px] before:translate-y-[200%] before:bg-[var(--theme-color)] mb-4">Price Range</h5>

                        <PriceRangeSlider priceRange={priceRange} setPriceRange={setPriceRange} />
                    </div>

                    {/* transmission */}
                    <div className='rounded-xl px-3.5 py-4 bg-white'>
                        <h5 className="text-[20px] text-[var(--darkIndigo)] font-semibold py-0 px-2 relative after:absolute after:left-[50px] after:bottom-0 after:h-[3px] after:w-[5px] after:translate-y-[200%] after:bg-[var(--theme-color)] before:absolute before:left-2 before:bottom-0 before:h-[3px] before:w-[35px] before:translate-y-[200%] before:bg-[var(--theme-color)]">Transmission</h5>

                        <div className="flex flex-col gap-6 mt-8">
                            {(transmissionsData || []).map((transmission, index) => (
                                <div key={transmission + index}
                                    className={`flex gap-5 cursor-pointer w-max duration-200 items-center`}>

                                    <div key={index} className="input-group flex gap-3">
                                        <input type="checkbox" id={transmission} className='w-4 accent-[var(--theme-color)]' />
                                        <label className={"cursor-pointer select-none"} htmlFor={transmission}>{transmission}</label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* fuel type */}
                    <div className='rounded-xl px-3.5 py-4 bg-white'>
                        <h5 className="text-[20px] text-[var(--darkIndigo)] font-semibold py-0 px-2 relative after:absolute after:left-[50px] after:bottom-0 after:h-[3px] after:w-[5px] after:translate-y-[200%] after:bg-[var(--theme-color)] before:absolute before:left-2 before:bottom-0 before:h-[3px] before:w-[35px] before:translate-y-[200%] before:bg-[var(--theme-color)]">Fuel Type</h5>

                        <div className="flex flex-col gap-6 mt-8">
                            {(fuelTypes || []).slice(0, 3).map((fuel, index) => (
                                <div key={fuel + index}
                                    className={`flex gap-5 cursor-pointer w-max duration-200 items-center`}>

                                    <div key={index} className="input-group flex gap-3">
                                        <input type="checkbox" id={fuel} className='w-4 accent-[var(--theme-color)]' />
                                        <label className={"cursor-pointer select-none"} htmlFor={fuel}>{fuel}</label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    <div className='rounded-xl px-3.5 py-4 bg-white'>
                        <h5 className="text-[20px] text-[var(--darkIndigo)] font-semibold py-0 px-2 relative after:absolute after:left-[50px] after:bottom-0 after:h-[3px] after:w-[5px] after:translate-y-[200%] after:bg-[var(--theme-color)] before:absolute before:left-2 before:bottom-0 before:h-[3px] before:w-[35px] before:translate-y-[200%] before:bg-[var(--theme-color)]">Features</h5>

                        <div className="flex flex-col gap-6 mt-8">

                            {(carFeatures || []).map((feature, index) => (
                                <div key={feature + index}
                                    className={`flex gap-5 cursor-pointer w-max duration-200 items-center`}>

                                    <div key={index} className="input-group flex gap-3">
                                        <input type="checkbox" id={feature} className='w-4 accent-[var(--theme-color)]' />
                                        <label className={"cursor-pointer select-none"} htmlFor={feature}>{feature}</label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* data col */}
                <div className="col-span-12 md-lg:col-span-9">
                    {/* top bar */}
                    <div className="flex justify-between items-center flex-wrap gap-y-4 py-2 px-2 bg-white rounded-lg">
                        <p className="font-medium ps-2">Showing 1-8 of 50 Results</p>

                        {/* display listings style */}
                        <div className="flex items-center gap-x-2">
                            {/* grid view */}
                            <button
                                onClick={() => setListStyle("grid")}
                                className={`flex items-center justify-center w-[37px] h-[37px] border  rounded-md ${listStyle == "grid" ? "text-[var(--theme-color)] border-[var(--theme-color)]" : "border-neutral-200"}`}>
                                <FontAwesomeIcon icon={faGridVertical} />
                            </button>
                            {/* list view */}
                            <button
                                onClick={() => setListStyle("row")}
                                className={`flex items-center justify-center w-[37px] h-[37px] border rounded-md ${listStyle == "row" ? "text-[var(--theme-color)] border-[var(--theme-color)]" : "border-neutral-200"}`}>
                                <FontAwesomeIcon icon={faList} />
                            </button>
                        </div>

                        {/* sorting option */}
                        <div className='min-w-[220px]'>
                            <SelectOption
                                item={{
                                    options: [
                                        { label: "Sort by Default", value: "default" },
                                        { label: "Sort by Featured", value: "featured" },
                                        { label: "Sort by Latest", value: "latest" },
                                        { label: "Sort by Low Price", value: "low-price" },
                                        { label: "Sort by High Price", value: "high-price" }
                                    ]
                                }}
                                className={"!py-2.5"}
                                name={"sortFilter"}
                                value={sortFilterVal}
                                onChange={(field, value) => {
                                    setSortFilterVal(value)
                                }}
                            />
                        </div>
                    </div>

                    {/* car listings */}
                    <div className="grid grid-cols-12 gap-y-5 sm:gap-x-5 mt-8">
                        {carListings.map((car, index) => (
                            <div key={index} className={`mx-auto ${listStyle == "grid" ? "col-span-12 sm:col-span-6 md:col-span-4" : "col-span-12"}`}>
                                <ListingCard data={car} listStyle={listStyle} />
                            </div>
                        ))}
                    </div>

                    {/* pagination */}
                    <div className="flex items-center justify-center gap-3 mt-15">
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


        </div>
    )
}



function PriceRangeSlider({ priceRange, setPriceRange }) {
    const MIN = 0;
    const MAX = 10000;



    return (
        <div className="px-4">
            <div className="flex justify-between my-4 items-center">

                <p className="mt-4 text-[var(--theme-color)] font-semibold">
                    ${priceRange[0]} - ${priceRange[1]}
                </p>
            </div>
            <Range
                step={10}
                min={MIN}
                max={MAX}
                values={priceRange}
                onChange={setPriceRange}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        className="h-[5px] bg-neutral-300 rounded-full relative"
                        style={{
                            ...props.style,
                            background: `linear-gradient(to right, #e5e7eb ${((priceRange[0] - MIN) / (MAX - MIN)) * 100}%,
                            
                            #EF1D26 ${((priceRange[0] - MIN) / (MAX - MIN)) * 100}%,
                            #EF1D26 ${((priceRange[1] - MIN) / (MAX - MIN)) * 100}%,
                            #e5e7eb ${((priceRange[1] - MIN) / (MAX - MIN)) * 100}%)`,
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        className="h-4 outline-none w-4 rounded-full bg-[var(--theme-color)] top-[8px] -translate-y-1/2"
                        style={{
                            ...props.style,
                        }}
                    />
                )}
            />
        </div>
    );
}



const transmissionsData = ["manual", "automatic"]
const fuelTypes = ["gas", "Hybric", "diesel", "electric"]
const carFeatures = ["Airbag - Driver", "Airbag - Passenger", "Alloy Wheels", "Anti-lock Braking System"]
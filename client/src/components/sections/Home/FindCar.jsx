import { useState } from 'react'
import { Button, SelectOption } from '../../universalComponents';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function FindCar() {

    const [formData, setFormData] = useState({ condition: "", brand: "", model: "", year: "", mileage: "", priceRange: "", bodyType: "" })
    return (
        <div>
            {/* lets find your perfect car */}
            <div className="relative max-w-[90%] mb-15 z-[14] -top-[70px] w-[1140px] mx-auto rounded-xl bg-white shadow-lg p-7">
                <h3 className="heading-font text-[25px] font-semibold">Let's Find Your Perfect Car</h3>
                <hr className="border-b-[1px] border-neutral-200 my-4" />

                <div className="grid grid-cols-12 gap-5">
                    {findCarData.map((item, index) =>
                        <div key={index} className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
                            <SelectOption
                                name={item.name}
                                value={formData[item.name]}
                                item={item}
                                onChange={(field, value) => {
                                    setFormData(prev => ({
                                        ...prev,
                                        [field]: value
                                    }))
                                }}
                            />
                        </div>
                    )}
                    <div className="col-span-12 flex items-end sm:col-span-6 md:col-span-4 lg:col-span-3">
                        <Button text={"Find Your Car"} bgColor='bg-[var(--theme-color)]' hoverBg={"bg-[var(--dark-color)]"} icon={faSearch} className='w-full' />
                    </div>
                </div>

            </div>

        </div>
    )
}



// find a car data - filters
const findCarData = [
    {
        name: "condition",
        label: "Car Condition",
        options: [
            { label: "All Status", value: "" },
            { label: "New Car", value: "new" },
            { label: "Used Car", value: "used" }
        ]
    },
    {
        name: "brand",
        label: "Brand Name",
        options: [
            { label: "All Brands", value: "" },
            { label: "Toyota", value: "toyota" },
            { label: "Honda", value: "honda" },
            { label: "BMW", value: "bmw" },
            { label: "Audi", value: "audi" },
            { label: "Mercedes", value: "mercedes" },
            { label: "Ford", value: "ford" },
            { label: "Hyundai", value: "hyundai" }
        ]
    },
    {
        name: "model",
        label: "Car Model",
        options: [
            { label: "All Models", value: "" },
            { label: "Corolla", value: "corolla" },
            { label: "Civic", value: "civic" },
            { label: "Accord", value: "accord" },
            { label: "Mustang", value: "mustang" },
            { label: "A4", value: "a4" },
            { label: "3 Series", value: "3series" },
            { label: "Sonata", value: "sonata" }
        ]
    },
    {
        name: "year",
        label: "Choose Year",
        options: [
            { label: "All Years", value: "" },
            { label: "2025", value: "2025" },
            { label: "2024", value: "2024" },
            { label: "2023", value: "2023" },
            { label: "2022", value: "2022" },
            { label: "2021", value: "2021" },
            { label: "2020", value: "2020" },
            { label: "2019", value: "2019" },
            { label: "2018", value: "2018" }
        ]
    },
    {
        name: "mileage",
        label: "Choose Mileage",
        options: [
            { label: "Any", value: "" },
            { label: "0 - 10,000 km", value: "0-10000" },
            { label: "10,000 - 30,000 km", value: "10000-30000" },
            { label: "30,000 - 60,000 km", value: "30000-60000" },
            { label: "60,000 - 100,000 km", value: "60000-100000" },
            { label: "100,000+ km", value: "100000+" }
        ]
    },
    {
        name: "priceRange",
        label: "Price Range",
        options: [
            { label: "Any", value: "" },
            { label: "$5,000 - $10,000", value: "5000-10000" },
            { label: "$10,000 - $20,000", value: "10000-20000" },
            { label: "$20,000 - $30,000", value: "20000-30000" },
            { label: "$30,000+", value: "30000+" }
        ]
    },
    {
        name: "bodyType",
        label: "Body Type",
        options: [
            { label: "All Types", value: "" },
            { label: "Sedan", value: "sedan" },
            { label: "Hatchback", value: "hatchback" },
            { label: "SUV", value: "suv" },
            { label: "Convertible", value: "convertible" },
            { label: "Coupe", value: "coupe" },
            { label: "Pickup", value: "pickup" },
            { label: "Van", value: "van" }
        ]
    }
];

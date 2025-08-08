import { useRef, useState } from 'react'
import { Button, InputBox, SelectOption } from '../../universalComponents'
import { faImage, faImages, faSave, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AddListing() {

  const [listingData, setListingData] = useState({
    title: "", brand: "", price: "", year: "", address: "", city: "", state: "", zipCode: "", description: "", features: [], images: [], tags: "",
    highlightInfo: {
      driveType: "", bodyType: "", mileage: "", condition: "", transmission: "", fuelType: "", engineSize: "", cylinders: "", color: "", doors: "", VIN: "", brand: "", model: "",
    },
    // contact Infomation
    authorName: "", authorEmail: "", authorPhone: "",
  })

  const listingImagesInputRef = useRef()


  function handleInputChange(e) {
    const { name, value, files } = e.target
    const listingKeys = Object.keys(listingData)
    let propName = listingKeys.some(key => key == name)

    let images = listingData.images

    if (files) {

      Array.from(files).forEach(file => {
        if (!images.some(img => img.name === file.name && img.type == file.type)) {
          images.push(file)
        }
      })
    }

    if (propName) {
      setListingData((prev) => (
        {
          ...prev,
          [name]: name == "images" ? [...images] : value,
        }
      ))
    }

    else {
      setListingData((prev) => (
        {
          ...prev,
          highlightInfo: {
            ...prev.highlightInfo,
            [name]: value,
          }
        }
      ))
    }

    listingImagesInputRef.current.value = null

  }

  // console.log(listingData)

  return (
    <div>
      <div className="px-5 py-3 bg-white rounded-lg shadow-[1px_1px_30px_5px_rgba(0,0,0,0.05)]">
        <h4 className="text-[20px] text-[var(--dark-color)] font-semibold">Add New Listing</h4>
        <hr className="border-b- border-neutral-200 my-4" />
        <h6 className="text-[var(--dark-color)] font-semibold">Basic Information</h6>

        {/* listing form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className='mt-6'>

          {/* title */}
          <div className="mb-6">
            <InputBox label={"Listing Title"} name={"title"} placeholder={"Enter Title"} value={listingData.title} onChange={handleInputChange} />
          </div>

          {/* selectOption Elements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-6 gap-6">
            {/* condition */}
            <SelectOption
              name={"condition"}
              value={listingData.highlightInfo.condition}
              item={{
                label: "Condition",
                options: [
                  { label: "Choose", value: "" },
                  { label: "New", value: "new" },
                  { label: "Used", value: "used" }
                ]
              }}
              onChange={(field, value) => {
                setListingData((prev) => ({
                  ...prev,
                  highlightInfo: {
                    ...prev.highlightInfo,
                    [field]: value,
                  }
                }))
              }}
            />

            {/* Body Type */}
            <SelectOption
              name={"bodyType"}
              value={listingData.highlightInfo.bodyType}
              item={{
                label: "Body Type",
                options: [
                  { label: "Choose", value: "" },
                  { label: "Sedan", value: "sedan" },
                  { label: "Compact", value: "compact" },
                  { label: "Coupe", value: "coupe" },
                  { label: "Wagon", value: "wagon" }
                ]
              }}
              onChange={(field, value) => {
                setListingData((prev) => ({
                  ...prev,
                  highlightInfo: {
                    ...prev.highlightInfo,
                    [field]: value,
                  }
                }))
              }}
            />

            {/* brand */}
            <SelectOption
              name={"brand"}
              value={listingData.highlightInfo.brand}
              item={{
                label: "Make/Brand",
                options: [
                  { label: "Choose", value: "" },
                  { label: "BMW", value: "bmw" },
                  { label: "Mercedes", value: "mercedes" },
                  { label: "Honda", value: "honda" },
                  { label: "Ferrari", value: "ferrari" },
                  { label: "Nissan", value: "nissan" }
                ]
              }}
              onChange={(field, value) => {
                setListingData((prev) => ({
                  ...prev,
                  highlightInfo: {
                    ...prev.highlightInfo,
                    [field]: value,
                  }
                }))
              }}
            />

            {/* model */}
            <SelectOption
              name={"model"}
              value={listingData.highlightInfo.model}
              item={{
                label: "Model",
                options: [
                  { label: "Choose", value: "" },
                  { label: "A3", value: "a3" },
                  { label: "A4", value: "a4" },
                  { label: "A6", value: "a6" },
                  { label: "Q4", value: "q4" },
                  { label: "Q7", value: "q7" }
                ]
              }}
              onChange={(field, value) => {
                setListingData((prev) => ({
                  ...prev,
                  highlightInfo: {
                    ...prev.highlightInfo,
                    [field]: value,
                  }
                }))
              }}
            />
            {/* price */}
            <div>
              <InputBox label={"Price (USD)"} name={"price"} placeholder={"Enter price"} value={listingData.price} onChange={handleInputChange} />
            </div>

            {/* year */}
            <SelectOption
              name={"year"}
              value={listingData.year}
              item={{
                label: "Year",
                options: [
                  { label: "Choose", value: "" },
                  { label: "2025", value: "2025" },
                  { label: "2024", value: "2024" },
                  { label: "2023", value: "2023" },
                  { label: "2022", value: "2022" },
                  { label: "2021", value: "2021" },
                  { label: "2020", value: "2020" },
                  { label: "2019", value: "2019" },
                  { label: "2018", value: "2018" }
                ]
              }}
              onChange={(field, value) => {
                setListingData((prev) => ({
                  ...prev,
                  [field]: value,
                }))
              }} />

            {/* drive type */}
            <SelectOption
              name={"driveType"}
              value={listingData.highlightInfo.driveType}
              item={{
                label: "Drive Type",
                options: [
                  { label: "Choose", value: "" },
                  { label: "Manual", value: "manual" },
                  { label: "Semi Auto", value: "semi auto" },
                  { label: "Automatic", value: "automatic" }
                ]
              }}
              onChange={(field, value) => {
                setListingData((prev) => ({
                  ...prev,
                  highlightInfo: {
                    ...prev.highlightInfo,
                    [field]: value,
                  }
                }))
              }}
            />
            {/* transmission */}
            <SelectOption
              name={"transmission"}
              value={listingData.highlightInfo.transmission}
              item={{
                label: "Transmission",
                options: [
                  { label: "Choose", value: "" },
                  { label: "Manual", value: "manual" },
                  { label: "Automatic", value: "automatic" }
                ]
              }}
              onChange={(field, value) => {
                setListingData((prev) => ({
                  ...prev,
                  highlightInfo: {
                    ...prev.highlightInfo,
                    [field]: value,
                  }
                }))
              }}
            />
            {/* fuel type */}
            <SelectOption
              name={"fuelType"}
              value={listingData.highlightInfo.fuelType}
              item={{
                label: "Fuel Type",
                options: [
                  { label: "Choose", value: "" },
                  { label: "Petrol", value: "petrol" },
                  { label: "Diesel", value: "diesel" }
                ]
              }}
              onChange={(field, value) => {
                setListingData((prev) => ({
                  ...prev,
                  highlightInfo: {
                    ...prev.highlightInfo,
                    [field]: value,
                  }
                }))
              }}
            />
            {/* mileage */}
            <div>
              <InputBox label={"Mileage (km)"} name={"mileage"} placeholder={"Enter Mileage (in km)"} value={listingData.highlightInfo.mileage} onChange={handleInputChange} />
            </div>

            {/* engine */}
            <div>
              <InputBox label={"Engine Size"} name={"engineSize"} placeholder={"Enter Engine Size (cc)"} value={listingData.highlightInfo.engineSize} onChange={handleInputChange} />
            </div>

            {/* cylinders */}
            <SelectOption
              name={"cylinders"}
              value={listingData.highlightInfo.cylinders}
              item={{
                label: "Cylinders",
                options: [
                  { label: "Choose", value: "" },
                  { label: "4", value: "4" },
                  { label: "6", value: "6" }
                ]
              }}
              onChange={(field, value) => {
                setListingData((prev) => ({
                  ...prev,
                  highlightInfo: {
                    ...prev.highlightInfo,
                    [field]: value,
                  }
                }))
              }}
            />
            {/* color */}
            <SelectOption
              name={"color"}
              value={listingData.highlightInfo.color}
              item={{
                label: "Color",
                options: [
                  { label: "Choose", value: "" },
                  { label: "Red", value: "red" },
                  { label: "Green", value: "green" },
                  { label: "Blue", value: "blue" },
                  { label: "Purple", value: "purple" }
                ]
              }}
              onChange={(field, value) => {
                setListingData((prev) => ({
                  ...prev,
                  highlightInfo: {
                    ...prev.highlightInfo,
                    [field]: value,
                  }
                }))
              }}
            />
            {/* doors */}
            <SelectOption
              name={"doors"}
              value={listingData.highlightInfo.doors}
              item={{
                label: "Doors",
                options: [
                  { label: "Choose", value: "" },
                  { label: "2", value: "2" },
                  { label: "4", value: "4" },
                  { label: "6", value: "6" }
                ]
              }}
              onChange={(field, value) => {
                setListingData((prev) => ({
                  ...prev,
                  highlightInfo: {
                    ...prev.highlightInfo,
                    [field]: value,
                  }
                }))
              }}
            />

          </div>

          {/* tags */}
          <div className="mb-6">
            <InputBox label={"Tags or Keyword"} name={"tags"} placeholder={"Enter tags ex: car,red"} value={listingData.tags} onChange={handleInputChange} />
          </div>

          {/* images */}
          <h6 className="text-[var(--dark-color)] font-semibold mb-4">Upload Images</h6>
          <div
            onClick={() => listingImagesInputRef.current?.click()}
            className="cursor-pointer border-2 border-dashed border-neutral-200 py-14 mb-7 flex items-center justify-center rounded-xl w-full">
            <div className="flex items-center gap-x-1 text-[var(--body-text-color)] ">
              <FontAwesomeIcon icon={faImages} className='' />
              <span>Upload Listing Images</span>
            </div>
          </div>
          {/* images */}
          <input type="file" name='images' hidden accept='image/*' multiple ref={listingImagesInputRef}
            // value={listingData.images}
            onChange={handleInputChange}
          />

          {/* previews */}
          <div className="flex items-center gap-4 mb-10">
            {(listingData.images || []).map((img, i) => (
              <div className="relative">
                <div key={i} className='w-[75px] flex items-center justify-center border rounded-md border-neutral-300 bg-neutral-100 overflow-clip'>
                  <img src={URL.createObjectURL(img)} className='h-[50px]' />

                  <button type='button'
                    onClick={() => {
                      setListingData(prev => ({
                        ...prev,
                        images: listingData.images.filter((_, index) => i !== index)
                      }))
                    }}
                    className="absolute -top-1 -right-1 w-[13px] h-[13px] rounded-full bg-[var(--theme-color)] flex items-center justify-center cursor-pointer">
                    <FontAwesomeIcon icon={faX} className='text-white text-[7px]' />
                  </button>
                </div>
              </div>
            ))}
          </div>


          {/* location */}
          <h6 className="text-[var(--dark-color)] font-semibold mb-6">Location</h6>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
            {/* address */}
            <div className="mb-6">
              <InputBox label={"Address"} name={"address"} placeholder={"Enter Address"} value={listingData.address} onChange={handleInputChange} />
            </div>
            {/* city */}
            <div className="mb-6">
              <InputBox label={"City"} name={"city"} placeholder={"Enter city"} value={listingData.city} onChange={handleInputChange} />
            </div>
            {/* state */}
            <div className="mb-6">
              <InputBox label={"State"} name={"state"} placeholder={"Enter state"} value={listingData.state} onChange={handleInputChange} />
            </div>
            {/* zip */}
            <div className="mb-6">
              <InputBox label={"Zip"} name={"zip"} placeholder={"Enter zip code"} value={listingData.zip} onChange={handleInputChange} />
            </div>
          </div>

          {/* description */}
          <h6 className="text-[var(--dark-color)] font-semibold mb-6">Detailed Information</h6>
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" value={listingData.description} onChange={handleInputChange} rows={5} className='mt-2 text-sm sm:text-[16px] py-3.5 px-4 w-full focus:outline-1 outline-[var(--theme-color)] border rounded-xl bg-white border-neutral-200 resize-none mb-5' placeholder='Write Description'></textarea>

          {/* features */}
          <h6 className="text-[var(--dark-color)] font-semibold mb-6">Features</h6>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {(availableCarFeatures || []).map((feature, index) => (

              <div key={index} className="checkbox flex gap-2 items-center" >
                <input type="checkbox" id={feature} className='h-[15px] accent-[var(--theme-color)] w-[16px]' />
                <label
                  onClick={() => {
                    console.log(listingData)
                    setListingData((prev) => ({
                      ...prev,
                      features: listingData.features.some(f => f == feature) ?
                        listingData.features.filter(f => f !== feature)
                        :
                        [...prev.features, feature]
                    }))
                  }}
                  htmlFor={feature} className='text-[var(--dark-color)] select-none'>{feature}</label>
              </div>

            ))}

          </div>


          {/* contact Info */}
          <h6 className="text-[var(--dark-color)] font-semibold mb-6">Contact Information</h6>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5">
            {/* authorName */}
            <div className="mb-6">
              <InputBox label={"Name"} name={"authorName"} placeholder={"Enter Name"} value={listingData.authorName} onChange={handleInputChange} />
            </div>

            {/* authorEmail */}
            <div className="mb-6">
              <InputBox label={"Email"} type='email' name={"authorEmail"} placeholder={"Enter Email"} value={listingData.authorEmail} onChange={handleInputChange} />
            </div>

            {/* authorPhone */}
            <div className="mb-6">
              <InputBox label={"Phone"} name={"authorPhone"} placeholder={"Enter Phone"} value={listingData.authorPhone} onChange={handleInputChange} />
            </div>

          </div>

          {/* aknoledgement */}
          <div className="checkbox flex gap-2 items-center">
            <input type="checkbox" id='aknowledgement' className='h-[15px] accent-[var(--theme-color)] w-[16px]' required={true} />
            <label htmlFor="aknowledgement" className='text-[var(--dark-color)] select-none'>I agree with the <span className="text-[var(--theme-color)] cursor-pointer">Terms Of Service</span> and <span className="text-[var(--theme-color)] cursor-pointer">Privacy Policy</span>.</label>
          </div>

          <Button
            text={"Save & Publish Listing"}
            className='mt-10 mb-5'
            icon={faSave}
          />




        </form>
      </div >
    </div >
  )
}


const availableCarFeatures = [
  "Multi-zone A/C", "Adaptive Cruise Control", "sunroof", "Heated front seats", "Cooled Seats", "Panoramic roof", "Navigation System", "Keyles Start", "bluetooth", "Antilock brakes", "Android auto"
]
import { useRef, useState } from 'react'
import { InputBox, Button } from '../../universalComponents/index'
import { faKey, faSave, faUpload, faUser } from '@fortawesome/free-solid-svg-icons'
import { IMAGES } from '../../../files'

export default function Profile() {

  const [profileData, setProfileData] = useState({ firstName: "Antoni", lastName: "Johnson", email: "antoni@example.com", phone: "+2 134 562 458", address: "New York, USA" })
  const [passwordData, setPasswordData] = useState({ oldPassword: "", newPassword: "", confirmPassword: "" })
  const [storeData, setStoreData] = useState({ storeLogo: "", storeBanner: "", storeName: "Automotive Car", contactNumber: "+2 123 654 7898", email: "antoni@example.com" })

  const storeLogoRef = useRef()
  const storeBannerRef = useRef()


  function handleProfileDataChange(e) {
    const { name, value } = e.target
    setProfileData((prev) => (
      {
        ...prev,
        [name]: value,
      }
    ))
  }

  function handlePasswordDataChange(e) {
    setPasswordData(prev => (
      {
        ...prev,
        [e.target.name]: e.target.value
      }
    ))
  }

  function handleStoreDataChange(e) {
    setStoreData(prev => (
      {
        ...prev,
        [e.target.name]: e.target.value
      }
    ))
  }


  return (
    <div>
      {/* update profile */}
      <div className="grid grid-cols-12 gap-y-7 sm:gap-x-7 mb-7">
        {/* col 1 change profile data */}
        <div className="col-span-12 sm:col-span-7 px-5 py-3 bg-white rounded-lg shadow-[1px_1px_30px_5px_rgba(0,0,0,0.05)]">
          <h4 className="text-[20px] text-[var(--dark-color)] font-semibold">Profile Info</h4>
          <hr className="border-b- border-neutral-200 my-4" />
          <form
            onSubmit={(e) => e.preventDefault()}
            className='mt-6'>

            {/* first / last name */}
            <div className="input-group grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              {/* first name */}
              <InputBox label={"First Name"} name={"firstName"} placeholder={"First Name"} value={profileData.firstName} onChange={handleProfileDataChange} />
              {/* last name */}
              <InputBox label={"Last Name"} name={"lastName"} placeholder={"Last Name"} value={profileData.lastName} onChange={handleProfileDataChange} />
            </div>
            {/* email / phone name */}
            <div className="input-group grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              {/* email */}
              <InputBox label={"Email"} type='email' name={"email"} placeholder={"Email"} value={profileData.email} onChange={handleProfileDataChange} />
              {/* phone */}
              <InputBox label={"Phone"} name={"phone"} placeholder={"Phone"} value={profileData.phone} onChange={handleProfileDataChange} />
            </div>

            {/* address */}
            <div className="mb-6">
              <InputBox label={"Address"} name={"address"} placeholder={"Address"} value={profileData.address} onChange={handleProfileDataChange} />
            </div>

            <Button text={"Save Changes"} icon={faUser} className='mb-5' />
          </form>
        </div>

        {/* change password */}
        <div className="col-span-12 sm:col-span-5 px-5 py-3 bg-white rounded-lg shadow-[1px_1px_30px_5px_rgba(0,0,0,0.05)]">
          <h4 className="text-[20px] text-[var(--dark-color)] font-semibold">Change Password</h4>
          <hr className="border-b- border-neutral-200 my-4" />

          <form
            onSubmit={(e) => e.preventDefault()}
          >
            {/* old password */}
            <div className="mb-6">
              <InputBox label={"Old Password"} type='password' name={"oldPassword"} placeholder={"Old Password"} value={passwordData.oldPassword} onChange={handlePasswordDataChange} />
            </div>
            {/* new password */}
            <div className="mb-6">
              <InputBox label={"New Password"} type='password' name={"newPassword"} placeholder={"New Password"} value={passwordData.newPassword} onChange={handlePasswordDataChange} />
            </div>
            {/* confirm password */}
            <div className="mb-6">
              <InputBox label={"Re-Type Password"} type='password' name={"confirmPassword"} placeholder={"Old Password"} value={passwordData.confirmPassword} onChange={handlePasswordDataChange} />
            </div>

            <Button text={"Change Password"} icon={faKey} className='mb-5' />
          </form>
        </div>
      </div>

      {/* store info */}
      <div className="px-5 py-3 bg-white rounded-lg shadow-[1px_1px_30px_5px_rgba(0,0,0,0.05)]">
        <h4 className="text-[20px] text-[var(--dark-color)] font-semibold">Store Info</h4>
        <hr className="border-b- border-neutral-200 my-4" />

        {/* Logo */}
        <div className="w-[100px] h-[100px] rounded-full overflow-clip flex items-center justify-center mb-7">
          <img src={IMAGES.Review_1} alt="" className='w-full h-full' />
        </div>
        <Button
          onClick={() => storeLogoRef.current?.click()}
          text={"Upload Logo"} icon={faUpload} />
        <input type="file" hidden ref={storeLogoRef} />

        {/* banner image */}
        <div className="rounded-xl overflow-clip w-full max-h-[240px] mt-14 mb-7 flex items-center justify-center">
          <img src={IMAGES.Bg_Video} alt="storeBanner" />
        </div>
        <Button
          onClick={() => storeBannerRef.current?.click()}
          text={"Upload Banner"} icon={faUpload} />
        {/* banner input */}
        <input type="file" hidden ref={storeBannerRef} />


        {/* store data form */}
        <form
          className='mt-12 mb-7'
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Store name */}
          <div className="mb-6">
            <InputBox label={"Store Name"} name={"storeName"} placeholder={"Store Name"} value={storeData.storeName} onChange={handleStoreDataChange} />
          </div>
          {/* contact Number */}
          <div className="mb-6">
            <InputBox label={"Contact Number"} name={"contactNumber"} placeholder={"Contact Number"} value={storeData.contactNumber} onChange={handleStoreDataChange} />
          </div>
          {/* email */}
          <div className="mb-6">
            <InputBox label={"Email"} type='email' name={"email"} placeholder={"Email"} value={storeData.email} onChange={handleStoreDataChange} />
          </div>

          <Button text={"Save Changes"} icon={faSave} />


        </form>

      </div>
    </div>
  )
}

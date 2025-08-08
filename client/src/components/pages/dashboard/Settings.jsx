import React, { useState } from 'react'
import SelectOption from '../../universalComponents/SelectOption'
import { Button } from '../../universalComponents'
import { faCog, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default function Settings() {
  const [deleteAccountData, setDeleteAccountData] = useState({ reason: "", description: "" })

  const [privacySettings, setPrivacySettings] = useState({ enableMessages: false, emailNotification: false, hidePhoneNumber: false, recieveMessages: false, privateProfile: false })


  return (
    <div>
      <div className="px-5 pt-3 pb-8 bg-white rounded-lg shadow-[1px_1px_30px_5px_rgba(0,0,0,0.05)]">
        <h4 className="text-[20px] text-[var(--dark-color)] font-semibold">Settings</h4>
        <hr className="border-b- border-neutral-200 my-4" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-7">
          {/* privacy setting */}
          <div>
            <h6 className="text-[var(--dark-color)] font-semibold">Privacy Setting</h6>

            <div className="flex flex-col gap-4 mt-6">

              {/* enable messages */}
              <div className="wrapper">
                <label
                  className='flex items-center gap-x-2 text-[var(--body-text-color)]'
                  onClick={() => {
                    setPrivacySettings(prev => ({
                      ...prev,
                      enableMessages: !privacySettings.enableMessages
                    }))
                  }}
                  htmlFor="enableMessages"
                >
                  <div className={`cursor-pointer flex items-center transition-all duration-200 ${privacySettings.enableMessages ? "bg-[var(--theme-color)]" : "bg-transparent"} border border-neutral-400 px-[2px] h-[16px] w-[33px] min-w-[33px] rounded-full`}>
                    <p className={`h-[12px] w-[12px] rounded-full transition-all duration-200 ${privacySettings.enableMessages ? "translate-x-[130%] bg-white" : "bg-neutral-400"}`}></p>
                  </div>
                  <span className="select-none cursor-pointer">Enable Messages</span>
                </label>
                <input type="checkbox" hidden id='enableMessages' name='enableMessages' />
              </div>
              {/* email notification */}
              <div className="wrapper">
                <label
                  className='flex items-center gap-x-2 text-[var(--body-text-color)]'
                  onClick={() => {
                    setPrivacySettings(prev => ({
                      ...prev,
                      emailNotification: !privacySettings.emailNotification
                    }))
                  }}
                  htmlFor="enableMessages"
                >
                  <div className={`cursor-pointer flex items-center transition-all duration-200 ${privacySettings.emailNotification ? "bg-[var(--theme-color)]" : "bg-transparent"} border border-neutral-400 px-[2px] h-[16px] w-[33px] min-w-[33px] rounded-full`}>
                    <p className={`h-[12px] w-[12px] rounded-full transition-all duration-200 ${privacySettings.emailNotification ? "translate-x-[130%] bg-white" : "bg-neutral-400"}`}></p>
                  </div>
                  <span className="select-none cursor-pointer">I Want To Receive Email Notify</span>
                </label>
                <input type="checkbox" hidden id='enableMessages' name='enableMessages' />
              </div>
              {/* hide phone number */}
              <div className="wrapper">
                <label
                  className='flex items-center gap-x-2 text-[var(--body-text-color)]'
                  onClick={() => {
                    setPrivacySettings(prev => ({
                      ...prev,
                      hidePhoneNumber: !privacySettings.hidePhoneNumber
                    }))
                  }}
                  htmlFor="enableMessages"
                >
                  <div className={`cursor-pointer flex items-center transition-all duration-200 ${privacySettings.hidePhoneNumber ? "bg-[var(--theme-color)]" : "bg-transparent"} border border-neutral-400 px-[2px] h-[16px] w-[33px] min-w-[33px] rounded-full`}>
                    <p className={`h-[12px] w-[12px] rounded-full transition-all duration-200 ${privacySettings.hidePhoneNumber ? "translate-x-[130%] bg-white" : "bg-neutral-400"}`}></p>
                  </div>
                  <span className="select-none cursor-pointer">Hide My Phone Number From Public</span>
                </label>
                <input type="checkbox" hidden id='enableMessages' name='enableMessages' />
              </div>
              {/* recieve message */}
              <div className="wrapper">
                <label
                  className='flex items-center gap-x-2 text-[var(--body-text-color)]'
                  onClick={() => {
                    setPrivacySettings(prev => ({
                      ...prev,
                      recieveMessages: !privacySettings.recieveMessages
                    }))
                  }}
                  htmlFor="enableMessages"
                >
                  <div className={`cursor-pointer flex items-center transition-all duration-200 ${privacySettings.recieveMessages ? "bg-[var(--theme-color)]" : "bg-transparent"} border border-neutral-400 px-[2px] h-[16px] w-[33px] min-w-[33px] rounded-full`}>
                    <p className={`h-[12px] w-[12px] rounded-full transition-all duration-200 ${privacySettings.recieveMessages ? "translate-x-[130%] bg-white" : "bg-neutral-400"}`}></p>
                  </div>
                  <span className="select-none cursor-pointer">I Want To Receive Message</span>
                </label>
                <input type="checkbox" hidden id='enableMessages' name='enableMessages' />
              </div>
              {/* private profile */}
              <div className="wrapper">
                <label
                  className='flex items-center gap-x-2 text-[var(--body-text-color)]'
                  onClick={() => {
                    setPrivacySettings(prev => ({
                      ...prev,
                      privateProfile: !privacySettings.privateProfile
                    }))
                  }}
                  htmlFor="enableMessages"
                >
                  <div className={`cursor-pointer flex items-center transition-all duration-200 ${privacySettings.privateProfile ? "bg-[var(--theme-color)]" : "bg-transparent"} border border-neutral-400 px-[2px] h-[16px] w-[33px] min-w-[33px] rounded-full`}>
                    <p className={`h-[12px] w-[12px] rounded-full transition-all duration-200 ${privacySettings.privateProfile ? "translate-x-[130%] bg-white" : "bg-neutral-400"}`}></p>
                  </div>
                  <span className="select-none cursor-pointer">Make My Profile Private</span>
                </label>
                <input type="checkbox" hidden id='enableMessages' name='enableMessages' />
              </div>

              <Button text={"Update Settings"}
                className='w-max mt-4'
                icon={faCog}
              />

            </div>



          </div>
          {/* delete account */}
          <div>
            <h6 className="text-[var(--dark-color)] font-semibold">Delete Account</h6>
            <form
              onSubmit={(e) => e.preventDefault()}
            >

              {/* reason */}
              <SelectOption
                name={"reason"}
                value={deleteAccountData.reason}
                item={{
                  options: [
                    { label: "Choose Reason", value: "" },
                    { label: "reason 1", value: "reason-1" },
                    { label: "reason 2", value: "reason-2" },
                    { label: "reason 3", value: "reason-3" }
                  ]
                }}
                className={"mt-5"}
                onChange={(field, value) => {
                  setDeleteAccountData((prev) => (
                    {
                      ...prev,
                      [field]: value,
                    }
                  ))
                }}
              />

              {/* description */}
              <div className="mt-5">
                <textarea
                  name="description"
                  id="description"
                  value={deleteAccountData.description}
                  rows={5}
                  onChange={(e) => setDeleteAccountData(p => ({ ...p, description: e.target.value }))}
                  placeholder='Describe your Reason'
                  className='mt-2 text-sm sm:text-[16px] py-3.5 px-4 w-full focus:outline-1 outline-[var(--theme-color)] border rounded-xl bg-white border-neutral-200 resize-none mb-5'
                ></textarea>

                <Button text={"Delete Account"}
                  icon={faTrashAlt}
                />
              </div>
            </form>

          </div>

        </div>

      </div>
    </div>
  )
}

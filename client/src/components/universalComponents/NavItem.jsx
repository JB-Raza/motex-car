import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";


export default function NavItem({ item, onClick = null }) {
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleMouseEnter = () => {
    const el = dropdownRef.current;
    if (el) {
      el.style.maxHeight = el.scrollHeight + "px";
      el.style.opacity = "1";
    }
  };

  const handleMouseLeave = () => {
    const el = dropdownRef.current;
    if (el) {
      el.style.maxHeight = "0px";
      el.style.opacity = "0";
    }
  };

  // open dropdown under md-lg breakpoint

  useEffect(() => {
    function handleDropdownOpenClick() {
      const el = dropdownRef.current
      if (!el) return
      if (isDropdownOpen) {
        el.style.maxHeight = `${el.scrollHeight}px`
      }
      else {
        el.style.maxHeight = '0px'
      }
    }

    handleDropdownOpenClick()
  }, [isDropdownOpen])

  useEffect(() => {
    function handelResize() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handelResize)
    return () => window.removeEventListener("resize", handelResize)

  }, [])


  return (
    <div
      onClick={windowWidth < 980 ? (e) => {
        e.preventDefault()
        e.stopPropagation()
        setIsDropdownOpen(p => !p)
      } : null}
      onMouseEnter={windowWidth > 980 ? handleMouseEnter : null}
      onMouseLeave={windowWidth > 980 ? handleMouseLeave : null}
      className="relative inline-block group">

      <NavLink to={item?.path} onClick={onClick} className="flex items-center justify-between md-lg:items-center gap-x-1 text-[var(--dark-color)] hover:text-[var(--theme-color)] cursor-pointer py-3 md-lg:py-7">
        <span className="font-bold text-nowrap">{item.label}</span>
        {item.subNav?.length > 0 && (
          <FontAwesomeIcon icon={faAngleDown} className="text-sm" />
        )}
      </NavLink>

      {item?.subNav?.length > 0 && (
        <div
          ref={dropdownRef}
          className={`
            ${windowWidth > 980 ? "absolute rounded-md scale-y-0 group-hover:scale-y-100 origin-top" : "relative border rounded-xl overflow-clip"} ${isDropdownOpen ? "border-neutral-300" : "border-transparent"} z-10 w-full md-lg:w-auto min-w-48 bg-white shadow-lg top-[100%] transition-all duration-300 ease-in-out flex flex-col md-lg:invisible md-lg:opacity-0 md-lg:group-hover:opacity-100 md-lg:group-hover:visible 
          `}>
          {item.subNav?.map((item, index) =>
            <SubnavChild key={index} subnav={item} className={index == 0 ? "" : "border-t"} />
          )}
        </div>
      )}

    </div>
  );
}

// subnav child


function SubnavChild({ subnav, className }) {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const dropdownRef = useRef()



  useEffect(() => {
    function handelResize() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handelResize)
    return () => window.removeEventListener("resize", handelResize)

  }, [])

  // open/close dropdown on state change
  useEffect(() => {
    function handleDropdownOpenClick() {
      const el = dropdownRef.current
      if (!el) return
      if (isDropdownOpen) {
        el.style.maxHeight = `${el.scrollHeight}px`
      }
      else {
        el.style.maxHeight = '0px'
      }
    }

    handleDropdownOpenClick()
  }, [isDropdownOpen])

  useEffect(() => {
    const el = dropdownRef.current;
    if (el) {
      el.style.maxHeight = el.scrollHeight + "px";
    }
  }, [])


  return (
    <div

      onClick={windowWidth < 980 ? (e) => {
        e.stopPropagation()
        setIsDropdownOpen(p => !p)
      } : null}
      className="relative group/subnav">
      <NavLink to={subnav?.path}
        className={`flex justify-between group/nav_btn px-5 py-3 items-center gap-x-1 text-[var(--dark-color)] hover:text-[var(--theme-color)] cursor-pointer overflow-clip overflow-y-clip ${className} border-neutral-200`}>
        <div
          className="cursor-pointer font-[500] text-nowrap relative">
          <span className="opacity-0 invisible absolute left-0 group-hover/nav_btn:visible group-hover/nav_btn:opacity-100 transition-all duration-300">//</span>
          <p className="transition-all duration-300 group-hover/nav_btn:translate-x-[12px]">{subnav.label}</p>
        </div>
        {subnav?.subNav?.length > 0 && <FontAwesomeIcon icon={faAngleDown} className="text-sm" />}
      </NavLink>

      {subnav?.subNav?.length > 0 &&
        <div
          ref={dropdownRef}
          className={`${windowWidth > 980 ? "absolute left-[100%] top-0 translate-y-[30px] group-hover/subnav:translate-y-0" : "relative border overflow-hidden"} ${isDropdownOpen ? "border-slate-300" : "border-transparent"} overflow-clip z-12 w-full bg-white rounded-md shadow-lg md-lg:opacity-0 md-lg:invisible md-lg:group-hover/subnav:visible md-lg:group-hover/subnav:opacity-100 transition-all duration-400
          `}>

          {subnav?.subNav?.length > 0 && subnav.subNav.map((option, index) => (
            <NavLink
              to={option?.path}
              key={index}
              className="group/childSubnav relative flex justify-between py-3 items-center gap-x-0 text-[var(--dark-color)] hover:text-[var(--theme-color)] cursor-pointer border-b border-neutral-200 px-5"
            >
              <span className="opacity-0 invisible absolute left-0 group-hover/childSubnav:visible group-hover/childSubnav:opacity-100 transition-all duration-300 ps-4">//</span>
              <p className="transition-all font-[500] duration-300 group-hover/childSubnav:translate-x-[12px]">{option.label}</p>
            </NavLink>
          ))}
        </div>
      }
    </div>
  )
}



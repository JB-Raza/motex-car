import React from 'react'

export default function LineAnimation() {
    return (
        <div className='flex items-center gap-x-3 mx-auto max-w-[100px] overflow-clip mt-3'>
            <div className="h-1 w-[45%px] bg-[var(--theme-color)] rounded animate-line"></div>
            <div className="h-1 w-[15%] bg-[var(--theme-color)] rounded animate-line-reverse"></div>
        </div>
    )
}

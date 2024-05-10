import React from 'react'
import { cn } from '@/utils/helper';


const Button = ({ children, className, onClick = () => { }, hover=false, ...props }) => {
    return (
        <button onClick={onClick} {...props} className={cn(" no-underline group cursor-pointer relative shadow-2xl bg-main rounded-full p-px text-base leading-6  text-white inline-block hover:bg-primary-green", className, hover && "bg-primary-green")}>
            <span className="absolute -top-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-primary-green/0 via-primary-green/60 to-primary-green/0 transition-opacity duration-500 group-hover:opacity-40"></span>

            <div className={cn("relative  hover:text-black flex space-x-2 items-center z-10 rounded-full bg-inherit ring-1 ring-white/10",hover&&"text-black")}>
                {children}
            </div>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-primary-green/0 via-primary-green/60 to-primary-green/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </button>
    )
}

export default Button
import clsx from 'clsx'
import React from 'react'
import { Marker } from './Marker'

const Button = ({ icon, children, href, containerClassName, onClick, markerFill}) => {

    const Inner = () => (
        <>
        <span>
            <span>
                <Marker markerFill={markerFill}/>
            </span>
            {icon && (
                <img 
                src={icon} 
                alt="circle" 
                className='size-10 mr-5 object-contain z-10' 
                />
            )}
            <span>
                {children}
            </span>
        </span>
        </>
    )

  return href ? (
    <a
    className={clsx('relative p-0.5 g5 rounded-xl shadow-500 group', containerClassName)}
    href={href}
    >
        <Inner />
    </a>
  ):(
    <button 
    className={clsx('relative p-0.5 g5 rounded-xl shadow-500 group', containerClassName)}
    onClick={onClick}
    >
        <Inner />
    </button>
  )
}

export default Button
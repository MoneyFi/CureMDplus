import React from 'react'
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDropupCircle } from "react-icons/io";

const Faq = ({ title, content, list }) => {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(!open)
    return (
        <article className={`flex flex-col items-center justify-center w-[90%] h-full overflow-hidden font-sans gap-2`}>
            <div onClick={handleOpen} className='flex justify-between items-center w-full  border-b border-primary-blue py-2 cursor-pointer'>
                <span className='text-lg md:text-xl '>{title}</span>
                <button className='text-xl md:text-2xl text-primary-blue'>
                    {open ? <IoMdArrowDropupCircle /> : <IoMdArrowDropdownCircle />}
                </button>
            </div>
            <div className={'w-full text-xs md:text-sm px-3  text-pretty font-roboto' + (open ? ' h-full' : ' h-0')}><p>{content}</p>{list && list.split('-').map((l,i) => (<li key={i}>{l}</li>))}</div>
        </article>
    )
}

export default Faq;
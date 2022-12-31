import React, { useRef } from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

const Navbar = () => {

  let toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
      ref.current.classList.remove('hidden')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
      setTimeout(() => {
        ref.current.classList.add('hidden')
      }, 100);
    }
  }
  let ref = useRef()

  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md'>
      <div className='logo mx-5'>
        <Link href='/'>CodesWear.com</Link>
      </div>

      <div className='nav'>
        <ul className='flex item-center space-x-2 font-bold md:text-md'>
          <li><Link href='/tshirts'>Tshirts</Link></li>
          <li><Link href='/hoodies'>Hoodies</Link></li>
          <li><Link href='/stickers'>Stickers</Link></li>
          <li><Link href='/mugs'>Mugs</Link></li>
        </ul>
      </div>

      <div onClick={toggleCart} className="cart cursor-pointer absolute right-0 mx-5 top-2">
        <AiOutlineShoppingCart className='text-xl md:text-3xl' />
      </div>

      <div ref={ref} className="sideCart absolute top-0 right-0 bg-indigo-100 h-full py-10 px-5 overflow-x-hidden hidden transform transition-transform translate-x-full">
        <h2 className='font-bold text-center my-3'>Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-4 right-3 cursor-pointer text-indigo-500 text-2xl">
          <AiFillCloseCircle /></span>
        <ol className='list-decimal font-semibold'>
        <li>
            <div className="item flex">
              <div className='w-3/4 font-semibold my-3'>Tshirt - Wear the code</div>
              <div className="w-1/4 flex font-semibold items-center justify-center text-xl">
              <AiFillMinusCircle className='text-red-600 text-3xl'/><span className='mx-2'>1</span><AiFillPlusCircle className='text-red-600 text-3xl'/>
              </div>
            </div>
          </li>
        </ol>
        <div className="flex">
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-500 rounded text-lg">Checkout</button>
        <button className="flex mx-auto text-white bg-indigo-500 border-0 py-1 px-7 focus:outline-none hover:bg-red-500 rounded mt-16 text-lg">Clear</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
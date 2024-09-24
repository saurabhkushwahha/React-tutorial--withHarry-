import React from 'react'

function Footer() {
    return (
        <div className='w-full bg-slate-500 p-3 h-52 relative '>
            <div className='w-full flex flex-row  justify-around'>
                <div>
                    <ul className='list-none font-bold'>Contact Us
                        <li>123 Main Street,City,State,12344</li>
                        <li> Phone:(123) 244-2322</li>
                        <li>Email:info@example.com</li>
                    </ul>
                </div>
                <div>
                    <ul className='list-none font-bold'>
                        <li>About us</li>
                        <li>Serivces</li>
                        <li>Privacy Policy</li>
                        <li>Term of Services</li>
                    </ul>
                </div>
            </div>
                <div className='absolute bottom-0 left-5 font-extrabold'>Follow Us
                    [Facebook] [Twitter] [LinkedIn]</div>
                    <div className='absolute bottom-0 right-5 text-center font-semibold'>© 2024 Your Company Name. All rights reserved.</div>
        </div>
    )
}

export default Footer
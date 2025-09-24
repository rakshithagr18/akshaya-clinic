"use client"
import { useState } from 'react'
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Main from '../../components/Main';

export default function dashboardPage() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className='flex'>

                <div className='flex min-h-[100vh] h-[100vh] overflow-y-hidden max-w-[320px]'>
                    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>

                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/20 z-40 lg:hidden"
                        onClick={() => setIsOpen(false)}
                    ></div>
                )}

                <div className='flex-1 bg-gray-100 h-[100vh] min-h-[100vh] overflow-y-scroll'>
                    <Navbar setIsOpen={setIsOpen} />
                    <div className='main-content p-5 bg-[#f3f8fe]'>
                        <Main />
                    </div>
                </div>
            </div>

        </>
    )
} 
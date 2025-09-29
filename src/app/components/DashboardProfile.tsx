"use client"
import { GlobalContext } from '@/utils/context/Provider'
import React, { useContext } from 'react'

const DashboardProfile: React.FC = () => {
    const { user } = useContext(GlobalContext)
    return (
        <div className="flex items-center justify-center p-6">
            <div className="w-full max-w-4xl bg-white shadow-xl overflow-hidden">
                {/* Top row: Image (left) + Name/Title (right) */}
                <div className="flex items-center p-6 gap-25">
                    {/* Left: Doctor Image (square) */}
                    <div className="flex-shrink-0 w-80 h-80 md:w-72 md:h-72">
                        <img
                            src="/images/user.jpg"
                            // alt="Dr. Usman Khajol"
                            className="object-cover w-full h-full rounded-lg"
                        />
                    </div>

                    {/* Right: Name + Specialization */}
                    <div className="flex-1 flex flex-col justify-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                            {user?.name}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 mt-2">
                            <span className='font-bold text-black'>Email: </span>{user?.email}
                        </p>
                        {/* <p className="text-lg md:text-xl text-gray-500 mt-2">
                            Throat - Head Neck Specialist
                        </p> */}
                    </div>
                </div>

                {/* Stats row: spans full card width */}
                <div className="border-t border-gray-200 bg-gray-50">
                    <div className="flex divide-x divide-gray-200">
                        {/* <div className="flex-1 text-center py-6 px-4">
                            <p className="text-base text-gray-500">Patients</p>
                            <p className="mt-1 text-2xl font-semibold text-gray-800">150</p>
                        </div>

                        <div className="flex-1 text-center py-6 px-4">
                            <p className="text-base text-gray-500">Reviews</p>
                            <p className="mt-1 text-2xl font-semibold text-gray-800">120</p>
                        </div>

                        <div className="flex-1 text-center py-6 px-4">
                            <p className="text-base text-gray-500">Experience</p>
                            <p className="mt-1 text-2xl font-semibold text-gray-800">15 Years</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardProfile

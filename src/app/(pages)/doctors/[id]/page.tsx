import DoctorDetails from '@/components/pages/doctordetails/DoctorDetails'
import DoctorListing from '@/components/pages/doctors/DoctorListings'
import { Metadata } from 'next';
import React from 'react'

interface Props {
    params: Promise<{ id: string }>; // 👈 params is async
}

const page = async ({ params }: Props) => {

    const { id } = await params;
    return (
        <div>
            <DoctorDetails id={id} />
            {/* <DoctorListing /> */}
        </div>
    )
}

export default page

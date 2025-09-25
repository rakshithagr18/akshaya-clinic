import DashboardLayout from '@/components/layout/DashboardLayout';
import GlobalProvider from '@/utils/context/Provider';
import React from 'react'

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <GlobalProvider >
                <DashboardLayout>

                    {children}
                </DashboardLayout>
            </GlobalProvider>
        </>
    )
}

export default layout

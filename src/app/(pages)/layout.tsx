import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import SideNavWidgets from '@/components/ui/SideNavWidgets';
import React from 'react'

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <SideNavWidgets />
        </>
    )
}

export default layout

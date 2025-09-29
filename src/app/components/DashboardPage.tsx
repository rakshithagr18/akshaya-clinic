import React from "react";

const DashboardPage: React.FC = () => {
    const stats = [
        {
            title: "Total Appointment",
            value: "20+",
            subtitle: "Till Today",
            icon: (
                <svg
                    className="w-12 h-12 p-2 rounded-full bg-white text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 
          1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 
          1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
            ),
        },
        // Uncomment later when you add more
        // {
        //   title: "Today Patient",
        //   value: "068",
        //   subtitle: "21 Dec-2021",
        //   icon: (
        //     <svg
        //       className="w-12 h-12 p-2 rounded-full bg-white text-black"
        //       fill="currentColor"
        //       viewBox="0 0 24 24"
        //     >
        //       <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 
        //       0-2 .9-2 2v14c0 1.1.9 2 2 
        //       2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
        //       16H5V9h14v11zm0-13H5V6h14v1z" />
        //     </svg>
        //   ),
        // },
        // {
        //   title: "Today Appointments",
        //   value: "085",
        //   subtitle: "21 Dec-2021",
        //   icon: (
        //     <svg
        //       className="w-12 h-12 p-2 rounded-full bg-white text-black"
        //       fill="currentColor"
        //       viewBox="0 0 24 24"
        //     >
        //       <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 
        //       0-2 .9-2 2v16c0 1.1.9 2 2 
        //       2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 
        //       18H5V8h14v13z" />
        //     </svg>
        //   ),
        // },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-transparent">
            <div className="max-w-4xl w-full">
                <h1 className="text-3xl font-bold text-center mb-8 text-black">
                    Dashboard
                </h1>

                {/* Flex container with background for cards */}
                <div className="bg-gray-100 p-6 rounded-2xl shadow-lg">
                    <div
                        className={`grid gap-6 ${stats.length === 1
                                ? "place-items-center" // Center if only one card
                                : "grid-cols-1 md:grid-cols-3"
                            }`}
                    >
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-sky-200 rounded-2xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 flex items-center p-6 gap-4"
                            >
                                {/* Icon */}
                                {stat.icon}

                                {/* Content */}
                                <div>
                                    <h3 className="text-lg font-semibold text-black">
                                        {stat.title}
                                    </h3>
                                    <p className="text-3xl font-bold mt-1 text-black">
                                        {stat.value}
                                    </p>
                                    <p className="text-sm opacity-90 text-black">
                                        {stat.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;

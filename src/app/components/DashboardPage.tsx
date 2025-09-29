import React from "react";

const DashboardPage: React.FC = () => {
    const stats = [
        {
            title: "Total Appointment",
            value: "20+",
            subtitle: "Till Today",
            icon: (
                <svg
                    className="w-10 h-10 p-1 rounded-full bg-white text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 
          1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 
          1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
            ),
        },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-transparent p-4">
            {/* Dashboard Title */}
            <h1 className="text-3xl font-bold mb-6 text-black">
                Dashboard
            </h1>

            {/* Outer box containing cards */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-md w-full max-w-sm">
                <div className="flex justify-center">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-sky-200 rounded-xl shadow-sm p-4 flex items-center gap-3 w-full max-w-xs transform transition-transform duration-300 hover:scale-105"
                        >
                            {/* Icon */}
                            {stat.icon}

                            {/* Content */}
                            <div>
                                <h3 className="text-md font-semibold text-black">
                                    {stat.title}
                                </h3>
                                <p className="text-2xl font-bold mt-1 text-black">
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
    );
};

export default DashboardPage;

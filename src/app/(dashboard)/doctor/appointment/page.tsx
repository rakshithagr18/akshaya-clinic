"use client";

import { useState } from "react";

export default function AppointmentForm() {
    const today = new Date();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        reason: "",
        date: "",
        time: "",
    });

    const [showCalendar, setShowCalendar] = useState(false);
    const [showClock, setShowClock] = useState(false);
    const [tempDate, setTempDate] = useState(formData.date);

    // Calendar states
    const [calendarMonth, setCalendarMonth] = useState(today.getMonth());
    const [calendarYear, setCalendarYear] = useState(today.getFullYear());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    // Time states
    const [hour, setHour] = useState(12);
    const [minute, setMinute] = useState(0);
    const [period, setPeriod] = useState<"AM" | "PM">("AM");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.reason) {
            alert("⚠️ Please fill out all fields.");
            return;
        }
        alert("✅ Appointment booked successfully!");
        console.log(formData);
    };

    // Calendar helpers
    const getDaysInMonth = (year: number, month: number) => {
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const daysArray: (number | null)[] = [];
        for (let i = 0; i < firstDay; i++) daysArray.push(null);
        for (let d = 1; d <= daysInMonth; d++) daysArray.push(d);
        return daysArray;
    };

    const days = getDaysInMonth(calendarYear, calendarMonth);
    const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    const handleDateSelect = (day: number) => {
        const dateObj = new Date(calendarYear, calendarMonth, day);
        setSelectedDate(dateObj);
        setTempDate(dateObj.toDateString());
    };

    const confirmDate = () => {
        if (selectedDate) {
            setFormData({ ...formData, date: tempDate });
        }
        setShowCalendar(false);
    };

    const clearDate = () => {
        setTempDate("");
        setSelectedDate(null);
        setFormData({ ...formData, date: "" });
    };

    const confirmTime = () => {
        const formattedTime = `${hour.toString().padStart(2, "0")}:${minute
            .toString()
            .padStart(2, "0")} ${period}`;
        setFormData({ ...formData, time: formattedTime });
        setShowClock(false);
    };

    const clearTime = () => {
        setHour(12);
        setMinute(0);
        setPeriod("AM");
        setFormData({ ...formData, time: "" });
    };

    const handlePrevMonth = () => {
        if (calendarMonth === 0) {
            setCalendarMonth(11);
            setCalendarYear(calendarYear - 1);
        } else {
            setCalendarMonth(calendarMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (calendarMonth === 11) {
            setCalendarMonth(0);
            setCalendarYear(calendarYear + 1);
        } else {
            setCalendarMonth(calendarMonth + 1);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 border border-gray-400 rounded-md"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 border border-gray-400 rounded-md"
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone No"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 border border-gray-400 rounded-md"
                    required
                />

                {/* Calendar Dropdown */}
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setShowCalendar(!showCalendar)}
                        className="w-full flex justify-between items-center p-3 border border-gray-400 rounded-md"
                    >
                        <span>{formData.date}</span> <span>▼</span>
                    </button>
                    {showCalendar && (
                        <div className="absolute mt-2 w-full bg-white border rounded-md shadow-lg z-10 p-3">
                            <div className="flex justify-between items-center mb-2 text-gray-600">
                                <button type="button" onClick={handlePrevMonth}>◀</button>
                                <div className="flex gap-2 items-center">
                                    <span>{new Date(calendarYear, calendarMonth).toLocaleString("default", { month: "long" })}</span>
                                    <input
                                        type="number"
                                        value={calendarYear}
                                        onChange={(e) => setCalendarYear(Number(e.target.value))}
                                        className="w-20 border rounded-md p-1 text-center"
                                    />
                                </div>
                                <button type="button" onClick={handleNextMonth}>▶</button>
                            </div>
                            <div className="grid grid-cols-7 gap-1 text-center text-sm">
                                {dayNames.map((d) => (
                                    <span key={d} className="font-semibold text-gray-500">{d}</span>
                                ))}
                                {days.map((day, idx) => (
                                    <button
                                        key={idx}
                                        type="button"
                                        disabled={!day}
                                        onClick={() => day && handleDateSelect(day)}
                                        className={`p-2 rounded-md ${selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === calendarMonth && selectedDate.getFullYear() === calendarYear ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
                                    >
                                        {day || ""}
                                    </button>
                                ))}
                            </div>
                            <div className="flex justify-between mt-2">
                                <button type="button" onClick={clearDate} className="text-gray-600">Clear</button>
                                <div className="space-x-2">
                                    <button type="button" onClick={() => setShowCalendar(false)} className="text-gray-600">Cancel</button>
                                    <button type="button" onClick={confirmDate} className="text-blue-600 font-semibold">Set</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Clock Dropdown */}
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setShowClock(!showClock)}
                        className="w-full flex justify-between items-center p-3 border border-gray-400 rounded-md"
                    >
                        <span>{formData.time}</span> <span>▼</span>
                    </button>
                    {showClock && (
                        <div className="absolute mt-2 w-full bg-white border rounded-md shadow-lg z-10 p-3">
                            <div className="flex gap-2 mb-2">
                                <select value={hour} onChange={(e) => setHour(Number(e.target.value))} className="border rounded-md p-2 w-16">
                                    {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
                                        <option key={h} value={h}>{h.toString().padStart(2, "0")}</option>
                                    ))}
                                </select>
                                <span className="self-center">:</span>
                                <select value={minute} onChange={(e) => setMinute(Number(e.target.value))} className="border rounded-md p-2 w-16">
                                    {Array.from({ length: 60 }, (_, i) => i).map((m) => (
                                        <option key={m} value={m}>{m.toString().padStart(2, "0")}</option>
                                    ))}
                                </select>
                                <select value={period} onChange={(e) => setPeriod(e.target.value as "AM" | "PM")} className="border rounded-md p-2">
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </div>
                            <div className="flex justify-between">
                                <button type="button" onClick={clearTime} className="text-gray-600">Clear</button>
                                <div className="space-x-2">
                                    <button type="button" onClick={() => setShowClock(false)} className="text-gray-600">Cancel</button>
                                    <button type="button" onClick={confirmTime} className="text-blue-600 font-semibold">Set</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <input
                    type="text"
                    name="reason"
                    placeholder="Reason for Visit"
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="w-full p-3 border border-gray-400 rounded-md"
                    required
                />

                <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-500">
                    Book an Appointment
                </button>
            </form>
        </div>
    );
}

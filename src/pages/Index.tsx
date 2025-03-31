
import React from "react";
import ScoreCard from "@/components/ScoreCard";

const Index = () => {
  // Sample data for our charts
  const coreData = [
    { day: "Sun", value: 50, fill: 60, active: true },
    { day: "Mon", value: 50, fill: 40, active: true },
    { day: "Tue", value: 50, fill: 75, active: true },
    { day: "Wed", value: 50, fill: 95, active: true },
    { day: "Thu", value: 50, fill: 50, active: true },
    { day: "Fri", value: 50, fill: 0, active: false },
    { day: "Sat", value: 50, fill: 0, active: false },
  ];
  
  const sleepData = [
    { day: "Sun", value: 50, fill: 40, active: true },
    { day: "Mon", value: 50, fill: 50, active: true },
    { day: "Tue", value: 50, fill: 60, active: true },
    { day: "Wed", value: 50, fill: 80, active: true },
    { day: "Thu", value: 50, fill: 45, active: true },
    { day: "Fri", value: 50, fill: 0, active: false },
    { day: "Sat", value: 50, fill: 0, active: false },
  ];
  
  const activityData = [
    { day: "Sun", value: 50, fill: 30, active: true },
    { day: "Mon", value: 50, fill: 45, active: true },
    { day: "Tue", value: 50, fill: 55, active: true },
    { day: "Wed", value: 50, fill: 90, active: true },
    { day: "Thu", value: 50, fill: 60, active: true },
    { day: "Fri", value: 50, fill: 0, active: false },
    { day: "Sat", value: 50, fill: 0, active: false },
  ];
  
  const calmData = [
    { day: "Sun", value: 50, fill: 35, active: true },
    { day: "Mon", value: 50, fill: 40, active: true },
    { day: "Tue", value: 50, fill: 65, active: true },
    { day: "Wed", value: 50, fill: 85, active: true },
    { day: "Thu", value: 50, fill: 50, active: true },
    { day: "Fri", value: 50, fill: 0, active: false },
    { day: "Sat", value: 50, fill: 0, active: false },
  ];

  // Icons for different cards
  const coreIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" 
        stroke="#4DAA99" strokeWidth="1.5" />
      <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" 
        stroke="#4DAA99" strokeWidth="1.5" />
      <path d="M12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6C13 6.55228 12.5523 7 12 7Z" 
        fill="#4DAA99" />
      <path d="M12 21C11.4477 21 11 20.5523 11 20C11 19.4477 11.4477 19 12 19C12.5523 19 13 19.4477 13 20C13 20.5523 12.5523 21 12 21Z" 
        fill="#4DAA99" />
      <path d="M6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12Z" 
        fill="#4DAA99" />
      <path d="M20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12Z" 
        fill="#4DAA99" />
    </svg>
  );
  
  const sleepIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" 
        stroke="#3B82F6" strokeWidth="1.5" />
      <path d="M17 12C17 9.23858 14.7614 7 12 7V17C14.7614 17 17 14.7614 17 12Z" 
        fill="#3B82F6" fillOpacity="0.4" stroke="#3B82F6" strokeWidth="1.5" />
    </svg>
  );
  
  const activityIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12H6L9 3L15 21L18 12H21" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  
  const calmIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
        stroke="#EC4899" strokeWidth="1.5" />
      <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="#EC4899" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 10H9.01" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
      <path d="M15 10H15.01" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Score Cards</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScoreCard 
            className="border-none shadow-lg rounded-2xl" 
            title="CoreScore Daily Progress"
            target={58}
            data={coreData}
            lastUpdated="10:00 am"
            icon={coreIcon}
            fillColor="#86CFBD"
            analyticsColor="#16a34a"
          />
          
          <ScoreCard 
            className="border-none shadow-lg rounded-2xl" 
            title="Sleep Score Daily Progress"
            target={32}
            data={sleepData}
            lastUpdated="10:00 am"
            icon={sleepIcon}
            fillColor="#93C5FD"
            analyticsColor="#3B82F6"
          />
          
          <ScoreCard 
            className="border-none shadow-lg rounded-2xl" 
            title="Activity Score Daily Progress"
            target={28}
            data={activityData}
            lastUpdated="12:30 pm"
            icon={activityIcon}
            fillColor="#A78BFA"
            analyticsColor="#8B5CF6"
          />
          
          <ScoreCard 
            className="border-none shadow-lg rounded-2xl" 
            title="Calm Score Daily Progress"
            target={35}
            data={calmData}
            lastUpdated="12:00 pm"
            icon={calmIcon}
            fillColor="#F9A8D4"
            analyticsColor="#EC4899"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;

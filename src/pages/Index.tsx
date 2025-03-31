
import React from "react";
import CoreScoreCard from "@/components/CoreScoreCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">GraphyVerse</h1>
        <div className="space-y-6">
          <CoreScoreCard className="border-none shadow-lg rounded-2xl" />
          <div className="text-center p-4">
            <p className="text-gray-500">
              This is a custom visualization based on the CoreScore Daily Progress design.
              You can customize the data and appearance as needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

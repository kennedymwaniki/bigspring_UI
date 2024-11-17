import React from "react";
import Hero from "./_components/Hero";
import ToKnow from "./_components/ToKnow";
import AdvancedMarketing from "./_components/AdvancedMarketing";
const page = () => {
  return (
    <div className="min-h-auto">
      <Hero />
      <ToKnow />
      <AdvancedMarketing />
    </div>
  );
};

export default page;

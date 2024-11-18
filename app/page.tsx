import React from "react";
import Hero from "./_components/Hero";
import ToKnow from "./_components/ToKnow";
import AdvancedMarketing from "./_components/AdvancedMarketing";
import PrivatelyOwned from "./_components/PrivatelyOwned";
import ExperiencedTeam from "./_components/ExperiencedTeam";
import Unique from "./_components/Unique";
import Benefits from "./_components/Benefits";
const page = () => {
  return (
    <div className="min-h-auto">
      <Hero />
      <ToKnow />
      <AdvancedMarketing />
      <PrivatelyOwned />
      <ExperiencedTeam />
      <Unique />
      <Benefits />
    </div>
  );
};

export default page;

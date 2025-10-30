// import React from 'react';
// import StatsCards from './StatsCards';
// import IncomeSummary from './IncomeSummary';
// import TodaysTasks from './TodaysTasks';
// import NewLeadsTable from './NewLeadsTable';
// import Header2 from "../../../components/ServiceEngineer/header/Header2";

// const Dashboard = () => {
//   return (
//     <div className="flex flex-col bg-white p-4 sm:p-6 gap-y-6 sm:gap-y-8 min-h-screen font-sans text-base">

//       <StatsCards />
//       <div className="flex flex-row gap-6 w-full">
//         <div className="flex-1">
//           <IncomeSummary />
//         </div>
//         <div className="flex-1">
//           <TodaysTasks />
//         </div>
//       </div>
//       <NewLeadsTable />
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react';
import StatsCards from './StatsCards';
import IncomeSummary from './IncomeSummary';
import TodaysTasks from './TodaysTasks';
import NewLeadsTable from './NewLeadsTable';
import Header2 from "../../../components/ServiceEngineer/header/Header2";

const Dashboard = () => {
  return (
    <div className="flex flex-col bg-white p-4 sm:p-6 gap-y-6 sm:gap-y-8 min-h-screen font-sans text-base">

      <StatsCards />

      {/* 70% + 30% layout */}
      <div className="w-full flex flex-col lg:flex-row gap-6">
        
        {/* 70% width on large screen */}
        <div className="w-full lg:w-[70%]">
          <IncomeSummary />
        </div>

        {/* 30% width on large screen */}
        <div className="w-full lg:w-[30%]">
          <TodaysTasks />
        </div>

      </div>

      <NewLeadsTable />
    </div>
  );
};

export default Dashboard;


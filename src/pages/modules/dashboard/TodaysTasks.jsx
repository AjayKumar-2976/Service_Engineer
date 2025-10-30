// import React from 'react';

// const TodaysTasks = () => {
//   const tasks = [
//     { id: 1, task: 'Change Filter' },
//     { id: 2, task: 'Fix Filter' },
//     { id: 3, task: 'Service RO Water' },
//     { id: 4, task: 'Fix Filter' },
//     { id: 5, task: 'Service RO Water' },
//     { id: 6, task: 'Service RO Water' },
//     { id: 7, task: 'Service RO Water' },
//   ];

//   return (
//     <div className="bg-[#F5F5F5] p-4 rounded-lg flex flex-col gap-4 h-[350px] w-[350px]">
//       <h3 className="font-semibold text-base text-[#263138] self-stretch">Today’s Task</h3>
//       <div className="bg-white p-4 flex-grow rounded-lg overflow-y-auto scrollbar-hide">
//         <ul className="flex flex-col gap-4">
//           {tasks.map(item => (
//             <li key={item.id} className="flex items-center justify-between">
//               <span className="text-[#606060] text-base font-normal flex-grow">{item.id}. {item.task}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default TodaysTasks;

import React from 'react';

const TodaysTasks = () => {
  const tasks = [
    { id: 1, task: 'Change Filter' },
    { id: 2, task: 'Fix Filter' },
    { id: 3, task: 'Service RO Water' },
    { id: 4, task: 'Fix Filter' },
    { id: 5, task: 'Service RO Water' },
    { id: 6, task: 'Service RO Water' },
    { id: 7, task: 'Service RO Water' },
  ];

  return (
    <div className="bg-[#F5F5F5] p-4 rounded-lg flex flex-col gap-4 h-[350px] w-[350px]">
      <h3 className="font-semibold text-base text-[#263138] self-stretch">Today’s Task</h3>
      <div className="bg-white p-4 flex-grow rounded-lg overflow-y-auto scrollbar-hide">
        <ul className="flex flex-col gap-4">
          {tasks.map(item => (
            <li key={item.id} className="flex items-center justify-between">
              <span className="text-[#606060] text-base font-normal flex-grow">{item.id}. {item.task}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodaysTasks;
import React, { useState } from 'react';
import { FiPlus, FiSearch, FiCheck, FiTruck, FiClock, FiClipboard, FiGrid, FiChevronRight } from 'react-icons/fi';
import DashboardIcon from '../../../assets/Dashboard_icon.png';
import NewRequestModal from './NewRequestModal';
import { getRequestsByStatus } from "./RequestedData"

const tabs = [
  { key: 'all', label: 'All', count: 7 },
  { key: 'pending', label: 'Pending', count: 4 },
  { key: 'completed', label: 'Completed', count: 1 },
  { key: 'delivered', label: 'Delivered', count: 1 },
  { key: 'rejected', label: 'Rejected', count: 1 },
];

const Inventory = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [query, setQuery] = useState('');

  // Get items from mock data grouped by status and apply search filter
  const items = getRequestsByStatus(activeTab).filter((it) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      (it.name || '').toLowerCase().includes(q) ||
      (it.model || '').toLowerCase().includes(q) ||
      (it.requestId || '').toLowerCase().includes(q)
    );
  });
  const [showNewRequest, setShowNewRequest] = useState(false);

  const handleOpenNewRequest = () => setShowNewRequest(true);
  const handleCloseNewRequest = () => setShowNewRequest(false);
  const handleSubmitNewRequest = (payload) => {
    // TODO: wire to API - for now just log
    console.log('New request submitted', payload);
  };

  return (
    <div className="w-full min-h-screen py-6">
      {/* Centered content container */}
      <div className="w-full mx-auto mb-4 bg-white rounded-lg border border-gray-100 p-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-2">
          <img src={DashboardIcon} alt="dashboard" className="w-4 h-4" />
          <FiChevronRight className="text-gray-400" />
          <span className="text-sm font-medium text-[#007AFF]">Inventory Request</span>
        </div>

        {/* Page heading and divider (smaller heading to match screenshot) */}
        <div className="mb-3">
          <h1 className="text-[18px] leading-[28px] font-semibold text-[#263138]">Inventory Request</h1>
          <div className="border-t border-gray-200 mt-3" />
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="w-full max-w-[720px]">
            <div className="flex items-center bg-white border border-gray-200 rounded-full px-4 h-12">
              <FiSearch className="text-gray-400 mr-3" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Product by name or Model..."
                className="w-full h-full outline-none text-sm placeholder-gray-400"
              />
            </div>
          </div>

          <div className="ml-4">
            <button onClick={handleOpenNewRequest} className="inline-flex items-center gap-2 bg-[#7EC1B1] hover:bg-[#6fb3a3] text-white px-4 py-2 rounded-full shadow-md">
              <FiPlus />
              <span className="font-medium">New Request</span>
            </button>
            <NewRequestModal isOpen={showNewRequest} onClose={handleCloseNewRequest} onSubmit={handleSubmitNewRequest} />
          </div>
        </div>

        {/* Tabs (kept small and subtle) */}
        <div className="flex items-center gap-3 mb-6">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`text-sm px-4 py-2 rounded-full ${activeTab === t.key ? 'bg-white border border-gray-200 shadow-sm' : 'bg-gray-100 text-gray-600'}`}>
              {t.label} <span className="text-gray-500 ml-1">({t.count})</span>
            </button>
          ))}
        </div>

  {/* Scrollable list container sized per spec (scroll enabled, scrollbar hidden) */}
        <div className="w-full h-[581px] overflow-y-auto scrollbar-hide space-y-6">
          {items.map((it, idx) => (
            <div key={idx} className="w-full bg-[#F5F5F5] rounded-[12px] p-6 flex justify-between items-start" style={{height: 274}}>
              {/* Left content */}
              <div style={{width: 520}} className="flex flex-col gap-1">
                <div className="text-[24px] leading-[34px] font-semibold text-[#263138]">{it.name}</div>
                <div className="text-[14px] leading-[20px] font-normal text-[#263138]">Request ID: {it.requestId}</div>

                <div className="flex mt-3" style={{gap: 83}}>
                  <div style={{width: 70}}>
                    <div className="text-[16px] leading-[24px] font-normal text-[#263138]">Quantity</div>
                    <div className="text-[16px] leading-[24px] font-bold text-[#263138]">{it.quantity}</div>
                  </div>

                  <div style={{width: 107}}>
                    <div className="text-[16px] leading-[24px] font-normal text-[#263138]">Request Date</div>
                    <div className="text-[16px] leading-[24px] font-bold text-[#263138] text-center">{it.requestDate}</div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-[14px] leading-[20px] font-normal text-[#263138]">Reason</div>
                  <div className="text-[14px] leading-[20px] font-semibold text-[#263138] mt-2">{it.reason}</div>
                </div>
              </div>

              {/* Right status column */}
              <div style={{width: 220}} className="flex flex-col items-end">
                <div className="flex items-center justify-center bg-[#3A953A] rounded-full px-4 py-2 text-white font-semibold">
                  <FiTruck className="mr-2" />
                  <span className="text-[14px] leading-[20px]">{it.status || 'Status'}</span>
                </div>

                <div className="mt-6 w-full">
                  {it.milestones.map((m, i) => (
                    <div key={i} className="flex items-center justify-end mb-3">
                      <div className="flex items-center gap-3 w-full">
                        <div className="flex-1 text-right">
                          <div className={`text-[16px] leading-[24px] font-normal ${m.state === 'done' ? 'text-[#3A953A]' : m.state === 'approved' ? 'text-[#007AFF]' : 'text-[#606060]'}`}>{m.label}: <span className="font-medium">{m.date}</span></div>
                        </div>

                        <div className="w-8 h-8 flex items-center justify-center rounded-full" style={{background: m.state === 'done' ? '#3A953A' : m.state === 'approved' ? '#007AFF' : '#FFFFFF', border: m.state === 'pending' ? '1px solid #D1D5DB' : 'none'}}>
                          {m.state === 'done' && <FiTruck className="text-white" />}
                          {m.state === 'approved' && <FiCheck className="text-white" />}
                          {m.state === 'pending' && <FiClock className="text-[#606060]" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
import React, { useState, useMemo } from 'react';
import { MdDashboard } from "react-icons/md";

const ChevronRightIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const BellIcon = (props) => (
  <svg width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="27" rx="5" fill="#7EC1B1" />
    <path d="M16 4V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M16 6C12.69 6 10 8.69 10 12V18C9 18 8 19 8 20H16M16 6C19.31 6 22 8.69 22 12V18C23 18 24 19 24 20H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M14 21C14 22.1 14.9 23 16 23C17.1 23 18 22.1 18 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

// --- Mock Data ---

const mockTabs = [
  { id: 'all', name: 'All', count: 7 },
  { id: 'unread', name: 'Unread', count: 4 },
  { id: 'leads', name: 'Leads', count: 1 },
  { id: 'urgent', name: 'Urgent', count: 1 },
  { id: 'messages', name: 'Messages', count: 1 },
];

const allNotifications = [
  {
    id: 1,
    title: 'New Lead Assigned',
    description: 'You have been assigned to service RO system at Mumbai, Andheri West',
    time: '2 minutes ago',
    type: 'leads',
    isUnread: true,
  },
  {
    id: 2,
    title: 'New Lead Assigned',
    description: 'You have been assigned to service RO system at Mumbai, Andheri West',
    time: '2 minutes ago',
    type: 'leads',
    isUnread: true,
  },
  {
    id: 3,
    title: 'New Lead Assigned',
    description: 'You have been assigned to service RO system at Mumbai, Andheri West',
    time: '2 minutes ago',
    type: 'leads',
    isUnread: true,
  },
  {
    id: 4,
    title: 'Urgent: Service Escalation',
    description: 'Customer reported a major leak. Please attend immediately.',
    time: '15 minutes ago',
    type: 'urgent',
    isUnread: true,
  },
  {
    id: 5,
    title: 'New Message',
    description: 'Admin: Please submit your weekly report by EOD.',
    time: '1 hour ago',
    type: 'messages',
    isUnread: false,
  },
  {
    id: 6,
    title: 'Service Completed',
    description: 'Service for order #OD54487 has been marked as completed.',
    time: '3 hours ago',
    type: 'general',
    isUnread: false,
  },
  {
    id: 7,
    title: 'Weekly Summary',
    description: 'Your weekly performance summary is ready to view.',
    time: '1 day ago',
    type: 'general',
    isUnread: false,
  },
];

// --- Notification Card Component ---

const NotificationItem = ({ notification }) => (
  <div className="bg-[#EBF2F1] p-5 rounded-[20px]  flex items-start space-x-4 border border-gray-200">

    {/* Content */}
    <div className="flex-grow gap-2">
      <BellIcon className="w-5 h-5" />
      <h3 className="text-2xl font-medium text-gray-900">{notification.title}</h3>
      <p className="text-sm text-gray-900 mt-1">{notification.description}</p>
      <p className="text-xs text-cyan-600 mt-2">{notification.time}</p>
    </div>

    {/* Action Button */}
    {notification.isUnread && (
      <button className="flex-shrink-0 rounded-full text-sm text-black border border-black px-3 py-1.5 hover:bg-gray-100 transition-colors">
        Mark as read
      </button>
    )}
  </div>
);

// --- Main Notifications Page Component ---

export default function Notifications() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredNotifications = useMemo(() => {
    if (activeTab === 'all') {
      return allNotifications;
    }
    if (activeTab === 'unread') {
      return allNotifications.filter(n => n.isUnread);
    }
    if (activeTab === 'leads') {
      return allNotifications.filter(n => n.type === 'leads');
    }
    if (activeTab === 'urgent') {
      return allNotifications.filter(n => n.type === 'urgent');
    }
    if (activeTab === 'messages') {
      return allNotifications.filter(n => n.type === 'messages');
    }
    return [];
  }, [activeTab]);

  return (
    <div className="bg-white p-4 h-full overflow-y-auto flex flex-col gap-2">

        {/* --- Breadcrumbs --- */}
        <nav className="flex items-center text-sm text-gray-500 mb-2">
          <a href="/" className="hover:text-blue-500 flex items-center">
            <MdDashboard className="w-6 h-6 text-[#263138] flex-shrink-0" />
          </a>
          <ChevronRightIcon className="h-4 w-4 mx-1 text-blue-500" />
          <span className="font-medium text-blue-500">Notification</span>
        </nav>

        {/* --- Header --- */}
        <h1 className="text-xl font-semibold text-gray-900 mb-3">Notification</h1>
        <hr className="border-t border-gray-300 mb-3" />

        {/* --- Filter Tabs --- */}
        <div className="flex w-fit bg-[#F5F5F5] items-center space-x-1 p-3 rounded-[20px] sm:space-x-2 mb-3">
          {mockTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-4 py-2 rounded-[10px] text-sm font-medium flex items-center space-x-1.5 transition-colors
                ${activeTab === tab.id
                  ? 'bg-white text-black'
                  : 'bg-transparent text-gray-600 hover:text-black hover:bg-gray-200'
                }
              `}
            >
              <span>{tab.name}</span>
              <span
                className={`
                  text-sm font-normal
                  ${activeTab === tab.id
                    ? 'text-black'
                    : 'text-gray-400'
                  }
                `}
              >
                ({tab.count})
              </span>
            </button>
          ))}
        </div>

        {/* --- Notification List --- */}
        <div className="bg-white rounded-lg space-y-4">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map(notification => (
              <NotificationItem key={notification.id} notification={notification} />
            ))
          ) : (
            <div className="text-center text-gray-500 py-10">
              No notifications for this category.
            </div>
          )}
        </div>
    </div>
  );
}
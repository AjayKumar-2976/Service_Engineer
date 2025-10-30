import { useState } from "react";
import { GoEye } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Header2 from "../../../components/ServiceEngineer/header/Header2";

const OngoingLeads = () => {
  const navigate = useNavigate();
  const [entries, setEntries] = useState(7);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("Select Status");

  const leadsData = [
    { id: 1, leadId: "OD54487", customer: "Kathryn Murphy", serviceType: "Repair", product: "Kent Grand Plus RO", orderDate: "21-10-2025", status: "New" },
    { id: 2, leadId: "OD54487", customer: "Courtney Henry", serviceType: "Maintenance", product: "Kent Grand Plus RO", orderDate: "21-10-2025", status: "New" },
    { id: 3, leadId: "OD54487", customer: "Darlene Robertson", serviceType: "Repair", product: "MG678", orderDate: "21-10-2025", status: "Ongoing" },
    { id: 4, leadId: "OD54487", customer: "Savannah Nguyen", serviceType: "Purchase", product: "Kent Grand Plus RO", orderDate: "21-10-2025", status: "Ongoing" },
    { id: 5, leadId: "OD54487", customer: "Annette Black", serviceType: "Purchase", product: "MG678", orderDate: "21-10-2025", status: "Ongoing" },
    { id: 6, leadId: "OD54487", customer: "Brooklyn Simmons", serviceType: "Repair", product: "Kent Grand Plus RO", orderDate: "21-10-2025", status: "Completed" },
    { id: 7, leadId: "OD54487", customer: "Cody Fisher", serviceType: "RO Installation", product: "MG678", orderDate: "21-10-2025", status: "Completed" },
    { id: 8, leadId: "OD54487", customer: "Theresa Webb", serviceType: "Maintenance", product: "Kent Grand Plus RO", orderDate: "21-10-2025", status: "Completed" },
    { id: 9, leadId: "OD54487", customer: "Floyd Miles", serviceType: "RO Installation", product: "MG678", orderDate: "21-10-2025", status: "Completed" },
    { id: 10, leadId: "OD54487", customer: "Albert Flores", serviceType: "Purchase", product: "Kent Grand Plus RO", orderDate: "21-10-2025", status: "Completed" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "New":
        return "text-yellow-500";
      case "Ongoing":
        return "text-blue-500";
      case "Completed":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  const filteredLeads = leadsData.filter(lead => {
    const matchesSearch = lead.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.leadId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "Select Status" || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Header2 />

      {/* Controls Bar */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Show</span>
            <select
              value={entries}
              onChange={(e) => setEntries(Number(e.target.value))}
              className="border border-gray-300 rounded px-3 py-1.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <span className="text-gray-600">Entries</span>
          </div>

          <div className="flex gap-3">
            <div className="relative">
              <FiSearch className="absolute left-3 top-3 text-gray-400 text-lg" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 pl-10 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white pr-10"
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%236b7280\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.5rem center', backgroundSize: '1.5em 1.5em' }}
            >
              <option>Select Status</option>
              <option>New</option>
              <option>Ongoing</option>
              <option>Completed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full  border border-[#CACACA]">
            <thead className="bg-[#F5F5F5] border-b border-[#CACACA]">
              <tr>
                <th className="px-6 py-3 text-left  font-600 text-gray-700">Sr.No.</th>
                <th className="px-6 py-3 text-left   font-600 text-gray-700">Lead ID</th>
                <th className="px-6 py-3 text-left   font-600 text-gray-700">Customer Name</th>
                <th className="px-6 py-3 text-left   font-600 text-gray-700">Service Type</th>
                <th className="px-6 py-3 text-left   font-600 text-gray-700">Product Model</th>
                <th className="px-6 py-3 text-left   font-600 text-gray-700">Order Date</th>
                <th className="px-6 py-3 text-left   font-600 text-gray-700">Status</th>
                <th className="px-6 py-3 text-left   font-600 text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#CACACA]">
              {filteredLeads.slice(0, entries).map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-[16px]  text-gray-900">{lead.id}</td>
                  <td className="px-6 py-4 text-[16px] text-gray-900">{lead.leadId}</td>
                  <td className="px-6 py-4 text-[16px] text-gray-900">{lead.customer}</td>
                  <td className="px-6 py-4 text-[16px] text-gray-900">{lead.serviceType}</td>
                  <td className="px-6 py-4 text-[16px] text-gray-900">{lead.product}</td>
                  <td className="px-6 py-4 text-[16px] text-gray-900">{lead.orderDate}</td>
                  <td className={`px-6 py-4 text-[16px] font-medium ${getStatusColor(lead.status)}`}>
                    {lead.status}
                  </td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => navigate(`/ongoing-leads/view/${lead.leadId}`, { state: { lead } })}
                      className="text-blue-500 hover:text-blue-700 transition-colors"
                    >
                      <GoEye className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="border-t border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing 1 to 10 of 30 Entries
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded text-[#7EC1B1] hover:[#7EC1B1] ">
              Previous
            </button>
            <button className="px-3 py-2 bg-[#7EC1B1] text-white rounded hover:bg-[#7EC1B1] ">
              1
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded text-[#7EC1B1] hover:bg-gray-50 ">
              2
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded text-[#7EC1B1] hover:bg-gray-50 ">
              3
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded text-[#7EC1B1] hover:bg-gray-50 ">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OngoingLeads;

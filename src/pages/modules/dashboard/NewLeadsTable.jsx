import React from "react";
import { FiEye } from "react-icons/fi";

const NewLeadsTable = () => {
  const leads = [
    {
      srNo: 1,
      leadId: "OD54487",
      customerName: "Kathryn Murphy",
      serviceType: "Repair",
      productModel: "Kent Grand Plus RO",
      orderDate: "21-10-2025",
      status: "New",
    },
    {
      srNo: 2,
      leadId: "OD54487",
      customerName: "Courtney Henry",
      serviceType: "Maintenance",
      productModel: "Kent Grand Plus RO",
      orderDate: "21-10-2025",
      status: "New",
    },
  ];

  return (
    <div className="bg-white p-5 rounded-md border border-gray-100">
      <h3 className="text-gray-800 text-lg font-semibold mb-4">New Leads</h3>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="py-3 px-6 text-left  font-semibold text-black uppercase tracking-wide">
                Sr.No.
              </th>
              <th className="py-3 px-6 text-left  font-semibold text-black uppercase tracking-wide">
                Lead ID
              </th>
              <th className="py-3 px-6 text-left  font-semibold text-black uppercase tracking-wide">
                Customer Name
              </th>
              <th className="py-3 px-6 text-left  font-semibold text-black uppercase tracking-wide">
                Service Type
              </th>
              <th className="py-3 px-6 text-left  font-semibold text-black uppercase tracking-wide">
                Product Model
              </th>
              <th className="py-3 px-6 text-left  font-semibold text-black uppercase tracking-wide">
                Order Date
              </th>
              <th className="py-3 px-6 text-left  font-semibold text-black uppercase tracking-wide">
                Status
              </th>
              <th className="py-3 px-6 text-left  font-semibold text-black uppercase tracking-wide">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="text-gray-700 text-md">
            {leads.map((lead) => (
              <tr key={lead.srNo} className="border-b border-gray-200">
                <td className="py-4 px-6 text-[#263138]">{lead.srNo}</td>
                <td className="py-4 px-6 text-[#263138]">{lead.leadId}</td>
                <td className="py-4 px-6 text-[#263138]">{lead.customerName}</td>
                <td className="py-4 px-6 text-[#263138]">{lead.serviceType}</td>
                <td className="py-4 px-6 text-[#263138]">{lead.productModel}</td>
                <td className="py-4 px-6 text-[#263138]">{lead.orderDate}</td>
                <td className="py-4 px-6">
                  <span className="text-yellow-500 font-semibold">
                    {lead.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <button className="text-blue-500 hover:text-blue-600">
                    <FiEye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-600">Showing 1 to 2 of 2 Entries</p>
        <div className="flex items-center space-x-2">
          <button className="border border-gray-400 text-gray-700 rounded-md px-3 py-1 text-sm hover:bg-gray-100">
            Previous
          </button>
          <button className="bg-teal-500 text-white rounded-md px-3 py-1 text-sm font-medium">
            1
          </button>
          <button className="border border-gray-400 text-gray-700 rounded-md px-3 py-1 text-sm hover:bg-gray-100">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewLeadsTable;
import React, { useState } from 'react';
import { FiX, FiChevronDown } from 'react-icons/fi';

const categories = ['Filter', 'Tool', 'Consumable'];
const products = ['Ro Membrane Filter', 'Sediment Filter', 'Carbon Filter'];

const NewRequestModal = ({ isOpen, onClose, onSubmit }) => {
  const [category, setCategory] = useState('');
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [reason, setReason] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // simple validation
    if (!category || !itemName || !quantity || quantity <= 0) {
      alert('Please fill required fields');
      return;
    }

    const payload = { category, itemName, quantity, reason };
    if (onSubmit) onSubmit(payload);
    // reset and close
    setCategory('');
    setItemName('');
    setQuantity(1);
    setReason('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative bg-white rounded-2xl shadow-xl w-[747px] max-w-[95%] p-6">
        <button className="absolute top-4 right-4 text-gray-500" onClick={onClose} aria-label="Close">
          <FiX size={20} />
        </button>

        <div className="flex flex-col gap-2 mb-4">
          <h3 className="text-[32px] leading-[48px] font-normal text-[#263138]">Create Inventory Request</h3>
          <p className="text-[18px] leading-[28px] text-[#606060]">Submit a request for spare parts, tools, or consumables.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Category */}
          <div className="flex flex-col gap-2">
            <label className="text-[24px] font-normal text-[#263138]">Category *</label>
            <div className="relative flex items-center bg-white border border-gray-400 rounded-[20px] px-4 py-3">
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full appearance-none bg-transparent outline-none text-[18px] text-[#606060]">
                <option value="">Select</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#606060] pointer-events-none" />
            </div>
          </div>

          {/* Item name + Quantity row */}
          <div className="flex gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-[24px] font-normal text-[#263138]">Item Name *</label>
              <div className="relative flex items-center bg-white border border-gray-400 rounded-[20px] px-4 py-3">
                <select value={itemName} onChange={(e) => setItemName(e.target.value)} className="w-full appearance-none bg-transparent outline-none text-[18px] text-[#606060]">
                  <option value="">Select Product</option>
                  {products.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
                <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#606060] pointer-events-none" />
              </div>
            </div>

            <div className="w-[333px] flex flex-col gap-2">
              <label className="text-[24px] font-normal text-[#263138]">Quantity *</label>
              <div className="bg-white border border-gray-400 rounded-[20px] px-4 py-3">
                <input type="number" min={1} value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="w-full outline-none text-[18px] text-[#606060]" />
              </div>
            </div>
          </div>

          {/* Reason */}
          <div className="flex flex-col gap-2">
            <label className="text-[24px] font-normal text-[#263138]">Reason for Request *</label>
            <div className="bg-white border border-gray-400 rounded-[20px] p-4 h-[141px]">
              <textarea value={reason} onChange={(e) => setReason(e.target.value)} placeholder="explain why you need this item..." className="w-full h-full resize-none outline-none text-[18px] text-[#606060]" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-md border border-gray-300">Cancel</button>
            <button type="submit" className="px-4 py-2 rounded-md bg-[#7EC1B1] text-white">Submit Request</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewRequestModal;
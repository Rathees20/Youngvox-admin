import React, { useState } from 'react';
import { Plus, X, Upload, Calendar, Link as LinkIcon } from 'lucide-react';

const CreateProject = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    category: '',
    description: '',
    startDate: '',
    endDate: '',
    budget: '',
    status: 'active',
  });

  const categories = ['Education', 'Environment', 'Health', 'Social Welfare', 'Technology'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Create New Project</h1>
          <p className="text-gray-500 mt-1">Fill in the details below to initialize a new Youngvox initiative.</p>
        </div>
        <button className="bg-white text-gray-700 border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
          <X size={18} />
          Discard
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-100 pb-3">Basic Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                <input 
                  type="text" 
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  placeholder="e.g. Youngvox Tech Education Program"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select 
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none bg-white"
                >
                  <option value="">Select a category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea 
                  rows="4"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Briefly describe the project's goals and impact..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-100 pb-3">Timeline & Budget</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1.5">
                  <Calendar size={14} /> Start Date
                </label>
                <input 
                  type="date" 
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1.5">
                  <Calendar size={14} /> End Date
                </label>
                <input 
                  type="date" 
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Budget ($)</label>
              <input 
                type="number" 
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="0.00"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-100 pb-3">Project Banner</h2>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center space-y-2 hover:border-primary/50 transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Upload size={24} className="text-gray-400 group-hover:text-primary transition-colors" />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-gray-900">Click to upload</p>
                <p className="text-gray-500">or drag and drop banner</p>
              </div>
              <p className="text-xs text-gray-400">PNG, JPG or WEBP (max. 5MB)</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-100 pb-3">Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">Public Project</p>
                  <p className="text-xs text-gray-500">Allow others to see this</p>
                </div>
                <button className="w-10 h-5 bg-primary rounded-full relative transition-colors">
                  <span className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></span>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">Notifications</p>
                  <p className="text-xs text-gray-500">Send alerts on updates</p>
                </div>
                <button className="w-10 h-5 bg-gray-200 rounded-full relative transition-colors">
                  <span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></span>
                </button>
              </div>
            </div>
          </div>

          <button className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-xl shadow-md shadow-primary/20 transition-all flex items-center justify-center gap-2 transform active:scale-[0.98]">
            <Plus size={20} />
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;

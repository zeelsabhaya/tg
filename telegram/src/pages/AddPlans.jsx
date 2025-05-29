import { FilePlus } from 'lucide-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // ✅ Required CSS for toasts
import { addplanasync } from '../services/action/plan.Action';

const AddPlanForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    mrp: '',
    monthType: 'Base',
    highlight: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const isValidMrp = Number(formData.mrp) > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (isValidMrp && formData.monthType) {
      // Show success toast
      // TODO: Dispatch to Redux or make API call here
      dispatch(addplanasync(formData));
      // Reset form
      setFormData({
        mrp: '',
        monthType: 'Base',
        highlight: false,
      });
      setSubmitted(false);
    } else {
      toast.error('Please enter a valid MRP.');
    }
  };

  const inputClass = (isValid) =>
    `flex-1 px-4 py-2 rounded-xl border ${
      isValid ? 'border-green-500' : 'border-red-500'
    } dark:border-opacity-70 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 ${
      isValid ? 'focus:ring-green-500' : 'focus:ring-red-500'
    }`;

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col md:flex-row gap-4 items-stretch"
    >
      {/* Icon & Label */}
      <div className="flex items-center gap-2 md:w-1/5">
        <FilePlus className="text-blue-600 dark:text-blue-400 w-6 h-6" />
        <span className="font-semibold text-gray-700 dark:text-gray-200">Add Plan</span>
      </div>

      {/* MRP Input */}
      <input
        type="number"
        name="mrp"
        placeholder="MRP"
        value={formData.mrp}
        onChange={handleChange}
        inputMode="numeric"
        className={
          submitted ? inputClass(isValidMrp) : 'flex-1 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
        }
        required
      />

      {/* Month Type Select */}
      <select
        name="monthType"
        value={formData.monthType}
        onChange={handleChange}
        className="flex-1 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="Base">Base</option>
        <option value="Pro">Pro</option>
        <option value="Enterprise">Enterprise</option>
      </select>

      {/* Highlight Toggle */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="highlight"
          checked={formData.highlight}
          onChange={handleChange}
          className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
        />
        <label className="text-gray-700 dark:text-gray-200 font-medium">
          Highlight
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition md:w-auto"
      >
        Add
      </button>
    </form>
  );
};

export default AddPlanForm;

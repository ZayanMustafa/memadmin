import { FiCalendar, FiClock, FiCheck, FiXCircle, FiEdit, FiTrash2 } from 'react-icons/fi';
import AdminLayout from './AdminLayout';

const AppointmentsPage = () => {
  // Mock appointment data
  const appointments = [
    {
      id: 1,
      vehicle: 'Tesla Model 3',
      user: 'Alex Johnson',
      date: '2023-06-15',
      time: '10:00 AM',
      type: 'Test Drive',
      status: 'confirmed',
      duration: '30 mins'
    },
    {
      id: 2,
      vehicle: 'Ford Mustang Mach-E',
      user: 'Sarah Williams',
      date: '2023-06-15',
      time: '11:30 AM',
      type: 'Maintenance',
      status: 'pending',
      duration: '1 hour'
    },
    {
      id: 3,
      vehicle: 'Toyota Camry',
      user: 'Michael Brown',
      date: '2023-06-16',
      time: '09:00 AM',
      type: 'Purchase Consultation',
      status: 'confirmed',
      duration: '45 mins'
    },
    {
      id: 4,
      vehicle: 'Honda Civic',
      user: 'Emily Davis',
      date: '2023-06-16',
      time: '02:15 PM',
      type: 'Test Drive',
      status: 'cancelled',
      duration: '30 mins'
    },
    {
      id: 5,
      vehicle: 'BMW i4',
      user: 'David Wilson',
      date: '2023-06-17',
      time: '03:45 PM',
      type: 'Financing Discussion',
      status: 'confirmed',
      duration: '1 hour'
    },
  ];

  const statusStyles = {
    confirmed: 'bg-green-900/30 text-green-400',
    pending: 'bg-yellow-900/30 text-yellow-400',
    cancelled: 'bg-red-900/30 text-red-400'
  };

  const statusIcons = {
    confirmed: <FiCheck className="mr-1" />,
    pending: <FiClock className="mr-1" />,
    cancelled: <FiXCircle className="mr-1" />
  };

  return (
    <AdminLayout activeTab="appointments">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold bg-white bg-clip-text text-transparent">
          Appointments Management
        </h1>
        <div className="flex space-x-4">
          <select className="bg-black -700 border border-white-900 rounded-lg px-3 py-2 text-dark-100">
            <option>All Status</option>
            <option>Confirmed</option>
            <option>Pending</option>
            <option>Cancelled</option>
          </select>
          <input 
            type="date" 
            className="bg-black -700 border border-white-900 rounded-lg px-3 py-2 text-dark-100"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Stats Cards */}
        <div className="bg-black -800/50 border border-white-900/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-dark-300 text-sm">Total Appointments</p>
              <h3 className="text-2xl font-bold text-white mt-1">24</h3>
            </div>
            <div className="p-3 bg-dark-900/20 rounded-full">
              <FiCalendar className="text-dark-400" size={20} />
            </div>
          </div>
        </div>

        <div className="bg-black -800/50 border border-white-900/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-dark-300 text-sm">Confirmed</p>
              <h3 className="text-2xl font-bold text-white mt-1">18</h3>
            </div>
            <div className="p-3 bg-green-900/20 rounded-full">
              <FiCheck className="text-green-400" size={20} />
            </div>
          </div>
        </div>

        <div className="bg-black -800/50 border border-white-900/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-dark-300 text-sm">Pending</p>
              <h3 className="text-2xl font-bold text-white mt-1">4</h3>
            </div>
            <div className="p-3 bg-yellow-900/20 rounded-full">
              <FiClock className="text-yellow-400" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="bg-black -800/50 border border-white-900/30 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-black -700/50">
              <tr>
                <th className="py-3 px-4 text-left text-dark-300 font-medium">Vehicle</th>
                <th className="py-3 px-4 text-left text-dark-300 font-medium">User</th>
                <th className="py-3 px-4 text-left text-dark-300 font-medium">Date & Time</th>
                <th className="py-3 px-4 text-left text-dark-300 font-medium">Type</th>
                <th className="py-3 px-4 text-left text-dark-300 font-medium">Duration</th>
                <th className="py-3 px-4 text-left text-dark-300 font-medium">Status</th>
                <th className="py-3 px-4 text-left text-dark-300 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-900/30">
              {appointments.map(appointment => (
                <tr key={appointment.id} className="hover:bg-black -700/30">
                  <td className="py-4 px-4 text-white">{appointment.vehicle}</td>
                  <td className="py-4 px-4 text-dark-100">{appointment.user}</td>
                  <td className="py-4 px-4">
                    <div className="text-dark-100">{appointment.date}</div>
                    <div className="text-sm text-dark-300">{appointment.time}</div>
                  </td>
                  <td className="py-4 px-4 text-dark-100">{appointment.type}</td>
                  <td className="py-4 px-4 text-dark-100">{appointment.duration}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[appointment.status]}`}>
                      {statusIcons[appointment.status]}
                      {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-2">
                      <button className="p-1 text-dark-300 hover:text-dark-100 hover:bg-dark-900/30 rounded">
                        <FiEdit size={16} />
                      </button>
                      <button className="p-1 text-pink-300 hover:text-pink-100 hover:bg-pink-900/30 rounded">
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Calendar View (Mini) */}
      <div className="mt-6 bg-black -800/50 border border-white-900/30 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-dark-200 mb-3">Upcoming Appointments</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {appointments.filter(a => a.status === 'confirmed').slice(0, 3).map(appointment => (
            <div key={appointment.id} className="bg-black -700/30 border border-white-900/20 rounded-lg p-3 hover:bg-black -700/50 transition">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-white">{appointment.vehicle}</h4>
                  <p className="text-sm text-dark-300">{appointment.user}</p>
                </div>
                <span className="bg-dark-900/30 text-dark-300 text-xs px-2 py-1 rounded">
                  {appointment.time}
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs text-dark-400">{appointment.type}</span>
                <button className="text-xs bg-dark border border-white px-2 py-1 rounded hover:opacity-90">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AppointmentsPage;
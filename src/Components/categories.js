// categories.js
import { FaCar, FaChargingStation, FaCogs, FaHospital, FaPills, FaHeartbeat, FaBuilding, FaTruckMoving, FaTools, FaCloud, FaShieldAlt, FaStore, FaShippingFast, FaLaptopCode } from 'react-icons/fa';

const categories = [
  {
    name: 'Automotive',
    subcategories: [
      { name: 'OEMs', icon: <FaCar /> },
      { name: 'EVs', icon: <FaChargingStation /> },
      { name: 'Parts', icon: <FaCogs /> },
    ],
  },
  {
    name: 'Healthcare',
    subcategories: [
      { name: 'Hospitals', icon: <FaHospital /> },
      { name: 'Pharma', icon: <FaPills /> },
      { name: 'Devices', icon: <FaHeartbeat /> },
    ],
  },
  {
    name: 'Construction',
    subcategories: [
      { name: 'Civil', icon: <FaBuilding /> },
      { name: 'Heavy Equip', icon: <FaTruckMoving /> },
      { name: 'Materials', icon: <FaTools /> },
    ],
  },
  {
    name: 'IT Services',
    subcategories: [
      { name: 'Web Dev', icon: <FaLaptopCode /> },
      { name: 'Cloud', icon: <FaCloud /> },
      { name: 'Cybersecurity', icon: <FaShieldAlt /> },
    ],
  },
  {
    name: 'Retail',
    subcategories: [
      { name: 'E-commerce', icon: <FaStore /> },
      { name: 'Stores', icon: <FaStore /> },
      { name: 'Logistics', icon: <FaShippingFast /> },
    ],
  },
];

export default categories;

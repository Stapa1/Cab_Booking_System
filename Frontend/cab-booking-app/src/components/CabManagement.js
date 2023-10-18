import React, { useState } from 'react';

function CabManagement() {
  const [cabs, setCabs] = useState([
    { id: 1, name: 'Cab 1', status: 'available' },
    { id: 2, name: 'Cab 2', status: 'available' },
    { id: 3, name: 'Cab 3', status: 'available' },
    { id: 4, name: 'Cab 4', status: 'available' },
    { id: 5, name: 'Cab 5', status: 'available' },
    { id: 6, name: 'Cab 6', status: 'available' },
    
    // Add more cab objects
  ]);

  // Function to update the status of a cab
  const updateCabStatus = (cabId, newStatus) => {
    setCabs((prevCabs) =>
      prevCabs.map((cab) =>
        cab.id === cabId ? { ...cab, status: newStatus } : cab
      )
    );
  };

  return (
    <div >
      <h2>Cab Management</h2>
      <table>
        <thead>
          <tr>
            <th>Cab Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cabs.map((cab) => (
            <tr key={cab.id}>
              <td>{cab.name}</td>
              <td>{cab.status}</td>
              <td>
                <button
                  onClick={() => updateCabStatus(cab.id, 'available')}
                  disabled={cab.status === 'available'}
                >
                  Make Available
                </button>
                <button
                  onClick={() => updateCabStatus(cab.id, 'booked')}
                  disabled={cab.status === 'booked'}
                >
                  Make Booked
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CabManagement;

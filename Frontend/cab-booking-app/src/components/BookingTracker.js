import React, { useState } from 'react';

function BookingTracker() {
  const [bookedRides, setBookedRides] = useState([
    {
      id: 1,
      source: 'Cab1',
      destination: 'Dest1',
      cab: 'Cab1',
      timestamp: '2023-10-17T12:34:56Z',
    },
    {
      id: 2,
      source: 'Cab2',
      destination: 'Dest2',
      cab: 'Cab2',
      timestamp: '2023-10-17T13:45:00Z',
    },
    {
        id: 3,
        source: 'Cab3',
        destination: 'Dest3',
        cab: 'Cab3',
        timestamp: '2023-10-17T12:34:56Z',
      },
      {
        id: 4,
        source: 'Cab4',
        destination: 'Dest4',
        cab: 'Cab4',
        timestamp: '2023-10-17T12:34:56Z',
      },
      {
        id: 5,
        source: 'Cab5',
        destination: 'Dest5',
        cab: 'Cab5',
        timestamp: '2023-10-17T12:34:56Z',
      },{
        id: 6,
        source: 'Cab6',
        destination: 'Dest6',
        cab: 'Cab6',
        timestamp: '2023-10-17T12:34:56Z',
      },
    // Add more booked rides objects
  ]);

  return (
    <div>
      <h2>Booking Tracker</h2>
      <table>
        <thead>
          <tr>
            <th>Source</th>
            <th>Destination</th>
            <th>Cab</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {bookedRides.map((ride) => (
            <tr key={ride.id}>
              <td>{ride.source}</td>
              <td>{ride.destination}</td>
              <td>{ride.cab}</td>
              <td>{new Date(ride.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingTracker;

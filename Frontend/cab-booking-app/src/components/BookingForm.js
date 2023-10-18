// BookingForm.js
import React, { useState } from 'react';

function BookingForm() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedCab, setSelectedCab] = useState('');
  const [availableCabs, setAvailableCabs] = useState([
    { id: 1, name: 'Cab 1', status: 'available' },
    { id: 2, name: 'Cab 2', status: 'available' },
    { id: 3, name: 'Cab 3', status: 'available' },
    { id: 4, name: 'Cab 4', status: 'available' },
    { id: 5, name: 'Cab 5', status: 'available' },
    { id: 6, name: 'Cab 6', status: 'available' }
// Add more cab objects
]);
const updateCabStatus = (cabId, newStatus) => {
    setAvailableCabs((prevCabs) => {
      return prevCabs.map((cab) =>
        cab.id === cabId ? { ...cab, status: newStatus } : cab
      );
    });
  };

  const [bookedRides, setBookedRides] = useState([]);

  const handleBooking = () => {
    // Check if source and destination are valid
    if (source.trim() === '' || destination.trim() === '') {
      alert('Please enter a valid source and destination.');
      return;
    }

    // Find the selected cab by name
    const selectedCabObj = availableCabs.find((cab) => cab.name === selectedCab);

    // Check if a cab is available
    if (!selectedCabObj || selectedCabObj.status !== 'available') {
      alert('Selected cab is not available.');
      return;
    }

    // Update the status of the selected cab to 'booked'
    selectedCabObj.status = 'booked';

    // Create a booking object
    const booking = {
      source,
      destination,
      cab: selectedCab, // Assuming selectedCab is the name
      timestamp: new Date().toISOString(),
    };

    // Add the booking to the bookedRides array
    setBookedRides([...bookedRides, booking]);

    // Clear the form
    setSource('');
    setDestination('');
    setSelectedCab('');
    // setAvailableCabs('');

    // You can also update the available cabs list in your data source as needed.
  };

  return (
    <div>
      <h2>Book a Cab</h2>
      <input
        type="text"
        placeholder="Source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <select
  value={selectedCab}
  onChange={(e) => setSelectedCab(e.target.value)}
  required  // This adds the "required" attribute to make cab selection mandatory
>
  <option value="">Select a Cab</option>
  {availableCabs.map((cab) => (
    <option key={cab.id} value={cab.name} disabled={cab.status !== 'available'}>
      {cab.name} ({cab.status})
    </option>
  ))}
</select>
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
}

export default BookingForm;

import React from 'react';
import BookingForm from './components/BookingForm';
import CabManagement from './components/CabManagement';
import BookingTracker from './components/BookingTracker';
import './App.css';


function App() {
  return (
    <div className="App">
      <BookingForm />
      <CabManagement />
      <BookingTracker />
    </div>
  );
}

export default App;

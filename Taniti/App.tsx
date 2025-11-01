import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Homepage } from './components/Homepage';
import { ActivitiesPage } from './components/ActivitiesPage';
import { AccommodationsPage } from './components/AccommodationsPage';
import { DiningPage } from './components/DiningPage';
import { TransportationPage } from './components/TransportationPage';
import { FAQPage } from './components/FAQPage';
import { ContactPage } from './components/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/accommodations" element={<AccommodationsPage />} />
          <Route path="/dining" element={<DiningPage />} />
          <Route path="/transportation" element={<TransportationPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

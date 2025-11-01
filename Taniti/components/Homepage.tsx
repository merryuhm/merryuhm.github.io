import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Waves, Trees, Mountain, Calendar, Compass, Hotel, Utensils, Bus } from 'lucide-react';

export function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="h-[400px] md:h-[500px] bg-gradient-to-br from-teal-400 via-blue-400 to-cyan-500 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 text-center space-y-6 px-4">
            <h1 className="text-5xl md:text-6xl text-white drop-shadow-lg">
              Discover Paradise on Taniti Island
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Your Perfect Family Vacation Awaits
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 text-lg">
                BOOK NOW
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl mb-8 text-center text-gray-800">Explore Taniti</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/activities">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardContent className="p-6 text-center">
                <div className="h-20 flex items-center justify-center mb-3">
                  <Waves className="h-12 w-12 text-teal-600" />
                </div>
                <p className="text-gray-700">Beaches</p>
              </CardContent>
            </Card>
          </Link>
          <Link to="/activities">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardContent className="p-6 text-center">
                <div className="h-20 flex items-center justify-center mb-3">
                  <Trees className="h-12 w-12 text-green-600" />
                </div>
                <p className="text-gray-700">Rainforest</p>
              </CardContent>
            </Card>
          </Link>
          <Link to="/activities">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardContent className="p-6 text-center">
                <div className="h-20 flex items-center justify-center mb-3">
                  <Mountain className="h-12 w-12 text-orange-600" />
                </div>
                <p className="text-gray-700">Volcano</p>
              </CardContent>
            </Card>
          </Link>
          <Link to="/contact">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full bg-teal-600 text-white">
              <CardContent className="p-6 text-center">
                <div className="h-20 flex items-center justify-center mb-3">
                  <Calendar className="h-12 w-12 text-white" />
                </div>
                <p>Book Now</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Popular Activities */}
      <section className="container mx-auto px-4 py-12 bg-white">
        <h2 className="text-3xl mb-8 text-center text-gray-800">Popular Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Snorkeling at Yellow Leaf Bay', icon: Waves, color: 'blue' },
            { name: 'Volcano Tours', icon: Mountain, color: 'orange' },
            { name: 'Rainforest Hiking', icon: Trees, color: 'green' }
          ].map((activity) => (
            <Card key={activity.name} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <activity.icon className={`h-16 w-16 text-${activity.color}-600`} />
                </div>
                <h3 className="text-lg mb-2 text-gray-800">{activity.name}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Experience the natural beauty and adventure that Taniti Island has to offer.
                </p>
                <Link to="/activities">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Where to Stay */}
      <section className="container mx-auto px-4 py-12 bg-gray-50">
        <h2 className="text-3xl mb-8 text-center text-gray-800">Where to Stay</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['4-Star Resort', 'Family Hotels', 'Bed & Breakfasts', 'Budget Hostel'].map((accommodation) => (
            <Card key={accommodation} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-4 flex items-center justify-center">
                  <Hotel className="h-12 w-12 text-gray-600" />
                </div>
                <h3 className="text-lg mb-3 text-gray-800">{accommodation}</h3>
                <Link to="/accommodations">
                  <Button variant="outline" className="w-full">
                    View Options
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Getting Around */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl mb-8 text-center text-gray-800">Getting Around</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { name: 'Public Buses', icon: Bus },
            { name: 'Taxis', icon: Compass },
            { name: 'Rental Cars', icon: Compass },
            { name: 'Bike Rentals', icon: Compass }
          ].map((transport) => (
            <Card key={transport.name} className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="h-16 flex items-center justify-center mb-2">
                  <transport.icon className="h-10 w-10 text-teal-600" />
                </div>
                <p className="text-sm text-gray-700">{transport.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Link to="/transportation">
            <Button variant="outline" size="lg">
              Transportation Details
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

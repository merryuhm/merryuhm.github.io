import { Plane, Ship, Bus, Car, Bike, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';

export function TransportationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl text-gray-800 mb-2">Transportation</h1>
          <p className="text-gray-600">Everything you need to know about getting to and around Taniti Island</p>
        </div>

        {/* Getting to Taniti */}
        <section className="mb-8">
          <h2 className="text-2xl mb-6 text-gray-800">Getting to Taniti</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Airport */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-3 bg-teal-100 rounded-lg">
                    <Plane className="h-6 w-6 text-teal-600" />
                  </div>
                  By Air
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">Small airport with expanding services</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>- Daily flights from major cities</li>
                  <li>- International connections available</li>
                  <li>- Small jets and propeller planes</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cruise Ships */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Ship className="h-6 w-6 text-blue-600" />
                  </div>
                  By Sea
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">Cruise ship port at Merriton Landing</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>- Regular cruise ship arrivals</li>
                  <li>- Day visit options available</li>
                  <li>- Deep water port facilities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Island Map */}
        <section className="mb-8">
          <h2 className="text-2xl mb-6 text-gray-800">Island Map</h2>
          <Card>
            <CardContent className="p-8">
              <div className="h-64 bg-gradient-to-br from-teal-100 to-blue-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="h-16 w-16 mx-auto mb-3 text-teal-600" />
                  <p className="text-lg">Interactive Map of Taniti Island</p>
                  <p className="text-sm mt-2">Showing: Taniti City • Merriton Landing • Yellow Leaf Bay • Airport</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Getting Around */}
        <section className="mb-8">
          <h2 className="text-2xl mb-6 text-gray-800">Getting Around the Island</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Public Buses */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Bus className="h-5 w-5 text-green-600" />
                  </div>
                  Public Buses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">Taniti City Routes</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>- Hours: 5am - 11pm</li>
                  <li>- Affordable fares</li>
                  <li>- City routes only</li>
                </ul>
              </CardContent>
            </Card>

            {/* Private Buses */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Bus className="h-5 w-5 text-purple-600" />
                  </div>
                  Private Buses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">Island-wide Service</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>- Serves rest of island</li>
                  <li>- Daily scheduled routes</li>
                  <li>- Advance booking recommended</li>
                </ul>
              </CardContent>
            </Card>

            {/* Taxis */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Car className="h-5 w-5 text-yellow-600" />
                  </div>
                  Taxis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">On-Demand Service</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>- Available island-wide</li>
                  <li>- Call or hail service</li>
                  <li>- Metered and reliable</li>
                </ul>
              </CardContent>
            </Card>

            {/* Rental Cars */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Car className="h-5 w-5 text-red-600" />
                  </div>
                  Rental Cars
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">Near Airport</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>- Multiple providers</li>
                  <li>- Valid license required</li>
                  <li>- Explore at your pace</li>
                </ul>
              </CardContent>
            </Card>

            {/* Bike Rentals */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 bg-teal-100 rounded-lg">
                    <Bike className="h-5 w-5 text-teal-600" />
                  </div>
                  Bike Rentals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">Eco-Friendly Option</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>- Available in cities</li>
                  <li>- Helmet required by law</li>
                  <li>- Great for short trips</li>
                </ul>
              </CardContent>
            </Card>

            {/* Walking */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <MapPin className="h-5 w-5 text-orange-600" />
                  </div>
                  Walking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">Pedestrian-Friendly</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>- Taniti City walkable</li>
                  <li>- Merriton Landing area walkable</li>
                  <li>- Enjoy the scenery</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Important Notes */}
        <section>
          <Alert>
            <AlertDescription>
              <h3 className="mb-2">Important Notes</h3>
              <ul className="space-y-1 text-sm">
                <li>• Helmet required when riding bicycles (strictly enforced)</li>
                <li>• Taniti City and Merriton Landing are pedestrian-friendly</li>
                <li>• Book private buses in advance during peak season</li>
                <li>• Rental car agencies accept international driver's licenses</li>
              </ul>
            </AlertDescription>
          </Alert>
        </section>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Wifi, Users, Coffee, Hotel, Info } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';

interface Accommodation {
  id: string;
  name: string;
  type: string;
  priceRange: string;
  amenities: string[];
  description: string;
}

const accommodations: Accommodation[] = [
  { id: '1', name: 'Paradise Sands Resort', type: 'Resort', priceRange: 'Luxury', amenities: ['WiFi', 'Family-Friendly', 'Breakfast'], description: '4-star beachfront resort with all amenities' },
  { id: '2', name: 'Taniti Bay Hotel', type: 'Hotel', priceRange: 'Mid', amenities: ['WiFi', 'Family-Friendly'], description: 'Family-friendly hotel near Taniti City' },
  { id: '3', name: 'Ocean View Inn', type: 'Hotel', priceRange: 'Mid', amenities: ['WiFi', 'Breakfast'], description: 'Comfortable hotel with ocean views' },
  { id: '4', name: 'Tropical Dreams Hotel', type: 'Hotel', priceRange: 'Mid', amenities: ['WiFi', 'Family-Friendly', 'Breakfast'], description: 'Great location for families' },
  { id: '5', name: 'Island Breeze B&B', type: 'B&B', priceRange: 'Mid', amenities: ['WiFi', 'Breakfast'], description: 'Cozy bed & breakfast with local charm' },
  { id: '6', name: 'Sunrise Guest House', type: 'B&B', priceRange: 'Budget', amenities: ['Breakfast'], description: 'Affordable B&B with friendly hosts' },
  { id: '7', name: 'Volcano View B&B', type: 'B&B', priceRange: 'Mid', amenities: ['WiFi', 'Breakfast'], description: 'Scenic views of the volcano' },
  { id: '8', name: 'Backpackers Lodge', type: 'Hostel', priceRange: 'Budget', amenities: ['WiFi'], description: 'Budget-friendly hostel for travelers' },
];

export function AccommodationsPage() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);

  const types = ['Hotel', 'Hostel', 'B&B', 'Resort'];
  const priceRanges = ['Budget', 'Mid', 'Luxury'];

  const toggleType = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const togglePrice = (price: string) => {
    setSelectedPrices(prev =>
      prev.includes(price) ? prev.filter(p => p !== price) : [...prev, price]
    );
  };

  const filteredAccommodations = accommodations.filter(acc => {
    const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(acc.type);
    const priceMatch = selectedPrices.length === 0 || selectedPrices.includes(acc.priceRange);
    return typeMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-4xl text-gray-800 mb-3">Accommodations</h1>
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              All lodging regulated and inspected by Tanitian government
            </AlertDescription>
          </Alert>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl mb-4 text-gray-800">Filters</h2>

                {/* Type Filters */}
                <div className="mb-6">
                  <h3 className="text-sm uppercase tracking-wide text-gray-600 mb-3">Type</h3>
                  <div className="space-y-2">
                    {types.map((type) => (
                      <div key={type} className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-50">
                        <Checkbox
                          id={`type-${type}`}
                          checked={selectedTypes.includes(type)}
                          onCheckedChange={() => toggleType(type)}
                        />
                        <label htmlFor={`type-${type}`} className="text-sm cursor-pointer flex-1">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range Filters */}
                <div>
                  <h3 className="text-sm uppercase tracking-wide text-gray-600 mb-3">Price Range</h3>
                  <div className="space-y-2">
                    {priceRanges.map((price) => (
                      <div key={price} className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-50">
                        <Checkbox
                          id={`price-${price}`}
                          checked={selectedPrices.includes(price)}
                          onCheckedChange={() => togglePrice(price)}
                        />
                        <label htmlFor={`price-${price}`} className="text-sm cursor-pointer flex-1">
                          {price}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Accommodations List */}
          <div className="lg:col-span-3">
            <div className="mb-4 text-gray-600">
              <span>Showing {filteredAccommodations.length} accommodations</span>
            </div>

            <div className="space-y-6">
              {filteredAccommodations.map((accommodation) => (
                <Card key={accommodation.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="h-48 md:h-auto bg-gradient-to-br from-teal-100 to-blue-100 rounded-lg flex items-center justify-center">
                        <Hotel className="h-16 w-16 text-teal-600" />
                      </div>
                      <div className="md:col-span-3 space-y-3">
                        <div>
                          <h3 className="text-2xl text-gray-800">{accommodation.name}</h3>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="secondary">{accommodation.type}</Badge>
                          <Badge variant="outline">{accommodation.priceRange}</Badge>
                        </div>
                        <p className="text-gray-600">
                          {accommodation.description}
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-sm mb-2 text-gray-600">Amenities:</div>
                          <div className="flex gap-4">
                            {accommodation.amenities.map((amenity) => (
                              <div key={amenity} className="flex items-center gap-2 text-sm text-gray-700">
                                {amenity === 'WiFi' && <Wifi className="h-4 w-4 text-teal-600" />}
                                {amenity === 'Family-Friendly' && <Users className="h-4 w-4 text-teal-600" />}
                                {amenity === 'Breakfast' && <Coffee className="h-4 w-4 text-teal-600" />}
                                <span>{amenity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <Button className="bg-teal-600 hover:bg-teal-700">
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

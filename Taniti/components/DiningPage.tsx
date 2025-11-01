import { useState } from 'react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Utensils, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';

interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  location: string;
  description: string;
}

const restaurants: Restaurant[] = [
  { id: '1', name: 'Fresh Catch Grill', cuisine: 'Local', location: 'Taniti City', description: 'Traditional fish and rice dishes' },
  { id: '2', name: 'Island Flavors', cuisine: 'Local', location: 'Yellow Leaf Bay', description: 'Authentic local cuisine with sea views' },
  { id: '3', name: 'Taniti Seafood House', cuisine: 'Local', location: 'Merriton Landing', description: 'Fresh daily catch and local specialties' },
  { id: '4', name: 'Ocean Breeze Restaurant', cuisine: 'Local', location: 'Taniti City', description: 'Family-style local dining' },
  { id: '5', name: 'Palm Tree Eatery', cuisine: 'Local', location: 'Yellow Leaf Bay', description: 'Beachside local cuisine' },
  { id: '6', name: 'American Diner', cuisine: 'American', location: 'Taniti City', description: 'Classic burgers, fries, and shakes' },
  { id: '7', name: "Jake's Steakhouse", cuisine: 'American', location: 'Taniti City', description: 'Premium steaks and American fare' },
  { id: '8', name: 'Island Grill & Bar', cuisine: 'American', location: 'Merriton Landing', description: 'Casual American dining' },
  { id: '9', name: 'Golden Lotus', cuisine: 'Pan-Asian', location: 'Taniti City', description: 'Chinese, Thai, and Japanese fusion' },
  { id: '10', name: 'Bamboo Garden', cuisine: 'Pan-Asian', location: 'Taniti City', description: 'Authentic Asian flavors and sushi' },
];

export function DiningPage() {
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const cuisines = ['Local', 'American', 'Pan-Asian'];
  const locations = ['Taniti City', 'Merriton Landing', 'Yellow Leaf Bay'];

  const toggleCuisine = (cuisine: string) => {
    setSelectedCuisines(prev =>
      prev.includes(cuisine) ? prev.filter(c => c !== cuisine) : [...prev, cuisine]
    );
  };

  const toggleLocation = (location: string) => {
    setSelectedLocations(prev =>
      prev.includes(location) ? prev.filter(l => l !== location) : [...prev, location]
    );
  };

  const filteredRestaurants = restaurants.filter(restaurant => {
    const cuisineMatch = selectedCuisines.length === 0 || selectedCuisines.includes(restaurant.cuisine);
    const locationMatch = selectedLocations.length === 0 || selectedLocations.includes(restaurant.location);
    return cuisineMatch && locationMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-4xl text-gray-800 mb-3">Dining Options</h1>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              NOTE: Alcohol service restricted between midnight and 9am
            </AlertDescription>
          </Alert>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl mb-4 text-gray-800">Filters</h2>

                {/* Cuisine Filters */}
                <div className="mb-6">
                  <h3 className="text-sm uppercase tracking-wide text-gray-600 mb-3">Cuisine Type</h3>
                  <div className="space-y-2">
                    {cuisines.map((cuisine) => (
                      <div key={cuisine} className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-50">
                        <Checkbox
                          id={`cuisine-${cuisine}`}
                          checked={selectedCuisines.includes(cuisine)}
                          onCheckedChange={() => toggleCuisine(cuisine)}
                        />
                        <label htmlFor={`cuisine-${cuisine}`} className="text-sm cursor-pointer flex-1">
                          {cuisine}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location Filters */}
                <div>
                  <h3 className="text-sm uppercase tracking-wide text-gray-600 mb-3">Location</h3>
                  <div className="space-y-2">
                    {locations.map((location) => (
                      <div key={location} className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-50">
                        <Checkbox
                          id={`loc-${location}`}
                          checked={selectedLocations.includes(location)}
                          onCheckedChange={() => toggleLocation(location)}
                        />
                        <label htmlFor={`loc-${location}`} className="text-sm cursor-pointer flex-1">
                          {location}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Restaurants Grid */}
          <div className="lg:col-span-3">
            <div className="mb-4 text-gray-600">
              <span>Showing {filteredRestaurants.length} restaurants</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredRestaurants.map((restaurant) => (
                <Card key={restaurant.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="h-40 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg mb-4 flex items-center justify-center">
                      <Utensils className="h-16 w-16 text-orange-600" />
                    </div>
                    <h3 className="text-xl mb-2 text-gray-800">{restaurant.name}</h3>
                    <div className="flex gap-2 mb-3">
                      <Badge variant="secondary">{restaurant.cuisine}</Badge>
                      <Badge variant="outline">{restaurant.location}</Badge>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {restaurant.description}
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        View Menu
                      </Button>
                      <Button className="flex-1 bg-teal-600 hover:bg-teal-700">
                        Reserve
                      </Button>
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

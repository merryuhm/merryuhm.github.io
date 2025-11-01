import { useState } from 'react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Waves, Mountain, Trees, Users, Sparkles } from 'lucide-react';

interface Activity {
  id: string;
  title: string;
  description: string;
  category: string[];
  location: string;
}

const activities: Activity[] = [
  { id: '1', title: 'Yellow Leaf Bay Beach', description: 'Beautiful sandy beach perfect for families', category: ['Family-Friendly', 'Relaxation'], location: 'Yellow Leaf Bay' },
  { id: '2', title: 'Rainforest Hiking Trails', description: 'Explore lush tropical rainforest paths', category: ['Adventure', 'Family-Friendly'], location: 'Taniti City' },
  { id: '3', title: 'Volcano Tours', description: 'Visit the active volcano with expert guides', category: ['Adventure', 'Cultural'], location: 'Taniti City' },
  { id: '4', title: 'Snorkeling Adventures', description: 'Discover colorful marine life underwater', category: ['Adventure', 'Family-Friendly'], location: 'Yellow Leaf Bay' },
  { id: '5', title: 'Zip-lining Through Forest', description: 'Thrilling canopy tour experience', category: ['Adventure'], location: 'Taniti City' },
  { id: '6', title: 'Chartered Fishing Trips', description: 'Deep sea fishing expeditions', category: ['Adventure', 'Relaxation'], location: 'Merriton Landing' },
  { id: '7', title: 'Taniti History Museum', description: 'Learn about island culture and history', category: ['Cultural', 'Family-Friendly'], location: 'Taniti City' },
  { id: '8', title: 'Helicopter Island Tours', description: 'Aerial views of the entire island', category: ['Adventure'], location: 'Taniti City' },
  { id: '9', title: 'Local Microbrewery Tour', description: 'Taste locally crafted beers', category: ['Cultural', 'Relaxation'], location: 'Taniti City' },
  { id: '10', title: 'Dance Club Experience', description: 'Night entertainment and dancing', category: ['Relaxation'], location: 'Taniti City' },
  { id: '11', title: 'Movie Theater', description: 'Latest films in air-conditioned comfort', category: ['Family-Friendly', 'Relaxation'], location: 'Taniti City' },
  { id: '12', title: 'Arcade Gaming Center', description: 'Fun games for all ages', category: ['Family-Friendly'], location: 'Taniti City' },
  { id: '13', title: 'Art Galleries Tour', description: 'Local and international artwork', category: ['Cultural', 'Relaxation'], location: 'Taniti City' },
  { id: '14', title: 'Bowling Alley', description: 'Family bowling entertainment', category: ['Family-Friendly', 'Relaxation'], location: 'Taniti City' },
  { id: '15', title: 'Golf Course (Coming Soon)', description: '9-hole course under development', category: ['Relaxation'], location: 'Merriton Landing' },
];

const categoryIcons = {
  'Family-Friendly': Users,
  'Adventure': Mountain,
  'Cultural': Sparkles,
  'Relaxation': Waves,
};

export function ActivitiesPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const categories = ['Family-Friendly', 'Adventure', 'Cultural', 'Relaxation'];
  const locations = ['Taniti City', 'Merriton Landing', 'Yellow Leaf Bay'];

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const toggleLocation = (location: string) => {
    setSelectedLocations(prev =>
      prev.includes(location) ? prev.filter(l => l !== location) : [...prev, location]
    );
  };

  const filteredActivities = activities.filter(activity => {
    const categoryMatch = selectedCategories.length === 0 || 
      selectedCategories.some(cat => activity.category.includes(cat));
    const locationMatch = selectedLocations.length === 0 || 
      selectedLocations.includes(activity.location);
    return categoryMatch && locationMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl text-gray-800 mb-2">Activities & Attractions</h1>
          <p className="text-gray-600">Discover adventures and experiences across Taniti Island</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl mb-4 text-gray-800">Filters</h2>

                {/* Category Filters */}
                <div className="mb-6">
                  <h3 className="text-sm uppercase tracking-wide text-gray-600 mb-3">Category</h3>
                  <div className="space-y-2">
                    {categories.map((category) => {
                      const Icon = categoryIcons[category as keyof typeof categoryIcons];
                      return (
                        <div key={category} className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-50">
                          <Checkbox
                            id={category}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => toggleCategory(category)}
                          />
                          <label htmlFor={category} className="text-sm cursor-pointer flex items-center gap-2 flex-1">
                            <Icon className="h-4 w-4 text-gray-500" />
                            {category}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Location Filters */}
                <div>
                  <h3 className="text-sm uppercase tracking-wide text-gray-600 mb-3">Location</h3>
                  <div className="space-y-2">
                    {locations.map((location) => (
                      <div key={location} className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-50">
                        <Checkbox
                          id={location}
                          checked={selectedLocations.includes(location)}
                          onCheckedChange={() => toggleLocation(location)}
                        />
                        <label htmlFor={location} className="text-sm cursor-pointer flex-1">
                          {location}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Activities Grid */}
          <div className="lg:col-span-3">
            <div className="mb-4 text-gray-600">
              <span>Showing {filteredActivities.length} activities</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredActivities.map((activity) => (
                <Card key={activity.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="h-40 bg-gradient-to-br from-teal-100 to-blue-100 rounded-lg mb-4 flex items-center justify-center">
                      <Trees className="h-16 w-16 text-teal-600" />
                    </div>
                    <h3 className="text-lg mb-2 text-gray-800">{activity.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {activity.description}
                    </p>
                    <div className="mb-4">
                      <Badge variant="outline" className="text-xs">
                        {activity.location}
                      </Badge>
                    </div>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
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

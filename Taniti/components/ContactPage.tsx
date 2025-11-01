import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Phone, Mail, MapPin, AlertCircle, Hotel, Ticket, Activity, Car } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl text-gray-800 mb-2">Contact & Booking</h1>
          <p className="text-gray-600">Get in touch with us or book your Taniti Island experience</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your travel plans..."
                      rows={6}
                      className="mt-2"
                    />
                  </div>

                  <Button className="w-full bg-teal-600 hover:bg-teal-700" size="lg">
                    SEND MESSAGE
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Booking Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Booking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Hotel className="h-4 w-4" />
                  Book Hotels
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Ticket className="h-4 w-4" />
                  Book Tours
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Activity className="h-4 w-4" />
                  Book Activities
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Car className="h-4 w-4" />
                  Book Transportation
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Contacts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Emergency Contacts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <span className="text-sm">Hospital</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Phone className="h-3 w-3" />
                    911 or +1-XXX-XXX-XXXX
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Police</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Phone className="h-3 w-3" />
                    911 or +1-XXX-XXX-XXXX
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tourist Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tourist Info Center</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <MapPin className="h-4 w-4 text-teal-600" />
                  <span>123 Main St, Taniti City</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <Phone className="h-4 w-4 text-teal-600" />
                  <span>+1-XXX-XXX-XXXX</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <Mail className="h-4 w-4 text-teal-600" />
                  <span>info@taniti-island.com</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="mb-1">Hours:</p>
                  <p>Mon-Fri: 8am - 6pm</p>
                  <p>Sat-Sun: 9am - 5pm</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <Card className="mt-6">
          <CardContent className="p-6">
            <div className="space-y-2 text-sm text-gray-700">
              <p>- For general inquiries, email us at info@taniti-island.com</p>
              <p>- For booking assistance, call +1-XXX-XXX-XXXX</p>
              <p>- Average response time: 24 hours</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

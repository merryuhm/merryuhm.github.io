import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Card, CardContent } from './ui/card';

export function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl text-gray-800 mb-2">FAQ & Practical Information</h1>
          <p className="text-gray-600">Everything you need to know for your visit to Taniti Island</p>
        </div>

        {/* Accordion */}
        <Card>
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {/* Power & Currency */}
              <AccordionItem value="power-currency" className="border-b">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg">Power & Currency</span>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="mb-3">Electrical Outlets</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>- 120 volts (US standard)</li>
                        <li>- Same plugs as United States</li>
                        <li>- No adapter needed for US visitors</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="mb-3">Currency Accepted</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>- US Dollars (primary)</li>
                        <li>- Euros accepted</li>
                        <li>- Japanese Yen accepted</li>
                        <li>- Credit cards widely accepted</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Language */}
              <AccordionItem value="language" className="border-b">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg">Language</span>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="bg-gray-50 p-3 rounded-lg">- Many younger Tanitians speak fluent English</li>
                    <li className="bg-gray-50 p-3 rounded-lg">- English widely spoken in Taniti City</li>
                    <li className="bg-gray-50 p-3 rounded-lg">- Less English in rural areas</li>
                    <li className="bg-gray-50 p-3 rounded-lg">- Tourist areas have English-speaking staff</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Safety */}
              <AccordionItem value="safety" className="border-b">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg">Safety & Crime</span>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="bg-teal-50 p-3 rounded-lg">- Taniti enjoys a low crime rate</li>
                    <li className="bg-gray-50 p-3 rounded-lg">- Petty theft and pickpocketing can occur</li>
                    <li className="bg-gray-50 p-3 rounded-lg">- Watch belongings in crowded areas</li>
                    <li className="bg-gray-50 p-3 rounded-lg">- Use hotel safes for valuables</li>
                    <li className="bg-gray-50 p-3 rounded-lg">- Police available 24/7</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Medical */}
              <AccordionItem value="medical" className="border-b">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg">Medical Facilities</span>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="bg-gray-50 p-3 rounded-lg">- One hospital on the island</li>
                    <li className="bg-gray-50 p-3 rounded-lg">- Located in Taniti City</li>
                    <li className="bg-gray-50 p-3 rounded-lg">- Multilingual staff available</li>
                    <li className="bg-gray-50 p-3 rounded-lg">- Modern equipment and facilities</li>
                    <li className="bg-gray-50 p-3 rounded-lg">- Several pharmacies island-wide</li>
                    <li className="bg-teal-50 p-3 rounded-lg">- Travel insurance recommended</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Holidays */}
              <AccordionItem value="holidays" className="border-b">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg">National Holidays</span>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="bg-yellow-50 p-3 rounded-lg">- Many businesses close during national holidays</li>
                    <li className="bg-gray-50 p-3 rounded-lg">- Check holiday calendar before visiting</li>
                    <li className="bg-gray-50 p-3 rounded-lg">- Plan activities around holiday closures</li>
                    <li className="bg-gray-50 p-3 rounded-lg">- Hotels and resorts remain open</li>
                    <li className="bg-gray-50 p-3 rounded-lg">- Some restaurants may have limited hours</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Drinking Age */}
              <AccordionItem value="drinking-age" className="border-b">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg">Alcohol & Drinking Age</span>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="bg-gray-50 p-3 rounded-lg">- Legal drinking age: 18 years</li>
                    <li className="bg-yellow-50 p-3 rounded-lg">- Alcohol service restricted: midnight - 9am</li>
                    <li className="bg-gray-50 p-3 rounded-lg">- Wide selection of local and imported drinks</li>
                    <li className="bg-gray-50 p-3 rounded-lg">- Local microbrewery available</li>
                    <li className="bg-gray-50 p-3 rounded-lg">- ID required for alcohol purchase</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Best Time to Visit */}
              <AccordionItem value="best-time" className="border-b">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg">Best Time to Visit</span>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="bg-gray-50 p-3 rounded-lg">- Tropical climate year-round</li>
                    <li className="bg-gray-50 p-3 rounded-lg">- Rainy season: November - February</li>
                    <li className="bg-gray-50 p-3 rounded-lg">- Dry season: March - October</li>
                    <li className="bg-gray-50 p-3 rounded-lg">- Average temperature: 75-85°F</li>
                    <li className="bg-teal-50 p-3 rounded-lg">- Book 6+ months ahead for peak season</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* What to Pack */}
              <AccordionItem value="packing">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg">What to Pack</span>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="bg-gray-50 p-3 rounded-lg">- Light, breathable clothing</li>
                    <li className="bg-gray-50 p-3 rounded-lg">- Sandals and comfortable walking shoes</li>
                    <li className="bg-gray-50 p-3 rounded-lg">- Sunscreen and insect repellent</li>
                    <li className="bg-gray-50 p-3 rounded-lg">- Sunglasses and hat</li>
                    <li className="bg-gray-50 p-3 rounded-lg">- Swimwear and beach gear</li>
                    <li className="bg-gray-50 p-3 rounded-lg">- Light rain jacket</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

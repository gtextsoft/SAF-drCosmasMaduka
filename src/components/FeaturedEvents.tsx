import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CalendarIcon = ({ month, day }: { month: string; day: string }) => (
  <div className="flex flex-col items-center justify-center w-12 h-14 bg-cosmos-blue text-white rounded-lg overflow-hidden border border-rich-gold">
    <div className="text-xs font-bold bg-rich-gold w-full text-center py-0.5">{month}</div>
    <div className="text-xl font-bold flex-1 flex items-center">{day}</div>
  </div>
);

export function FeaturedEvents() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-playfair mb-12 text-white text-center">Featured Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {[1, 2, 3, 4].map((index) => (
          <Card key={index} className="bg-white/90 border-2 border-rich-gold hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-start space-x-4">
              <CalendarIcon month="DEC" day={String(index + 14)} />
              <div>
                <CardTitle className="text-cosmos-blue text-xl font-bold">Upcoming Event {index}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-base font-medium">Event description goes here. This is a placeholder text for the event details.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
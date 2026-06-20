import {
  Truck,
  ShieldCheck,
  RotateCcw,
  Headphones,
} from "lucide-react";

const features = [
  { icon: <Truck />, title: "Free Shipping" },
  { icon: <ShieldCheck />, title: "Secure Payment" },
  { icon: <RotateCcw />, title: "Easy Returns" },
  { icon: <Headphones />, title: "24/7 Support" },
];

export default function Features() {
  return (
    <section className="py-16">

      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-xl p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="font-bold">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
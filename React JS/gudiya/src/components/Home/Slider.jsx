import { useEffect, useState } from "react";

const slides = [
  "https://images.unsplash.com/photo-1607082350899-7e105aa886ae",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">

      <img
        src={slides[current]}
        className="w-full h-[200px] md:h-[350px] object-cover"
      />

      {/* Left Button */}
      <button
        onClick={() =>
          setCurrent(current === 0 ? slides.length - 1 : current - 1)
        }
        className="absolute left-2 top-1/2 bg-white p-2 rounded"
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute right-2 top-1/2 bg-white p-2 rounded"
      >
        ❯
      </button>
    </div>
  );
}

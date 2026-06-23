export default function ChartCard({
  title,
  bg,
}) {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      shadow
      overflow-hidden
    "
    >
      <div
        className={`
          h-48
          ${bg}
        `}
      >
        <div className="h-full flex items-center justify-center text-white text-xl font-bold">
          Chart
        </div>
      </div>

      <div className="p-5">

        <h3 className="font-bold">
          {title}
        </h3>

        <p className="text-gray-500 mt-2">
          Last campaign performance
        </p>

      </div>
    </div>
  );
}
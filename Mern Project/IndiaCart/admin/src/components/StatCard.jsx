export default function StatCard({
  title,
  value,
  bg,
}) {
  return (
    <div className="bg-white rounded-2xl shadow p-5 relative">

      <div
        className={`
        absolute
        -top-5
        left-5
        h-14
        w-14
        rounded-xl
        ${bg}
      `}
      />

      <div className="pt-10">
        <p className="text-gray-500">
          {title}
        </p>

        <h3 className="text-3xl font-bold">
          {value}
        </h3>
      </div>

    </div>
  );
}
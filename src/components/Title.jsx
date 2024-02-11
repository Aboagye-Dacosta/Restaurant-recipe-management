// eslint-disable-next-line react/prop-types
function Title({ title }) {
  return (
    <div className="shadow-md shadow-slate-700 bg-white px-2 py-3 skew-x-[-10deg] after:bg-green-500 after:absolute after:top-4 after:h-full after:w-full after:left-4 after:-z-10 relative mb-10">
      <h1 className="font-bold text-[1.5rem] uppercase">{title}</h1>
    </div>
  );
}

export default Title;

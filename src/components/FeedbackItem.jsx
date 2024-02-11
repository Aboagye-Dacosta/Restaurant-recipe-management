function FeedbackItem() {
  return (
    <div className="flex flex-col items-center justify-center border border-slate-300 hover:border-green-500  w-[20rem] p-2 mb-2">
      <span className="text-white">message</span>
      <span className="self-end mt-2 inline-block">date</span>
    </div>
  );
}

export default FeedbackItem;

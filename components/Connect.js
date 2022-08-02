
export default function Connect() {
  return (
    <>
      <div className="flex items-center justify-center h-[95vh] w-10/12 m-auto lg:w-11/12">
        <div className="grid items-center justify-items-center text-center max-w-3xl">
            <h1 className="text-6xl md:text-5xl sm:text-4xl font-bold text-slate-300">Enjoy</h1>
            <h1 className="text-6xl md:text-5xl sm:text-4xl font-bold text-slate-300"><span>ISL </span> NFT</h1>
            <p className="text-base md:text-sm text-slate-500 my-5
            ">This NFT will allow you to be in touch with ISL team and have a special benefits and unique experience by communicating with the athlete.</p>
            <button type="button" className="bg-blue-600 px-7 py-1.5 text-lg md:text-sm rounded-md shadow-lg shadow-blue-600 active:scale-90 hover:translate-y-2 transition-all">Connect Wallet</button>
        </div>
      </div>
    </>
  );
};
function navbar() {
  return (
    <div className="flex w-[99vw] h-32 items-center text-indigo text-xl font-helvetica bg-slate">     
      <div className="flex w-full h-16 justify-center items-center border-r-2 border-indigo"><div className="flex h-full w-3/4 justify-center items-center">DISEASES</div></div>
      <div className="flex w-full h-16 justify-center items-center border-r-2 border-indigo"><div className="flex h-full w-3/4 justify-center items-center">CURES</div></div>
      <div className="flex w-full h-16 justify-center items-center border-r-2 border-indigo"><div className="flex h-full w-3/4 justify-center items-center">HOW TO USE</div></div>
      <div className="flex w-full h-16 justify-center items-center border-r-2 border-indigo"><div className="flex h-full w-3/4 justify-center items-center">HELP US IMPROVE</div></div>
      <div className="flex w-full h-16 justify-center items-center"></div>
      <div className="flex w-full h-16 justify-center items-center"></div>
      <div className="flex w-full h-16 justify-center items-center"></div>
    </div>
  )
}

export default navbar;
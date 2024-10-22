export default function TailwindBreakpoint() {
  return (
    <div className="fixed bottom-2 left-12 z-50 rounded-lg bg-primary">
      <div className="rounded p-2 text-white">
        <div className="sm:hidden">xs</div>
        <div className="hidden sm:block md:hidden">sm</div>
        <div className="hidden md:block lg:hidden">md</div>
        <div className="hidden lg:block xl:hidden">lg</div>
        <div className="hidden xl:block 2xl:hidden">xl</div>
        <div className="hidden 2xl:block">2xl</div>
      </div>
    </div>
  )
}
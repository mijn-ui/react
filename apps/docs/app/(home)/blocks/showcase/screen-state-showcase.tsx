import { FaBoxArchive } from "react-icons/fa6"

const ScreenStateShowcase = () => {
  return (
    <div className="bg-surface text-surface-text flex w-full max-w-screen-sm flex-col items-center justify-center space-y-2 rounded-2xl p-4 text-center shadow-sm">
      <FaBoxArchive className="text-muted size-4" />
      <div className="flex w-full flex-col items-center space-y-1">
        <div className="bg-accent h-3 w-20 rounded-md" />
        <div className="bg-accent h-2 w-2/3 rounded-md" />
        <div className="bg-accent h-2 w-2/3 rounded-md" />
      </div>
      <div className="flex items-center justify-center gap-2 p-0">
        <div className="bg-accent h-[22px] w-12 rounded-md" />
        <div className="bg-accent h-[22px] w-16 rounded-md" />
      </div>
    </div>
  )
}

export default ScreenStateShowcase

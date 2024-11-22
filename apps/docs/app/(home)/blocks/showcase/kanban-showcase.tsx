import Image from "next/image"
import { GoClock } from "react-icons/go"
import { LuMoreVertical, LuPlus } from "react-icons/lu"

const KanbanShowcase = () => {
  const KanbanHeader = (
    <div className="flex w-full items-center justify-between px-3 pr-2">
      <div className="flex items-center gap-1">
        <h3 className="text-sm font-medium">Todo</h3>
        <span className="flex size-4 items-center justify-center rounded-full bg-surface text-xxs font-medium text-surface-text">
          3
        </span>
      </div>
      <button className="disabled:bg-disabled disabled:text-disabled-text inline-flex size-7 items-center justify-center gap-1 rounded-full text-sm text-neutral-text hover:bg-accent hover:text-main-text">
        <LuMoreVertical />
      </button>
    </div>
  )

  const KanbanCard = (
    <div className="group relative w-full cursor-pointer space-y-2 rounded-lg bg-surface p-3">
      <h5 className="w-10/12 text-xs font-medium text-main-text">
        Creating wireframes for iOS application
      </h5>
      <div className="flex flex-wrap">
        <span className="border-border inline-flex items-center justify-center rounded-full border px-1.5 py-px text-xxs text-main-text hover:bg-accent">
          Wireframe
        </span>
      </div>
      <div className="space-y-1">
        <div className="flex items-center justify-between text-xxs text-neutral-text">
          <h5>CheckList</h5>
          <p>3/4</p>
        </div>
        <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-neutral">
          <div
            className="h-full bg-primary"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={75}
            role="progressbar"
            style={{
              transform: "scaleX(0.75)",
              transformOrigin: "left center",
            }}
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-between text-neutral-text">
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <div className="flex items-center gap-1 text-sm">
            <GoClock />
            <span className="text-xxs">3d</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <CommentIcon />
            <span className="text-xxs">2</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <CommentIcon />
            <span className="text-xxs">5</span>
          </div>
        </div>
        <div className="flex items-center justify-center -space-x-2">
          <div className="relative flex size-5 shrink-0 items-center justify-center overflow-hidden rounded-full bg-neutral text-xs">
            <Image
              width={40}
              height={40}
              alt="avatar"
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
              className="size-full object-cover"
            />
          </div>
          <div className="relative flex size-5 shrink-0 items-center justify-center overflow-hidden rounded-full bg-neutral text-xs">
            <span>S</span>
          </div>
          <div className="relative flex size-5 shrink-0 items-center justify-center overflow-hidden rounded-full bg-neutral text-xs">
            <Image
              width={40}
              height={40}
              alt="avatar"
              src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
              className="size-full object-cover"
            />
          </div>
          <div className="!ml-1.5 flex items-center justify-center text-xxs text-neutral-text">
            +3
          </div>
        </div>
      </div>
    </div>
  )

  const KanbanFooter = (
    <div className="relative flex items-center justify-between gap-4 px-4 py-2">
      <button className="flex items-center gap-2 text-xs text-neutral-text">
        <LuPlus className="text-sm" />
        Add a new Item
      </button>
    </div>
  )

  return (
    <div className="relative w-full max-w-80 overflow-hidden rounded-2xl bg-kanban py-2">
      {KanbanHeader}

      <div className="px-3">{KanbanCard}</div>

      {KanbanFooter}
    </div>
  )
}

const CommentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M6.66634 11.25H13.333M6.66634 7.08333H9.99967"
      stroke="#404040"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.08218 15.8333C3.99875 15.7268 3.18713 15.4014 2.64281 14.857C1.6665 13.8807 1.6665 12.3094 1.6665 9.16668V8.75001C1.6665 5.60731 1.6665 4.03596 2.64281 3.05965C3.61913 2.08334 5.19047 2.08334 8.33317 2.08334H11.6665C14.8092 2.08334 16.3806 2.08334 17.3569 3.05965C18.3332 4.03596 18.3332 5.60731 18.3332 8.75001V9.16668C18.3332 12.3094 18.3332 13.8807 17.3569 14.857C16.3806 15.8333 14.8092 15.8333 11.6665 15.8333C11.1994 15.8438 10.8275 15.8793 10.462 15.9625C9.46336 16.1924 8.53861 16.7035 7.62473 17.1491C6.32258 17.784 5.6715 18.1015 5.26292 17.8043C4.48125 17.2221 5.24529 15.4182 5.4165 14.5833"
      stroke="#404040"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
  </svg>
)

export default KanbanShowcase

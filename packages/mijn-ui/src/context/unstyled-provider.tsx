import * as React from "react"

type UnstyledContextValue = { unstyled: boolean }

const UnstyledContext = React.createContext<UnstyledContextValue>({
  unstyled: false,
})

export const useUnstyled = () => {
  const context = React.useContext(UnstyledContext)
  if (!context) {
    throw new Error("useUnstyled must be used within an UnstyledProvider")
  }
  return context
}

type UnstyledProviderProps = {
  unstyled: boolean
  children: React.ReactNode
}

export const UnstyledProvider = ({
  unstyled,
  children,
}: UnstyledProviderProps) => {
  return (
    <UnstyledContext.Provider value={{ unstyled }}>
      {children}
    </UnstyledContext.Provider>
  )
}

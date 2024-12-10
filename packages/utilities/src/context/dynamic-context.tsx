import { createContext, useContext, ReactNode } from "react"

export function createDynamicContext<T>(defaultValue?: T) {
  const Context = createContext<T | undefined>(defaultValue)

  const useDynamicContext = () => {
    const context = useContext(Context)
    if (context === undefined) {
      throw new Error("useDynamicContext must be used within a Provider")
    }
    return context
  }

  const Provider = ({ value, children }: { value: T; children: ReactNode }) => (
    <Context.Provider value={value}>{children}</Context.Provider>
  )

  return { Provider, useDynamicContext }
}

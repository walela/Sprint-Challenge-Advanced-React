import { useEffect } from "react"
import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = (key, initialValue) => {
  const [theme, setTheme] = useLocalStorage(key, initialValue)

  useEffect(() => {
    if (theme) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [theme])

  return [theme, setTheme]
}
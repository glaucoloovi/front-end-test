export function debounce<T extends (...args: unknown[]) => void>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null
  return (...args: Parameters<T>) => {
    if (timeout !== null) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      timeout = null
      callback(...args)
    }, delay)
  }
}

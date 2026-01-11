"use client"

import { useCallback, useEffect, useRef } from "react"

export function useAnimationFrame(callback: (time: number) => void, dependencies: any[] = []) {
  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = useRef<number>()
  const previousTimeRef = useRef<number>()

  // Remember the latest callback
  const memoizedCallback = useCallback(callback, dependencies)

  // Set up the animation loop
  useEffect(() => {
    const animate = (time: number) => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - previousTimeRef.current
        memoizedCallback(deltaTime)
      }
      previousTimeRef.current = time
      requestRef.current = requestAnimationFrame(animate)
    }

    requestRef.current = requestAnimationFrame(animate)

    // Clean up on unmount
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [memoizedCallback])
}

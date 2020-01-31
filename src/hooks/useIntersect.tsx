import React, { useState, useRef, useEffect } from 'react'

const useIntersect = ({
  root = null,
  rootMargin = '10px',
  threshold = 0
}: {
  root?: Element
  rootMargin?: string
  threshold?: number | number[]
}) => {
  const [entry, updateEntry] = useState<Record<string, any>>({})
  const [node, setNode] = useState(null)
  const observer = useRef<IntersectionObserver>(null)

  useEffect(() => {
    if (observer.current) observer.current.disconnect()

    observer.current = new window.IntersectionObserver(
      ([entry]) => updateEntry(entry),
      {
        root,
        rootMargin,
        threshold
      }
    )

    const { current: currentObserver } = observer
    if (node) currentObserver.observe(node)

    return () => currentObserver.disconnect()
  }, [node, root, rootMargin, threshold])

  return [setNode, entry]
}

export default useIntersect

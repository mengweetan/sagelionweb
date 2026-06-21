// A soft gradient that eases a dark section into the surrounding light
// (cloud) background, so dark/light transitions don't read as a hard edge.
export default function SectionSeam({ position = 'bottom', className = '' }) {
  const pos =
    position === 'top'
      ? 'top-0 bg-gradient-to-b'
      : 'bottom-0 bg-gradient-to-t'
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 ${pos} z-0 h-28 from-cloud to-transparent ${className}`}
    />
  )
}

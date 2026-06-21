// Vector brand mark. The orange X is fixed; the secondary stroke uses
// currentColor, so set the text color of the parent to control it
// (charcoal on light surfaces, white on dark). Decorative — always paired
// with the "Cart Transformation" wordmark, so hidden from assistive tech.
export default function LogoMark({ className = '' }) {
  return (
    <svg
      viewBox="0 0 1926 880"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M 1050 639 L 1051 644 L 1249 879 L 1925 879 L 1925 817 L 1271 817 L 1081 589 L 1077 591 Z"
        fill="currentColor"
      />
      <path
        d="M 508 0 L 839 396 L 847 403 L 876 352 L 875 347 L 584 0 Z"
        fill="currentColor"
      />
      <path
        d="M 0 0 L 0 100 L 413 100 L 798 561 L 799 569 L 628 865 L 622 879 L 873 879 L 948 746 L 953 747 L 1063 879 L 1203 879 L 1202 875 L 1008 645 L 1008 639 L 1198 303 L 1251 205 L 1008 205 L 862 460 L 859 463 L 855 463 L 465 0 Z"
        fill="#F15A25"
      />
    </svg>
  )
}

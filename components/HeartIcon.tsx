import * as React from "react"
import { SVGProps } from "react"

const HeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="currentColor"
    width={800}
    height={800}
    viewBox="0 0 1920 1920"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1771.731 291.037C1675.709 193.659 1547.944 140 1411.818 140h-.113c-136.125 0-263.777 53.66-359.573 150.924-37.618 38.07-68.571 80.997-92.294 127.426-23.61-46.429-54.563-89.356-92.068-127.313C771.86 193.659 644.208 140 507.97 140h-.113c-136.012 0-263.777 53.66-359.8 151.037-197.691 200.629-197.691 527.103 1.695 729.088l810.086 760.154 811.893-761.736c197.692-200.403 197.692-526.877 0-727.506"
      fillRule="evenodd"
    />
  </svg>
)

export default HeartIcon
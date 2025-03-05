import type React from "react"
import { cn } from "@/lib/utils"

interface MapViewProps extends React.HTMLAttributes<HTMLDivElement> {}

export function MapView({ className, ...props }: MapViewProps) {
  return (
    <div className={cn("w-full h-[600px] rounded-lg bg-muted", className)} {...props}>
      {/* Map implementation will go here */}
    </div>
  )
}


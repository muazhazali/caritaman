"use client"

import { Button } from "@/components/ui/button"
import { List, Map } from "lucide-react"

export function ViewToggle() {
  return (
    <div className="flex items-center space-x-2 border rounded-lg p-1">
      <Button variant="ghost" size="sm" className="bg-orange-100 dark:bg-orange-900">
        <List className="h-4 w-4 mr-2" />
        List
      </Button>
      <Button variant="ghost" size="sm">
        <Map className="h-4 w-4 mr-2" />
        Map
      </Button>
    </div>
  )
}


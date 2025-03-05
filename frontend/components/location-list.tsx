import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, ParkingMeterIcon as Parking, Lightbulb } from "lucide-react"

export function LocationList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i}>
          <CardHeader className="p-0">
            <div className="relative h-48">
              <Image
                src="https://sjc.microlink.io/TPcG3OwKlSO50XHsahQspilnt5zDsuYhAWTLbC9K8Swhn6vvw_Lp073ajZgcHXBYB2F6nE4GpCmpRwd6FknOwA.jpeg"
                alt="Park"
                className="object-cover rounded-t-lg"
                fill
              />
              <div className="absolute top-2 right-2">
                <Badge variant="secondary" className="bg-white/90 dark:bg-gray-950/90">
                  0.8 miles
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Central Skate Park</h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                  <span className="ml-1 text-sm">4.5</span>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <MapPin className="h-4 w-4 mr-1" />
                <span>123 Main St, City</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="flex items-center space-x-1">
                  <Parking className="h-3 w-3" />
                  <span>Parking</span>
                </Badge>
                <Badge variant="outline" className="flex items-center space-x-1">
                  <Lightbulb className="h-3 w-3" />
                  <span>Lit</span>
                </Badge>
              </div>
              <Button className="w-full">View Details</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Search } from "lucide-react"
import { SportFilter } from "@/components/sport-filter"
import { LocationList } from "@/components/location-list"
import { MapView } from "@/components/map-view"
import { ViewToggle } from "@/components/view-toggle"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50 dark:bg-orange-950/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Find Your Perfect Playground
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Discover parks, trails, and sports facilities near you. Filter by activity, amenities, and more.
              </p>
            </div>
            <div className="w-full max-w-2xl space-y-2">
              <div className="flex space-x-2">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <Input
                      className="w-full bg-white dark:bg-gray-950 pl-8"
                      placeholder="Search locations..."
                      type="search"
                    />
                  </div>
                </div>
                <Button className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Near Me</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container px-4 md:px-6 py-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <SportFilter />
            <ViewToggle />
          </div>
          <div className="grid gap-6">
            <LocationList />
            <MapView className="hidden" />
          </div>
        </div>
      </section>
    </div>
  )
}


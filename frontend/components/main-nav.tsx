import Link from "next/link"
import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center space-x-2 mr-4">
          <MapPin className="h-6 w-6 text-orange-500" />
          <Link href="/" className="font-bold text-xl">
            CariTaman
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium flex-1">
          <Link href="/explore" className="transition-colors hover:text-foreground/80">
            Explore
          </Link>
          <Link href="/saved" className="transition-colors hover:text-foreground/80">
            Saved
          </Link>
          <Link href="/contribute" className="transition-colors hover:text-foreground/80">
            Contribute
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <ModeToggle />
          <Button variant="ghost" asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}


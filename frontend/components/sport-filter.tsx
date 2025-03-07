"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  Bike,
  SkullIcon as Skateboard,
  ShoppingBasketIcon as Basketball,
  MonitorIcon as Running,
} from "lucide-react";

const sports = [
  {
    name: "All",
    icon: null,
  },
  {
    name: "Skateboarding",
    icon: Skateboard,
  },
  {
    name: "Basketball",
    icon: Basketball,
  },
  {
    name: "Running",
    icon: Running,
  },
  {
    name: "Cycling",
    icon: Bike,
  },
];

export function SportFilter() {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex w-max space-x-2 p-1">
        {sports.map((sport) => (
          <Button
            key={sport.name}
            variant="ghost"
            className={cn(
              "flex items-center space-x-2",
              sport.name === "All" && "bg-orange-100 dark:bg-orange-900"
            )}
          >
            {sport.icon && <sport.icon className="h-4 w-4" />}
            <span>{sport.name}</span>
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="invisible" />
    </ScrollArea>
  );
}

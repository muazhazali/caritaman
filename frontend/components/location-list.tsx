"use client";

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, ParkingMeterIcon as Parking, Lightbulb, Dog, Train, Bike, Dumbbell, GlassWater } from "lucide-react"
import {
  FaSkating,
  FaBasketballBall,
  FaRunning,
  FaChild,
} from "react-icons/fa";
import { TbSkateboard } from "react-icons/tb";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface Location {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  rating: number;
  distance: number;
  features: {
    parking: boolean;
    lit: boolean;
    skateboarding: boolean;
    roller_skating: boolean;
    basketball: boolean;
    running: boolean;
    cycling: boolean;
    playground: boolean;
    restrooms: boolean;
    drinking_fountains: boolean;
    animal_friendly: boolean;
    fitness: boolean;
    public_transport_access: boolean;
  };
  image_url: string;
}

export function LocationList() {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const { data, error } = await supabase
        .from('locations')
        .select('*');

      if (error) console.error('Error fetching locations:', error);
      else setLocations(data || []);
    };

    fetchLocations();
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {locations.map((location) => (
        <Card key={location.id}>
          <CardHeader className="p-0">
            <div className="relative h-48">
              <Image
                src={location.image_url}
                alt={location.name}
                className="object-cover rounded-t-lg"
                fill
              />
              <div className="absolute top-2 right-2">
                <Badge
                  variant="secondary"
                  className="bg-white/90 dark:bg-gray-950/90"
                >
                  {location.distance} miles
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{location.name}</h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                  <span className="ml-1 text-sm">{location.rating}</span>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{location.address}</span>
              </div>
              <div className="flex flex-wrap items-center justify-between mt-2 space-x-2">
                {location.features.parking && (
                  <Badge variant="outline" className="flex items-center space-x-1 group">
                    <Parking className="h-4 w-4" />
                    <span className="hidden group-hover:inline">Parking</span>
                  </Badge>
                )}
                {location.features.lit && (
                  <Badge variant="outline" className="flex items-center space-x-1 group">
                    <Lightbulb className="h-4 w-4" />
                    <span className="hidden group-hover:inline">Lit</span>
                  </Badge>
                )}
                {location.features.skateboarding && (
                  <Badge variant="outline" className="flex items-center space-x-1 group">
                    <TbSkateboard className="h-4 w-4" />
                    <span className="hidden group-hover:inline">Skateboarding</span>
                  </Badge>
                )}
                {location.features.roller_skating && (
                  <Badge variant="outline" className="flex items-center space-x-1 group">
                    <FaSkating className="h-4 w-4" />
                    <span className="hidden group-hover:inline">Roller Skating</span>
                  </Badge>
                )}
                {location.features.basketball && (
                  <Badge variant="outline" className="flex items-center space-x-1 group">
                    <FaBasketballBall className="h-4 w-4" />
                    <span className="hidden group-hover:inline">Basketball</span>
                  </Badge>
                )}
                {location.features.running && (
                  <Badge variant="outline" className="flex items-center space-x-1 group">
                    <FaRunning className="h-4 w-4" />
                    <span className="hidden group-hover:inline">Running</span>
                  </Badge>
                )}
                {location.features.cycling && (
                  <Badge variant="outline" className="flex items-center space-x-1 group">
                    <Bike className="h-4 w-4" />
                    <span className="hidden group-hover:inline">Cycling</span>
                  </Badge>
                )}
                {location.features.playground && (
                  <Badge variant="outline" className="flex items-center space-x-1 group">
                    <FaChild className="h-4 w-4" />
                    <span className="hidden group-hover:inline">Playground</span>
                  </Badge>
                )}
                {location.features.drinking_fountains && (
                  <Badge variant="outline" className="flex items-center space-x-1 group">
                    <GlassWater className="h-4 w-4" />
                    <span className="hidden group-hover:inline">Drinking Fountains</span>
                  </Badge>
                )}
                {location.features.animal_friendly && (
                  <Badge variant="outline" className="flex items-center space-x-1 group">
                    <Dog className="h-4 w-4" />
                    <span className="hidden group-hover:inline">Animal Friendly</span>
                  </Badge>
                )}
                {location.features.fitness && (
                  <Badge variant="outline" className="flex items-center space-x-1 group">
                    <Dumbbell className="h-4 w-4" />
                    <span className="hidden group-hover:inline">Fitness</span>
                  </Badge>
                )}
                {location.features.public_transport_access && (
                  <Badge variant="outline" className="flex items-center space-x-1 group">
                    <Train className="h-4 w-4" />
                    <span className="hidden group-hover:inline">Public Transport</span>
                  </Badge>
                )}
              </div>
              <Button className="w-full">View Details</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}


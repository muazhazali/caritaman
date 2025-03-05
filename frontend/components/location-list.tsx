"use client";

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, ParkingMeterIcon as Parking, Lightbulb } from "lucide-react"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
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
  };
  image_url: string;
}

export function LocationList() {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const { data, error } = await supabase
        .from<Location>('locations')
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
                <Badge variant="secondary" className="bg-white/90 dark:bg-gray-950/90">
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
              <div className="flex items-center space-x-2">
                {location.features.parking && (
                  <Badge variant="outline" className="flex items-center space-x-1">
                    <Parking className="h-3 w-3" />
                    <span>Parking</span>
                  </Badge>
                )}
                {location.features.lit && (
                  <Badge variant="outline" className="flex items-center space-x-1">
                    <Lightbulb className="h-3 w-3" />
                    <span>Lit</span>
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


import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
      Carousel,
      CarouselContent,
      CarouselItem,
      CarouselNext,
      CarouselPrevious,
} from "@/components/ui/carousel"

export function Korsel() {
      return (
            <Carousel className="w-full max-w-4xl mt-3">
                  <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                              <CarouselItem key={index}>
                                    <div className="p-1">
                                          <Card>
                                                <CardContent className="flex aspect-video items-center justify-center p-6">
                                                      <span className="text-4xl font-semibold">{index + 1}</span>
                                                </CardContent>
                                          </Card>
                                    </div>
                              </CarouselItem>
                        ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
            </Carousel>
      )
}

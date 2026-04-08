"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { reviews } from "../constants";
import Image from "next/image";
import { Star } from "lucide-react";

const Testimonies = () => {
  return (
    <div className="container px-5 py-20 mx-auto">
      <div>
        <h1 className="text-3xl md:text-2xl font-semibold">
          What do they say about us
        </h1>
        <p>Lots of comments about us here&apos;s is what they say</p>
      </div>
      <div className="w-full py-10">
        <Splide
          aria-label="Splide-Slide"
          options={{
            rewind: true,
            gap: "1rem",
            perPage: 3,
            arrows: true,
            rewindSpeed: 1000,
            autoplay: true,
            focus: "center",
            breakpoints: {
              1024: {
                perPage: 2,
              },
              640: {
                perPage: 1,
              },
            },
          }}
        >
          {reviews.map(({ id, name, image, rating, review }) => (
            <SplideSlide key={id + name} className="p-4">
              <div className="h-full w-full">
                <div className="bg-white p-4 h-full shadow-xl rounded-xl min-h-50">
                  <div className="flex gap-3 items-center">
                    <Image
                      src={image}
                      alt={name}
                      width={48}
                      height={48}
                      className="rounded-full w-14 h-14 object-cover"
                    />
                    <div>
                      <div className="flex text-orange-600 text-lg">
                        {Array.from(
                          { length: Math.ceil(rating) },
                          (_, index) => (
                            <Star
                              key={index}
                              fill="currentColor"
                              stroke="currentColor"
                            />
                          ),
                        )}
                      </div>
                      <p>{rating.toFixed(1)}</p>
                    </div>
                  </div>
                  <div className="w-full grow flex-col gap-2 py-2">
                    <p className="text-xl font-semibold">{name}</p>
                    <span>{review}</span>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export { Testimonies };

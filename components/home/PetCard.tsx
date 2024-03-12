import { useState, useRef, useEffect } from "react";
import { PetCardProps } from "@/components/home/Props";
import Image from "next/image";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import Link from 'next/link';
import { useRouter } from "next/router";

const PetCard = (data: any) => {
  // ******************There are some errors with the router, so I commented it out for now******************
  // Also commented out: router.push("/login");
  
  // const router = useRouter();
  const [isHeartActive, setHeartActive] = useState(data.saved);
  const checkboxRef = useRef(null);

  const handleHeartClick = () => {
    if (Cookies.get("token")) {
      const heartPath = document.querySelector("path");
      if (!isHeartActive && heartPath !== null) {
        heartPath.style.fill = "#FF5353";
        heartPath.style.stroke = "#FF5353";
      } else if (heartPath !== null) {
        heartPath.style.fill = "#fff";
        heartPath.style.stroke = "#000";
      }
      setHeartActive(!isHeartActive);
    } else {
      // router.push("/login");
    }
  };

  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-sm w-full h-full rounded-lg overflow-hidden shadow-lg border border-gray-300 border-opacity-50 relative">
        <div className="relative h-80 bg-gray-100">
          <Image
            className="object-cover w-full h-full"
            src={data.image}
            alt="Pet"
            fill
          />
        </div>
        <div className="px-6 py-4">
          <div className="">
            <div className="font-bold text-xl mb-2 text-black">{data.name}</div>
            <p className="text-gray-700 text-base">
              {data.description.length > 100
                ? data.description.substring(0, 100) + "..."
                : data.description}
            </p>
          </div>
          <div className="pt-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {data.type === "A" ? "Adoption" : "Foster"}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {data.age} y/o
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {data.breed}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {data.gender}
            </span>
          </div>
          <div className="">
            <p className="text-gray-700 text-sm">{data.shelter.name}</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "10px",
            }}
          >
            <p className="text-gray-600 font__poppins">
              <Link 
                href={{ 
                  pathname: '/pet-details', 
                  query: {  
                    id: data.id,
                    name: data.name,
                    type: data.type,
                    species: data.species,
                    breed: data.breed,
                    gender: data.gender,
                    age: data.age,
                    size: data.size,
                    description: data.description,
                    shelter: data.shelter,
                    image: data.image
                  }}}
                className="text-green-500"
              >
                Learn More
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCard;

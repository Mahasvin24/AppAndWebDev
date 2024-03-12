import { useState, useRef, useEffect } from "react";
import { PetCardProps } from "@/components/home/Props";
import Image from "next/image";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const PetCard = (data: any) => {
  const [isHeartActive, setHeartActive] = useState(data.saved);
  const checkboxRef = useRef(null);
  const router = useRouter();

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
      router.push("/login");
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
          <div className="font-bold text-xl mb-2 text-black">{data.name}</div>
          <p className="text-gray-700 text-base">
            {data.description.length > 100
              ? data.description.substring(0, 100) + "..."
              : data.description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
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
        <div className="px-6 py-4">
          <p className="text-gray-700 text-sm">{data.shelter.name}</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <p className="text-gray-600 font__poppins pl-4 pb-2">
            <a href="" className="text-green-500">
              Learn More
            </a>
          </p>
          <label className="custom-checkbox">
            <input
              className="custom-checkbox-input"
              type="checkbox"
              checked={isHeartActive}
              onChange={handleHeartClick}
            />
            <div className="custom-checkbox-checkmark">
              <svg viewBox="0 0 256 256">
                <rect fill="none" height="256" width="256" />
                <path
                  d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
                  fill={isHeartActive ? "#FF5353" : "#fff"}
                  strokeWidth="20px"
                  stroke={isHeartActive ? "#FF5353" : "#000"}
                />
              </svg>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PetCard;

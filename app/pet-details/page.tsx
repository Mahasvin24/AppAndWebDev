import Head from "next/head";
import ViewPet from "@/components/ViewPet";
import Navbar from "@/components/home/Navbar";

export default function PetDetails({
  searchParams,
}: {
  searchParams: {
    id: string;
    name: string;
    type: string;
    species: string;
    breed: string;
    gender: string;
    age: string;
    size: string;
    description: string;
    shelter: string;
    image: string;
  };
}) {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Navbar />

      <ViewPet
        name={searchParams.name}
        type={searchParams.type}
        species={searchParams.species}
        breed={searchParams.breed}
        gender={searchParams.gender}
        age={searchParams.age}
        size={searchParams.size}
        description={searchParams.description}
        shelter={searchParams.shelter}
        image={searchParams.image}
      />
    </>
  );
}

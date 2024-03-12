import Image from "next/image";

export default function ViewPet(petData: any) {
  const {
    name,
    image,
    type,
    species,
    breed,
    age,
    gender,
    size,
    description,
    shelter,
  } = petData;

  const textareaClass = `
    w-full
    p-2 
    text-base 
    text-gray-900 
    placeholder-gray-500 
    bg-white 
    border 
    border-gray-300 
    rounded-md 
    shadow-sm 
    focus:outline-none 
    focus:ring-green-500 
    focus:border-green-500 
    sm:text-sm
  `;

  const renderTextarea = (id: string, value: string, rows: number) => {
    return (
      <div className="mb-6" key={id}>
        <label htmlFor={id} className="block text-sm font-medium text-black">
          {id.replace("pet", "")}
        </label>
        <textarea
          id={id}
          className={textareaClass}
          value={value}
          readOnly
          rows={rows} // Number of rows in each textarea
        />
      </div>
    );
  };

  return (
    <div className="bg-gray-50 pt-24">
      <div className="bg-white rounded-md shadow-md mx-auto p-6 flex flex-row items-center ml-6 mr-6">
        <div className="container w-[20%] h-full pl-16">
          <Image
            src={image}
            alt="dog image"
            width={150}
            height={150}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="h-[250px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
        <div className="font__poppins ml-4 pl-4">
          <div className="text-7xl font-bold text-black">{name}</div>
          <div className="text-1.5xl text-gray-400">{type}</div>
        </div>
      </div>
      <div className="bg-gray-50 rounded-md mx-auto p-6 flex flex-row mt-4">
        <div className="flex-grow md:flex flex-row">
          <div className="bg-white w-full md:w-1/2 p-4 pr-4 mb-4 rounded-md shadow-md mr-10 lg:ml-4">
            {renderTextarea("petType", type, 1)}
            {renderTextarea("petSpecies", species, 1)}
            {renderTextarea("petBreed", breed, 1)}
            {renderTextarea("petAge", age, 1)}
            {renderTextarea("petGender", gender, 1)}
          </div>
          <div className="bg-white w-full md:w-1/2 p-4 pl-2 mb-4 rounded-md shadow-md lg:ml-10 mr-4">
            {renderTextarea("petSize", size, 1)}
            {renderTextarea("petShelter", shelter, 1)}
            {renderTextarea("petDescription", description, 5)}
          </div>
        </div>
      </div>
    </div>
  );
}

/*
<div className="bg-white p-6 rounded-md shadow-md mx-auto h-full flex flex-col pt-24">
      <div className="flex-none h-[20%] mb-4 bg-green-300 p-4 rounded-md flex items-center">
        <div className="w-[30%] text-center">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-black leading-none tracking-tight mb-2">
            {name}
          </h1>
        </div>
        <Image src={image} alt="dog image" width={100} height={100} />
      </div>
      <div className="flex-grow flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 pr-2 mb-4">
          {renderTextarea('petType', type, 1)}
          {renderTextarea('petSpecies', species, 1)}
          {renderTextarea('petBreed', breed, 1)}
          {renderTextarea('petAge', age, 1)}
          {renderTextarea('petGender', gender, 1)}
        </div>
        <div className="w-full md:w-1/2 pl-2 mb-4">
          {renderTextarea('petSize', size, 1)}
          {renderTextarea('petShelter', shelter, 1)}
          {renderTextarea('petDescription', description, 5)}
        </div>
      </div>
    </div>

*/

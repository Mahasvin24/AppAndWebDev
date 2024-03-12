import { type } from "os";

export interface ShelterProp {
  url: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  phone_number: string;
  id: any;
}

export interface PetCardProps {
  url: string;
  type: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  gender: string;
  size: string;
  description: string;
  shelter: ShelterProp;
  image: string;
  id: any;
}

export interface PetProps {
  url: string;
  id: any;
  shelter: ShelterProp;
  name: string;
  age: number;
  description: string;
  breed: string;
  gender: string;
  size: string;
  personalities: string;
  medical_history: string;
  vaccination_history: string;
  spay_neuter_status: boolean;
  behavior_around_children_and_other_pets: string;
  energy_level_and_exercise_needs: string;
  grooming_needs: string;
  diet_and_feeding_schedule: string;
  type: string;
  species: string;
  image: string;
  date_created: string;
  date_updated: string;
  saved_users: [];
}
// {
//   "count": 1,
//   "next": null,
//   "previous": null,
//   "results": [
//     {
//       "id": 1,
//       "shelter": {
//         "id": 7,
//         "name": "Humane Society Adoption Center",
//         "number": "+14083702732",
//         "policies_and_procedures": "t",
//         "adoption_process_and_requirements": "tt",
//         "fees_and_costs_associated_with_adopting_or_fostering_a_pet": "t",
//         "staff_and_volunteers_experience_working_with_animals": "t",
//         "facilities_and_conditions_in_which_the_animals_are_kept": "t",
//         "address": "500 El Paseo de Saratoga, San Jose, CA 95130",
//         "latitude": 37.2885622,
//         "longitude": -121.9912975,
//         "date_created": "2023-09-04T23:08:04.276272Z",
//         "date_updated": "2023-09-04T23:08:04.276291Z",
//         "account": 1
//       },
//       "name": "hello",
//       "age": 3,
//       "description": "",
//       "breed": "Cross Breed Mix",
//       "gender": "Female",
//       "size": "Medium",
//       "personality": "silly and wiggly",
//       "medical_history": "Spayed",
//       "vaccination_history": "test",
//       "spay_neuter_status": true,
//       "behavior_around_children_and_other_pets": "Other dogs? I enjoy their company, but cats, hmm... they are good only for chasing.",
//       "energy_level_and_exercise_needs": "Taken out a lot",
//       "grooming_needs": "every 3 months",
//       "diet_and_feeding_schedule": "test",
//       "type": "Adoption",
//       "species": "dog",
//       "image": "http://127.0.0.1:8000/media/images/20230723_143059.jpg",
//       "date_created": "2023-09-04T23:12:42.107120Z",
//       "date_updated": "2023-09-12T04:23:09.914439Z",
//       "saved_users": [
//         1,
//         4
//       ]
//     }
//   ]
// }
import React, { createContext, useContext } from 'react';

// Initialize new context for students
const UserContext = createContext();

// We create a custom hook to provide immediate usage of the student context in other components
export const useUserContext = () => useContext(UserContext);

// StudentProvider component that holds initial state, returns provider component
export const UserProvider = ({ children }) => {
  const initialState = {
    students: [
      {
        id: 1,
        username: 'Deepa34',
        email: 'deepa_patel68@startup.ca',
        missingAnimals: [
            {
                animalName: 'Buddy',
                species: "Dog",
                colours: [White],
                height: "18 inches",
                weight: "12 lbs",
                hairLength: "short",
                coatType: "Curly",
                age: "4",
                collar: "green",
                location: "Hwy 7 & Warden Ave, Regional Municipality of York, Markham, ON L3R 2A2",
                timeStamp: "1519211810362",
                additionalDetails: "Likes to play with cats"
            }
        ],
        sightedAnimals: [],
      },
      {
        id: 2,
        username: 'Jeremy123',
        email: 'shwa22334@sorrydays.com',
        missingAnimals: [],
        sightedAnimals: [
            {
                animalName: 'Unknown',
                species: "Dog",
                colours: [White],
                height: "20 inches approx",
                weight: "10 lbs approx",
                hairLength: "short",
                coatType: "Unknown",
                age: "1-10 years",
                collar: "Unknown",
                location: "101 YMCA Blvd, Markham, ON L6G 0A1",
                timeStamp: "1519572610542",
                additionalDetails: "Tried to catch the dog but was scared of me."
            }
        ],
      },
    ],
  };

  // Provider components expect a value prop to be passed
  return (
    <UserContext.Provider value={initialState}>
      {/* Render children passed from props */}
      {children}
    </UserContext.Provider>
  );
};

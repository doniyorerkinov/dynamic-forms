import { ref } from "vue";
import { type IUser } from "@/interfaces";

export const usersComposible = () => {
  const users = ref<IUser[]>([]);

  function initUsers() {
    // Check if users data already exists in localStorage
    const storedUsers = localStorage.getItem("users");

    if (storedUsers) {
      // If data exists, parse it and set to users
      users.value = JSON.parse(storedUsers);
    } else {
      // If no data exists, upload default data and set to users
      const defaultUsers = [
        {
          id: 1,
          fullName: "Doniyor Erkinov",
          firstName: "Doniyor",
          lastName: "Erkinov",
          birthDate: "15.08.2000",
          email: "erkinovdoniyor03@gmail.com",
          age: 25,
          isMarried: false,
          companyId: 3,
          company: "BlackBox INC",
          companyLocation: "Namangan",
          locationId: 2,
          location: "Namangan",
          salary: 1000,
          position: "Software Engineer",
          isRemote: false,
          isFullTime: true,
          hasCar: true,
          hasHouse: false,
          debt: 6000,
          credit: 2000,
          isStudent: false,
          isEmployed: true,
        },
      ];

      // Store the default users data to localStorage
      localStorage.setItem("users", JSON.stringify(defaultUsers));

      // Set the users to default data
      users.value = defaultUsers;
    }
  }

  return {
    users,
    initUsers,
  };
};

import type { ISelectList } from "@/interfaces";
import { ref } from "vue";

export const useDataComposible = () => {
  // Default data
  const defaultCompanies: ISelectList[] = [
    { value: 1, text: "Apple" },
    { value: 2, text: "Amazon" },
    { value: 3, text: "BlackBox INC" },
    { value: 4, text: "Luice Candy" },
  ];

  const defaultRegions: ISelectList[] = [
    { value: 1, text: "Tashkent" },
    { value: 2, text: "Namangan" },
    { value: 3, text: "Andijon" },
    { value: 4, text: "Farg'ona" },
    { value: 5, text: "Buxoro" },
    { value: 6, text: "Samarqand" },
  ];

  // Initialize companies
  const storedCompanies = localStorage.getItem("companies");
  const companies = ref<ISelectList[]>(
    storedCompanies ? JSON.parse(storedCompanies) : defaultCompanies
  );

  // Save to localStorage if it wasn't there
  if (!storedCompanies) {
    localStorage.setItem("companies", JSON.stringify(defaultCompanies));
  }

  // Initialize regions
  const storedRegions = localStorage.getItem("regions");
  const regions = ref<ISelectList[]>(
    storedRegions ? JSON.parse(storedRegions) : defaultRegions
  );

  // Save to localStorage if it wasn't there
  if (!storedRegions) {
    localStorage.setItem("regions", JSON.stringify(defaultRegions));
  }

  // Function to add new company
  const addCompany = (company: ISelectList) => {
    companies.value.push(company);
    localStorage.setItem("companies", JSON.stringify(companies.value));
  };

  // Function to add new region
  const addRegion = (region: ISelectList) => {
    regions.value.push(region);
    localStorage.setItem("regions", JSON.stringify(regions.value));
  };

  return {
    companies,
    regions,
    addCompany,
    addRegion,
  };
};

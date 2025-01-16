import  { useState } from "react";

function SelectPractice() {
  const [selectValue, setSelectValue] = useState("Country 1");
  const [selectedCity, setSelectedCity] = useState("");

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
    setSelectedCity(""); // Reset city selection when the country changes
    console.log("Selected Country:", event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    console.log("Selected City:", event.target.value);
  };

  const obj = [
    {
      id: 1,
      country: "Country 1",
      city: ["A", "B", "C", "D"],
    },
    {
      id: 2,
      country: "Country 2",
      city: ["AA", "BB", "CC", "DD"],
    },
  ];

  // Get cities for the selected country
  const selectedCountry = obj.find((item) => item.country === selectValue);
  const cities = selectedCountry ? selectedCountry.city : [];

  return (
    <>
      <h1>Select</h1>
      <div className="bg-slate-400 m-4 p-4">
        <div className="h-72">
          <label htmlFor="country-select" className="block mb-2">
            Select a Country:
          </label>
          <select
            id="country-select"
            onChange={handleSelectChange}
            value={selectValue}
          >
            {obj.map((item) => (
              <option key={item.id} value={item.country}>
                {item.country}
              </option>
            ))}
          </select>
          <br />
          <p className="mt-4">Selected Country: {selectValue}</p>

          <label htmlFor="city-select" className="block mt-4 mb-2">
            Select a City:
          </label>
          <select
            id="city-select"
            onChange={handleCityChange}
            value={selectedCity}
          >
            <option value="">Select a city</option> {/* Default option */}
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>

          <p className="mt-4">Selected City: {selectedCity || "None"}</p>

          
        </div>

        
      </div>
    </>
  );
}

export default SelectPractice;

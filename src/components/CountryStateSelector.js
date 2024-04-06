import React, { useState } from "react";
import Select from "react-select";
import countries from "../data/countries";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CountryStateSelector = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setSelectedState(null);
  };

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    if (selectedOption) {
      toast.info(`Selected State: ${selectedOption.label}`, {
        position: "top-center",
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f0f0f0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
          background: "#fff",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          gap: 15,
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>
          Country and State Selector
        </h2>
        <Select
          value={selectedCountry}
          onChange={handleCountryChange}
          options={countries.map((country) => ({
            value: country.name,
            label: country.name,
          }))}
          placeholder="Select Country"
          style={{ width: "300px", marginBottom: "20px" }}
        />
        {selectedCountry && (
          <Select
            value={selectedState}
            onChange={handleStateChange}
            options={countries
              .find((country) => country.name === selectedCountry.value)
              .states.map((state) => ({ value: state, label: state }))}
            placeholder="Select State"
            style={{ width: "300px", marginBottom: "20px" }}
          />
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default CountryStateSelector;

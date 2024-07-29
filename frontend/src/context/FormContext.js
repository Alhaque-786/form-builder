import React, { createContext, useState, useContext } from 'react';

// Create context
const FormContext = createContext();

// Create a provider component
const FormProvider = ({ children }) => {
  const [formElements, setFormElements] = useState([]);

  const updateElement = (id, updatedProps) => {
    setFormElements((prevElements) =>
      prevElements.map((element) =>
        element.id === id ? { ...element, ...updatedProps } : element
      )
    );
  };

  return (
    <FormContext.Provider value={{ formElements, updateElement, setFormElements }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook to use the form context
const useFormStore = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormStore must be used within a FormProvider');
  }
  return context;
};

export { FormContext, FormProvider, useFormStore };

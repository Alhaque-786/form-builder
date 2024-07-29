import React, { useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Sidebar from './components/Sidebar';
import FormCanvas from './components/FormCanvas';
import { useFormStore } from './context/FormContext'; // Correct import
import { saveForm, getForm, submitForm } from './utils/api';

const App = () => {
  const { formElements, updateElement, setFormElements } = useFormStore();
  
  useEffect(() => {
    const loadForm = async () => {
      try {
        const formId = '66a26b255d23bb564435fe42';
        const form = await getForm(formId);
        if (form && form.elements) {
          setFormElements(form.elements);
        } else {
          console.error('Form not found or has no elements.');
        }
      } catch (error) {
        console.error('Error loading form:', error);
      }
    };

    loadForm();
  }, [setFormElements]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const reorderedElements = Array.from(formElements);
    const [removed] = reorderedElements.splice(source.index, 1);
    reorderedElements.splice(destination.index, 0, removed);
    setFormElements(reorderedElements);
  };

  const handleSave = async () => {
    await saveForm({ formName: 'My Form', elements: formElements });
  };

  const handleSubmit = async () => {
    const formId = 'YOUR_FORM_ID';
    await submitForm(formId, { name: 'John Doe', options: 'Option 1', dob: '1990-01-01' });
  };

  return (
    <div className="app">
      <h1>Form Builder</h1>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Sidebar elements={[{ id: '1', label: 'Input' }, { id: '2', label: 'Dropdown' }, { id: '3', label: 'Date Select' }]} />
        <FormCanvas elements={formElements} onElementUpdate={updateElement} />
      </DragDropContext>
      <button onClick={handleSave}>Save Form</button>
      <button onClick={handleSubmit}>Submit Form</button>
    </div>
  );
};

export default App;

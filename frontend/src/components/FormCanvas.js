import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import FormElement from './FormElement';

const FormCanvas = () => {
  const [elements, setElements] = useState([]);

  const [, drop] = useDrop(() => ({
    accept: 'FORM_ELEMENT',
    drop: (item) => {
      setElements((prevElements) => [...prevElements, item]);
    },
  }));

  const handleElementChange = (index, field, value) => {
    const newElements = [...elements];
    newElements[index][field] = value;
    setElements(newElements);
  };

  return (
    <div ref={drop} className="form-canvas">
      {elements.map((element, index) => (
        <div key={index} className="form-element">
          <label>
            {element.type === 'input' && <input placeholder={element.placeholder || ''} />}
            {element.type === 'dropdown' && (
              <select>
                {element.options.map((option, i) => (
                  <option key={i} value={option}>{option}</option>
                ))}
              </select>
            )}
            {element.type === 'date' && <input type="date" />}
          </label>
          <button onClick={() => handleElementChange(index, 'label', 'Updated Label')}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default FormCanvas;

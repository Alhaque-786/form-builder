import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/ItemTypes'; // Define your item types

const FormElement = ({ id, type, label, elementName, placeholder, options, index, moveElement, onElementUpdate }) => {
  const [, ref] = useDrag({
    type: ItemTypes.ELEMENT,
    item: { id, type, index },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.ELEMENT,
    hover: (item) => {
      if (item.index !== index) {
        moveElement(item.index, index);
        item.index = index;
      }
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    onElementUpdate(id, { [name]: value });
  };

  return (
    <div ref={(node) => ref(drop(node))} className="form-element">
      {type === 'input' && (
        <div>
          <label>
            Label:
            <input type="text" name="label" value={label} onChange={handleChange} />
          </label>
          <label>
            Element Name:
            <input type="text" name="elementName" value={elementName} onChange={handleChange} />
          </label>
          <label>
            Placeholder:
            <input type="text" name="placeholder" value={placeholder} onChange={handleChange} />
          </label>
        </div>
      )}
      {type === 'dropdown' && (
        <div>
          <label>
            Label:
            <input type="text" name="label" value={label} onChange={handleChange} />
          </label>
          <label>
            Element Name:
            <input type="text" name="elementName" value={elementName} onChange={handleChange} />
          </label>
          <label>
            Options (comma-separated):
            <input type="text" name="options" value={options} onChange={handleChange} />
          </label>
        </div>
      )}
      {type === 'date' && (
        <div>
          <label>
            Label:
            <input type="text" name="label" value={label} onChange={handleChange} />
          </label>
          <label>
            Element Name:
            <input type="text" name="elementName" value={elementName} onChange={handleChange} />
          </label>
        </div>
      )}
    </div>
  );
};

export default FormElement;

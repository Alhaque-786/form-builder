import React from 'react';
import { useDrag } from 'react-dnd';

const FormElement = ({ id, label, type, options }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'FORM_ELEMENT',
    item: { id, type, label, options },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }), [id, type, label, options]);

  return (
    <div ref={drag} className="sidebar-item" style={{ opacity: isDragging ? 0.5 : 1 }}>
      <span>{label}</span>
    </div>
  );
};

const Sidebar = () => {
  const elements = [
    { id: 'input', label: 'Input', type: 'input' },
    { id: 'dropdown', label: 'Dropdown', type: 'dropdown', options: ['Option 1', 'Option 2'] },
    { id: 'date', label: 'Date Select', type: 'date' },
  ];

  return (
    <div className="sidebar">
      {elements.map(el => (
        <FormElement key={el.id} {...el} />
      ))}
    </div>
  );
};

export default Sidebar;

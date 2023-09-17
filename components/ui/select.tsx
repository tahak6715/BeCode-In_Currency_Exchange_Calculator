// components/SelectComponent.tsx

import React, { ChangeEvent } from 'react';

interface SelectComponentProps {
  options: string[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectComponentProps> = ({ options, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="w-[170px] h-12 py-2 border border-gray-300 focus:outline-none shadow-2xl font-bold "
    >
      <option value="" disabled hidden>
        Select Currency
      </option>
      {options.map((option, index) => (
        <option className='text-black text-xl py-2 my-2 font-bold' key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;

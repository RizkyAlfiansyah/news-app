import { BaseModal } from '@/components/atoms';
import { category } from '@/data/common';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ModalFilter = (props) => {
  const { active, onChange, onClose, onDelete, ...rest } = props;
  return (
    <BaseModal onClose={onClose} {...rest}>
      <div className="w-full flex justify-center p-2 bg-white rounded-md z-50 top-12">
        <ul className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3 place-items-center">
          {category.map((item, idx) => (
            <li
              className={`relative p-1 px-2 ${
                active === item.toLowerCase() && 'bg-blue-900 text-white'
              } hover:bg-blue-900 hover:text-white rounded-md cursor-pointer`}
              key={idx}
              onClick={() => {
                active !== item.toLowerCase() && onChange(item.toLowerCase());
                onClose();
              }}
            >
              {item}
              {active === item.toLowerCase() ? (
                <FontAwesomeIcon
                  icon={faClose}
                  className="absolute w-3 h-3 p-1 -top-2 -right-2 rounded-full bg-gray-500 cursor-pointer"
                  onClick={() => onDelete('')}
                />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </BaseModal>
  );
};

export default ModalFilter;

import { BaseModal } from '@/components/atoms';
import React from 'react';
import countryCode from '@/data/country-code.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const ModalFilter = (props) => {
  const { data, active, onChange, onClose, onDelete, ...rest } = props;
  return (
    <BaseModal onClose={onClose} {...rest}>
      <div className="w-full flex justify-center p-2 bg-white rounded-md z-50 top-12">
        <ul className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3 place-items-center">
          {countryCode.map((item, idx) => (
            <li
              className={`relative p-1 px-2 ${
                active === item.code.toLowerCase() && 'bg-blue-900 text-white'
              } hover:bg-blue-900 hover:text-white rounded-md cursor-pointer`}
              key={idx}
              onClick={() => {
                active !== item.code.toLowerCase() &&
                  onChange(item.code.toLowerCase());
                onClose();
              }}
            >
              {item.name}
              {active === item.code.toLowerCase() && active !== 'us' ? (
                <FontAwesomeIcon
                  icon={faClose}
                  className="absolute w-3 h-3 p-1 -top-2 -right-2 rounded-full bg-gray-500 cursor-pointer"
                  onClick={() => onDelete('us')}
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

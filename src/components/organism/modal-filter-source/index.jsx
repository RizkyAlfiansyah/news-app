import { BaseModal } from '@/components/atoms';
import { useSources } from '@/hooks/global';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ModalFilter = (props) => {
  const { active, onChange, onClose, onDelete, ...rest } = props;

  const { data, refetch, loading } = useSources('top-headlines/sources');

  const dataFiltered = data.map((item) => {
    return {
      code: item.id,
      name: item.name,
    };
  });

  return (
    <BaseModal onClose={onClose} {...rest}>
      <div className="w-full flex p-2 bg-white rounded-md z-50 top-12">
        <ul className="grid grid-cols-5 gap-3">
          {dataFiltered.map((item, idx) => (
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
              {active === item.code.toLowerCase() ? (
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

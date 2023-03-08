import { useMemo } from 'react';
import { get } from 'lodash';
import { useCMEditViewDataManager } from '@strapi/helper-plugin';

function useSelect(name) {
  const {
    addComponentToDynamicZone,
    createActionAllowedFields,
    isCreatingEntry,
    formErrors,
    modifiedData,
    moveComponentField,
    removeComponentFromDynamicZone,
    readActionAllowedFields,
    updateActionAllowedFields,
  } = useCMEditViewDataManager();
  console.log("modifiedData", modifiedData, name);


  const dynamicDisplayedComponents = useMemo(() => {
    // const parsedName = name.split('.').reduce((name, part) => {

    // }, );
     console.log("mod data and p name", name);
    return get(modifiedData, name, []).map(data => {
      return {
        componentUid: data.__component,
        id: data.id ?? data.__temp_key__,
      };
    });
  }, [modifiedData, name]);
  const contains = (items, name) => {
    if (Array.isArray(name)) {
      return items.includes(name[0]);
    }

    return items.includes(name);
  };
  const isFieldAllowed = useMemo(() => {
    const allowedFields = isCreatingEntry ? createActionAllowedFields : updateActionAllowedFields;

    return contains(allowedFields, name.split('.'));
  }, [name, isCreatingEntry, createActionAllowedFields, updateActionAllowedFields]);

  const isFieldReadable = useMemo(() => {
    const allowedFields = isCreatingEntry ? [] : readActionAllowedFields;

    return contains(allowedFields, name.split('.'));
  }, [name, isCreatingEntry, readActionAllowedFields]);

  return {
    addComponentToDynamicZone,
    formErrors,
    isCreatingEntry,
    isFieldAllowed,
    isFieldReadable,
    moveComponentField,
    removeComponentFromDynamicZone,
    dynamicDisplayedComponents,
  };
}

export default useSelect;

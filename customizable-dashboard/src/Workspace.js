import React, { forwardRef } from 'react';
import DivObject from './DivObject';

const Workspace = forwardRef(({ objects, selectedIds, setSelectedIds, isMultiSelectEnabled, setCustomStyles }, ref) => {
    const selectObject = (event, id) => {
        event.stopPropagation();
        if (isMultiSelectEnabled) {
            setSelectedIds((prevSelectedIds) =>
                prevSelectedIds.includes(id)
                    ? prevSelectedIds.filter((selectedId) => selectedId !== id)
                    : [...prevSelectedIds, id]
            );
        } else {
            setSelectedIds([id]);
        }
        const selectedObject = objects.find(obj => obj.id === id);
        if (selectedObject) {
            setCustomStyles(selectedObject.style);
        }
    };

    const renderObjects = (parentId = null) => {
        return objects
            ?.filter(obj => obj.parentId === parentId)
            ?.map(obj => (
                <DivObject
                    key={obj.id}
                    object={obj}
                    onSelect={(event) => selectObject(event, obj.id)}
                    renderChildren={() => renderObjects(obj.id)}
                    isSelected={selectedIds.includes(obj.id)}
                />
            ));
    };

    return (
        <div ref={ref} style={{ padding: '20px', minHeight: '400px', background: '#f5f5f5' }}>
            <div>
                {renderObjects()}
            </div>
        </div>
    );
});

export default Workspace;

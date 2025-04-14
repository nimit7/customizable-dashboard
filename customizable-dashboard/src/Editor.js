import React, { useState, useEffect, useRef } from 'react';
import DivObject from './DivObject';
import StyleFormatter from './StyleFormatter';
import Workspace from './Workspace';
import ReactDOM from 'react-dom/client';
import { useReactToPrint } from 'react-to-print';
import useApi from './hooks/useApi';
import { postDashboard } from './services/DashboardService';

const componentOptions = [
    { name: 'Button', value: 'button' },
    { name: 'Graph', value: 'graph' },
    { name: 'Display Value 1', value: 'display-value-1' },
    { name: 'Text Input', value: 'text-input' },
    { name: 'Checkbox', value: 'checkbox' },
    { name: 'Dropdown', value: 'dropdown' },
    { name: 'Label', value: 'label' },
    // Add more component options here as needed
];

const Sidebar = ({ selectedObject, onPropertyChange }) => {
    if (!selectedObject) return null;

    console.log(selectedObject)

    const handleChange = (property, value) => {
        onPropertyChange({ ...selectedObject, content: { ...selectedObject.content, props: { ...selectedObject.content.props, [property]: value } } });
        // onPropertyChange({ ...selectedObject, [property]: value });
    };

    return (
        <div className="sidebar">
            <h4>Edit Component</h4>
            {selectedObject.content?.componentId === 'label' && (
                <>
                    <label>Text:</label>
                    <input
                        type="text"
                        value={selectedObject.content.props.text}
                        onChange={(e) => handleChange('text', e.target.value)}
                    />
                    <label>Color:</label>
                    <input
                        type="color"
                        value={selectedObject.content.props.color}
                        onChange={(e) => handleChange('color', e.target.value)}
                    />
                    <label>Font Size:</label>
                    <input
                        // type="number"
                        value={selectedObject.content.props.fontSize}
                        onChange={(e) => handleChange('fontSize', e.target.value)}
                    />
                </>
            )}
            {/* Additional properties for other components */}
        </div>
    );
};

const Editor = ({ objects, setObjects, selectedIds, setSelectedIds, customStyles, setCustomStyles, history, setHistory, historyIndex, setHistoryIndex, isMultiSelectEnabled, setIsMultiSelectEnabled, showAllDivs, setShowAllDivs
}) => {
    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({ contentRef });
    const [selectedObject, setSelectedObject] = useState({});
    const convertObjectToNewFormat = (objects) => {
        let result = [];

        objects.forEach((obj) => {
            // Push the current object with componentId as object_name
            result.push({
                componentId: obj.object_name || '',
                props: obj
            });

            // If object_type is 'panel', recursively handle its object_data
            if (obj.object_type === 'panel' && Array.isArray(obj.object_data)) {
                result = result.concat(convertObjectToNewFormat(obj.object_data));
            }
        });

        return result;
    }

    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({ componentRef });

    useEffect(() => {
        if (historyIndex === -1 || objects !== history[historyIndex]) {
            const newHistory = [...history.slice(0, historyIndex + 1), objects];
            if (newHistory.length > 10) newHistory.shift();
            setHistory(newHistory);
            setHistoryIndex(newHistory.length - 1);
        }
    }, [objects]);

    useEffect(() => {
        setSelectedObject(objects.filter(obj => selectedIds.includes(obj.id))[0])
    }, selectedIds)

    const printWorkspace = () => {
        const printWindow = window.open('', '', 'width=800,height=600');
        const workspaceElement = document.getElementById('workspace');

        console.log(workspaceElement)
        printWindow.document.write(`
            <html>
                <head>
                    <title>Print Workspace</title>
                    <style>
                        @media print {
                            body * {
                                visibility: hidden;
                            }
                            #print-area, #print-area * {
                                visibility: visible;
                            }
                        }
                    </style>
                </head>
                <body>
                    <div id="print-area">${workspaceElement.innerHTML}</div>
                </body>
            </html>
        `);
        printWindow.document.close();

        // Wait for the print window to load the content
        printWindow.onload = () => {
            // Get the target element inside the print window where the component will be rendered
            // const printArea = printWindow.document.getElementById('print-area');

            // // Create a React root and render the component inside the print window
            // const root = ReactDOM.createRoot(printArea);
            // root.render(() => workspaceElement.innerHTML); // Pass the necessary props

            // Trigger print after the component has been rendered
            setTimeout(() => {
                printWindow.focus();
                printWindow.print();
                printWindow.close();
            }, 1000); // Allow some delay to ensure rendering completes before printing
        };
    };

    const addObject = (type, parentId = null) => {
        const { className, style, content } = getObjectProperties(type);
        console.log(content)
        const newObject = {
            id: Date.now(),
            type: type,
            parentId: parentId,
            className: className,
            style: style,
            children: [],
            content: content || {}
        };
        let updatedObjects = [...objects, newObject];
        if (parentId) {
            updatedObjects = updatedObjects.map(obj =>
                obj.id === parentId
                    ? { ...obj, children: [...obj.children, newObject.id] }
                    : obj
            );
        }
        setObjects(updatedObjects);
    };

    const getObjectProperties = (type) => {
        switch (type) {
            case 'container':
                return {
                    className: '',
                    style: { height: 'auto', width: '', minHeight: '50px', backgroundColor: '#f0f0f0', border: '1px solid black', },
                };
            case 'row':
                return {
                    className: 'row m-0',
                    style: { height: 'auto', width: '100%', minHeight: '50px', backgroundColor: '#d0d0d0', border: '1px solid black', },
                };
            case 'column':
                return {
                    className: 'col m-0 my-1',
                    style: { height: 'auto', width: '', minHeight: '50px', backgroundColor: '#b0b0b0', border: '1px solid black', },
                };
            case 'label':
                return {
                    className: 'col m-0 my-1',
                    style: { height: 'auto', width: 'auto', minHeight: '50px', backgroundColor: '#b0b0b0', border: '1px solid black', },
                    content: {
                        componentId: type,
                        props: {}
                    }
                };
            default:
                return {
                    className: '',
                    style: { height: '100px', width: '100px', backgroundColor: '#e0e0e0', border: '1px solid black', },
                };
        }
    };

    const updateObject = (updatedObject) => {
        console.log(updatedObject)
        const updatedObjects = objects.map(obj =>
            obj.id === updatedObject.id ? updatedObject : obj
        );
        setObjects(updatedObjects);
    };

    const updateObjectStyles = (newStyles) => {
        const updatedObjects = objects.map(obj =>
            selectedIds.includes(obj.id) ? { ...obj, style: { ...obj.style, ...newStyles } } : obj
        );
        setObjects(updatedObjects);
    };

    const undoLastAction = () => {
        if (historyIndex > 0) {
            setHistoryIndex(historyIndex - 1);
            setObjects(history[historyIndex - 1]);
        }
    };

    const redoLastAction = () => {
        if (historyIndex < history.length - 1) {
            setHistoryIndex(historyIndex + 1);
            setObjects(history[historyIndex + 1]);
        }
    };

    const handleStyleChange = (styleName, value) => {
        setCustomStyles({ ...customStyles, [styleName]: value });
        if (selectedIds.length) {
            updateObjectStyles({ [styleName]: value });
        }
    };

    const handleComponentSelect = (s) => {
        const selectedComponent = s;

        if (selectedIds.length) {
            return objects.map(obj =>
                selectedIds.includes(obj.id)
                    ? {
                        componentId: selectedComponent,
                        props: {}
                    }
                    : obj
            )[0];
        }
    };
    // const handleComponentSelect = (event) => {
    //     const selectedComponent = event.target.value;

    //     if (selectedIds.length) {
    //         const updatedObjects = objects.map(obj =>
    //             selectedIds.includes(obj.id)
    //                 ? {
    //                     ...obj,
    //                     content: {
    //                         componentId: selectedComponent,
    //                         props: {}
    //                     }
    //                 }
    //                 : obj
    //         );
    //         setObjects(updatedObjects);
    //     }
    // };

    const deleteSelectedObjects = () => {
        if (selectedIds.length > 0) {
            const updatedObjects = objects.filter(obj => !selectedIds.includes(obj.id) && !selectedIds.includes(obj.parentId));
            setObjects(updatedObjects);
            setSelectedIds([]);
        }
    };

    const handleToggleShowAllDivs = () => {
        setShowAllDivs((prev) => !prev);
        adjustDivPadding(!showAllDivs);
    };

    const adjustDivPadding = (isEnabled) => {
        const updatedObjects = objects.map(obj => ({
            ...obj,
            style: {
                ...obj.style,
                padding: isEnabled ? '20px' : '', // Adjust padding as needed
            },
        }));
        setObjects(updatedObjects);
    };

    const selectAllObjects = () => {
        const allIds = objects.map(obj => obj.id);
        setSelectedIds(allIds);
    };

    const { postApiFuncHandler: saveDashboard } = useApi();

    const saveDashboardHandler = () => {
        saveDashboard(postDashboard, "payload")
    }

    return (
        <div>
            <button onClick={reactToPrintFn}>Print</button>

            <button onClick={() => addObject('container')}>Add Container</button>
            <button onClick={() => addObject('row', selectedIds[selectedIds.length - 1])}>Add Row</button>
            <button onClick={() => addObject('column', selectedIds[selectedIds.length - 1])}>Add Column</button>
            {/* <button onClick={() => addObject('label', selectedIds[selectedIds.length - 1])}>Add Label</button> */}

            <button onClick={undoLastAction} disabled={historyIndex <= 0}>Undo</button>
            <button onClick={redoLastAction} disabled={historyIndex >= history.length - 1}>Redo</button>
            <button onClick={() => setIsMultiSelectEnabled(!isMultiSelectEnabled)}>
                {isMultiSelectEnabled ? 'Disable Multi-Select' : 'Select Multiple'}
            </button>
            <button onClick={selectAllObjects}>Select All</button>

            <button onClick={saveDashboardHandler}>Save Dashboard</button>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={showAllDivs}
                        onChange={handleToggleShowAllDivs}
                    />
                    Show All Divs
                </label>
            </div>
            <button onClick={deleteSelectedObjects} disabled={selectedIds.length === 0}>Delete Selected</button>

            <select onChange={(e) => addObject(e.target.value, selectedIds[selectedIds.length - 1])} disabled={selectedIds.length === 0}>
                {/* <select onChange={handleComponentSelect} disabled={selectedIds.length === 0}> */}
                <option value="">Select Component</option>
                {componentOptions.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>

            <button onClick={printWorkspace}>Print Workspace</button>

            <StyleFormatter
                customStyles={customStyles}
                handleStyleChange={handleStyleChange}
                isDivSelected={selectedIds.length > 0}
            />

            <Sidebar selectedObject={selectedObject} onPropertyChange={updateObject} />

        </div>
    );
};

export default Editor;

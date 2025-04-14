import React, { useState, useRef } from 'react';
import Header from './Header';
import Workspace from './Workspace';
import Editor from './Editor';

const DashboardStudio = () => {
    const [objects, setObjects] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const [showEditor, setShowEditor] = useState(false);
    const [customStyles, setCustomStyles] = useState({
        height: '',
        width: '',
        padding: '',
        margin: '',
        border: true,
        borderRadius: '',
    });
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [isMultiSelectEnabled, setIsMultiSelectEnabled] = useState(false);
    const [showAllDivs, setShowAllDivs] = useState(false);

    const workspaceRef = useRef();  // Create a ref for Workspace

    const toggleEditor = () => {
        setShowEditor(!showEditor);
    };

    const props = {
        objects, setObjects,
        selectedIds, setSelectedIds,
        customStyles, setCustomStyles,
        history, setHistory,
        historyIndex, setHistoryIndex,
        isMultiSelectEnabled, setIsMultiSelectEnabled,
        showAllDivs, setShowAllDivs,
        workspaceRef
    };


    return (
        <div>
            <Header toggleEditor={toggleEditor} />
            {showEditor && <Editor {...props} />}
            <Workspace {...props} />
        </div>
    );
};

export default DashboardStudio;

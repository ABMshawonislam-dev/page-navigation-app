// PageNav.jsx
// A React component for a draggable, sortable page navigation bar with context menu functionality.
// Utilizes @dnd-kit for drag-and-drop and lucide-react for icons.

// Core imports for drag-and-drop functionality

import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import React, { useEffect, useState } from "react";
import { arrayMove, SortableContext, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { CircleCheck, Clipboard, ClipboardCheck, Copy, FileText, Flag, Info, PencilLine, Plus, Trash2 } from "lucide-react";

// Component imports
import PageItem from "./PageItem";


const PageNav = () => {
    // State management for pages, context menu, and hover effects
    const [pages, setPages] = useState([
        { id: '1', title: 'Info', icon: <Info className="w-3.5 h-3.5" />, isActive: true },
        { id: '2', title: 'Details', icon: <FileText className="w-3.5 h-3.5" />, isActive: false },
        { id: '3', title: 'Other', icon: <FileText className="w-3.5 h-3.5" />, isActive: false },
        { id: '4', title: 'Ending', icon: <CircleCheck className="w-3.5 h-3.5" />, isActive: false },
      ]);
      const [contextMenu, setContextMenu] = useState(null);
      const [hoveredIndex, setHoveredIndex] = useState(null);

      // Configure drag-and-drop sensors
      const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { delay: 120, tolerance: 1 } }),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
      );

      // Handle drag-and-drop end event to reorder pages
      const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
          setPages((items) => arrayMove(items, items.findIndex((i) => i.id === active.id), items.findIndex((i) => i.id === over.id)));
        }
      };


      // Handle page selection
      const handleSelect = (id) => {
        setPages((prev) => prev.map((p) => ({ ...p, isActive: p.id === id })));
        setContextMenu(null);
      };

      // Handle context menu display
      const handleContextMenu = (e, item) => {
        e.preventDefault();
        setContextMenu({ x: e.pageX, y: e.pageY, item });
      };

      // Add a new page at the specified index
      const handleAddPage = (index) => {
        const newPage = {
          id: Date.now().toString(),
          title: `Page${pages.length + 1}`,
          icon: <FileText className="w-3.5 h-3.5" />,
          isActive: false,
        };
        setPages([...pages.slice(0, index + 1), newPage, ...pages.slice(index + 1)]);
      };

      // Close context menu when clicking outside
      useEffect(() => {
        const handleClickOutside = (e) => {
          if (!e.target.closest('.context-menu')) {
            setContextMenu(null);
          }
        };
        window.addEventListener('click', handleClickOutside);
        return () => window.removeEventListener('click', handleClickOutside);
      }, [contextMenu]);

      // Render the component
      return (
        <div className=" bg-gray-100 min-h-screen">
          {/* Drag-and-drop context for sortable pages */}
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={pages.map((page) => page.id)}>
              <div className=" flex  bg-[#F9FAFB] max-w-full overflow-x-scroll">
                <div className="relative flex items-center space-x-3  p-3 z-2">
                {/* Dashed connector line for visual effect */}
                <div className=" connector dashed mx-2 absolute z-[-3] w-[90%]"></div>
                {/* Render pages and add buttons */}
                {pages.map((page, index) => {
                     const isLeftOfHovered = hoveredIndex === index;
                     const isRightOfHovered = hoveredIndex === index - 1;

                     return (
                    
                      <React.Fragment key={page.id}>
                        {/* Page item with transform animation */}
                        <div
                          style={{
                            transition: 'transform 0.3s ease',
                            transform: isLeftOfHovered
                              ? 'translateX(-12px)'
                              : isRightOfHovered
                              ? 'translateX(12px)'
                              : 'translateX(0)',
                          }}
                        >
                          <PageItem
                            id={page.id}
                            title={page.title}
                            icon={page.icon}
                            isActive={page.isActive}
                            onSelect={handleSelect}
                            onContextMenu={handleContextMenu}
                          />
                        </div>
                        {/* Add page button between pages */}
                        {index < pages.length - 1 && (
                           <div 
                           className="relative hover-zone group w-6 flex justify-center items-center"
                           onMouseEnter={() => setHoveredIndex(index)}
                           onMouseLeave={() => setHoveredIndex(null)}
                         >
                           <button
                             className={`add-button absolute top-1/2 -translate-y-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100 z-10
                               bg-white border border-gray-300 text-gray-600 rounded-full w-4 h-4 text-sm flex items-center justify-center`}
                             onClick={() => handleAddPage(index)}
                           >
                            <Plus className="w-2 h-2"/>
                           </button>
                         </div>
                        )}
                      </React.Fragment>
                    )
                }
                )}

                {/* Add page button at the end */}
                <div
       
                className={`page-item flex items-center space-x-2 px-3 py-1.5 rounded-full cursor-pointer transition-all duration-200  py-1 px-2.5 rounded-lg font-inter leading-5 tracking-[-1.5%] bg-white border border-solid border-border ml-[20px]`}
                onClick={() => handleAddPage(pages.length - 1)}
                >
                    <span className={`text-sm  text-text-active `}><Plus className="w-3.5 h-3.5"/></span>
                    <span className={`text-sm font-medium text-text-active`}>Add page</span>
          
                </div>
                </div>
              </div>
            </SortableContext>
          </DndContext>


          {/* Context menu for page settings */}
          {contextMenu && (
            <div
              className="context-menu mt-1 shadow-md text-sm border border-solid border-border rounded-xl overflow-hidden w-60"
              style={{ top: contextMenu.y, left: contextMenu.x }}
            >
              <div className="pt-2 pb-1 px-3 bg-[#FAFBFC] border-b border-solid border-border">
                <h3 className="font-melody font-medium text-base leading-6">Settings</h3>
              </div>
              
              <div className="px-4">
              <button className="font-inter font-medium text-sm block w-full text-left  mt-4 gap-1.5 flex items-center group cursor-pointer"><Flag className="w-[14px] h-[14px] group-hover:text-[#2F72E2]" /> Set as first page</button>
              <button className="font-inter font-medium text-sm block w-full text-left  mt-4 gap-1.5 flex items-center group cursor-pointer"><PencilLine className="w-[14px] h-[14px] group-hover:text-[#2F72E2]" /> Rename</button>
              <button className="font-inter font-medium text-sm block w-full text-left  mt-4 gap-1.5 flex items-center group cursor-pointer"><Clipboard  className="w-[14px] h-[14px] group-hover:text-[#2F72E2]" /> Copy</button>
              <button className="font-inter font-medium text-sm block w-full text-left  mt-4 gap-1.5 flex items-center group cursor-pointer"><Copy className="w-[14px] h-[14px] group-hover:text-[#2F72E2]" /> Duplicate</button>
              <button className="font-inter font-medium text-sm block w-full text-left  mt-4 gap-1.5 flex items-center  border-t border-solid border-border py-4 text-[#EF494F] cursor-pointer"><Trash2  className="w-[14px] h-[14px]"/>Delete</button>    
              </div>
            </div>
          )}
        </div>
      );
  };

  export default PageNav
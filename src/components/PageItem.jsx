// PageItem.jsx
// A React component representing a single draggable page item in the page navigation bar.
// Utilizes @dnd-kit/sortable for drag-and-drop functionality and lucide-react for icons.

// Core React and library imports

import  { useRef, useState } from "react";
import  { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable } from "@dnd-kit/sortable";
import { EllipsisVertical } from "lucide-react";

/**
 * PageItem component renders a single sortable page item with drag-and-drop support.
 * Handles click events for selection and context menu triggers.
*/
const PageItem = ({ id, title, icon, isActive,onSelect,onContextMenu }) => {
  // Use sortable hook to manage drag-and-drop behavior
    const { 
       attributes, // Accessibility attributes for sortable item
       listeners, // Event listeners for drag events
       setNodeRef, // Ref to attach to the draggable element
       transform, // Current transform during drag
       transition, // Transition style during drag
       isDragging  // Flag indicating if the item is being dragged
    } = useSortable({ id });
   
    // Timer ref to manage click vs. drag distinction
     const timerRef = useRef(null);

     // Styles for drag-and-drop transformations and z-index management
      const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        transition: isDragging ? undefined : 'none', // Disable animation after drop
        zIndex: isDragging ? 999 : 'auto', // Elevate dragged item
      };

      // Handle click to select the page, ensuring it's not a drag action
      const handleClick = () => {
        if (!timerRef.current) {
          onSelect(id);
        }
      };

      // Start timer on mouse down to differentiate click from drag
      const handleMouseDown = () => {
        timerRef.current = setTimeout(() => {}, 200);
      };

      // Clear timer on mouse up to allow click if not dragging
      const handleMouseUp = () => {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      };

      return (
        <div
          ref={setNodeRef}
          style={style}
          {...attributes}
          {...listeners}
          className={`page-item flex items-center space-x-2 px-3 py-1.5 rounded-full cursor-pointer transition-all duration-200  py-1 px-2.5 rounded-lg font-inter leading-5 tracking-[-1.5%] focus:bg-white focus:border focus:border-solid focus:border-border focus:outline-0 focus:[&>span:first-child]:text-icon-active  ${
            isActive ? 'bg-white border border-solid border-border ' : 'bg-default  hover:bg-hover'
          } ${isDragging ? 'dragging' : ''}`}
          onClick={handleClick}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          
        >
          <span className={`text-sm  ${isActive ? "text-icon-active" : "text-text-default"}  `}>{icon}</span>
          <span className={`text-sm font-medium ${isActive ? "text-text-active" : "text-text-default"}`}>{title}</span>
          {isActive &&
             <EllipsisVertical onContextMenu={(e) => onContextMenu(e, { id, title })} className="w-3.5 h-3.5 text-[#9DA4B2]" />
          }
        </div>
      );
};

export default PageItem
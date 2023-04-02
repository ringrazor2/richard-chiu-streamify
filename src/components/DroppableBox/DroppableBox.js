import { useState } from "react";
import { useDrop } from "react-dnd";

const DroppableBox = ({ handleDrop }) => {
  const [droppedItem, setDroppedItem] = useState(null);

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "image",
    drop: (item) => {
      setDroppedItem(item.src);
      handleDrop((prevGrid) => [...prevGrid, item.src]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div className="box" ref={drop}>
      {droppedItem ? (
        <img
          src={droppedItem}
          className="three-page__show"
          alt="dropped image"
        />
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default DroppableBox;

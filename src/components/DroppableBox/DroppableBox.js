import { useDrop } from "react-dnd";

const DroppableBox = ({ handleDrop, index, droppedItem, setDroppedItems }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "image",
    drop: (item) => {
      setDroppedItems(item.src);
      handleDrop(index, item.src);
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
      ) : null}
    </div>
  );
};

export default DroppableBox;

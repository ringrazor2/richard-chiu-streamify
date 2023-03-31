import { useDrag } from "react-dnd";

const DraggableImage = ({ src, alt }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { src, alt },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <img
      src={src}
      alt={alt}
      ref={drag}
      className="three-page__show positionImg"
    />
  );
};

export default DraggableImage;

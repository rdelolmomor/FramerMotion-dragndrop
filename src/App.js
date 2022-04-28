import "./styles.css";
import { useRef } from "react";
import DragComponent from "./DragComponent";

export default function App() {
  const refComponent = useRef(null);

  return (
    <div ref={refComponent} className="Container">
      <DragComponent refComponent={refComponent} />
    </div>
  );
}

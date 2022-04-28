import "./styles.css";
import { useRef } from "react";
import DragComponent from "./Components/DragComponent";
import { postIts } from "./js/postIts";

export default function App() {
  const refComponent = useRef(null);

  return (
    <div ref={refComponent} className="Container">
      {postIts.map((postIt,index)=>
        <DragComponent key={index} refComponent={refComponent} data={postIt}/>
      )}
    </div>
  );
}

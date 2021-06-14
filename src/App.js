import "./styles.css";
import data from "./data";
import { useState } from "react";
import Button from "./components/Button";
import Section from "./components/Section";

export default function App() {
   const [menu, setMenu] = useState(data);
   const categories = data.reduce(
      (accum, current) => {
         if (!accum.includes(current.category)) {
            accum.push(current.category);
         }
         return accum;
      },
      ["All"]
   );
   const handleClick = (c) => {
      if (c !== "All") {
         const newMenu = data.filter((m) => m.category === c);
         setMenu(newMenu);
      } else {
         setMenu(data);
      }
   };

   return (
      <div className="App">
         <h1>Our Menu </h1>
         <div className="underline"></div>
         <div className="btn-container">
            {categories.map((c) => (
               <Button category={c} onClick={() => handleClick(c)} />
            ))}
         </div>
         <div className="container">
            {menu.map((m) => (
               <Section menu={m} />
            ))}
         </div>
      </div>
   );
}

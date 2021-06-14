const Button = ({ category, onClick }) => {
   return (
      <div className="btn">
         <button onClick={onClick}>{category}</button>
      </div>
   );
};

export default Button;

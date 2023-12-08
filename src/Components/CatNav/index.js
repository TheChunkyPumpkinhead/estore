import "./_cat-nav.scss";

const CatNav = () => {
  const categories = ["Men", "Women", "Kids", "Best Offfers"];

  return (
    <>
      <div className="cat-nav-container container">
        <ul>
          {categories.map((category) => {
            return (
              <li className="list-items">
                {" "}
                <a href="#"> {category}</a>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default CatNav;

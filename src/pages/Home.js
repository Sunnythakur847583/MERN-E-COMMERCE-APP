import NavBar from "../features/NavBar/NavBar";
import ProductList from "../features/Product-list/Productlist";
function Home() {
  return (
    <>
      <NavBar>
        <ProductList></ProductList>
      </NavBar>
    </>
  );
}
export default Home;

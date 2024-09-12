import NavBar from "../features/NavBar/NavBar";
import ProductList from "../features/Product-list/components/Productlist";
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

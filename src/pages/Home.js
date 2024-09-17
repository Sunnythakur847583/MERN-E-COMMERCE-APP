import NavBar from "../features/NavBar/NavBar";
import ProductList from "../features/Product/components/Productlist";
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

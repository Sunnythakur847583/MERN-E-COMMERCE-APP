export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //TODO: WE WILL NOT HARD-CODE SERVER URL HERE//
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilter(filter, sort, pagination) {
  // filter = {"category":"smartphone"}
  // TODO : on server we will support multi values
  // pagination= {_page:1, _limit:10}
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
    }
  }

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  console.log(pagination);

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }
  return new Promise(async (resolve) => {
    //TODO: WE WILL NOT HARD-CODE SERVER URL HERE//
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();
    const totalItems = data.items;
    resolve({ data: { products: data, totalItems: +totalItems } });
  });
}

// This file is working like a volatile database for the app
// This file will be removed as we connect out frontend with backend

let productList = [
  {
    productId: 1,
    productName: "Telmikind AM 40mg",
    productPrice: 1100,
    productDescription:
      "Telmikind 40 tablet is used in conditions like heart failure and high blood pressure.",
  },
  {
    productId: 2,
    productName: "Cilacar 10",
    productPrice: 900,
    productDescription:
      "Cilacar 10 MG Tablet is a composition of Cilnidipine, which falls into the Calcium Channel Blockers category.",
  },
  {
    productId: 3,
    productName: "Relife",
    productPrice: 200,
    productDescription:
      "Relife Tablet is an over-the-counter pain reliever and fever reducer.",
  },
  {
    productId: 4,
    productName: "Combiflam 400/325 MG",
    productPrice: 300,
    productDescription:
      "Combiflam Tablet reduces Pain, fever, and inflammation together.",
  },
  {
    productId: 5,
    productName: "Vitamin A",
    productPrice: 450,
    productDescription:
      "To Increase intake of Vitamin A, used in Vitamin A deficiency.",
  },
  {
    productId: 6,
    productName: "Vitamin C",
    productPrice: 500,
    productDescription:
      "To Increase intake of Vitamin C, used in Vitamin C deficiency.",
  },
  {
    productId: 7,
    productName: "Vitamin E",
    productPrice: 650,
    productDescription:
      "To Increase intake of Vitamin E, used in Vitamin E deficiency.",
  },
  {
    productId: 8,
    productName: "Calcium Capsules",
    productPrice: 200,
    productDescription:
      "To Increase intake of Calcium, used in increasing Bone Density.",
  },
];
let distributorList = [
  {
    id: 1,
    name: "Admin",
    email: "productmanager@sanjeevni.com",
    contact: "5555544432",
    password: "sanjeevni123",
  },
  {
    id: 2,
    name: "Shubh Gupta",
    email: "shubhgupta036@gmail.com",
    contact: "9752897467",
    password: "sanjeevni",
  },
  {
    id: 3,
    name: "Sambhav Singh",
    email: "sambhav@gmail.com",
    contact: "9875643214",
    password: "sam#12",
  },
  {
    id: 4,
    name: "Lalit Patidar",
    email: "lalit@gmail.com",
    contact: "9834643214",
    password: "lal#12",
  },
  {
    id: 5,
    name: "Modit Agrawal",
    email: "mohit@gmail.com",
    contact: "9834543214",
    password: "moh#12",
  },
  {
    id: 6,
    name: "Jetendra Thakur",
    email: "jetendra@gmail.com",
    contact: "6755643214",
    password: "jeet#12",
  },
  {
    id: 7,
    name: "Mithun Yadav",
    email: "mithun@gmail.com",
    contact: "8455643214",
    password: "mith#12",
  },
  {
    id: 8,
    name: "Shyam Malik",
    email: "shyam@gmail.com",
    contact: "7855643214",
    password: "shyam#12",
  },
];
let cart = [
  {
    quantity: 12,
    productId: 1,
    productName: "Telmikind AM 40mg",
    productPrice: 1100,
    productDescription:
      "Telmikind 40 tablet is used in conditions like heart failure and high blood pressure.",
    total: 13200,
  },
  {
    quantity: 34,
    productId: 6,
    productName: "Vitamin C",
    productPrice: 500,
    productDescription:
      "To Increase intake of Vitamin C, used in Vitamin C deficiency.",
    total: 17000,
  },
  {
    quantity: 43,
    productId: 7,
    productName: "Vitamin E",
    productPrice: 650,
    productDescription:
      "To Increase intake of Vitamin E, used in Vitamin E deficiency.",
    total: 27950,
  },
  {
    quantity: 12,
    productId: 8,
    productName: "Calcium Capsules",
    productPrice: 200,
    productDescription:
      "To Increase intake of Calcium, used in increasing Bone Density.",
    total: 2400,
  },
  {
    quantity: 12,
    productId: 5,
    productName: "Vitamin A",
    productPrice: 450,
    productDescription:
      "To Increase intake of Vitamin A, used in Vitamin A deficiency.",
    total: 5400,
  },
];
let grandTotal = 65950;
let itemCount = 113;
export const addProduct = (product) => {
  //This is just for now will be removed as integrated with backend
  product = { productId: productList.length + 1, ...product };

  productList.push(product);
  // console.log(productList);
};
export const getProducts = () => {
  return productList;
};
export const getProduct = (productId) => {
  return productList[productId - 1];
};
export const updateProduct = (updatedProduct, productId) => {
  productId = parseInt(productId);
  updatedProduct = { productId, ...updatedProduct };
  productList[productId - 1] = updatedProduct;
};
export const deleteProduct = (productId) => {
  productList.splice(productId - 1, 1);
  for (let i = productId - 1; i < productList.length; i++) {
    productList[i].productId -= 1;
  }
  // console.log(productList);
};

export const addDistributor = (distributor) => {
  //This is just for now will be removed as integrated with backend
  distributor = { id: distributor.length, ...distributor };

  distributorList.push(distributor);
};
export const getDistributors = () => {
  return distributorList;
};

export const addToCart = (productId, quantity) => {
  const cartItem = {
    quantity: quantity,
    ...productList[productId - 1],
    total: quantity * productList[productId - 1].productPrice,
  };

  // Finding that item
  let isProduct = false;
  for(let item of cart) {
    if(item.productId === productId) {
      item.quantity += quantity;
      isProduct = true;
      break;
    }
   }


  if(!isProduct) cart.push(cartItem);
  grandTotal += cartItem.total;
  itemCount += quantity;
};
export const getCartItems = () => {
  return cart;
};
export const grandTotalAmount = () => {
  return grandTotal;
};
export const getTotalItems = () => {
  return itemCount;
}

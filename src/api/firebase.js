import firebase from "../lib/firebase/client";

const firestore = firebase.firestore();

export const getProducts = async (sellerId) => {
  // request data
  const snapshot = await firestore
    .collection("products")
    .where("seller_id", "==", sellerId)
    .get();

  // build the array
  const products = [];
  snapshot.forEach((doc) => products.push({ id: doc.id, ...doc.data() }));

  return products;
};

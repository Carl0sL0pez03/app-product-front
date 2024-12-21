import localforage from "localforage";

localforage.config({
  driver: localforage.INDEXEDDB,
  name: "AppProduct",
  storeName: "cart_store",
});

export default localforage;

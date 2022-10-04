import { products, Products } from './Products';

let pagesize = 9;
let totalpage;
let currentpage = 1;
let perpage = []; //Mang cac san pham tren 1 trang

totalpage = products.length / pagesize;

function getpage() {
  perpage = products.slice(
    (currentpage - 1) * pagesize,
    (currentpage - 1) * pagesize + pagesize
  );
}

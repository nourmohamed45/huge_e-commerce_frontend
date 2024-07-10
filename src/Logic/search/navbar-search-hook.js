import { useEffect, useState } from "react"
import ViewSearchProductHook from "../product/view-search-product-hook"

const NavbarSearchHook = () => {
  const [, , , getProducts] = ViewSearchProductHook()
  const [searchWord, setSearchWord] = useState("")

  const onChangeSearch = (e) => {
    localStorage.setItem("searchWord", e.target.value)
    setSearchWord(e.target.value)

    const path = window.location.pathname;
    if (path !== "/products") {
      window.location.pathname = "/products"
    }
  }

  let word = "";
    if (localStorage.getItem("searchWord")) {
      word = localStorage.getItem("searchWord");
    }


  useEffect(() => {
    setTimeout(() => {
      getProducts()
    }, 1000);
  }, [searchWord])
  













  return [searchWord,onChangeSearch, word]
}

export default NavbarSearchHook
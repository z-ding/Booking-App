import React from 'react'
import Navbar from '../../components/navbar/Navbar.js'
import Header from '../../components/header/Header.js'

const List = () => {
  return ( //in hotel page, we don't want to see the searchbox, so we will give a prop type to the header component. the prop can be taken in header.js and render the contents conditionally
    <div>
      <Navbar />
      <Header type = "list" />
    </div>
  )
}

export default List;

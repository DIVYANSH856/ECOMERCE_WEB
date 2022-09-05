import React from 'react'
import Shop_Data from '../../shop-data.json'

const Shop = () => {
  return (
    <div>
        {Shop_Data.map(({id,name})=>(
        <div key={id}>
            <h1>{name}</h1>
        </div>))}
    </div>
  )
}
export default Shop
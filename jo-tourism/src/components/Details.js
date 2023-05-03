import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import MyContext from '../MyContext';
import jsonData from '../data.json';

export default function Details() {
  const [toursData, settoursData] = useState(jsonData);


  const data = useContext(MyContext);
  console.log(data)


  const params = useParams();
  console.log(params.id);
  const dataC = toursData.filter(info => info.id == params.id)
  console.log(dataC[0].id)
  return (
    <div>

       <h1>{dataC[0].name}</h1>
      <div className='row'>
        <div className='col-7'><h3>{dataC[0].info}</h3></div>
        <div className='col'><img src={dataC[0].image} width='500px' height='500px' /></div>
      </div>
      
    </div>
  )
}

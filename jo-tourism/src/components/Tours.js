import React, { useState } from 'react';
import jsonData from '../data.json';
import { Link, useNavigate } from 'react-router-dom';
import MyContext from '../MyContext';

export default function Tours() {
const [toursData, settoursData] = useState(jsonData);

var cards = toursData.map((info) => {
	return (

        <div className="col-lg-4 col-md-6 mb-4">
        <div className="package-item bg-white mb-2">
          <img className="img-fluid" src={info.image} alt="" style={{height:'250px'}} />
          <div className="p-4">
            <div className="d-flex justify-content-between mb-3">
              <small className="m-0">
                <i className="fa fa-map-marker-alt text-primary mr-2" />
                {info.name}
              </small>
              <small className="m-0">
                <i className="fa fa-calendar-alt text-primary mr-2" />{info.day} days
                
              </small>
              <small className="m-0">
                <i className="fa fa-user text-primary mr-2" />{info.person} Person
              </small>
            </div>
            <a href="" >
              <Link to={`/Details/${info.id}`}
     className="btn btn-primary d-flex justify-content-center py-md-3 px-md-5 mt-2" >More Details</Link>
            </a>
            <div className="border-top mt-4 pt-4">
              <div className="d-flex justify-content-between">
                <h6 className="m-0">
                  <i className="fa fa-star text-primary mr-2" />
                  {info.rating} <small>({info.Voters})</small>
                </h6>
                <h5 className="m-0">${info.price}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

	);
});


return (
    <div className="row">{cards}</div>

);
}



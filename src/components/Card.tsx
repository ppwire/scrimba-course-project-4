import React from 'react';
import Marker from '/img/marker.svg';

interface Props {
   imageSrc: string,
   country: string,
   location: string,
   description: string,
   date: string,
}
export const Card: React.FC<Props> = (prop) => {
   return (
      <div className="card">
         <img src={prop.imageSrc} alt="" className="card-img" />
         <div className="card-body">
            <div className="card-mini-header">
               <img src={Marker} alt="" />
               <h4>{prop.country}</h4>
               &nbsp;
               <h5>View on Google Maps</h5>
            </div>
            <h1 className="card-header">{prop.location}</h1>
            <div className="card-description">
               <h5 className="card-description-date">{prop.date}</h5>
               <h5 className="card-description-detail">{prop.description}</h5>
            </div>
         </div>
      </div>
   )
}
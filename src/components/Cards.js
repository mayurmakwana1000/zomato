import React from "react";
import Card from "react-bootstrap/Card";
export default function Cards({data})  {
  return (
    <>{
      data.map((element,m)=>{
        return(
          <>
            <Card style={{ width: "22rem", border:'none' }} className="hove mb-4" key={element.id}>
                <Card.Img className="cd" variant="top" src={element.imgdata} />
                <div className="card_body">
                  <div className="upper_data d-flex justify-content-between align-items-center">
                    <h4 className="mt-2">{element.rname}</h4>
                    <span>{element.rating}&nbsp;★</span>
                  </div>
                  <div className="lower_data d-flex justify-content-between">
                    <h5>{element.address}</h5>
                    <span>{element.price}</span>
                  </div>
                  <div className="extra"></div>
                </div>
            </Card>
          </>
        )
      })
    }
    </>
  );
};

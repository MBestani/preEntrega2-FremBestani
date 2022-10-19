import ItemDetail  from "../ItemDetail";
import React, {useEffect, useState} from "react";

const funko = 
    {
        
            id: 2, image: "data:image/jpeg;base64,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",
            title: "Funko Pop Jinx"
        
    };

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect (() => {
        const getData = new Promise(resolve => {
          setTimeout(() => {
           resolve (funko);
          }, 3000);
        });
       getData.then(res => setData(res));
  
      }, [])


    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;
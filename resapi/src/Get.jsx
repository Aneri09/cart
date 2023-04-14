import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function Get() {
    let [add, setAdd] = useState(1);

    let [data, setData] = useState([]);

    let adde = () => {
        setAdd(add + 1);
    };

    let sube = () => {
        if (add == 1) {
            return setAdd(add + 1);
        }
        setAdd(add - 1);
    };

    useEffect(() => {
        gets();
    }, [add]);

    let gets = async () => {
        let res = await fetch(
            `https://dummyjson.com/products?pages=${add}&limit=12`
        );
        let req = await res.json();
        console.log(req.products);
        setData(req.products);
    };

    return (
        <div>
            <SimpleGrid minChildWidth='300px' spacing='40px' margin={"50px"}>
        {data.map((e) => {
          return (
            <div>
             <Box bg='white'padding={"10px"} border={"1px solid white"} backgroundColor={"black"} paddingBlock={"20px"}>
                {" "}
                <h1>brand : {e.brand}</h1>
                <img src={e.thumbnail} alt="" />
                    <h1>brand : {e.brand}</h1>
                    <h1>category : {e.category}</h1>
                   
                    <h1>brand : {e.brand}</h1>
                    <h1>price : {e.price}</h1>
                    <h1>rating : {e.rating}</h1>
                    <h1>stock : {e.stock}</h1>
                    <h1>title : {e.title}</h1>
                </Box>
            </div>
          );
        })}
     </SimpleGrid>
            <button onClick={adde}>Add</button>
            <button onClick={sube}>Sub</button>
        </div>
    );
}

export default Get;
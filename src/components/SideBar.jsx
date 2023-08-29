import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";
 const SideBar = ({selectedCategory,setSelectedCategory}) => {
   return (
     <Stack
     direction="row"
     sx={{
        overflowY:"auto",
        height:{ sx:"auto",md:"95%"},
        flexDirection:{md:"column"}
     }}
     >
       {categories.map((Category)=>(
        <button onClick={() => setSelectedCategory(Category.name)} className="category-btn" style={{backgroundColor: Category.name === selectedCategory && '#FC1503', color:'white'}} key={Category.name}>
            <span style={{color: Category.name === selectedCategory ? 'white' : 'red' , marginRight:'15px'}}>
            {Category.icon}
            </span>
            <span style={{opacity: Category.name === selectedCategory ? 1 : 0.5}}>
              {Category.name}
            </span>
        </button>
       ))}
     </Stack>
   )
 }
 
 export default SideBar
 
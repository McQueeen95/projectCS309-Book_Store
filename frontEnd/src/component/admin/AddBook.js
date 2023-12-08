// import  { useEffect } from 'react'

import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,

} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBook()  {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
    rating: "",
    author: "",
    reviews: "",
    description: "",
    PublicationDate: "",
    image: "",
    inStock: "",
  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "Value", e.target.value);
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:3000/books", {
        title: String(inputs.title),
        price: Number(inputs.price),
        rating: Number(inputs.rating),
        author: String(inputs.author),
        reviews: String(inputs.reviews),
        description: String(inputs.description),
        PublicationDate: String(inputs.PublicationDate),
        image: String(inputs.image),
        inStock: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history("/books"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={10}
      >
        <FormLabel>Title</FormLabel>
        <TextField
          value={inputs.title}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="title"
        />
         <FormLabel>Price</FormLabel>
        <TextField
          value={inputs.price}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
        />
        <FormLabel>Author</FormLabel>
        <TextField
          value={inputs.author}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
        />
         <FormLabel>Reviews</FormLabel>
        <TextField
          value={inputs.reviews}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="reviews"
        />
         <FormLabel>Rating</FormLabel>
        <TextField
          value={inputs.rating}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="rating"
        />

        <FormLabel>Description</FormLabel>
        <TextField
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
        />
        <FormLabel>publicationDate</FormLabel>
        <TextField
          value={inputs.PublicationDate}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="PublicationDate"
        />
        <FormLabel>Image</FormLabel>
        <TextField
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />
        
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Available"
        />

        <Button variant="contained" type="submit">
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;
// useEffect(() => {
//   axios.get('http://localhost:8000/getImage')
//   .then(res => setImage(res.data[0].image))
//   .catch(err => console.log(err))
// },[])
// return (
//   <div className='addDiv'>
//           <div style={{width: 'auto'}}>
//             <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
//             <button type='submit' onClick={handleUpload}>Upload</button>
//           </div>
//           <br/>
//           <img src={http://localhost:8000/${image}} alt="That's not good" />
//           <input 
//             type="text" 
//             placeholder="Author" 
//             value={author} 
//             onChange={(e) => setAuthor(e.target.value)} 
//             required 
//           />

//           <input 
//             type="text" 
//             placeholder="Title" 
//             value={title} 
//             onChange={(e) => setTitle(e.target.value)} 
//             required 
//           />

//           <textarea 
//             placeholder="Description" 
//             value={description} 
//             onChange={(e) => setDescription(e.target.value)} 
//           />
//           <input 
//           type="number" 
//           placeholder="Price" 
//           value={price} 
//           onChange={(e) => setPrice(e.target.value)} 
//           required 
//         />

//         <select 
//           value={category} 
//           onChange={(e) => setCategory(e.target.value)} 
//           required
//         >
//           <option value="">Select category</option>
//           {categories.map((cat, index) => (
//             <option key={index} value={cat}>{cat}</option>
//           ))}
//         </select>

//         <button type="submit">Add Product</button>
// </div>
// )
//           }

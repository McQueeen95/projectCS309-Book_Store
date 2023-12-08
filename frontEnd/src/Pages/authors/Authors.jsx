import { books } from "../../data/books";
import { useParams } from "react-router-dom";





const Authors=()=>{
    const { id } = useParams();
    const book = books.find((b) => b.id === +id);

    return(
       
        <h1>gfghfghfhgfghfghfgfhf</h1>
    
    )
}
export default Authors;
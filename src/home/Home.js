import { useState } from "react";
import BlogList from "../BlogList";

export default function Home(){

    const [blogs, setBlogs] = useState([
        {title: 'blog 1', body:'lorem ipsum...', autor:'Oshan', id: 1},
        {title: 'blog 2', body:'lorem ipsum...', autor:'Kasuni', id: 2},
        {title: 'blog 3', body:'lorem ipsum...', autor:'Livinu', id: 3},
    ]);

    const handleDelete = (id) => {
        const newblogs = blogs.filter(x => x.id !== id);
        setBlogs(newblogs);
    }
    
    return(
        <div className="home">
            <BlogList 
                blogs={blogs} 
                title='Blog List'
                handleDelete= {handleDelete}
            />        
        </div>
    );
}
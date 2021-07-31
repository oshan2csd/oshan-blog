export default function BlogList({blogs, title, handleDelete}){
    return(
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.autor}</p>
                    <button 
                        style={{ 
                            borderRadius:'4px',
                            color:'white',
                            backgroundColor:'#6735f1',
                        }} 
                        onClick={() => handleDelete(blog.id)} >Delete
                    </button>
                </div>
        ))} 
        </div>        
    );
}


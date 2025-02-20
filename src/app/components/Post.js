import "./post.css"  //relative import - relative to the directory you're in

export function Post({ title, author, content, following }) {
    
    const button = !following ? (
        <button>Follow</button>
    ) : (
        <button>Unfollow</button>
    );
        return ( 
            <div className="card">
                <h1>{title}</h1>
                <h3>By: {author}</h3>
                    {button}
                <p>{content}</p>
            </div>
    );
}

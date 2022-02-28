
import Post from "./Post"
import React from "react"
import "./styles.css"

const posts = [
    {
        imageSrc: "https://images.pexels.com/photos/5764701/pexels-photo-5764701.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        title: "a2",
    }, {
        title: "a1",
        imageSrc: "https://images.pexels.com/photos/5764701/pexels-photo-5764701.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }, {
        title: "a1",
        imageSrc: "https://images.pexels.com/photos/5764701/pexels-photo-5764701.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }, {
        title: "a1",
        imageSrc: "https://images.pexels.com/photos/5764701/pexels-photo-5764701.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }, {
        title: "a1",
        imageSrc: "https://images.pexels.com/photos/5764701/pexels-photo-5764701.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
]



const App = () => {
    const [title, setTitle] = React.useState("")
    const [content, setContent] = React.useState("")
    const [image, setImage] = React.useState("")
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleContentChange = (e) => {
        setContent(e.target.value)
    }
    const handleImageChange = (e) => {
        setImage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    return (
        <div>
            <div>
                <form className="form" onSubmit={handleSubmit} >
                    <input type="text" placeholder="title" value={title} onChange={handleTitleChange} />
                    <input type="text" placeholder="content" value={content} onChange={handleContentChange} />
                    <input type="text" placeholder="image Url" value={image} onChange={handleImageChange} />
                    <input type="submit" />
                </form>
            </div>
            <div className="container">
                {posts.map((post) => <Post title={post.title} imageSrc={post.imageSrc} />)}
            </div>


        </div>
    );

}

export default App;
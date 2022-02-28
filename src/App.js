
import Post from "./Post"
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

    return (

        <div className="container">
            {posts.map((post) => <Post title={post.title} imageSrc={post.imageSrc} />)}
        </div>
    );

}

export default App;
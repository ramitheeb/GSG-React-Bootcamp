import React from "react"


const state = () => {


    return [1, 2]
}

const Post = (props) => {



    const [likes, setLikes] = React.useState(0);

    const handleClick = () => {
        setLikes(likes + 1);
    }


    const { title = "default title", body } = props;
    return <div className="Post">
        <h1 className="title">{title}</h1>
        {/* <img width={400} src={imageSrc} /> */}
        <p> {body} </p>
        <div className="likeContainer">
            <h4>{likes} Likes</h4>
            <button onClick={handleClick} >Like</button>
        </div>



        {likes > 10 && <h3 style={{
            color: "red"
        }} >Trending !!!!!</h3>
        }


    </div>
}

export default Post 
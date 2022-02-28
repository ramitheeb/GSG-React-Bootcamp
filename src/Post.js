import React from "react"


const state = () => {


    return [1, 2]
}

const Post = (props) => {



    const [likes, setLikes] = React.useState(0);

    const handleClick = () => {
        setLikes(likes + 1);
    }


    const { title = "default title", imageSrc } = props;
    return <div className="Post">
        <h1 className="title">{title}</h1>
        <img width={400} src={imageSrc} />
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
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
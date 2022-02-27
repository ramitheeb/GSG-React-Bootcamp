const Pet = (animal) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, animal.name),
        React.createElement("h2", {}, animal.type),
    ]);
};


const animals = [{
    name: "Luna",
    type: "Dog"
},
{
    name: "susu",
    type: "Cat"
},
]


const App = () => {
    return React.createElement("div", {}, animals.map(Pet));
};



ReactDOM.render(React.createElement(App), document.getElementById("root"));

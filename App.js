const parent = React.createElement("div", {id: "parent"}, 
        React.createElement("div",{ id: "child1" },
                [React.createElement("h1", {}, "I am an h1 tag"), 
                React.createElement("h2", {}, "I am an h1 tag")
        ]),
        React.createElement("div",{ id: "child2" },
                [React.createElement("h1", {}, "I am an h1 tag"), 
                React.createElement("h2", {}, "I am an h1 tag")
        ])
)

const heading = React.createElement("h1",{id:"header"},"hello world");

const root = ReactDOM.createRoot(document.getElementById("root"))

console.log("heading",heading) // Returns a javascript object
console.log("parent",parent)

root.render(parent) // Returns the actual HTML element

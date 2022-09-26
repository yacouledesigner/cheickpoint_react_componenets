import "./Bottom.css"

const Bottom = () => {
    return (
        <div className="bottom">
            <div>
                <span>Declarative</span>
                <p>React makes it painless to create interactive UIs. 
                Design simple views for each state in your application, 
                and React will efficiently update and render just the right 
                components when your data changes. <br /><br />
                Declarative views make your code more predictable and easier to debug.
                </p>
            </div>
            <div>
                <span>Component-Based</span>
                <p>Build encapsulated components that manage their own state, 
                then compose them to make complex UIs. <br /><br />
                Since component logic is written in JavaScript instead of templates,
                you can easily pass rich data through your app and keep state out of the DOM.
                </p>
            </div>
            <div>
                <span>Learn Once, Write Anywhere</span>
                <p>We don’t make assumptions about the rest of your technology stack, so you can
                develop new features in React without rewriting existing code. <br /><br />
                React can also render on the server using Node and power mobile apps using <b>React Native.</b>
                </p>
            </div>
        </div>
    );
}

export default Bottom;

- [x] Why would you use class component over function components (removing hooks from the question)?

I'd use class components when using older versions of react without hooks or maintaining legacy applications

- [x] Name three lifecycle methods and their purposes.

`componentDidMount` - invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here e.g network requests

`componentWillUnmount` - invoked immediately before a component is unmounted and destroyed. useful for cleanup operations etc

`componentDdiUpdate` - invoked immediately after updating occurs. useful for operating on the DOM when the component has been updated.

- [x] What is the purpose of a custom hook?

A custom hook encapsulates useful reusable behavior that can be consumed on demand by different functions
or developers when writing functional components

- [x] Why is it important to test our apps?

Useful in guaranteeing correctness while developing and also identifying any changes that break
the way the app/function/class is intended to function.

function CustomRender(element, container) {
    /*
    const newElement = document.createElement(element.type);
    newElement.innerHTML = element.children;
    newElement.setAttribute(`href`, element.props.href);
    newElement.setAttribute(`target`, element.props.target);
    // newElement.setAttribute(`class`, element.props.className);
    container.appendChild(newElement);
    */
    const newElement = document.createElement(element.type);
    newElement.innerHTML = element.children;
    for (const prop in CreateElement.props) {
        if (prop === `children`) continue; // agar children props na ho toh usko skip kare vrna ham use krte
        newElement.setAttribute(prop, CreateElement.props[prop]);
    }
    container.appendChild(newElement);

}

// Create a new element
const CreateElement = {
    type: `a`,
    props: {
        href: `https://www.google.com`,
        target: `_blank`,
        // className: `link`,
    },
    children: `Click me!`,
}

const mainContainer = document.querySelector(`#root`);


// Render the element
CustomRender(CreateElement, mainContainer); // create element and append it to the main container

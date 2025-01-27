function customRender(element, container) {
  const newElement = document.createElement(element.type);
  newElement.innerHMTL = element.children;
  for (const key in element.props) {
    newElement.setAttribute(key, createElement.props[key]);
  }
  container.appendChild(newElement);
}

const createElement = {
  type: `a`,
  props: {
    href: `https://www.google.com`,
    target: `_blank`,
  },
  children: `Click me`,
};

const mainContainer = document.getElementById("root");
customRender(createElement, mainContainer);

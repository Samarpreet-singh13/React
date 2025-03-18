// elements are written in the because of the react library
// we are going to create a custom react library



// // a custom render program 


// we have to make the attributes again and again hence not optimized
// function customRender(reactEl,container){
//     const domEl=document.createElement(reactEl.type) 
//     domEl.innerHTML=reactEl.children
//     domEl.setAttribute('href',reactEl.props.href)
//     domEl.setAttribute('target',reactEl.props.target)
//     container.appendChild(domEl)
// }


// optimized code for the custom render function
function customRender(reactEl,container){
    const domEl=document.createElement(reactEl.type)
    domEl.innerHTML=reactEl.children
    for (const prop in reactEl.props) {
        if (prop==='children') {
            continue;
        }

        domEl.setAttribute(prop,reactEl.props[prop] )
    }
    container.appendChild(domEl);
}


const reactEl={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank'
    },
    children:'Click me'
}
const main=document.querySelector('#root');

customRender(reactEl,main);
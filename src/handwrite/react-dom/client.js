function createRoot(container) {
  return {
    // 把虚拟DOM转换成真实DOM,并插入容器container
    render(reactElement) {
      // 把虚拟DOM转换成真实DOM
     const domElement = renderElement(reactElement)
     //插入容器
     container.appendChild(domElement)

    }
  }

}

function renderElement(element) {
  // 如果元素是一个字符串或数字，创建一个文本节点并返回
  if (typeof element === 'string' || typeof element === 'number') {
    return document.createTextNode(element)
  }

  // 取出元素类型和属性
  const {type, props} = element
  //如果元素类型是函数
  if (typeof type === 'function') {
    //如果是类组件
    if (type.isReactCompoent) {
      const instance = new type(props)
      const classElement = instance.render()
      return renderElement(classElement)
    } else {
       //属性对象传递给函数组件，返回一个React元素
        const functionElement = type(props)
        return renderElement(functionElement)
    }
   
  }
  // 根据type类型创建真实DOM节点
  const domElement = document.createElement(type)
  Object.keys(props).forEach((name) => {
    // 如果属性是children，先跳过，后面会单独处理
    if (name === 'children') return
    // 如果是行内样式，直计覆盖到真实DOM节点
    if (name === 'style') {
      Object.assign(domElement.style, props.style)
    }else{//展示不处理事件绑定
      domElement[name] = props[name]
    }

  })

  // 处理children,统一化为数组
  const children = Array.isArray(props.children) ? (props.children) : [props.children]
  // 遍历children
  children.forEach((child) => {
    // 把每一个child都转换成真实DOM并插入父节点
    domElement.appendChild(renderElement(child))
  })

  return domElement

}

const ReactDOM = {
  createRoot
}

export default ReactDOM
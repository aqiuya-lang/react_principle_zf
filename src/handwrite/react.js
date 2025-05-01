function createElement (type, config, children) {
  const props = {...config}

  if (arguments.length > 3) {
    //这里要改变this指向，因为要截取的数据在arguments上面,下面这种写法得到的结果是[]
    // props.children =  [].slice(2)

    // 正确做法,下面两种做法都可以
    // props.children = [].slice.call(arguments, 2)
    props.children = Array.prototype.slice.call(arguments, 2)
  }else{
    props.children = children
  }
  return {
    type,
    props
  }

}

const React = {
  createElement

}
export default React
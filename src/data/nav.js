const nav = [{
  index: '1',
  label: '一级 1',
  children: [{
    index: '1-1',
    label: '二级 1-1',
    children: [{
      index: '1-1-1',
      label: '三级 1-1-1'
    }]
  }]
}, {
  index: '2',
  label: '一级 2',
  children: [{
    index: '2-1',
    label: '二级 2-1',
    children: [{
      index: '2-1-1',
      label: '三级 2-1-1'
    }]
  }, {
    index: '2-2',
    label: '二级 2-2',
    children: [{
      index: '2-2-1',
      label: '三级 2-2-1'
    }]
  }]
}, {
  index: '3',
  label: '一级 3',
  children: [{
    index: '3-1',
    label: '二级 3-1',
    children: [{
      index: '3-1-1',
      label: '三级 3-1-1'
    }]
  }, {
    index: '3-2',
    label: '二级 3-2',
    children: [{
      index: '3-2-1',
      label: '三级 3-2-1'
    }]
  }]
}]

export default nav



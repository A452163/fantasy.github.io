textImage.createTextImage({
  // 必填，配置canvas元素，最终作画在其上完成
  canvas: document.querySelector('canvas'),
  // 可选，配置作画的文本，默认为'6'
  replaceText: '‱',
  // 可选，配置作画半径，该值越大越稀疏，默认为 10
  raduis: 5,
  // 可选，配置是否灰度化，若开启灰度化则会丢失色彩，默认为 false
  isGray: false,
  // 必填，配置作画内容
  source: {
    // 必填，配置画的视频路径
    video: '⟪牢大の小曲⟫.mp4',
    // 选填，配置视频宽度，默认为视频自身宽度
    width: 500,
    // 选填，配置视频高度，默认为视频自身高度
    height: 300,
   


  },
})



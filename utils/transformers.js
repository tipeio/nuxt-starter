import { transform } from '@tipe/transformer'
// plugins to register
export const textPlugin = (block) => {
  if (block.type === 'text') {
    return {
      name: 'text',
      props: {
        block
      },
      component: 'TipeText'
    }
  }
}

export const imagePlugin = (block) => {
  if (block.type === 'image') {
    return {
      name: 'image',
      props: {
        block
      },
      component: 'TipeImage'
    }
  }
}

export const buttonPlugin = (block) => {
  if (block.type === 'button') {
    return {
      name: 'button',
      props: {
        block
      },
      component: 'TipeButton'
    }
  }
}

export const markdownPlugin = (block) => {
  if (block.type === 'markdown') {
    return {
      name: 'markdown',
      props: {
        block
      },
      component: 'TipeMarkdown'
    }
  }
}

export const codePlugin = (block) => {
  if (block.type === 'code') {
    return {
      name: 'code',
      props: {
        block
      },
      component: 'TipeCode'
    }
  }
}

const transformerPlugins = [
  codePlugin,
  markdownPlugin,
  textPlugin,
  imagePlugin,
  buttonPlugin
]

export const mapToComponents = (sections) => {
  return transform(sections, transformerPlugins)
}

<template>
  <component :is="block.result.component" :block="block.result.props.block" />
</template>

<script>
import Image from '~/components/Image'
import Code from '~/components/Code'
import Markdown from '~/components/Markdown'
import Button from '~/components/Button'
import Text from '~/components/Text'

export default {
  name: 'TipeContent',
  components: {
    TipeImage: Image,
    TipeCode: Code,
    TipeMarkdown: Markdown,
    TipeButton: Button,
    TipeText: Text
  },
  props: {
    block: Object
  }
}
</script>

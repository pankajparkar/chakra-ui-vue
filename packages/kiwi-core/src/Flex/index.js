import Box from '../Box'
import { baseProps } from '../config/props'
import { forwardProps } from '../utils'
import Vue from 'vue'

/**
 * Flex is Box with display: flex and comes with helpful style shorthand. It renders a div element.
 */
const Flex = {
  name: 'Flex',
  props: {
    forwardRef: [HTMLElement, Vue.component],
    align: [String, Array],
    justify: [String, Array],
    wrap: [String, Array],
    direction: [String, Array],
    ...baseProps
  },
  render (h) {
    return h(Box, {
      props: {
        display: 'flex',
        flexDirection: this.direction,
        alignItems: this.align,
        justifyContent: this.justify,
        flexWrap: this.wrap,
        ...forwardProps(this.$props)
      }
    }, this.$slots.default)
  }
}

export default Flex

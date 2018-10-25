import Tooltip from 'tooltip.js'

function bind(el, binding) {
    new Tooltip(el, {
        placement: binding.arg || 'top',
        title: binding.value
    })
}

const directive = {
    bind
}

export default (typeof window !== 'undefined' ? directive : {})
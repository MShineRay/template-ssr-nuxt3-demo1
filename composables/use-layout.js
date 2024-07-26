/**
 * 容器布局
 * @returns {Ref<{type: string}>}
 */
export default function () {
  return useState('layout', () => {
    return { type: 'default' }
  })
}

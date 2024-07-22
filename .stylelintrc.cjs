module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recommended-less',
    'stylelint-config-standard-vue',
  ],
  plugins: ['stylelint-order'],
  // 不同格式的文件指定自定义语法
  overrides: [
    {
      files: ['./**/*.(less|css|vue|html)'],
      customSyntax: 'postcss-less',
    },
    {
      files: ['./**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
    '**/*.css',
    '**/*.html',
  ],
  rules: {
    // 官方文档：https://stylelint.io/user-guide/rules
    // TODO: 需手动修复，一期暂时禁用，后续逐步放开，统一风格 begin
    'number-max-precision': null, // TODO: 暂时禁用，后续逐步放开，统一风格 https://stylelint.io/user-guide/rules/number-max-precision/
    'selector-class-pattern': null, // TODO: 暂时禁用，后续逐步放开，统一风格 https://stylelint.io/user-guide/rules/selector-class-pattern/
    'no-empty-source': null, // TODO: 暂时禁用，后续逐步放开，统一风格 https://stylelint.io/user-guide/rules/selector-class-pattern/
    'keyframes-name-pattern': null,
    'no-duplicate-selectors': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'selector-pseudo-element-no-unknown': null,
    'selector-pseudo-class-no-unknown': null,
    'declaration-block-no-duplicate-properties': null,
    'function-no-unknown': null,
    'selector-id-pattern': null,
    'font-family-no-missing-generic-family-keyword': null,
    'property-no-unknown': null,
    'less/no-duplicate-variables': null,
    'less/color-no-invalid-hex': null,
    'custom-property-pattern': null,
    'block-no-empty': null,
    'max-line-length': null,
    'media-feature-name-no-unknown': null,
    'media-feature-range-operator-space-after': null,
    'media-feature-range-operator-space-before': null,
    'media-feature-parentheses-space-inside': null,
    'media-feature-name-no-vendor-prefix': null,
    // TODO: 暂时禁用，后续逐步放开，统一风格 end
    'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    'media-feature-range-notation': 'prefix', // 禁止 将@media (min-width: 1px) and (max-width: 2px) 转成 @media (1px <= width <= 2px)
    // 'selector-pseudo-element-no-unknown': [
    //   true,
    //   {
    //     ignorePseudoElements: ['v-deep']
    //   }
    // ],
    // 'selector-pseudo-class-no-unknown': [
    //   true,
    //   {
    //     ignorePseudoClasses: ['deep']
    //   }
    // ],
    'unit-case': null, // 屏蔽将PX 转成 px
    'property-no-vendor-prefix': null, // 屏蔽 将 -webkit-transform:scale(1) 属性前缀转换成 transform:scale(1)
    'value-no-vendor-prefix': null, // 屏蔽 将 display:-webkit-box 属性值前缀转换成  display:box
    // 'selector-anb-no-unmatchable': false,
    // 指定样式的排序
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'justify-content',
      'align-items',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'font-size',
      'font-family',
      'text-align',
      'text-justify',
      'text-indent',
      'text-overflow',
      'text-decoration',
      'white-space',
      'color',
      'background',
      'background-position',
      'background-repeat',
      'background-size',
      'background-color',
      'background-clip',
      'border',
      'border-style',
      'border-width',
      'border-color',
      'border-top-style',
      'border-top-width',
      'border-top-color',
      'border-right-style',
      'border-right-width',
      'border-right-color',
      'border-bottom-style',
      'border-bottom-width',
      'border-bottom-color',
      'border-left-style',
      'border-left-width',
      'border-left-color',
      'border-radius',
      'opacity',
      'filter',
      'list-style',
      'outline',
      'visibility',
      'box-shadow',
      'text-shadow',
      'resize',
      'transition',
    ],
  },
}

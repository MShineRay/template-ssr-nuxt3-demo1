/**
 * commitlint 是当前使用最为广泛的 git commit 提交信息校验约束工具之一
 * config-conventional是社区整理的常用的commit规范。
 * 链接：https://www.npmjs.com/package/@commitlint/config-conventional
 * 配合：commit-msg hook 使用
 * 使用规则： git commit -am '<type>: <subject>'   # 注意冒号后面有一个空格
 * 使用示例： git commit -am 'style: 缩进改成两空格'
 */
module.exports = {
  extends: ['@commitlint/config-conventional'], // 继承官方的conventional commit规则
  rules: {
    'type-enum': [
      2, // level: error
      'always', // applies always
      [
        'feat', // 新功能
        'fix', // 修复bug
        'docs', // 文档更新
        'style', // 格式（不影响代码运行的变动）
        'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
        'perf', // 性能优化
        'test', // 增加测试
        'build', // 影响构建系统或外部依赖关系的提交
        'ci', // 对CI配置文件和脚本的更改
        'chore', // 其他改动（构建过程或辅助工具的变动）
        'revert' // 代码回滚
      ],
    ],
    'scope-empty': [0, 'never'], // 范围不得为空
    'subject-case': [
      0,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-full-stop': [2, 'never', '.'], // 主题末尾不得有句号
    'subject-empty': [2, 'never'], // 主题不得为空
    'type-empty': [2, 'never'], // 提交信息的类型部分不能为空
    'header-max-length': [2, 'always', 200], // 提交信息首行不得超过200个字符
  },
};

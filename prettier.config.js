import {} from 'prettier'

export default {
  // 每行最大字符数，超过会换行
  printWidth: 120,
  // 缩进空格数
  tabWidth: 2,
  // 使用 tab 还是空格
  useTabs: false,
  // 是否在语句末尾添加分号
  semi: false,
  // 使用单引号（string）
  singleQuote: true,
  // 多行结构尾部逗号的风格： "none" | "es5" | "all"
  trailingComma: 'all',
  // 对象字面量是否加空格：{ foo: bar }
  bracketSpacing: true,
  // JSX > 把 `>` 放在最后一行还是下一行（prettier v2+ 用 bracketSameLine）
  bracketSameLine: false,
  // 箭头函数参数是否总是加圆括号
  arrowParens: 'avoid',
  // 换行符风格
  endOfLine: 'lf',
  // 对 markdown 中段落换行的处理: "always" | "never" | "preserve"
  proseWrap: 'preserve',
  // html 空白敏感度
  htmlWhitespaceSensitivity: 'css',
  // 对属性引号的处理
  quoteProps: 'as-needed',
  // 嵌入语言（如：HTML 中的 CSS/JS）是否格式化
  embeddedLanguageFormatting: 'auto',
}

module.exports = {
  disableEmoji: false,
  list: [
    "docs",
    "study",
    "post",
    "resume",
    "refactor",
    "fix",
    "style",
    "feat",
    "perf",
  ],
  maxMessageLength: 100,
  minMessageLength: 3,
  questions: [
    "type",
    "scope",
    "subject",
    "body",
    "breaking",
    "issues",
    "lerna",
  ],
  scopes: [],
  types: {
    docs: {
      description: "Documentation only changes",
      emoji: "✏️",
      value: "docs",
    },
    feat: {
      description: "A new feature",
      emoji: "🎸",
      value: "feat",
    },
    fix: {
      description: "A bug fix",
      emoji: "🐛",
      value: "fix",
    },
    perf: {
      description: "A code change that improves performance",
      emoji: "⚡️",
      value: "perf",
    },
    refactor: {
      description: "A code change that neither fixes a bug or adds a feature",
      emoji: "💡",
      value: "refactor",
    },
    style: {
      description: "Markup, white-space, formatting, missing semi-colons...",
      emoji: "💄",
      value: "style",
    },
    post: {
      description: "Upload new posting",
      emoji: "📝",
      value: "post",
    },
    resume: {
      description: "Edit resume",
      emoji: "🎓",
      value: "resume",
    },
    study: {
      description: "Do study something",
      emoji: "✍",
      value: "study",
    },
  },
};

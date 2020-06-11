const tasks = arr => arr.join(' && ')
module.exports = {
  'scripts': {
    'pre-commit': tasks([
      "lint-staged",
    ]),
    "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS"
  }
}
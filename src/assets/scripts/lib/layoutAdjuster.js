export default function layoutAdjuster () {
  let layoutRepo = {}
  let windowSize = document.body.clientWidth

  return {
    setLayoutRepo (repo) {
      layoutRepo = repo || layoutRepo
    },
    getLayoutName (repo) {
      this.setLayoutRepo(repo)

      for (let sizeCursor in layoutRepo) {
        if (layoutRepo.hasOwnProperty(sizeCursor)) {
          let range = layoutRepo[sizeCursor]
          if (windowSize >= range.min && (range.max === 0 || windowSize < range.max)) {
            return sizeCursor
          }
        }
      }

      return ''
    },
    getLayoutNameBySize (repo, size) {
      this.setLayoutRepo(repo)

      for (let sizeCursor in layoutRepo) {
        if (layoutRepo.hasOwnProperty(sizeCursor)) {
          let range = layoutRepo[sizeCursor]

          if (size >= range.min && (range.max === 0 || size < range.max)) {
            return sizeCursor
          }
        }
      }

      return layoutRepo.default || ''
    }
  }
}

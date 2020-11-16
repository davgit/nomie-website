export default function (data: any, filename: string) {
  const dataStr =
    'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data))
  const downloadEle = document.createElement('a')
  downloadEle.setAttribute('href', dataStr)
  downloadEle.setAttribute('download', filename)
  downloadEle.click()
}

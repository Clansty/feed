const http = require('http')

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //含最大值，含最小值
}

const foods = ['吃薯片', '喝可乐', '吃海底捞', '吃肯德基', '打 maimai']
const randomPickFood = () => foods[getRandomIntInclusive(0, foods.length - 1)]

const qrView = (src, txt = '请长按识别二维码喵～', extra = '') =>
    `<!DOCTYPE html><html lang="zh"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>请凌莞${randomPickFood()}</title></head><body><div id="main"><p>${txt}</p><center><img src="${src}" alt="二维码"></center></div>${extra}</body></html>`

const server = http.createServer((req, res) => {
    if (req.headers['user-agent'].includes('AlipayClient/')) {
        res.writeHead(301, {
            Location: 'https://qr.alipay.com/tsx153424dmrcleduizfpd5',
        })
        res.end()
        return
    }
    else if (req.headers['user-agent'].includes('AlipayClient/')) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
        })
        res.write(qrView('https://cdn.lwqwq.com/pic/wechat-feed.webp'))
        res.end()
        return
    }
    res.writeHead(200, {
        'Content-Type': 'text/html',
    })
    res.write(qrView(
        'https://cdn.lwqwq.com/pic/web-feed.png',
        '截屏或者长按保存二维码，然后进入<strong style="color:#1677FF">支付宝</strong>或者<strong style="color:#40AA33">微信</strong>扫码哦',
    ))
    res.end()
})

server.listen(2333, '0.0.0.0')

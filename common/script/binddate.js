window.onload = function() {
    var list = new Vue({
        el: '#art-list',
        data: {
            items: [{
                    pic: "BlogPostAssets/images/item1.png",
                    url: "bilibiliPaint.html",
                    title: "BiliBili画友安卓端",
                    art: "JIL",
                    preview: "目前这个应用可以浏览画友网站上的插画，点赞,关注，收藏，拉黑等。使用webview登陆。无奈个人能力有限，美术方面普遍不行，界面很糟糕。感谢Notsfsssf的开源项目，让我从中收益良多。"

                },
                {
                    pic: "BlogPostAssets/images/python.webp",
                    url: "https://mp.weixin.qq.com/s?__biz=MzU2NTkyMDk0OA==&mid=2247483717&idx=1&sn=724385facc0987fc2ea96b723e1b4d6f&chksm=fcb5149ecbc29d88aeed80e6594365c5e04b5c33d559aad19d2856a7b2e2958d5eba26346ff7&scene=126&sessionid=1593525681&key=5d66b78d56dc0c1d1f41c8bf1b108057278a03ad635f3d6ce7a873f12d8c677c4eeeca2ef04c3bfd12d02c40e7c69c6acf1377356592b8a0be2575b41a5d44cf07875a32fe9aacb89c65a39961210aea&ascene=1&uin=NDgwOTYxNTQw&devicetype=Windows+10+x64&version=62090070&lang=zh_CN&exportkey=A7cuM%2F5ySVn4npVJAE7%2Bu%2Fk%3D&pass_ticket=DsCeT%2BBVTBbi19oZwHjUEBuHjFdWfYmqwvfV5lzGZjPTHw0QtESzioOo2UDMfBnx",
                    title: "【python】bs4库中的BeautifulSoup的简单使用",
                    art: "JIL",
                    preview: "最近有人问我会不会bs4，我百度了一下，了解到这是一个解析html的库，平时我做爬虫都是继承使用html.parser中的HTMLparser来解析html的，无奈只能抱歉的回答-不会。知之为知之，不知为不知，是知也。"
                },
                {
                    pic: "BlogPostAssets/images/point24.gif",
                    url: "https://mp.weixin.qq.com/s?__biz=MzU2NTkyMDk0OA==&mid=2247483704&idx=1&sn=e451691833217b2b8b2b9862e96d9b38&chksm=fcb514e3cbc29df5d31014f8b07d339d7a5eaf97cc39e6f8977255637f301d767074174ac620&scene=126&sessionid=1593525681&key=b7b0d71aeeec04a328a2e5d2c06acc9f8abbda46e15cf37ee8d78e31e6236ddc078d5e87a30629ff99bf3c1458947cc172141dfab828d3bf06757bca3d0daa084a2e7020ba68f24c141d8538f55e953c&ascene=1&uin=NDgwOTYxNTQw&devicetype=Windows+10+x64&version=62090070&lang=zh_CN&exportkey=A1uLtRyeU974%2BGVOVac7BC0%3D&pass_ticket=DsCeT%2BBVTBbi19oZwHjUEBuHjFdWfYmqwvfV5lzGZjPTHw0QtESzioOo2UDMfBnx",
                    title: "Python 实现简单的24点游戏",
                    art: "JIL",
                    preview: "游戏规则：给出4个1-10的数，通过加减乘除运算得到24.思路：1，通过使用循环列出4个数所有24种排列方式；2，将3个运算符插入到每两个数之间；3，计算三个运算符的两边的数，并将数保存用于运算；4，4个数变3个数，3个数变两个数，两个数变1个数；5，注意除号运算。"
                },
                {
                    pic: "BlogPostAssets/images/bh.webp",
                    url: "https://mp.weixin.qq.com/s?__biz=MzU2NTkyMDk0OA==&mid=2247483699&idx=1&sn=5e16381a4b1ff5c41efee5a613bda7d4&chksm=fcb514e8cbc29dfe6de96726b9da99d4aead4c62b31c83b1b4a5b28bf1100345117324ec4433&scene=126&sessionid=1593525681&key=5d66b78d56dc0c1d9d57a4c9acc6e923811925b6974685da96f643898546f5b1888daffc807851933afc49d78a8476783d35326abf2aacfce917785a27e2db33460e66598d639d2894ac528be79d6987&ascene=1&uin=NDgwOTYxNTQw&devicetype=Windows+10+x64&version=62090070&lang=zh_CN&exportkey=A%2BCxlHpXLxu8esyVvK6uytE%3D&pass_ticket=DsCeT%2BBVTBbi19oZwHjUEBuHjFdWfYmqwvfV5lzGZjPTHw0QtESzioOo2UDMfBnx",
                    title: "Python爬虫-爬取b站画友图片",
                    art: "JIL",
                    preview: "本次教程使用的编辑器是PyCharm"
                }
            ]
        }
    })
}
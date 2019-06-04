/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/03/20/JavaScriptBasicNotes/index.html","3088553f2921895e2fe4c7eada4e72fc"],["/2017/06/03/StringAndArrMethods/index.html","e2cc844ba3a1a1795db90668b628f257"],["/2017/09/20/VueParamsTransmit/index.html","d53b959a4cc295bba6d1285e6a904ca0"],["/2017/12/21/VariableObject/index.html","21f95705c84958f0b7659fac0519496b"],["/2018/03/14/SortArray/index.html","e36a744ebf4050cc5daec5f0d1f56eb5"],["/2018/03/18/Music-And-Video/index.html","86f037aa350483b1d801914407ff7b28"],["/2019/02/05/ShareMV/index.html","2f31065ba2b3674df677cf92939ce7f9"],["/2019/03/19/addArchivesAnimate/index.html","13883d8d5075b5cb6900cc6fa03f4752"],["/2019/06/01/UseJSGetImgWidthAndHeight/index.html","c45ccdc8332f3064436712d61c872b28"],["/about/index.html","20eeb48d8f3b3824a57fa9cd014d9327"],["/archives/index.html","ac1b8adddb43ccc99e70febdda0c5f29"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/categories/Music/index.html","16c7fa8f3cc6e9e42b92e020693742b9"],["/categories/Summary/index.html","03da723a50c9d070b1ab3f1e3b1c69c7"],["/categories/computer/hexo/index.html","8737abcb188bc835675f40febc3cda81"],["/categories/computer/hexo/next/index.html","4612dd6562f79ce87dcf702446896e8b"],["/categories/computer/index.html","ec5b8ff15192494b513211c795af00d6"],["/categories/index.html","6560b76c1c5813d78b5a277f02b5a801"],["/categories/technology/Summary/index.html","fdad050c7ecad1027a254e61e8ce7f42"],["/categories/technology/index.html","ca75339be4a61ee35d512389be1a2787"],["/css/main.css","6e8811aaf4248479303a2ee1341c9fa9"],["/fonts/LinBiolinum_RBah.eot","939f0717f8a5b244523d6ec7b06fe04d"],["/fonts/LinBiolinum_RBah.ttf","105c076bf1f5d6c08445a12e1d4002a8"],["/fonts/LinBiolinum_RBah.woff","fbfcc6f878bfec415d187b77335345b1"],["/fonts/LinBiolinum_RIah.eot","22538ac76b40be0b1fca7e83af2b9584"],["/fonts/LinBiolinum_RIah.ttf","501d7989a37732d94b022a3bce488282"],["/fonts/LinBiolinum_RIah.woff","2d0d554fadf1fb40959ae2621ee16211"],["/fonts/LinBiolinum_Rah.eot","86c737aae11823029e2f37ada684dd6f"],["/fonts/LinBiolinum_Rah.ttf","13aef2ccc4e45b7b8f440f0fdb7d3fbc"],["/fonts/LinBiolinum_Rah.woff","19c1f51126b18aee21cb03ca88ed894e"],["/fonts/chinese-zodiac.eot","732f7594f7de8a566ae31ff704dd3e16"],["/fonts/chinese-zodiac.woff","de6297d6703fdc83798000ee1bff183d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","35c517722f64a078e4f60afe32e91872"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","d8f0da4f17ec600e3dae8959e55e05b5"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-16x16.png","ccb5c409e43c12ec9a0d4808256253d4"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon-32x32.png","25195af9ecbb80f551733deb4d2cc8a7"],["/images/headImg.jpg","517d7511c88ed70579a6063945ee83a5"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","07fc382165be0e767c0fa6dccd4d271f"],["/index.html","7023607be0c823dcd8c91b49c4e2f1b2"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/src/motion.js","d6334e4bce02166e753a886452aa977a"],["/js/src/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","ff0d7db2ae445ecbe05873c54f365e8a"],["/lib/fancybox/README.html","1571296a04366a3dc3fe89ae813296b4"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/needsharebutton/README.html","d8635a2986265491d7702c5db6d0b34b"],["/lib/needsharebutton/needsharebutton.css","839f806cf996f87b47ca7b8a5a0bfa8f"],["/lib/needsharebutton/needsharebutton.js","1595f4ed0515d2e58b4214b255120304"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/sentences/index.css","ceff2f225e904050bdf96f5235e9d08d"],["/sentences/index.html","cbcff8cce05f62863f425a16e7b81857"],["/sentences/index.js","67d2ea5fff528953d9991a6e4571841b"],["/sentences/lib/fancybox/README.html","bea0046824851e16a3cd21ec4d0f23bb"],["/sentences/lib/fancybox/source/jquery.fancybox.css","34c11dcd8df2c85bb81fb5f233340b5e"],["/sentences/lib/fancybox/source/jquery.fancybox.js","dded45c38e173b48a63e0564ce9d8844"],["/sentences/lib/fancybox/source/jquery.fancybox.min.css","a9926368b640a4ad5dec2a8edb1a8d1d"],["/sentences/lib/fancybox/source/jquery.fancybox.min.js","1fc6ecaf7ea433969308380b40808fe8"],["/sentences/lib/fancybox/source/jquery.fancybox.pack.js","dded45c38e173b48a63e0564ce9d8844"],["/sentences/lib/fastclick/README.html","e1189ddaddb3fe1e26c98679648e4271"],["/sentences/lib/fastclick/lib/fastclick.js","31ba53f9c99d2022f69030e1add2169e"],["/sentences/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/sentences/lib/font-awesome/css/font-awesome.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/sentences/lib/font-awesome/css/font-awesome.min.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/sentences/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/sentences/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/sentences/lib/jquery/index.js","1bd74a5d0a1ee62cbb293717d857b307"],["/sentences/lib/jquery_lazyload/README.html","8e8a9cb4fc4acb62ac2082618e2d1289"],["/sentences/lib/jquery_lazyload/jquery.lazyload.js","58b4f141ec996ae57083ff5dda5c3abf"],["/sentences/lib/jquery_lazyload/jquery.scrollstop.js","463e4d7048ed521fc0373ca1d24cd62a"],["/sentences/lib/moment/moment.min.js","8c2def395d7e125976ea5faf56596aa9"],["/sentences/lib/needsharebutton/README.html","f33c87b8714fc22c31e8f5475d7dbae3"],["/sentences/lib/needsharebutton/needsharebutton.css","31c77e28bd09ca63a7f107a3baae287c"],["/sentences/lib/needsharebutton/needsharebutton.js","4903c9496cfce63c396e09389d840783"],["/sentences/lib/sentence/index.js","e605a19924b84f29f4559ea71418e22d"],["/sentences/lib/velocity/velocity.js","c3c18f80cf6848b2b6eb30c7a0b6ab9b"],["/sentences/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/sentences/lib/velocity/velocity.ui.js","02ab9cb4a1942467492b15a6eb692975"],["/sentences/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/sentences/lib/vue/vue.js","de34af72bfbc15dc24edec2a4ecea388"],["/sw-register.js","86ef5c17bbe9b847f52c2af634975d7e"],["/tags/Array/index.html","194bca19e88c8c109ede547c05d0f2f0"],["/tags/Hexo/index.html","c7fe2ec3fe500105374542fd0cc7ac97"],["/tags/Img/index.html","278df690923f6326d3c21799ebc0a31c"],["/tags/JS/index.html","30807f4e0913b1aba69d1217766d0975"],["/tags/JavaScript/index.html","4593c78dbb2b795c0cb4225abfc53960"],["/tags/Methods/index.html","dcafe8829fb0fea3c3bbb54c8401e7d0"],["/tags/Motion/index.html","be22bda6d4ccf16e615019bd91174ef5"],["/tags/Music/index.html","fb4091d7fd94a29ca37b214e72fe2d5e"],["/tags/Next/index.html","69c15ab06d6f0958c117f2fa6e982e4e"],["/tags/String/index.html","61b85db01364a34e0cd5ae5c6b096b6a"],["/tags/Video/index.html","49fa9dc5a78ff1140ff05a196f47d6c8"],["/tags/Vue/index.html","6e52b93ff94b126f43bdf709ef2b3ef3"],["/tags/index.html","2a93a1c9c91b5dee64b17a3449e1fdf3"],["/tags/传参/index.html","439b33a76ee500f4ee7331660270e775"],["/tags/动画/index.html","c0e187ae1ae055339b17c9f2c9e0e9ad"],["/tags/博客/index.html","83aa068a4279ff5866e8a93cc6172905"],["/tags/变量对象/index.html","1567aefd20959e173f951d97eb02d633"],["/tags/基础/index.html","2ccdf405d82e16406dacd492065a59bb"],["/tags/数组/index.html","da3372f1b137853168f0f76e840ee979"],["/tags/路由/index.html","7fbb756562c467f2b1967eb55ec2e41f"],["/top/index.html","c4457bbac9c0024ebb6ba85c073c4b48"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */

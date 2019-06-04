/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/03/20/JavaScriptBasicNotes/index.html","d97429ad50f672bcfd5124fbe2935c7d"],["/2017/06/03/StringAndArrMethods/index.html","abe18aa4d83f8a853b83e56cdf2b0b19"],["/2017/09/20/VueParamsTransmit/index.html","24e87ecc2d9588699fcf803b9fd6e5d5"],["/2017/12/21/VariableObject/index.html","b049072fed1aa798d8684bf12302dbd5"],["/2018/03/14/SortArray/index.html","0f93afb26e0852cf95e7a795c7d96c53"],["/2018/03/18/Music-And-Video/index.html","b16e775d50ac834a3b82fa8ca3b189a9"],["/2019/02/05/ShareMV/index.html","518e17001f97b1b4bd0e6e9732039212"],["/2019/03/19/addArchivesAnimate/index.html","9727851d0db90c87117dbddc1fe3bfbf"],["/2019/06/01/UseJSGetImgWidthAndHeight/index.html","081a8bd808cc22790114cffac9343447"],["/about/index.html","8ee50f9600b5c82745a168ac2ab0affd"],["/archives/index.html","1984fcb45174dab29610b49d5ccdb22a"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/categories/Music/index.html","a78c83cd2d159fba1018ee83df5b0e9d"],["/categories/Summary/index.html","fcbabb01af83bc90a502587cc7b30802"],["/categories/computer/hexo/index.html","036b0291272c6d1c93e19b04b075336c"],["/categories/computer/hexo/next/index.html","eb89827b2f0eebd7062284d9b94871d7"],["/categories/computer/index.html","dce7af5cadc0e2363bb040ed8e4f2dbc"],["/categories/index.html","e696c6047364bd10c953f9bb38875e6e"],["/categories/technology/Summary/index.html","8b238bbece40f8b60c733d5f3a3a4923"],["/categories/technology/index.html","25d02ecbe60ae1e546135e31a17a2069"],["/css/main.css","ed14559c93628305be6556c59e8f68cc"],["/fonts/LinBiolinum_RBah.eot","939f0717f8a5b244523d6ec7b06fe04d"],["/fonts/LinBiolinum_RBah.ttf","105c076bf1f5d6c08445a12e1d4002a8"],["/fonts/LinBiolinum_RBah.woff","fbfcc6f878bfec415d187b77335345b1"],["/fonts/LinBiolinum_RIah.eot","22538ac76b40be0b1fca7e83af2b9584"],["/fonts/LinBiolinum_RIah.ttf","501d7989a37732d94b022a3bce488282"],["/fonts/LinBiolinum_RIah.woff","2d0d554fadf1fb40959ae2621ee16211"],["/fonts/LinBiolinum_Rah.eot","86c737aae11823029e2f37ada684dd6f"],["/fonts/LinBiolinum_Rah.ttf","13aef2ccc4e45b7b8f440f0fdb7d3fbc"],["/fonts/LinBiolinum_Rah.woff","19c1f51126b18aee21cb03ca88ed894e"],["/fonts/chinese-zodiac.eot","732f7594f7de8a566ae31ff704dd3e16"],["/fonts/chinese-zodiac.woff","de6297d6703fdc83798000ee1bff183d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","35c517722f64a078e4f60afe32e91872"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","d8f0da4f17ec600e3dae8959e55e05b5"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-16x16.png","ccb5c409e43c12ec9a0d4808256253d4"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon-32x32.png","25195af9ecbb80f551733deb4d2cc8a7"],["/images/headImg.jpg","517d7511c88ed70579a6063945ee83a5"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.jpg","07fc382165be0e767c0fa6dccd4d271f"],["/index.html","a651ab6735269bbf2c867a9f6d57c651"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/src/motion.js","d6334e4bce02166e753a886452aa977a"],["/js/src/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","ff0d7db2ae445ecbe05873c54f365e8a"],["/lib/fancybox/README.html","1571296a04366a3dc3fe89ae813296b4"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/needsharebutton/README.html","ee40e013c72097b3ed169820037a2f5f"],["/lib/needsharebutton/needsharebutton.css","839f806cf996f87b47ca7b8a5a0bfa8f"],["/lib/needsharebutton/needsharebutton.js","1595f4ed0515d2e58b4214b255120304"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/sentences/index.css","ceff2f225e904050bdf96f5235e9d08d"],["/sentences/index.html","cbcff8cce05f62863f425a16e7b81857"],["/sentences/index.js","67d2ea5fff528953d9991a6e4571841b"],["/sentences/lib/fancybox/README.html","bea0046824851e16a3cd21ec4d0f23bb"],["/sentences/lib/fancybox/source/jquery.fancybox.css","34c11dcd8df2c85bb81fb5f233340b5e"],["/sentences/lib/fancybox/source/jquery.fancybox.js","dded45c38e173b48a63e0564ce9d8844"],["/sentences/lib/fancybox/source/jquery.fancybox.min.css","a9926368b640a4ad5dec2a8edb1a8d1d"],["/sentences/lib/fancybox/source/jquery.fancybox.min.js","1fc6ecaf7ea433969308380b40808fe8"],["/sentences/lib/fancybox/source/jquery.fancybox.pack.js","dded45c38e173b48a63e0564ce9d8844"],["/sentences/lib/fastclick/README.html","e1189ddaddb3fe1e26c98679648e4271"],["/sentences/lib/fastclick/lib/fastclick.js","31ba53f9c99d2022f69030e1add2169e"],["/sentences/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/sentences/lib/font-awesome/css/font-awesome.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/sentences/lib/font-awesome/css/font-awesome.min.css","2cc3ab6c0c8b8b7103a3a8673ec9eb56"],["/sentences/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/sentences/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/sentences/lib/jquery/index.js","1bd74a5d0a1ee62cbb293717d857b307"],["/sentences/lib/jquery_lazyload/README.html","8e8a9cb4fc4acb62ac2082618e2d1289"],["/sentences/lib/jquery_lazyload/jquery.lazyload.js","58b4f141ec996ae57083ff5dda5c3abf"],["/sentences/lib/jquery_lazyload/jquery.scrollstop.js","463e4d7048ed521fc0373ca1d24cd62a"],["/sentences/lib/moment/moment.min.js","8c2def395d7e125976ea5faf56596aa9"],["/sentences/lib/needsharebutton/README.html","f33c87b8714fc22c31e8f5475d7dbae3"],["/sentences/lib/needsharebutton/needsharebutton.css","31c77e28bd09ca63a7f107a3baae287c"],["/sentences/lib/needsharebutton/needsharebutton.js","4903c9496cfce63c396e09389d840783"],["/sentences/lib/sentence/index.js","e605a19924b84f29f4559ea71418e22d"],["/sentences/lib/velocity/velocity.js","c3c18f80cf6848b2b6eb30c7a0b6ab9b"],["/sentences/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/sentences/lib/velocity/velocity.ui.js","02ab9cb4a1942467492b15a6eb692975"],["/sentences/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/sentences/lib/vue/vue.js","de34af72bfbc15dc24edec2a4ecea388"],["/sw-register.js","c9a10e296733644b2d22c01da4af239f"],["/tags/Array/index.html","01186ca3364fb1ffb459e643847785c4"],["/tags/Hexo/index.html","1e54bd8a4f1a3897077d4b0bba04bfef"],["/tags/Img/index.html","0edae433f62a1b7136e17fb7a5dd7144"],["/tags/JS/index.html","d037c1e2aebcd749ab58e1b40bd9f19b"],["/tags/JavaScript/index.html","c8b49cd85f6587578ded0fe827b57df2"],["/tags/Methods/index.html","916d4445711a2b858281238f87bb42c8"],["/tags/Motion/index.html","650b8728da793e5e37eef58137f101c7"],["/tags/Music/index.html","e6b72409b8816ab55e2a95603ee4a95c"],["/tags/Next/index.html","659aa34a0c9714a214530c375cb4699d"],["/tags/String/index.html","927159231511d20c50610d11253992ec"],["/tags/Video/index.html","3cb8d08ca82e7322065e448c2e722bda"],["/tags/Vue/index.html","137bf34a09fe3b7ab167f0c92a7c9b4f"],["/tags/index.html","7512eba3428ffd1f66ae24ccfe7bd2b9"],["/tags/传参/index.html","a935d01b06d241afe2ecac6fe2ead246"],["/tags/动画/index.html","9a2323a609f06844b5743311343938c4"],["/tags/博客/index.html","0e7ac50d7cc552257f657bbc71f765bc"],["/tags/变量对象/index.html","cc1546ff6b4dc9ad49fb847d5a2b210e"],["/tags/基础/index.html","66bc49f3bbaeaa7c51e26fbf25917bcb"],["/tags/数组/index.html","8b290248f7c7eb962a08dffa937ac10b"],["/tags/路由/index.html","90ebc5d5921cc7ac0c821d28b80b601b"],["/top/index.html","cc8e3aec4dac20c7505ada0f0dc86e31"]];
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

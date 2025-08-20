;
;
;
;
var livePlayerVer = '2025.08.08.01', livePlayerObjs = {};
livePlayerObjs.liveRetryTimeout = 25;
livePlayerObjs.fingerprintJsIsStarted = false;
var isFlashPlayer = true, is0HomepagePlayer = false, isLowDelayLivePlayer = true, liveConvivaClient = null, liveConvivaPlayerStateManager = null, isUseConvivaMonitor = false, isConvivaApiLoaded = false, isUseWsMonitor = false, isWsApiLoaded = false, systemFactory = null, isUseAliMonitor = true, isAliApiLoaded = false, isAliCreateTime = 0, isLiveControlsLoaded = false, currentLiveTimeData = null, isLiveIosSafariDrm = false, CNTVH5PlayerModule, liveAudio, moduleInitialized = false, html5VideoData = '', html5LiveYumList = null, isPlayerHttpsMode = true, isLiveBarrageJsLoaded = false, isLiveEnableP2p = false, isAndroidWeixin = null, isMobleUseBrowserUi = false;
if (isIPad()) {
}
function createLivePlayer(_0x5d08a8, _0x2ff46a) {
    var _0x121ebb = document.getElementById(_0x5d08a8.divId);
    location.href.indexOf('https://') !== -1 && (_0x5d08a8.isHttps = 'true', livePlayerObjs.isHttps = 'true');
    _0x5d08a8.isHttps === 'true' && (livePlayerObjs.isHttps = 'true');
    _0x5d08a8.playerType === 'live_panda' && (_0x5d08a8.playerType = 'live', isIPad() && (_0x5d08a8.playerType = 'hw'), _0x5d08a8.ui = 'ipanda');
    _0x5d08a8.w += '';
    _0x5d08a8.h += '';
    !isTimeshift(_0x5d08a8) ? (livePlayerObjs[_0x5d08a8.divId] && typeof livePlayerObjs[_0x5d08a8.divId].video !== 'undefined' && livePlayerObjs[_0x5d08a8.divId].video && clearInterval(livePlayerObjs[_0x5d08a8.divId].video.playedTimer), livePlayerObjs[_0x5d08a8.divId] = {}, livePlayerObjs[_0x5d08a8.divId] = _0x5d08a8) : (_0x5d08a8.st += '', _0x5d08a8.st = transformDateToStamp(_0x5d08a8.st), !livePlayerObjs[_0x5d08a8.divId] && (livePlayerObjs[_0x5d08a8.divId] = {}), livePlayerObjs[_0x5d08a8.divId].vdn && (_0x5d08a8.vdn = livePlayerObjs[_0x5d08a8.divId].vdn), livePlayerObjs[_0x5d08a8.divId].enablevip && (_0x5d08a8.enablevip = livePlayerObjs[_0x5d08a8.divId].enablevip), livePlayerObjs[_0x5d08a8.divId].isVip && (_0x5d08a8.isVip = livePlayerObjs[_0x5d08a8.divId].isVip), livePlayerObjs[_0x5d08a8.divId].islogin && (_0x5d08a8.islogin = livePlayerObjs[_0x5d08a8.divId].islogin));
    isIPad() && _0x5d08a8.playerType === 'liveback' && !_0x5d08a8.st && (_0x5d08a8.playerType = 'live');
    _0x5d08a8.w.indexOf('%') > 0 ? _0x121ebb.style.width = _0x5d08a8.w : _0x121ebb.style.width = _0x5d08a8.w + 'px';
    _0x5d08a8.h.indexOf('%') > 0 ? _0x121ebb.style.height = _0x5d08a8.h : _0x121ebb.style.height = _0x5d08a8.h + 'px';
    _0x5d08a8.language !== 'en' && (_0x5d08a8.language = 'default');
    liveLanguageMsg.language = _0x5d08a8.language;
    liveLanguageMsg.ui = liveLanguageMsg[_0x5d08a8.language].ui;
    liveLanguageMsg.errorMsg = liveLanguageMsg[_0x5d08a8.language].errorMsg;
    if (!isDrmLegalDomainUrl()) {
        showLivePlayerMsg(_0x5d08a8, '瀵逛笉璧凤紝鐢变簬鐗堟潈鍘熷洜锛岃\uE74B棰戞棤娉曟挱鏀\uFFFD');
        return;
    }
    if (!_0x5d08a8.t) {
        showLivePlayerMsg(_0x5d08a8, '璇ヨ\uE74B棰戜笉瀛樺湪锛岃\uE1EC瑙傜湅鍏朵粬瑙嗛\uE576');
        return;
    }
    _0x2ff46a === true && (_0x5d08a8.vdnRetryNum = 0, livePlayerObjs[_0x5d08a8.divId].vdnRetryNum = 0);
    var _0x2627c4 = '';
    !getCookie_vdn('Fingerprint') && !livePlayerObjs.fingerprintJsIsStarted ? getLivefingerprint2() : _0x2627c4 = getCookie_vdn('Fingerprint');
    livePlayerObjs.fingerprintJsIsStarted = true;
    if (isIPad() || isLiveHlsJsSupported() && isWasmSupported() && navigator.userAgent.indexOf('rv:11') === -1 && navigator.userAgent.indexOf('MSIE') === -1) {
        !html5LiveYumList && (html5LiveYumList = {
            'yuv': '',
            'yuvDOM': ''
        });
        livePlayerObjs[_0x5d08a8.divId] && (clearInterval(livePlayerObjs[_0x5d08a8.divId].liveTimer), clearInterval(livePlayerObjs[_0x5d08a8.divId].timeScopeTimer));
        if (_0x5d08a8.vdnRetryNum && _0x5d08a8.vdnRetryNum - 2 > 0) {
            livePlayerObjs[_0x5d08a8.divId].isNewVdn && _0x5d08a8.vdnRetryNum == 3 ? getLiveStaticVideoMsg(_0x5d08a8) : showLivePlayerErrorMsg(_0x5d08a8);
            return;
        }
        if (isTimeshift(_0x5d08a8) && !livePlayerObjs[_0x5d08a8.divId].getVipResolution && typeof createLiveHls !== 'undefined' && !_0x5d08a8.vdnRetryNum) {
            if (!livePlayerObjs[_0x5d08a8.divId].adCallsIsPlayed) {
                return;
            }
            if (livePlayerObjs[_0x5d08a8.divId].start && _0x5d08a8.st >= livePlayerObjs[_0x5d08a8.divId].start && _0x5d08a8.st < livePlayerObjs[_0x5d08a8.divId].start + 86400) {
                var _0x133438 = document.getElementById('control_bar_' + _0x5d08a8.divId);
                if (_0x133438) {
                    var _0x2e84ad = document.getElementById('timeshiftbtn_' + _0x5d08a8.divId);
                    if (_0x2e84ad) {
                        var _0x174b60 = _0x2e84ad.getAttribute('isOn');
                        _0x174b60 === 'false' && LiveTimeshiftSwitch.prototype.textBtnByClick(_0x5d08a8);
                    }
                    LiveControlsBar.prototype.controlBarShowOrHide('show', _0x5d08a8.divId, false);
                }
                LiveTimeshiftSwitch.prototype.playTimeshiftFromPos(_0x5d08a8, _0x5d08a8.st);
            } else {
                livePlayerObjs[_0x5d08a8.divId].endTime = _0x5d08a8.st;
                clearInterval(livePlayerObjs[_0x5d08a8.divId].liveTimer);
                createLiveHls(_0x5d08a8);
            }
            return;
        }
        livePlayerObjs[_0x5d08a8.divId].getVipResolution = false;
        isAndroidWeixin && (livePlayerObjs[_0x5d08a8.divId].isNocavas = false);
        _0x5d08a8.playerType === 'liveback' && _0x5d08a8.st && _0x5d08a8.et && (_0x5d08a8.st += '', _0x5d08a8.start = transformDateToStamp(_0x5d08a8.st), _0x5d08a8.et += '', _0x5d08a8.end = transformDateToStamp(_0x5d08a8.et));
        livePlayerObjs[_0x5d08a8.divId] && (livePlayerObjs[_0x5d08a8.divId].video && livePlayerObjs[_0x5d08a8.divId].video.hls || livePlayerObjs[_0x5d08a8.divId].adCallsVideo) && destroyH5LiveHls(_0x5d08a8);
        livePlayerObjs[_0x5d08a8.divId] && livePlayerObjs[_0x5d08a8.divId].video && clearInterval(livePlayerObjs[_0x5d08a8.divId].video.playedTimer);
        typeof goldlog != 'undefined' && goldlog['h5player_' + _0x5d08a8.divId] && typeof goldlog['h5player_' + _0x5d08a8.divId].heartbeatStarted !== 'undefined' && (goldlog['h5player_' + _0x5d08a8.divId].heartbeatStarted = false);
        (_0x5d08a8.playerType === 'small' || _0x5d08a8.playerType === 'live_homepage') && (_0x5d08a8.isMuted = true, document.getElementById('player_sound_btn_' + _0x5d08a8.divId) && document.getElementById('player_sound_btn_' + _0x5d08a8.divId).getAttribute('isMute') === 'false' && (_0x5d08a8.isMuted = false));
        if (document.getElementById('h5player_' + _0x5d08a8.divId)) {
            removeH5LivePlayerEvents(_0x5d08a8.divId);
            if (isAndroidWeixin && isCanvasSupported(_0x5d08a8.divId)) {
                try {
                    document.body.removeChild(document.getElementById('h5player_' + _0x5d08a8.divId));
                } catch (_0x49a3fb) {
                    _0x121ebb.removeChild(document.getElementById('h5player_' + _0x5d08a8.divId));
                }
                clearInterval(livePlayerObjs[_0x5d08a8.divId].canvasDrawTimer);
            } else {
                _0x121ebb.removeChild(document.getElementById('h5player_' + _0x5d08a8.divId));
            }
            clearInterval(livePlayerObjs[_0x5d08a8.divId].canvasDrawTimer);
        }
        _0x121ebb.innerHTML = '';
        livePlayerObjs[_0x5d08a8.divId] = {};
        livePlayerObjs[_0x5d08a8.divId] = _0x5d08a8;
        livePlayerObjs[_0x5d08a8.divId].videoUrlCount = 2;
        livePlayerObjs[_0x5d08a8.divId].timeshiftUrlCount = 2;
        livePlayerObjs[_0x5d08a8.divId].video = {};
        livePlayerObjs[_0x5d08a8.divId].adCallsVideo = {};
        isUseNewLiveVdn(_0x5d08a8);
        (_0x5d08a8.playerType === 'live' || _0x5d08a8.playerType === 'hw') && (_0x5d08a8.others === 'flv' || typeof _0x5d08a8.others === 'string' && _0x5d08a8.others.indexOf('.flv') > 0) && isLowDelayLivePlayer && (livePlayerObjs[_0x5d08a8.divId].streamType = 'flv');
        var _0x21c267 = 'cctv_html5player_bg_16X9.png';
        _0x5d08a8.h / _0x5d08a8.w > 1 && (_0x21c267 = 'cctv_html5player_bg_9X16.png');
        livePlayerObjs[_0x5d08a8.divId].isLive = true;
        livePlayerObjs[_0x5d08a8.divId].isOldH5player = false;
        var _0x121ebb = document.getElementById(_0x5d08a8.divId);
        _0x121ebb.style.zIndex = '2';
        _0x121ebb.style.overflow = 'hidden';
        var _0x2465d1 = 'http://js.player.cntv.cn/creator/html5player_analysis_lib.js', _0x28a1ad = 'http://js.player.cntv.cn/creator/live.worker.js', _0x153d48 = 'https://player.cntv.cn/html5Player/images/' + _0x21c267;
        livePlayerObjs[_0x5d08a8.divId].adCalls = '';
        typeof live_Ad_Calls === 'string' && live_Ad_Calls.length > 2 && (livePlayerObjs[_0x5d08a8.divId].adCalls = decodeURIComponent(live_Ad_Calls), livePlayerObjs[_0x5d08a8.divId].adCalls.indexOf('?') > 0 ? livePlayerObjs[_0x5d08a8.divId].adCalls += '&cb=parseLiveAdCallsDataFromApi' : livePlayerObjs[_0x5d08a8.divId].adCalls += '?cb=parseLiveAdCallsDataFromApi', livePlayerObjs[_0x5d08a8.divId].adCalls.indexOf('op=7') === -1 && (livePlayerObjs[_0x5d08a8.divId].adCalls = livePlayerObjs[_0x5d08a8.divId].adCalls.replace(/(op=[0-9]*)/, 'op=7')), isIPad() && (_0x5d08a8.vdnRetryNum !== undefined && _0x5d08a8.vdnRetryNum - 0 < 1 && !isAndroidWeixin && (_0x5d08a8.isAutoPlay = 'false'), (/(huawei)/i.test(navigator.userAgent) || /(ucbrowser)/i.test(navigator.userAgent) && /(sm-)/i.test(navigator.userAgent)) && !isNewH5LivePlayer(_0x5d08a8) && (_0x5d08a8.isAutoPlay = 'true')));
        livePlayerObjs[_0x5d08a8.divId].adPause = '';
        typeof live_Ad_Pause === 'string' && live_Ad_Pause.length > 2 && (livePlayerObjs[_0x5d08a8.divId].adPause = decodeURIComponent(live_Ad_Pause), livePlayerObjs[_0x5d08a8.divId].adPause.indexOf('?') > 0 ? livePlayerObjs[_0x5d08a8.divId].adPause += '' : livePlayerObjs[_0x5d08a8.divId].adPause += '', livePlayerObjs[_0x5d08a8.divId].adPause.indexOf('op=7') === -1 && (livePlayerObjs[_0x5d08a8.divId].adPause = livePlayerObjs[_0x5d08a8.divId].adPause.replace(/(op=[0-9]*)/, 'op=7')));
        livePlayerObjs[_0x5d08a8.divId].adBanner = '';
        typeof live_Ad_Banner === 'string' && live_Ad_Banner.length > 2 && (livePlayerObjs[_0x5d08a8.divId].adBanner = decodeURIComponent(live_Ad_Banner), livePlayerObjs[_0x5d08a8.divId].adBanner.indexOf('?') > 0 ? livePlayerObjs[_0x5d08a8.divId].adBanner += '&cb=parseLiveAdBannerDataFromApi' : livePlayerObjs[_0x5d08a8.divId].adBanner += '?cb=parseLiveAdBannerDataFromApi', livePlayerObjs[_0x5d08a8.divId].adBanner.indexOf('op=7') === -1 && (livePlayerObjs[_0x5d08a8.divId].adBanner = livePlayerObjs[_0x5d08a8.divId].adBanner.replace(/(op=[0-9]*)/, 'op=7')));
        _0x5d08a8.isHttps === 'true' && (_0x153d48 = _0x153d48.replace('http://', 'https://'), livePlayerObjs[_0x5d08a8.divId].adCalls && (livePlayerObjs[_0x5d08a8.divId].adCalls = livePlayerObjs[_0x5d08a8.divId].adCalls.replace('http://', 'https://')), livePlayerObjs[_0x5d08a8.divId].adPause && (livePlayerObjs[_0x5d08a8.divId].adPause = livePlayerObjs[_0x5d08a8.divId].adPause.replace('http://', 'https://')), livePlayerObjs[_0x5d08a8.divId].adBanner && (livePlayerObjs[_0x5d08a8.divId].adBanner = livePlayerObjs[_0x5d08a8.divId].adBanner.replace('http://', 'https://')), _0x2465d1 = 'https://js.player.cntv.cn/creator/html5player_analysis_lib.js', _0x28a1ad = 'https://js.player.cntv.cn/creator/live.worker.js');
        _0x5d08a8.audioType === '5.1' && (_0x28a1ad = '//js.player.cntv.cn/creator/h5_audio.worker');
        isIPad() ? (_0x121ebb.style.backgroundImage = 'url(\'' + _0x153d48 + '\')', _0x121ebb.style.backgroundSize = '100% 100%', _0x121ebb.style.backgroundRepeat = 'no-repeat', _0x121ebb.style.backgroundPosition = '0px 0px', _0x121ebb.style.margin = '0 auto') : _0x121ebb.style.backgroundColor = '#000';
        (_0x5d08a8.playerType === 'liveback' || livePlayerObjs[_0x5d08a8.divId].adCallsIsPlayed) && (livePlayerObjs[_0x5d08a8.divId].adCalls = '');
        var _0x25cf10 = new Date().getTime().toString().slice(0, 10), _0x4c9e01 = 'B4B51E8523157ED8D17ADB76041BCD09', _0x53629d = '2049', _0x226d93 = '47899B86370B879139C08EA3B5E88267', _0x297afc = '', _0x1287fb = '', _0x2627c4 = '';
        !getCookie_vdn('Fingerprint') && !livePlayerObjs.fingerprintJsIsStarted ? getLivefingerprint2() : _0x1287fb = getCookie_vdn('Fingerprint');
        livePlayerObjs[_0x5d08a8.divId].isDrm = true;
        livePlayerObjs[_0x5d08a8.divId].isBackupCdn = false;
        var _0x24ecee = document.getElementsByTagName('head')[0], _0x48ab8c = createElementByType('script', 'hdsJsLoader', 'absolute', '0px', '0px', '0px', '0px'), _0x46ab2c = 'http://';
        _0x5d08a8.isHttps === 'true' && (_0x46ab2c = 'https://');
        if (livePlayerObjs[_0x5d08a8.divId].isNewVdn) {
            var _0x2c6176 = new Date().getTime();
            _0x297afc = 'a4220a71b31746908fa3e7fdd7a6852a';
            _0x53629d = '1';
            isAliCreateTime = '';
            livePlayerObjs[_0x5d08a8.divId].aliInited = false;
            isIPad() && (_0x53629d = '1000', _0x297afc = '4f779c20f6974ccba20e28d63529d0ef');
            var _0x5d8a3a = Math.round(Math.random() * 1000);
            _0x5d8a3a - 100 < 0 && (_0x5d8a3a += 100);
            _0x226d93 = _0x2c6176 + '-' + _0x5d8a3a + '-' + setH5Str(_0x5d08a8.t + _0x2c6176 + _0x5d8a3a + _0x297afc).toLocaleLowerCase();
            _0x5d08a8.isBackupVdn ? _0x46ab2c += 'vdnxbk.live.cntv.cn/api/v3/vdn/live' : _0x46ab2c += 'vdnx.live.cntv.cn/api/v3/vdn/live';
            _0x46ab2c += '?channel=' + _0x5d08a8.t + '&vn=' + _0x53629d + '&pdrm=';
            isNewH5LivePlayer(_0x5d08a8) || isIosDrmPlayer(_0x5d08a8) ? _0x46ab2c += '1' : (_0x46ab2c += '0', livePlayerObjs[_0x5d08a8.divId].isDrm = false);
            livePlayerObjs[_0x5d08a8.divId].isDirectTimeshift = false;
            if (isTimeshift(_0x5d08a8)) {
                var _0x5351e6 = _0x5d08a8.st - 0 + 1;
                _0x5351e6 - 10000000000 < 0 && (_0x5351e6 = _0x5351e6 * 1000);
                livePlayerObjs[_0x5d08a8.divId].isDirectTimeshift = true;
                _0x46ab2c += '&starttime=' + _0x5351e6 + '&iflv=0';
            }
            _0x46ab2c += '&uid=' + _0x1287fb;
            isAliCreateTime = _0x2c6176;
            _0x46ab2c += '&hbss=' + isAliCreateTime;
            _0x5d08a8.authKey = _0x226d93;
        } else {
            _0x5d08a8.isBackupVdn ? _0x46ab2c += 'vdn.live.cntv.cn/api2/liveHtml5.do' : _0x46ab2c += 'vdn.live.cntv.cn/api2/liveHtml5.do';
            _0x46ab2c += '?channel=pw://cctv_p2p_hd' + _0x5d08a8.t;
            _0x46ab2c += '&channel_id=' + _0x5d08a8.t + '&video_player=1';
            isIPad() ? (_0x46ab2c += '&im=1', !isNewH5LivePlayer(_0x5d08a8) && !isIosDrmPlayer(_0x5d08a8) && (livePlayerObjs[_0x5d08a8.divId].isDrm = false, _0x46ab2c = _0x46ab2c.replace('?channel=pw', '?channel=pa')), _0x297afc = setH5Str(_0x25cf10 + _0x53629d + _0x226d93 + _0x1287fb).toLocaleUpperCase(), _0x46ab2c += '&client=html5&tsp=' + _0x25cf10 + '&vn=' + _0x53629d + '&vc=' + _0x297afc + '&uid=' + _0x1287fb + '&wlan=' + '') : (_0x46ab2c += '&im=0', _0x46ab2c = _0x46ab2c.replace('?channel=pw', '?channel=pc'), _0x297afc = setH5Str(_0x25cf10 + '1537' + _0x4c9e01 + _0x1287fb).toLocaleUpperCase(), _0x46ab2c += '&client=flash&tsp=' + _0x25cf10 + '&vn=' + '1537' + '&vc=' + _0x297afc + '&uid=' + _0x1287fb + '&wlan=' + '');
        }
        livePlayerObjs[_0x5d08a8.divId].isErrorDone = false;
        livePlayerObjs[_0x5d08a8.divId].vdnTimer !== undefined && clearTimeout(livePlayerObjs[_0x5d08a8.divId].vdnTimer);
        _0x5d08a8.vdn && !_0x5d08a8.vdn.vdnUrl && (_0x5d08a8.vdnParasFromPage = _0x5d08a8.vdn);
        (_0x5d08a8.vdnParasFromPage || livePlayerObjs[_0x5d08a8.divId].isNewVdn) && (_0x46ab2c = _0x46ab2c.replace('liveHtml5.do?', 'live.do?'));
        livePlayerObjs[_0x5d08a8.divId].vdn = {};
        livePlayerObjs[_0x5d08a8.divId].vdn.vdnUrl = _0x46ab2c;
        if (!(_0x5d08a8.posterImg && _0x5d08a8.posterImg.length > 3 || _0x5d08a8.isAutoPlay === 'false')) {
            if (_0x5d08a8.others && (_0x5d08a8.others.indexOf('.m3u8') > 0 || _0x5d08a8.others.indexOf('.ts') > 0)) {
                livePlayerObjs[_0x5d08a8.divId].video.url = _0x5d08a8.others;
                livePlayerObjs[_0x5d08a8.divId].vdn.public = '1';
                isIosDrmPlayer(_0x5d08a8) ? setTimeout(function () {
                    parseLiveDataFromVdnx(_0x5d08a8, true);
                }, 2000) : parseLiveDataFromVdnx(_0x5d08a8, true);
            } else {
                if (livePlayerObjs[_0x5d08a8.divId].isNewVdn) {
                    doLoadLiveDataByAjax(_0x46ab2c, '', parseLiveDataFromVdnx, _0x5d08a8, parseLiveDataFromVdnxWhenError, 10000);
                    _0x5d08a8.authKey = '';
                } else {
                    livePlayerObjs[_0x5d08a8.divId].vdn.vdnUrl.indexOf('liveHtml5.do?') > 0 ? loadLiveScript(_0x46ab2c, parseLiveDataFromVdn, _0x5d08a8, parseLiveDataFromVdnWhenError, 10000) : doLoadLiveDataByAjax(_0x46ab2c, '', parseLiveDataFromVdn, _0x5d08a8, parseLiveDataFromVdnWhenError, 10000);
                }
            }
        }
        isLiveHlsJsSupported() && (!livePlayerObjs.isLoadWorker && (livePlayerObjs.isLoadWorker = true, loadLiveScript(_0x28a1ad, function () {
            ;
            typeof CNTVModule !== 'undefined' && (CNTVH5PlayerModule = CNTVModule(), window.CNTVH5PlayerModule = CNTVH5PlayerModule, CNTVH5PlayerModule.onRuntimeInitialized = function () {
                ;
                moduleInitialized = true;
                livePlayerObjs.newWorkerCreatePlayer && (livePlayerObjs.newWorkerCreatePlayer = false, initLiveH5Player(_0x5d08a8), clearInterval(livePlayerObjs[_0x5d08a8.divId].checkJsLoadedTimer));
            });
        }, _0x5d08a8, null, 30000)));
        ;
        _0x5d08a8.p2p !== 'false' && (_0x5d08a8.p2p === 'true' || _0x5d08a8.t === 'cctv1' || _0x5d08a8.t === 'cctv13' || _0x5d08a8.t === 'cctv2' || _0x5d08a8.t === 'cctv3' || _0x5d08a8.t === 'cctv4' || _0x5d08a8.t === 'cctvamerica' || _0x5d08a8.t === 'cctveurope' || _0x5d08a8.t === 'cctv5' || _0x5d08a8.t === 'cctv6' || _0x5d08a8.t === 'cctv7' || _0x5d08a8.t === 'cctv8' || _0x5d08a8.t === 'cctvjilu' || _0x5d08a8.t === 'cctv10' || _0x5d08a8.t === 'cctv11' || _0x5d08a8.t === 'cctv12' || _0x5d08a8.t === 'cctvchild' || _0x5d08a8.t === 'cctv15' || _0x5d08a8.t === 'cctv16' || _0x5d08a8.t === 'cctv17' || _0x5d08a8.t === 'cctv5plus') && (isWasmSupported() && isLiveHlsJsSupported() || isIosDrmPlayer(_0x5d08a8)) && livePlayerObjs[_0x5d08a8.divId].streamType !== 'flv' ? (isLiveEnableP2p = true, livePlayerObjs[_0x5d08a8.divId].isP2p = true) : livePlayerObjs[_0x5d08a8.divId].isP2p = false;
        if (isLiveEnableP2p) {
            var _0x217fac = 'http://js.player.cntv.cn/creator/hlsp2p.js';
            _0x5d08a8.isHttps === 'true' && (_0x217fac = _0x217fac.replace('http://', 'https://'));
            if (!livePlayerObjs[_0x5d08a8.divId].isLoadP2pJs) {
                livePlayerObjs[_0x5d08a8.divId].isLoadP2pJs = true;
                var _0x24ecee = document.getElementsByTagName('head')[0], _0x48ab8c = document.createElement('script');
                _0x48ab8c.type = 'text/javascript';
                _0x48ab8c.setAttribute('crossorigin', 'anonymous');
                _0x48ab8c.src = _0x217fac;
                _0x24ecee.appendChild(_0x48ab8c);
            }
        }
        livePlayerObjs.aliJsLoaded = false;
        !isAliApiLoaded && isUseAliMonitor && (isAliApiLoaded = true, LazyLoad.js(_0x2465d1, function () {
            ;
            livePlayerObjs.aliJsLoaded = true;
        }));
        try {
            var _0x470c5c = document.getElementById(_0x5d08a8.divId);
            (!_0x470c5c.style || typeof _0x470c5c.style !== 'object' || _0x470c5c.style.position !== 'fixed') && (_0x470c5c.style.position = 'relative');
            var _0x216827 = _0x470c5c.style.cssText;
            (!_0x216827 || _0x216827.length < 4) && (_0x216827 = 'none');
            _0x470c5c && _0x470c5c.setAttribute('originalStyle', _0x216827);
        } catch (_0x4badd1) {
        }
        if (_0x5d08a8.posterImg && _0x5d08a8.posterImg.length > 3 || _0x5d08a8.isAutoPlay === 'false') {
            showLivePlayerPosterImg(_0x5d08a8);
            return;
        }
        createLiveVideoLoadingImg(_0x5d08a8);
    } else {
        if (!isIPad()) {
            var _0x11b55f = '';
            if (navigator.userAgent.indexOf('rv:11') === -1 && navigator.userAgent.indexOf('MSIE') === -1 || _0x5d08a8.vdn && _0x5d08a8.vdn.vtoken || (_0x5d08a8.others === 'flv' || typeof _0x5d08a8.others === 'string' && _0x5d08a8.others.indexOf('.flv') > 0) || location.href.indexOf('olympicchannelchina.cn') !== -1 || location.href.indexOf('ipanda.cn') !== -1 || location.href.indexOf('csmpte.com') !== -1 || (_0x5d08a8.playerType === 'live_homepage' || _0x5d08a8.playerType === 'small') && location.href.indexOf('cctv.cn') !== -1) {
                _0x11b55f = '<p>鎮ㄥ綋鍓嶇殑娴忚\uE74D鍣ㄤ笉鏀\uE21B寔浠樿垂瑙嗛\uE576鎾\uE15F斁</p><p>璇锋洿鎹\u3221祻瑙堝櫒鎴栬\uE195澶\uFFFD</p><p>(鑻ヤ负360銆丵Q鎴栨悳鐙楁祻瑙堝櫒锛岄\u300F浣跨敤鏋侀\u20AC熸ā寮\uFFFD)</p>';
                (navigator.userAgent.indexOf('rv:11') === -1 && navigator.userAgent.indexOf('MSIE') === -1 || (_0x5d08a8.others === 'flv' || typeof _0x5d08a8.others === 'string' && _0x5d08a8.others.indexOf('.flv') > 0) || location.href.indexOf('olympicchannelchina.cn') !== -1 || location.href.indexOf('ipanda.cn') !== -1 || location.href.indexOf('csmpte.com') !== -1 || location.href.indexOf('cctv.cn') !== -1) && (_0x11b55f = _0x11b55f.replace('浠樿垂', ''), navigator.userAgent.indexOf('rv:11') === -1 && navigator.userAgent.indexOf('MSIE') === -1 && (/(wechat)/i.test(navigator.userAgent) ? _0x11b55f = _0x11b55f.replace('璇锋洿鎹\u3221祻瑙堝櫒鎴栬\uE195澶\uFFFD', '璇蜂娇鐢ㄥ\uE63B閮ㄦ祻瑙堝櫒瑙傜湅') : _0x11b55f = _0x11b55f.replace('璇锋洿鎹\u3221祻瑙堝櫒鎴栬\uE195澶\uFFFD', '璇峰崌绾ф祻瑙堝櫒鎴栨洿鎹\u3223\uE195澶\uFFFD')));
                showLivePlayerMsg(_0x5d08a8, _0x11b55f);
                return;
            }
            if (isPCWeixinBrowser()) {
                showLivePlayerMsg(_0x5d08a8, '鏆備笉鏀\uE21B寔PC寰\uE1BB俊瀹\u3221埛绔\uE224紝璇峰\uE632鍒惰\uE1DA椤甸潰閾炬帴骞舵崲鐢ㄦ祻瑙堝櫒瑙傜湅锛\uFFFD');
                return;
            }
            var _0x11b55f = '<p>鎮ㄥ綋鍓嶇殑娴忚\uE74D鍣ㄤ笉鏀\uE21B寔瑙嗛\uE576鎾\uE15F斁</p><p>璇锋洿鎹\u3221祻瑙堝櫒鎴栬\uE195澶\uFFFD</p><p>(鑻ヤ负360銆丵Q鎴栨悳鐙楁祻瑙堝櫒锛岄\u300F浣跨敤鏋侀\u20AC熸ā寮\uFFFD)</p>';
            showLivePlayerMsg(_0x5d08a8, _0x11b55f);
            return;
        } else {
            showLivePlayerMsg(_0x5d08a8, '鏆備笉鏀\uE21B寔璇ヨ\uE195澶囷紝璇锋崲鐢ㄥ叾浠栬\uE195澶囪\uE747鐪\uFFFD');
        }
    }
}
function isUseNewLiveVdn(_0x1cfae4) {
    ;
    livePlayerObjs[_0x1cfae4.divId].isNewVdn = true;
}
function isLiveIosSupportedMse() {
    var _0x2ce4dc = true;
    if (/(iphone|ipad)/i.test(navigator.userAgent)) {
        _0x53eb38 = '';
        var _0x37cc4f = navigator.userAgent.toLowerCase(), _0x479407 = _0x37cc4f.indexOf('os ');
        if (_0x479407 > 0) {
            var _0x53eb38 = _0x37cc4f.substring(_0x479407 + 3);
            _0x53eb38 = parseInt(_0x53eb38);
        }
        _0x53eb38 && _0x53eb38 - 12 < 0 && (_0x2ce4dc = false);
    }
    return _0x2ce4dc;
}
function getLiveIosVersion() {
    var _0x5557b3 = 11, _0x2b4277 = null;
    return navigator.appVersion && (_0x2b4277 = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/), _0x2b4277 && (_0x5557b3 = parseInt(_0x2b4277[1], 10), _0x2b4277[2] && (_0x5557b3 = _0x5557b3 + '.' + _0x2b4277[2]))), _0x5557b3;
}
function isIosDrmPlayer(_0x1d2e95) {
    var _0x2dcab7 = false, _0xb57a95 = /safari/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent) && !/qqbrowser/i.test(navigator.userAgent), _0x449a8b = /(iphone|ipad)/i.test(navigator.userAgent) && /(https:\/\/)/i.test(location.href), _0x365bb6 = [
            'cctv2024',
            'cctv1',
            'cctv2',
            'cctv3',
            'cctv4',
            'cctv5',
            'cctv5plus',
            'cctv6',
            'cctv7',
            'cctv8',
            'cctvjilu',
            'cctv10',
            'cctv11',
            'cctv12',
            'cctv13',
            'cctvchild',
            'cctv15',
            'cctv17',
            'cctveurope',
            'cctvamerica',
            'cctv16',
            'neimenggu2'
        ], _0x235883 = _0x365bb6.indexOf(_0x1d2e95.t) !== -1;
    _0x2dcab7 = _0x449a8b && _0xb57a95 && _0x235883;
    var _0x1d47fd = _0x2dcab7 ? getLiveIosVersion() : 0;
    return _0x2dcab7 = _0x1d47fd - 0 >= 12, _0x2dcab7 && (livePlayerObjs.isIosDrm = true), livePlayerObjs.isIosDrm && (_0x2dcab7 = true), _0xb57a95 && _0x449a8b && (_0x1d2e95.t === 'cctv1' || _0x1d2e95.t === 'cctv13') && isLiveIosSafariDrm && (_0x2dcab7 = true), _0x1d2e95.drm === 'false' && livePlayerObjs[_0x1d2e95.divId].isNewVdn && (_0x2dcab7 = false), _0x2dcab7;
}
function isLiveSdrmPlayer(_0x14466a) {
    var _0x1b712e = /(qqbrowser)/i.test(navigator.userAgent) && !/(micromessenger)/i.test(navigator.userAgent) || /(baidu)/i.test(navigator.userAgent) || /(sogoumobile)/i.test(navigator.userAgent) || /(UCBrowser)/i.test(navigator.userAgent);
    return false && /(iphone|ipad)/i.test(navigator.userAgent) && isLiveIosSupportedMse() && (_0x14466a.t === 'cctv1' || _0x14466a.t === 'cctv2' || _0x14466a.t === 'cctv3' || _0x14466a.t === 'cctv4' || _0x14466a.t === 'cctv6' || _0x14466a.t === 'cctv7' || _0x14466a.t === 'cctv8' || _0x14466a.t === 'cctv13') && !_0x1b712e;
}
function isPCWeixinBrowser() {
    ;
    return !isIPad() && /(qqbrowser)/i.test(navigator.userAgent) && /(micromessenger)/i.test(navigator.userAgent);
}
function isNewH5LivePlayer(_0x5551ab) {
    ;
    isIPad() && (_0x5551ab.playerType === 'live' || _0x5551ab.playerType === 'live_homepage') && (_0x5551ab.playerType = 'hw');
    if (_0x5551ab.drm === 'false' && livePlayerObjs[_0x5551ab.divId].isNewVdn) {
        return false;
    }
    return (_0x5551ab.playerType === 'hw' || _0x5551ab.playerType === 'small' || _0x5551ab.playerType === 'live_homepage' || _0x5551ab.playerType === 'live' && !isIPad() && true || _0x5551ab.playerType === 'liveback') && isWasmSupported() && (isLiveHlsJsSupported() && !/(iphone|ipad)/i.test(navigator.userAgent) || isLiveSdrmPlayer(_0x5551ab)) && navigator.userAgent.indexOf('rv:11') === -1 && navigator.userAgent.indexOf('MSIE') === -1;
}
function createOldLivePlayer(_0x432b51) {
    ;
    createFlashLivePlayer(_0x432b51.divId, _0x432b51.w, _0x432b51.h, _0x432b51.t);
}
function useBrowserPlayerControls(_0x5abb3f) {
    ;
    isMobleUseBrowserUi = true;
    var _0x7d402e = document.getElementById('control_bar_' + _0x5abb3f);
    _0x7d402e && document.getElementById(_0x5abb3f).removeChild(_0x7d402e);
    var _0x1a8cbc = document.getElementById('h5player_' + _0x5abb3f);
    _0x1a8cbc && (_0x1a8cbc.controls = true);
}
function createLivebackPlayer(_0x2daa31) {
    ;
    isLiveEnableP2p = false;
    livePlayerObjs[_0x2daa31.divId].playerType = _0x2daa31.playerType;
    _0x2daa31.livebackVdnRetryNum = 0;
    if (!livePlayerObjs[_0x2daa31.divId].video || !livePlayerObjs[_0x2daa31.divId].video.url) {
        return;
    }
    isIosDrmPlayer(_0x2daa31) && useBrowserPlayerControls(_0x2daa31.divId);
    var _0x36d10f = 0;
    location.href.indexOf('https://') !== -1 && (_0x2daa31.isHttps = 'true', livePlayerObjs.isHttps = 'true');
    if (isIPad() && !isIosDrmPlayer(_0x2daa31) && showNoDrmMsg(_0x2daa31)) {
        return;
    }
    if (document.getElementById('adcalls_bar_' + _0x2daa31.divId)) {
        return;
    }
    isAndroidWeixin && (livePlayerObjs[_0x2daa31.divId].isNocavas = false);
    try {
        removeLiveErrorMsg(_0x2daa31);
        document.getElementById('poster_' + _0x2daa31.divId) && removeLivePlayerPosterImg(_0x2daa31);
    } catch (_0x354d2b) {
    }
    livePlayerObjs && livePlayerObjs[_0x2daa31.divId] && (clearInterval(livePlayerObjs[_0x2daa31.divId].titleUpdateTimer), clearInterval(livePlayerObjs[_0x2daa31.divId].loadingErrorTimer), clearInterval(livePlayerObjs[_0x2daa31.divId].timeScopeTimer));
    if (!(livePlayerObjs[_0x2daa31.divId] && livePlayerObjs[_0x2daa31.divId].video && livePlayerObjs[_0x2daa31.divId].video.url && livePlayerObjs[_0x2daa31.divId].video.url.length > 3)) {
        return false;
    }
    var _0x85a7b1 = _0x2daa31.start + '', _0x595400 = _0x2daa31.end + '';
    if (_0x85a7b1.length !== 10 && _0x595400.length !== 10) {
        var _0x43d2e1 = _0x85a7b1.substr(0, 4), _0x2b9e27 = _0x85a7b1.substr(4, 2), _0x388cf7 = _0x85a7b1.substr(6, 2), _0x2ab419 = _0x85a7b1.substr(8, 2), _0x34f5ca = _0x85a7b1.substr(10, 2), _0x183108 = '00';
        _0x85a7b1.length === 14 && (_0x183108 = _0x85a7b1.substr(12, 2));
        var _0x3fff5f = _0x43d2e1 + '-' + _0x2b9e27 + '-' + _0x388cf7 + ' ' + _0x2ab419 + ':' + _0x34f5ca + ':' + _0x183108;
        _0x85a7b1 = datetimeToUnix(_0x3fff5f);
        var _0x33c9c7 = _0x595400.substr(0, 4), _0x2e9f39 = _0x595400.substr(4, 2), _0x418a8a = _0x595400.substr(6, 2), _0x56d9c0 = _0x595400.substr(8, 2), _0x3d698f = _0x595400.substr(10, 2), _0x38e479 = '00';
        _0x85a7b1.length === 14 && (_0x38e479 = _0x85a7b1.substr(12, 2));
        var _0x534c6f = _0x33c9c7 + '-' + _0x2e9f39 + '-' + _0x418a8a + ' ' + _0x56d9c0 + ':' + _0x3d698f + ':' + _0x38e479;
        _0x595400 = datetimeToUnix(_0x534c6f);
    }
    var _0x4fa961 = false;
    livePlayerObjs[_0x2daa31.divId].flv5 ? LazyLoad.js(livePlayerObjs[_0x2daa31.divId].flv5, function () {
        ;
        _0x4fa961 = true;
        var _0x3609c1 = true;
        typeof currentLiveTimeData !== 'undefined' && (currentLiveTimeData && currentLiveTimeData.GT && currentLiveTimeData.GT > 1000000000 && (_0x36d10f = currentLiveTimeData.GT / 1000, _0x36d10f - 604800 - _0x85a7b1 > 0 && (_0x3609c1 = false, destroyLivePlayer(_0x2daa31.divId), showLivePlayerMsg(_0x2daa31, '璇ヨ\uE74B棰戞棤娉曟挱鏀撅紝璇烽\u20AC夋嫨瑙傜湅鍏朵粬绮惧僵瑙嗛\uE576'))));
        _0x3609c1 && (_0x36d10f = Date.parse(new Date()) / 1000, _0x36d10f - 604800 - _0x85a7b1 > 0 && (_0x3609c1 = false, destroyLivePlayer(_0x2daa31.divId), showLivePlayerMsg(_0x2daa31, '鐢变簬鎾\uE15E嚭瀹夋帓鍙樻洿锛屾殏涓嶆敮鎸佹挱鏀捐\uE1DA鏃舵\uE18C鍐呭\uE190')));
        _0x3609c1 && startLoadLivebackPlayer(_0x2daa31, _0x85a7b1, _0x595400);
    }) : (_0x4fa961 = true, startLoadLivebackPlayer(_0x2daa31, _0x85a7b1, _0x595400));
    setTimeout(function () {
        !_0x4fa961 && (_0x4fa961 = true, startLoadLivebackPlayer(_0x2daa31, _0x85a7b1, _0x595400));
    }, 6000);
}
function startLoadLivebackPlayer(_0x2f6909, _0x4ad0c0, _0x5baa42) {
    ;
    livePlayerObjs[_0x2f6909.divId].start = _0x4ad0c0;
    livePlayerObjs[_0x2f6909.divId].end = _0x5baa42;
    livePlayerObjs[_0x2f6909.divId].pointerStart = 0;
    livePlayerObjs[_0x2f6909.divId].video.duration = _0x5baa42 - _0x4ad0c0;
    var _0x21de51 = '';
    livePlayerObjs[_0x2f6909.divId].isBackupCdn ? _0x21de51 = livePlayerObjs[_0x2f6909.divId].video.timeshiftBackupUrl : _0x21de51 = livePlayerObjs[_0x2f6909.divId].video.timeshiftUrl;
    if (!_0x21de51 || _0x21de51.length < 6) {
        return;
    }
    _0x21de51.indexOf('?') > 0 ? livePlayerObjs[_0x2f6909.divId].video.url = _0x21de51 + '&begintimeabs=' + _0x4ad0c0 * 1000 + '&endtimeabs=' + _0x5baa42 * 1000 : livePlayerObjs[_0x2f6909.divId].video.url = _0x21de51 + '?begintimeabs=' + _0x4ad0c0 * 1000 + '&endtimeabs=' + _0x5baa42 * 1000;
    livePlayerObjs[_0x2f6909.divId].video.originalUrl = livePlayerObjs[_0x2f6909.divId].video.url;
    var _0x12427a = new Date().getTime().toString().slice(0, 10), _0x51cbee = '2049', _0x781e3d = '', _0xd005bf = '47899B86370B879139C08EA3B5E88267', _0x468e26 = '';
    typeof getCookie_vdn == 'function' && (!getCookie_vdn('Fingerprint') ? typeof getLivefingerprint2 == 'function' && typeof getLivefingerprint2 != 'undefined' && !livePlayerObjs.isFingerprintJsLoading && getLivefingerprint2() : _0x468e26 = getCookie_vdn('Fingerprint'));
    var _0x781e3d = setH5Str(_0x12427a + _0x51cbee + _0xd005bf + _0x468e26).toUpperCase(), _0x21e8d8 = '';
    _0x2f6909.isHttps === 'true' ? _0x21e8d8 = 'https://' : _0x21e8d8 = 'http://';
    !_0x2f6909.livebackVdnRetryNum && (_0x2f6909.livebackVdnRetryNum = 0);
    if (livePlayerObjs[_0x2f6909.divId].isNewVdn) {
        var _0x3def9b = new Date().getTime();
        _0x781e3d = 'a4220a71b31746908fa3e7fdd7a6852a';
        vdn_vnHtml5 = '1';
        isIPad() && (vdn_vnHtml5 = '1000', _0x781e3d = '4f779c20f6974ccba20e28d63529d0ef');
        var _0x4e4f25 = Math.round(Math.random() * 1000);
        _0x4e4f25 - 100 < 0 && (_0x4e4f25 += 100);
        _0xd005bf = _0x3def9b + '-' + _0x4e4f25 + '-' + setH5Str(_0x2f6909.t + _0x3def9b + _0x4e4f25 + _0x781e3d).toLocaleLowerCase();
        _0x2f6909.livebackVdnRetryNum > 0 ? _0x21e8d8 += 'vdnxbk.live.cntv.cn/api/v3/vdn/livets' : _0x21e8d8 += 'vdnx.live.cntv.cn/api/v3/vdn/livets';
        _0x21e8d8 += '?channel=' + _0x2f6909.t + '&vn=' + vdn_vnHtml5 + '&pdrm=';
        isNewH5LivePlayer(_0x2f6909) || isIosDrmPlayer(_0x2f6909) ? _0x21e8d8 += '1' : (_0x21e8d8 += '0', livePlayerObjs[_0x2f6909.divId].isDrm = false);
        _0x21e8d8 += '&uid=' + _0x468e26 + '&iflv=0&video-player=1&starttime=' + (_0x4ad0c0 - 0 + 10) * 1000;
        !isAliCreateTime && (isAliCreateTime = _0x3def9b);
        _0x21e8d8 += '&hbss=' + isAliCreateTime;
        _0x2f6909.authKey = _0xd005bf;
        _0x2f6909.livebackVdnRetryNum++;
        livePlayerObjs[_0x2f6909.divId].isErrorDone = false;
        doLoadLiveDataByAjax(_0x21e8d8, '', checkLivebackCopyrightx, _0x2f6909, checkLivebackCopyrightxWhenError, 10000);
    } else {
        _0x2f6909.isLivebackBackupVdn ? _0x21e8d8 += 'vdn.live.cntv.cn/api2/liveTimeshiftHtml5.do' : _0x21e8d8 += 'vdn.live.cntv.cn/api2/liveTimeshiftHtml5.do';
        _0x21e8d8 += '?channel=pa://cctv_p2p_hd' + _0x2f6909.t + '&client=html5&starttime=' + (_0x4ad0c0 - 0 + 10);
        _0x21e8d8 += '&channel_id=' + _0x2f6909.t + '&video_player=1';
        !isIPad() ? (_0x21e8d8 += '&im=0', _0x21e8d8.replace('&client=html5', '&client=flash')) : _0x21e8d8 += '&im=1';
        _0x21e8d8 += '&iflv=0&tsp=' + _0x12427a + '&vn=' + _0x51cbee + '&vc=' + _0x781e3d + '&uid=' + _0x468e26 + '&wlan=' + '';
        livePlayerObjs[_0x2f6909.divId].isErrorDone = false;
        livePlayerObjs[_0x2f6909.divId].vdnTimer !== undefined && clearTimeout(livePlayerObjs[_0x2f6909.divId].vdnTimer);
        _0x2f6909.timeScopeStart = _0x4ad0c0 - 0;
        _0x2f6909.livebackVdnRetryNum++;
        loadLiveScript(_0x21e8d8, checkLivebackCopyright, _0x2f6909, checkLivebackCopyrightWhenError, 10000);
    }
    clearInterval(livePlayerObjs[_0x2f6909.divId].canvasDrawTimer);
    typeof LiveTileShow !== 'undefined' && LiveTileShow.prototype.checkLoadingError(_0x2f6909);
}
function checkLivebackCopyrightxWhenError(_0x176cd0) {
    var _0x269143 = {};
    if (livePlayerObjs[_0x176cd0.divId].isErrorDone) {
        return;
    }
    livePlayerObjs[_0x176cd0.divId].isErrorDone = true;
    _0x176cd0.livebackVdnRetryNum - 2 > 0 ? (_0x269143.ack = 'yes', _0x269143.play = '1', _0x269143 = JSON.stringify(_0x269143), checkLivebackCopyrightx(_0x176cd0, '', _0x269143)) : (_0x176cd0.isLivebackBackupVdn = true, startLoadLivebackPlayer(_0x176cd0, livePlayerObjs[_0x176cd0.divId].start, livePlayerObjs[_0x176cd0.divId].end));
}
function checkLivebackCopyrightx(_0x278436, _0x4f9dd4, _0x1a3d9a) {
    ;
    livePlayerObjs[_0x278436.divId].isErrorDone = true;
    livePlayerObjs[_0x278436.divId].vdnTimer !== undefined && clearTimeout(livePlayerObjs[_0x278436.divId].vdnTimer);
    var _0x5b127e = null, _0x72725c = null, _0x456c8e = '1', _0x53f448 = null, _0xea71c8 = '', _0x31d998 = '';
    try {
        var _0x72725c = JSON.parse(_0x1a3d9a);
        _0x31d998 = _0x72725c.play;
        _0x31d998 !== undefined && _0x31d998 === '0' ? (_0x456c8e = '0', _0xea71c8 = getLiveVdnTipMsg(_0x72725c.tip_msg)) : _0x456c8e = '1';
        _0x31d998 === undefined && (_0x53f448 = liveCheckVdnReturnMsg(_0x72725c), typeof _0x53f448 === 'object' && _0x53f448 ? (_0xea71c8 = _0x53f448.msg, _0xea71c8 && (_0x456c8e = '0', _0xea71c8.indexOf('鍚\uFFFD') > 0 && (_0xea71c8 = liveStatusMsg.public_0_default))) : _0xea71c8 = '');
    } catch (_0x2c7c64) {
        _0xea71c8 = '';
        _0x456c8e = 'error';
    }
    if (_0x456c8e === 'error') {
        livePlayerObjs[_0x278436.divId].isErrorDone = false;
        checkLivebackCopyrightWhenError(_0x278436);
        return;
    }
    if (typeof _0xea71c8 === 'string' && _0xea71c8.length > 1) {
        _0x5b127e = document.getElementById('control_bar_' + _0x278436.divId);
        _0x5b127e && document.getElementById(_0x278436.divId).removeChild(_0x5b127e);
        showLivePlayerMsg(_0x278436, _0xea71c8);
    } else {
        livePlayerObjs[_0x278436.divId].adCallsIsPlayed = false;
        livePlayerObjs[_0x278436.divId].isLive = false;
        document.getElementById('error_msg_' + _0x278436.divId) && document.getElementById(_0x278436.divId).removeChild(document.getElementById('error_msg_' + _0x278436.divId));
        document.getElementById('h5player_' + _0x278436.divId) && (isCanvasSupported(_0x278436.divId) ? (document.getElementById('h5player_' + _0x278436.divId).style.display = 'none', document.getElementById('h5canvas_' + _0x278436.divId) && (document.getElementById('h5canvas_' + _0x278436.divId).style.display = 'block')) : document.getElementById('h5player_' + _0x278436.divId).style.display = 'block');
        if (isLiveEs6Supported() && !isMobleUseBrowserUi) {
            _0x5b127e = document.getElementById('control_bar_' + _0x278436.divId);
            if (!_0x5b127e && !isMobleUseBrowserUi) {
                var _0x46419e = new LiveControlsBar(_0x278436);
            }
            isNewH5LivePlayer(_0x278436) && !document.getElementById('player_progress_' + _0x278436.divId) ? (new LiveProgressBar(_0x278436.divId), new LivePlayTimeShow(_0x278436.divId, 75)) : (document.getElementById('player_progress_played_' + _0x278436.divId) && (document.getElementById('player_progress_played_' + _0x278436.divId).style.width = '0%', document.getElementById('player_progress_cached_' + _0x278436.divId).style.width = '0%', document.getElementById('player_progress_pointer_' + _0x278436.divId).style.left = '-12px'), document.getElementById('played_time_timer_' + _0x278436.divId) && (document.getElementById('played_time_timer_' + _0x278436.divId).innerHTML = '00:00'), document.getElementById('played_time_total_' + _0x278436.divId) && (document.getElementById('played_time_total_' + _0x278436.divId).innerHTML = LivePlayTimeShow.prototype.formatTimeToStr(livePlayerObjs[_0x278436.divId].video.duration)), LivePlayTimeShow.prototype.setPlayedTime(_0x278436.divId, 0));
        }
        _0x278436.isAutoPlay === 'true' && document.getElementById('h5player_' + _0x278436.divId) && (document.getElementById('h5player_' + _0x278436.divId).autoplay = true);
        createH5LivePlayerElement(_0x278436.divId);
        if (!isLiveEs6Supported()) {
            var _0x4e4324 = document.getElementById('h5player_' + _0x278436.divId);
            _0x4e4324 && (isUseAliMonitor && (typeof goldlog != 'undefined' && goldlog['h5player_' + _0x278436.divId] && typeof goldlog['h5player_' + _0x278436.divId].heartbeatStarted !== 'undefined' ? (goldlog['h5player_' + _0x278436.divId].heartbeatStarted = true, !livePlayerObjs[_0x278436.divId].aliInited && setCntvLiveMetadata(_0x278436, 'init'), setCntvLiveMetadata(_0x278436)) : setTimeout(function () {
                setCntvLiveMetadata(_0x278436);
            }, 300)), livePlayerObjs[_0x278436.divId].video.url.indexOf('cdrm') > 0 ? showLivePlayerMsg(_0x278436, '鎮ㄥ綋鍓嶇殑娴忚\uE74D鍣ㄤ笉鏀\uE21B寔鎾\uE15F斁锛岃\uE1EC鍗囩骇娴忚\uE74D鍣ㄦ垨鏇存崲璁惧\uE62C') : (_0x4e4324.controls = true, _0x4e4324.src = livePlayerObjs[_0x278436.divId].video.url));
        } else {
            createLiveHls(_0x278436);
            typeof LiveTileShow !== 'undefined' && LiveTileShow.prototype.checkLoadingError(_0x278436);
        }
        isUseAliMonitor && (typeof goldlog != 'undefined' && goldlog['h5player_' + _0x278436.divId] && typeof goldlog['h5player_' + _0x278436.divId].heartbeatStarted !== 'undefined' && (goldlog['h5player_' + _0x278436.divId].heartbeatStarted = true));
        if (_0x278436.timeScopeStart && _0x278436.timeScopeStart - 1500000000) {
            _0x278436.isLivebackNewDay = false;
            var _0x410c04 = new Date(_0x278436.timeScopeStart * 1000), _0x137a07 = _0x410c04.getMonth() + 1 + '';
            _0x137a07.length < 2 && (_0x137a07 = '0' + _0x137a07);
            var _0x20a06c = _0x410c04.getDate() + '';
            _0x20a06c.length < 2 && (_0x20a06c = '0' + _0x20a06c);
            var _0x17a441 = _0x410c04.getFullYear();
            livePlayerObjs[_0x278436.divId].timeScope = null;
            var _0x168eb2 = _0x17a441 + '/' + _0x137a07 + '/' + _0x20a06c;
            getTimescopeCopyrightData(_0x278436, _0x168eb2);
            livePlayerObjs[_0x278436.divId].timeScopeTimer = setInterval(function () {
                var _0x3327d2 = document.getElementById('h5player_' + _0x278436.divId), _0x32fd99 = document.getElementById('error_msg_' + _0x278436.divId);
                if (_0x32fd99 && _0x32fd99.style.display !== 'none') {
                    clearInterval(livePlayerObjs[_0x278436.divId].timeScopeTimer);
                } else {
                    var _0x27e144 = 0;
                    if (_0x3327d2) {
                        _0x27e144 = Math.ceil(_0x3327d2.currentTime);
                        var _0x171495 = _0x278436.timeScopeStart + _0x27e144, _0x2b26a1 = new Date(_0x171495 * 1000), _0x21ade4 = _0x2b26a1.getDate() + '';
                        _0x21ade4.length < 2 && (_0x21ade4 = '0' + _0x21ade4);
                        _0x21ade4 !== _0x20a06c && !_0x278436.isLivebackNewDay && (_0x278436.isLivebackNewDay = true, _0x20a06c = _0x21ade4, _0x137a07 = _0x2b26a1.getMonth() + 1 + '', _0x137a07.length < 2 && (_0x137a07 = '0' + _0x137a07), _0x20a06c.length < 2 && (_0x20a06c = '0' + _0x20a06c), _0x17a441 = _0x2b26a1.getFullYear(), _0x168eb2 = _0x17a441 + '/' + _0x137a07 + '/' + _0x20a06c, getTimescopeCopyrightData(_0x278436, _0x168eb2));
                        LiveTimeshiftBar.prototype.checkCopyright(_0x278436, _0x171495);
                    }
                }
            }, 1000);
        }
    }
}
function checkLivebackCopyrightWhenError(_0xb3814b) {
    ;
    if (livePlayerObjs[_0xb3814b.divId].isErrorDone) {
        return;
    }
    livePlayerObjs[_0xb3814b.divId].isErrorDone = true;
    if (_0xb3814b.t === 'cctv1') {
        var _0x4ac6c5 = {
            ack: 'yes',
            status: '1',
            public: '1'
        };
        ;
        ;
        ;
        html5VideoData = JSON.stringify(_0x4ac6c5);
        checkLivebackCopyright(_0xb3814b);
    } else {
        _0xb3814b.livebackVdnRetryNum - 2 > 0 ? showLivePlayerErrorMsg(_0xb3814b) : (_0xb3814b.isLivebackBackupVdn = true, startLoadLivebackPlayer(_0xb3814b, livePlayerObjs[_0xb3814b.divId].start, livePlayerObjs[_0xb3814b.divId].end));
    }
}
function checkLivebackCopyright(_0x5b551f) {
    ;
    livePlayerObjs[_0x5b551f.divId][_0x53f3e6(1116)] = true;
    livePlayerObjs[_0x5b551f[_0x53f3e6(492)]].vdnTimer !== undefined && clearTimeout(livePlayerObjs[_0x5b551f[_0x53f3e6(492)]][_0x53f3e6(973)]);
    var _0x64855e = null;
    try {
        var _0x64855e = eval('(' + html5VideoData + ')');
        _0x25930f = _0x64855e.play;
        _0x25930f !== undefined && _0x25930f === '0' ? (_0x5bfae0 = '0', _0x18b90d = getLiveVdnTipMsg(_0x64855e.tip_msg)) : _0x5bfae0 = '1';
        _0x25930f === undefined && (_0x2117ab = liveCheckVdnReturnMsg(_0x64855e), typeof _0x2117ab === _0x53f3e6(1085) && _0x2117ab ? (_0x18b90d = _0x2117ab[_0x53f3e6(727)], _0x18b90d && (_0x5bfae0 = '0', _0x18b90d.indexOf('鍚\uFFFD') > 0 && (_0x18b90d = liveStatusMsg[_0x53f3e6(1109)]))) : _0x18b90d = '');
    } catch (_0x37ab4b) {
        _0x18b90d = '';
        _0x5bfae0 = _0x53f3e6(429);
    }
    if (_0x5bfae0 === 'error') {
        livePlayerObjs[_0x5b551f.divId][_0x53f3e6(1116)] = false;
        checkLivebackCopyrightWhenError(_0x5b551f);
        return;
    }
    if (typeof _0x18b90d === _0x53f3e6(881) && _0x18b90d[_0x53f3e6(1067)] > 1) {
        _0x283d70 = document[_0x53f3e6(1001)](_0x53f3e6(558) + _0x5b551f.divId);
        _0x283d70 && document[_0x53f3e6(1001)](_0x5b551f.divId)[_0x53f3e6(468)](_0x283d70);
        showLivePlayerMsg(_0x5b551f, _0x18b90d);
    } else {
        livePlayerObjs[_0x5b551f[_0x53f3e6(492)]][_0x53f3e6(407)] = false;
        livePlayerObjs[_0x5b551f[_0x53f3e6(492)]][_0x53f3e6(1146)] = false;
        document[_0x53f3e6(1001)](_0x53f3e6(588) + _0x5b551f[_0x53f3e6(492)]) && document[_0x53f3e6(1001)](_0x5b551f[_0x53f3e6(492)])[_0x53f3e6(468)](document[_0x53f3e6(1001)](_0x53f3e6(588) + _0x5b551f.divId));
        document[_0x53f3e6(1001)](_0x53f3e6(736) + _0x5b551f[_0x53f3e6(492)]) && (isCanvasSupported(_0x5b551f.divId) ? (document[_0x53f3e6(1001)](_0x53f3e6(736) + _0x5b551f[_0x53f3e6(492)])[_0x53f3e6(655)][_0x53f3e6(590)] = 'none', document.getElementById(_0x53f3e6(748) + _0x5b551f.divId) && (document[_0x53f3e6(1001)]('h5canvas_' + _0x5b551f.divId).style.display = _0x53f3e6(961))) : document[_0x53f3e6(1001)]('h5player_' + _0x5b551f.divId)[_0x53f3e6(655)].display = _0x53f3e6(961));
        if (isLiveEs6Supported() && !isMobleUseBrowserUi) {
            _0x283d70 = document[_0x53f3e6(1001)]('control_bar_' + _0x5b551f[_0x53f3e6(492)]);
            if (!_0x283d70 && !isMobleUseBrowserUi) {
                ;
            }
            isNewH5LivePlayer(_0x5b551f) && !document[_0x53f3e6(1001)]('player_progress_' + _0x5b551f[_0x53f3e6(492)]) ? (new LiveProgressBar(_0x5b551f[_0x53f3e6(492)]), new LivePlayTimeShow(_0x5b551f[_0x53f3e6(492)], 75)) : (document[_0x53f3e6(1001)]('player_progress_played_' + _0x5b551f[_0x53f3e6(492)]) && (document[_0x53f3e6(1001)](_0x53f3e6(1147) + _0x5b551f[_0x53f3e6(492)])[_0x53f3e6(655)].width = '0%', document[_0x53f3e6(1001)]('player_progress_cached_' + _0x5b551f.divId)[_0x53f3e6(655)][_0x53f3e6(799)] = '0%', document[_0x53f3e6(1001)](_0x53f3e6(424) + _0x5b551f[_0x53f3e6(492)])[_0x53f3e6(655)][_0x53f3e6(1167)] = _0x53f3e6(485)), document.getElementById(_0x53f3e6(885) + _0x5b551f[_0x53f3e6(492)]) && (document[_0x53f3e6(1001)](_0x53f3e6(885) + _0x5b551f[_0x53f3e6(492)]).innerHTML = _0x53f3e6(847)), document[_0x53f3e6(1001)]('played_time_total_' + _0x5b551f[_0x53f3e6(492)]) && (document[_0x53f3e6(1001)]('played_time_total_' + _0x5b551f.divId).innerHTML = LivePlayTimeShow[_0x53f3e6(1053)].formatTimeToStr(livePlayerObjs[_0x5b551f[_0x53f3e6(492)]][_0x53f3e6(366)][_0x53f3e6(592)])), LivePlayTimeShow[_0x53f3e6(1053)][_0x53f3e6(1144)](_0x5b551f[_0x53f3e6(492)], 0));
        }
        _0x5b551f.isAutoPlay === _0x53f3e6(1171) && document[_0x53f3e6(1001)](_0x53f3e6(736) + _0x5b551f[_0x53f3e6(492)]) && (document[_0x53f3e6(1001)](_0x53f3e6(736) + _0x5b551f[_0x53f3e6(492)])[_0x53f3e6(480)] = true);
        createH5LivePlayerElement(_0x5b551f.divId);
        if (!isLiveEs6Supported()) {
            ;
            _0x12ab59 && (isUseAliMonitor && (typeof goldlog != _0x53f3e6(546) && goldlog[_0x53f3e6(736) + _0x5b551f[_0x53f3e6(492)]] && typeof goldlog[_0x53f3e6(736) + _0x5b551f.divId][_0x53f3e6(425)] !== _0x53f3e6(546) ? (goldlog[_0x53f3e6(736) + _0x5b551f.divId][_0x53f3e6(425)] = true, !livePlayerObjs[_0x5b551f[_0x53f3e6(492)]][_0x53f3e6(637)] && setCntvLiveMetadata(_0x5b551f, 'init'), setCntvLiveMetadata(_0x5b551f)) : setTimeout(function () {
                setCntvLiveMetadata(_0x5b551f);
            }, 300)), livePlayerObjs[_0x5b551f[_0x53f3e6(492)]][_0x53f3e6(366)].url.indexOf(_0x53f3e6(662)) > 0 ? showLivePlayerMsg(_0x5b551f, _0x53f3e6(875)) : (_0x12ab59[_0x53f3e6(447)] = true, _0x12ab59[_0x53f3e6(647)] = livePlayerObjs[_0x5b551f[_0x53f3e6(492)]][_0x53f3e6(366)][_0x53f3e6(998)]));
        } else {
            createLiveHls(_0x5b551f);
            typeof LiveTileShow !== _0x53f3e6(546) && LiveTileShow.prototype.checkLoadingError(_0x5b551f);
        }
        isUseAliMonitor && (typeof goldlog != 'undefined' && goldlog[_0x53f3e6(736) + _0x5b551f[_0x53f3e6(492)]] && typeof goldlog['h5player_' + _0x5b551f[_0x53f3e6(492)]][_0x53f3e6(425)] !== _0x53f3e6(546) && (goldlog[_0x53f3e6(736) + _0x5b551f.divId].heartbeatStarted = true));
        if (_0x5b551f[_0x53f3e6(820)] && _0x5b551f[_0x53f3e6(820)] - 1500000000) {
            _0x5b551f.isLivebackNewDay = false;
            ;
            _0x175dbf[_0x53f3e6(1067)] < 2 && (_0x175dbf = '0' + _0x175dbf);
            ;
            _0x1823a9[_0x53f3e6(1067)] < 2 && (_0x1823a9 = '0' + _0x1823a9);
            ;
            livePlayerObjs[_0x5b551f[_0x53f3e6(492)]][_0x53f3e6(996)] = null;
            ;
            getTimescopeCopyrightData(_0x5b551f, _0x1ddea7);
            livePlayerObjs[_0x5b551f.divId][_0x53f3e6(703)] = setInterval(function () {
                var _0x1ed2c2 = _0x53f3e6, _0x6d6ee8 = document[_0x1ed2c2(1001)]('h5player_' + _0x5b551f.divId), _0x194aa0 = document[_0x1ed2c2(1001)](_0x1ed2c2(588) + _0x5b551f[_0x1ed2c2(492)]);
                if (_0x194aa0 && _0x194aa0[_0x1ed2c2(655)][_0x1ed2c2(590)] !== 'none') {
                    clearInterval(livePlayerObjs[_0x5b551f[_0x1ed2c2(492)]][_0x1ed2c2(703)]);
                } else {
                    var _0x281d9c = 0;
                    if (_0x6d6ee8) {
                        _0x281d9c = Math[_0x1ed2c2(409)](_0x6d6ee8[_0x1ed2c2(374)]);
                        var _0x375ea1 = _0x5b551f[_0x1ed2c2(820)] + _0x281d9c, _0x386a7e = new Date(_0x375ea1 * 1000), _0x58d6a0 = _0x386a7e[_0x1ed2c2(854)]() + '';
                        _0x58d6a0[_0x1ed2c2(1067)] < 2 && (_0x58d6a0 = '0' + _0x58d6a0);
                        _0x58d6a0 !== _0x1823a9 && !_0x5b551f[_0x1ed2c2(1098)] && (_0x5b551f.isLivebackNewDay = true, _0x1823a9 = _0x58d6a0, _0x175dbf = _0x386a7e[_0x1ed2c2(636)]() + 1 + '', _0x175dbf.length < 2 && (_0x175dbf = '0' + _0x175dbf), _0x1823a9[_0x1ed2c2(1067)] < 2 && (_0x1823a9 = '0' + _0x1823a9), _0x4de15b = _0x386a7e[_0x1ed2c2(1056)](), _0x1ddea7 = _0x4de15b + '/' + _0x175dbf + '/' + _0x1823a9, getTimescopeCopyrightData(_0x5b551f, _0x1ddea7));
                        LiveTimeshiftBar[_0x1ed2c2(1053)][_0x1ed2c2(1016)](_0x5b551f, _0x375ea1);
                    }
                }
            }, 1000);
        }
    }
}
function getTimescopeCopyrightData(_0x1ffea8, _0x25fd1a) {
    var _0x186316 = 'http://cbox.cntv.cn/epg/ctlist/' + _0x25fd1a + '/' + _0x1ffea8.t + '.json';
    _0x1ffea8.isHttps === 'true' && (_0x186316 = _0x186316.replace('http://', 'https://'));
    doLoadLiveDataByAjax(_0x186316, '', LiveTimeshiftBar.prototype.getCopyrightDataByTimeScope, _0x1ffea8, null, 0, null, null, 'timeScope');
}
function getHtml5VideoData() {
}
function datetimeToUnix(_0x16b9eb) {
    var _0x3d661b = _0x16b9eb.replace(/:/g, '-');
    _0x3d661b = _0x3d661b.replace(/ /g, '-');
    var _0x26409b = _0x3d661b.split('-'), _0x1859cb = new Date(Date.UTC(_0x26409b[0], _0x26409b[1] - 1, _0x26409b[2], _0x26409b[3] - 8, _0x26409b[4], _0x26409b[5]));
    return parseInt(_0x1859cb.getTime() / 1000);
}
function getStartLevel(_0x43cb37, _0x26500d) {
    var _0x4e6568 = 0, _0x1f128b = _0x43cb37.length, _0x19be82 = 6000000, _0x32bec2 = 1;
    switch (_0x26500d) {
    case 'lowChapters':
        _0x4e6568 = 200000;
        break;
    case 'chapters':
        _0x4e6568 = 450000;
        break;
    case 'chapters2':
        _0x4e6568 = 850000;
        break;
    case 'chapters3':
        _0x4e6568 = 1200000;
        break;
    case 'chapters4':
        _0x4e6568 = 2000000;
        break;
    case 'chapters5':
        _0x4e6568 = 4000000;
        break;
    case 'chapters6':
        _0x4e6568 = 6000000;
        break;
    }
    for (var _0x14811d = 0; _0x14811d < _0x1f128b; _0x14811d++) {
        Math.abs(_0x43cb37[_0x14811d].bitrate - _0x4e6568) < _0x19be82 && (_0x19be82 = Math.abs(_0x43cb37[_0x14811d].bitrate - _0x4e6568), _0x32bec2 = _0x14811d);
    }
    return _0x32bec2;
}
function destroyH5LiveFlv(_0x544784) {
    ;
    try {
        livePlayerObjs[_0x544784.divId].flvPlayer.pause();
        livePlayerObjs[_0x544784.divId].flvPlayer.unload();
        livePlayerObjs[_0x544784.divId].flvPlayer.detachMediaElement();
        livePlayerObjs[_0x544784.divId].flvPlayer.destroy();
        livePlayerObjs[_0x544784.divId].flvPlayer = null;
    } catch (_0x477033) {
    }
}
function destroyH5LiveHls(_0x2f24f6, _0x416dc6) {
    ;
    livePlayerObjs[_0x2f24f6.divId] && (livePlayerObjs[_0x2f24f6.divId].cdncip = '', livePlayerObjs[_0x2f24f6.divId].cdnsip = '', livePlayerObjs[_0x2f24f6.divId].isPausedBecauseMuted = false, livePlayerObjs[_0x2f24f6.divId].adCallsVideo && livePlayerObjs[_0x2f24f6.divId].adCallsVideo.hls && (livePlayerObjs[_0x2f24f6.divId].adCallsVideo.hls.destroy(), livePlayerObjs[_0x2f24f6.divId].adCallsVideo.hls.detachMedia(), livePlayerObjs[_0x2f24f6.divId].adCallsVideo.hls = null), livePlayerObjs[_0x2f24f6.divId].video && livePlayerObjs[_0x2f24f6.divId].video.hls && livePlayerObjs[_0x2f24f6.divId].video.hls.destroy && (livePlayerObjs[_0x2f24f6.divId].video.hls.destroy(), livePlayerObjs[_0x2f24f6.divId].video.hls.detachMedia(), livePlayerObjs[_0x2f24f6.divId].video.hls = null), livePlayerObjs[_0x2f24f6.divId].flvPlayer && destroyH5LiveFlv(_0x2f24f6), clearTimeout(livePlayerObjs[_0x2f24f6.divId].checkCopyrightTimer), livePlayerObjs[_0x2f24f6.divId].checkCopyrightTimer = null);
    isUseAliMonitor && (typeof goldlog != 'undefined' && goldlog['h5player_' + _0x2f24f6.divId] && typeof goldlog['h5player_' + _0x2f24f6.divId].heartbeatStarted !== 'undefined' && (goldlog['h5player_' + _0x2f24f6.divId].heartbeatStarted = false));
    var _0x3cac20 = document.getElementById('adpause_' + _0x2f24f6.divId);
    _0x3cac20 && Array.isArray(livePlayerObjs.adPauseAPI) && livePlayerObjs.adPauseAPI.length > 0 && LiveAdPause.prototype.adPauseShowOrHide(_0x2f24f6, 'hide');
    var _0x3988c1 = document.getElementById('adbanner_' + _0x2f24f6.divId);
    _0x3988c1 && Array.isArray(livePlayerObjs.adBannerAPI) && livePlayerObjs.adBannerAPI.length > 0 && LiveAdBanner.prototype.adBannerShowOrHide(_0x2f24f6, 'hide');
    livePlayerObjs && livePlayerObjs[_0x2f24f6.divId] && !_0x416dc6 && (clearInterval(livePlayerObjs[_0x2f24f6.divId].titleUpdateTimer), clearInterval(livePlayerObjs[_0x2f24f6.divId].loadingErrorTimer), clearInterval(livePlayerObjs[_0x2f24f6.divId].liveTimer));
    livePlayerObjs && livePlayerObjs[_0x2f24f6.divId] && (livePlayerObjs[_0x2f24f6.divId].loadingTime = 0, clearInterval(livePlayerObjs[_0x2f24f6.divId].checkP2pSdkLoaded));
    typeof destroyLiveIosP2pSDK !== 'undefined' && destroyLiveIosP2pSDK();
}
function destroyLivePlayer(_0x42103a) {
    var _0x10d410 = document.getElementById('h5canvas_' + _0x42103a), _0x5aa24a = document.getElementById('h5player_' + _0x42103a);
    _0x10d410 && (document.getElementById(_0x42103a).removeChild(_0x10d410), clearInterval(livePlayerObjs[_0x42103a].canvasDrawTimer));
    if (_0x5aa24a) {
        try {
            document.body.removeChild(_0x5aa24a);
        } catch (_0x309635) {
            document.getElementById(_0x42103a).removeChild(_0x5aa24a);
        }
    }
    livePlayerObjs[_0x42103a] && !livePlayerObjs[_0x42103a].isOldH5player && destroyH5LiveHls({ 'divId': _0x42103a });
    document.getElementById(_0x42103a) && (document.getElementById(_0x42103a).innerHTML = '');
    typeof goldlog != 'undefined' && goldlog['h5player_' + _0x42103a] && typeof goldlog['h5player_' + _0x42103a].heartbeatStarted !== 'undefined' && (goldlog['h5player_' + _0x42103a].heartbeatStarted = false, goldlog['h5player_' + _0x42103a].isBindedEvents = false);
}
function playLiveVideo(_0x3e43d5) {
    var _0x13b5cd = document.getElementById('adcalls_bar_' + _0x3e43d5.divId);
    _0x13b5cd && (_0x13b5cd.style.display = 'none', document.getElementById(_0x3e43d5.divId).removeChild(_0x13b5cd));
    if (livePlayerObjs[_0x3e43d5.divId].adCallsIsPlayed) {
        return;
    }
    livePlayerObjs[_0x3e43d5.divId].adCallsIsPlayed = true;
    clearInterval(livePlayerObjs[_0x3e43d5.divId].adCallsRemainingTimer);
    clearInterval(livePlayerObjs[_0x3e43d5.divId].adCallsErrorTimer);
    clearInterval(livePlayerObjs[_0x3e43d5.divId].adCallsErrorTotalTimer);
    clearInterval(livePlayerObjs[_0x3e43d5.divId].adCallsCanPlayTimer);
    livePlayerObjs.adCallsAPI = '';
    livePlayerObjs.adCalls = '';
    destroyH5LiveHls(_0x3e43d5);
    try {
        typeof goldlog != 'undefined' && goldlog['h5player_' + _0x3e43d5.divId] && typeof goldlog['h5player_' + _0x3e43d5.divId].heartbeatStarted !== 'undefined' && (goldlog['h5player_' + _0x3e43d5.divId].heartbeatStarted = false, goldlog['h5player_' + _0x3e43d5.divId].isBindedEvents = false);
    } catch (_0x5d51f8) {
    }
    document.getElementById('loading_' + _0x3e43d5.divId) && (document.getElementById('loading_' + _0x3e43d5.divId).style.display = 'block');
    var _0x19a45a = false;
    livePlayerObjs[_0x3e43d5.divId].flv5 ? LazyLoad.js(livePlayerObjs[_0x3e43d5.divId].flv5, function () {
        _0x19a45a = true;
        createLiveHls(_0x3e43d5);
    }) : (_0x19a45a = true, createLiveHls(_0x3e43d5));
    setTimeout(function () {
        !_0x19a45a && (_0x19a45a = true, createLiveHls(_0x3e43d5));
    }, 6000);
    livePlayerObjs[_0x3e43d5.divId].adBannerIsShow = false;
    !livePlayerObjs[_0x3e43d5.divId].adBannerGetting && !livePlayerObjs[_0x3e43d5.divId].adBannerPlayed && livePlayerObjs[_0x3e43d5.divId].adBanner && livePlayerObjs[_0x3e43d5.divId].adBanner.length > 3 && livePlayerObjs[_0x3e43d5.divId].vdn.public === '1' && setTimeout(function () {
        ;
        livePlayerObjs[_0x3e43d5.divId].adBannerGetting = true;
        loadLiveScript(livePlayerObjs[_0x3e43d5.divId].adBanner, parseLiveAdBannerDataFromApi, _0x3e43d5, parseLiveAdBannerDataFromApiWhenError, 100);
        livePlayerObjs[_0x3e43d5.divId].adBannerGetting && parseLiveAdBannerDataFromApi(_0x3e43d5);
    }, 60000);
}
function createLiveVideoLoadingImg(_0x287d79) {
    ;
    if (isMobleUseBrowserUi) {
        return;
    }
    var _0x38b9f1 = '', _0x51bd1 = 'https://player.cntv.cn/html5Player/images/cctv_html5player_loading.gif';
    location.href.indexOf('fromapp=cctvnews') > 0 && (_0x51bd1 = 'https://player.cntv.cn/html5Player/images/20190905/cctvnews_loading.gif');
    typeof calledByApp !== 'undefined' && (calledByApp === 'cctvnews' && (_0x51bd1 = 'https://player.cntv.cn/html5Player/images/20190905/cctvnews_loading.gif'));
    _0x38b9f1 = '<div id="loading_' + _0x287d79.divId + '" style="position:absolute;top:42%;margin:0 auto;text-align:center;width:100%;height:42px;cursor:pointer;z-index:20;display:block;">';
    _0x38b9f1 += '<img src="' + _0x51bd1 + '" style="width:120px;height:42px;display:inline-block;">';
    _0x38b9f1 += '</div>';
    document.getElementById(_0x287d79.divId).insertAdjacentHTML('afterBegin', _0x38b9f1);
}
function getLiveAdCallsData(_0x30fb30) {
    ;
    typeof _0x30fb30 === 'object' && _0x30fb30.divId && !livePlayerObjs.adcallsVdnIsGeted && (livePlayerObjs.adCallsPlayingNum += 1, getLiveAdCallsDataFromVdn(_0x30fb30, livePlayerObjs.adCallsPlayingNum));
}
function getLiveAdCallsDataFromVdn(_0x152286, _0x574bd2) {
    ;
    if (!Array.isArray(livePlayerObjs.adCallsAPI) || livePlayerObjs.adCallsPlayingNum - livePlayerObjs.adCallsAPI.length >= 0 || _0x152286.divId && livePlayerObjs[_0x152286.divId].adCallsIsPlayed) {
        var _0x1ed865 = document.getElementById('h5player_' + _0x152286.divId);
        _0x1ed865 && (_0x1ed865.muted = false);
        playLiveVideo(_0x152286);
        return;
    }
    livePlayerObjs.adcallsVdnIsGeted = false;
    var _0x269870 = null;
    livePlayerObjs.adCallsAPI[_0x574bd2] && (_0x269870 = livePlayerObjs.adCallsAPI[_0x574bd2].sdks);
    if (_0x269870 && Array.isArray(_0x269870)) {
        if (_0x269870.length < 1 || typeof getAdDataFromOutside === 'undefined') {
            getLiveAdCallsData(_0x152286);
        } else {
            parseLiveAdCallsDataFromVdn(_0x152286);
            var _0xc69e7c = livePlayerObjs.adCallsAPI[_0x574bd2].impression;
            if (_0xc69e7c) {
                var _0x35f175 = _0xc69e7c.length, _0x35b529 = '';
                for (var _0x23288c = 0; _0x23288c < _0x35f175; _0x23288c++) {
                    _0x35b529 = _0xc69e7c[_0x23288c];
                    _0x35b529 && getApiByImage(_0x35b529);
                }
            }
        }
        return;
    }
    if (!livePlayerObjs.adCallsAPI[_0x574bd2] || !livePlayerObjs.adCallsAPI[_0x574bd2].guid) {
        getLiveAdCallsData(_0x152286);
        return;
    }
    var _0x3c23a9 = new Date().getTime().toString().slice(0, 10), _0x264b4d = '', _0x31031f = '47899B86370B879139C08EA3B5E88267', _0x136283 = '';
    typeof getCookie_vdn == 'function' && (!getCookie_vdn('Fingerprint') ? typeof getLivefingerprint2 == 'function' && typeof getLivefingerprint2 != 'undefined' && !livePlayerObjs.isFingerprintJsLoading && getLivefingerprint2() : _0x136283 = getCookie_vdn('Fingerprint'));
    var _0x264b4d = setH5Str(_0x3c23a9 + '2049' + _0x31031f + _0x136283).toUpperCase(), _0x353c74 = 'http://vdnad.apps.cntv.cn/api/getIpadInfoAd.do?pid=' + livePlayerObjs.adCallsAPI[_0x574bd2].guid + '&tai=ipad&client=html5';
    livePlayerObjs.isHttps === 'true' && (_0x353c74 = 'https://vdnad.apps.cntv.cn/api/getIpadInfoAd.do?pid=' + livePlayerObjs.adCallsAPI[_0x574bd2].guid + '&tai=ipad&client=html5');
    isIPad() ? _0x353c74 += '&im=1' : _0x353c74 += '&im=0';
    _0x353c74 += '&tsp=' + _0x3c23a9 + '&vn=' + '2049' + '&vc=' + _0x264b4d + '&uid=' + _0x136283 + '&wlan=' + '';
    _0x353c74 += '&jsonp=liveAdCallsData';
    loadLiveScript(_0x353c74, parseLiveAdCallsDataFromVdn, _0x152286, getLiveAdCallsData, 12000);
    livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].loadTime = 0;
    livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].cdnCode = '';
    isUseAliMonitor && sendLiveAliAdCallsRequestData(_0x152286, 'play.1.40');
    if (typeof livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].eventExposure === 'string' && livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].eventExposure.indexOf('http') !== -1) {
        var _0x526b27 = livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].eventExposure;
        getApiByImage(_0x526b27);
    }
    if (typeof livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].eventExposure1 === 'string' && livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].eventExposure1.indexOf('http') !== -1) {
        var _0x526b27 = livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].eventExposure1;
        getApiByImage(_0x526b27);
    }
    if (typeof livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].startcount === 'string' && livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].startcount.indexOf('http') !== -1) {
        var _0x526b27 = livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].startcount;
        getApiByImage(_0x526b27);
    }
}
function returnAdcallsDataFromOutsideWhenError(_0x4c385d, _0x5a4cac, _0x4737a3) {
    var _0x41461b = livePlayerObjs.outsideAdcallsNum;
    livePlayerObjs.adCallsAPI[_0x41461b] && (livePlayerObjs.adCallsAPI[_0x41461b].sdks = null, livePlayerObjs.adCallsAPI[_0x41461b].guid = '', livePlayerObjs.adCallsAPI[_0x41461b].url = '', livePlayerObjs.adCallsAPI[_0x41461b].duration = 0, livePlayerObjs.adCallsAPI[_0x41461b].clickUrl = '');
    parseLiveAdCallsDataFromApi(_0x4737a3);
}
function returnAdcallsDataFromOutside(_0x268f55, _0x467a81, _0x4d9437) {
    ;
    !_0x595902 || !_0x595902[_0x4b48ab(998)] ? livePlayerObjs[_0x4b48ab(876)][_0x481786] && (livePlayerObjs[_0x4b48ab(876)][_0x481786][_0x4b48ab(1070)] = null, livePlayerObjs[_0x4b48ab(876)][_0x481786][_0x4b48ab(669)] = '', livePlayerObjs.adCallsAPI[_0x481786][_0x4b48ab(998)] = '', livePlayerObjs[_0x4b48ab(876)][_0x481786].duration = 0, livePlayerObjs[_0x4b48ab(876)][_0x481786].clickUrl = '', livePlayerObjs[_0x4b48ab(876)][_0x481786][_0x4b48ab(836)] = null, livePlayerObjs[_0x4b48ab(876)][_0x481786].impression = null) : livePlayerObjs.adCallsAPI[_0x481786] && (livePlayerObjs[_0x4b48ab(876)][_0x481786][_0x4b48ab(669)] = '', livePlayerObjs.adCallsAPI[_0x481786][_0x4b48ab(998)] = _0x595902[_0x4b48ab(998)], livePlayerObjs[_0x4b48ab(876)][_0x481786].duration = _0x595902[_0x4b48ab(592)] - 0 > 0 ? _0x595902[_0x4b48ab(592)] - 0 : 15, livePlayerObjs.adCallsAPI[_0x481786][_0x4b48ab(882)] = _0x595902[_0x4b48ab(882)] ? _0x595902[_0x4b48ab(882)] : '', livePlayerObjs[_0x4b48ab(876)][_0x481786][_0x4b48ab(671)] = _0x595902[_0x4b48ab(671)], livePlayerObjs.adCallsAPI[_0x481786][_0x4b48ab(433)] = _0x595902[_0x4b48ab(433)], livePlayerObjs[_0x4b48ab(876)][_0x481786][_0x4b48ab(385)] = _0x595902[_0x4b48ab(385)], livePlayerObjs[_0x4b48ab(876)][_0x481786][_0x4b48ab(1054)] = _0x595902[_0x4b48ab(1054)], livePlayerObjs[_0x4b48ab(876)][_0x481786][_0x4b48ab(907)] = _0x595902[_0x4b48ab(907)], livePlayerObjs[_0x4b48ab(876)][_0x481786][_0x4b48ab(836)] = _0x595902[_0x4b48ab(836)], livePlayerObjs[_0x4b48ab(876)][_0x481786][_0x4b48ab(311)] = _0x595902[_0x4b48ab(311)]);
    parseLiveAdCallsDataFromApi(_0x4d9437);
}
function sendLiveMonitorMsg(_0x4623dc) {
    var _0x5e94ce = _0x4623dc;
    if (_0x5e94ce) {
        var _0x599a25 = /macintosh|mac os x/i.test(navigator.userAgent) && /safari/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent), _0x5db445 = /firefox/i.test(navigator.userAgent), _0x201a7c = _0x599a25 || _0x5db445, _0x1dc9f2 = _0x5e94ce.length, _0x404123 = '';
        for (var _0x1e9415 = 0; _0x1e9415 < _0x1dc9f2; _0x1e9415++) {
            _0x404123 = _0x5e94ce[_0x1e9415];
            if (_0x404123) {
                if (_0x201a7c) {
                    var _0x13c2d7 = Date.now();
                    _0x404123.indexOf('?') > 0 ? _0x404123 += '&clickTm=' + _0x13c2d7 : _0x404123 += '?clickTm=' + _0x13c2d7;
                }
                getApiByImage(_0x404123);
            }
        }
    }
}
function getApiByImage(_0x2b10e9) {
    var _0x23fac5 = new Image();
    _0x23fac5.style.display = 'none';
    _0x23fac5.src = _0x2b10e9;
}
function parseLiveAdCallsDataFromVdn(_0x54e7a7) {
    var _0x10953c = null;
    livePlayerObjs[_0x1fec31(1092)] = true;
    try {
        var _0x10953c = null;
        livePlayerObjs[_0x1fec31(876)][livePlayerObjs[_0x1fec31(1045)]] && (_0x21d7b9 = livePlayerObjs.adCallsAPI[livePlayerObjs[_0x1fec31(1045)]][_0x1fec31(1070)]);
        _0x21d7b9 ? (_0x10953c = {}, _0x10953c[_0x1fec31(834)] = 1, _0x3762e9 = livePlayerObjs[_0x1fec31(876)][livePlayerObjs[_0x1fec31(1045)]][_0x1fec31(998)], _0x48e01c = '', _0x584323 = '', _0x4a4682 = '') : (_0x10953c = eval('(' + liveAdCallsData + ')'), _0x3762e9 = _0x10953c[_0x1fec31(564)], _0x48e01c = _0x10953c.title ? _0x10953c[_0x1fec31(1027)] : '', _0x584323 = _0x10953c[_0x1fec31(1096)], _0x4a4682 = _0x10953c[_0x1fec31(1036)][_0x1fec31(864)]);
    } catch (_0x279382) {
        _0x48e01c = _0x1fec31(429);
    }
    if (_0x48e01c === _0x1fec31(429) || _0x3762e9.length < 3 || _0x10953c[_0x1fec31(834)] != 1 || livePlayerObjs[_0x1fec31(1045)] - livePlayerObjs[_0x1fec31(876)][_0x1fec31(1067)] >= 0) {
        livePlayerObjs[_0x1fec31(1045)] += 1;
        getLiveAdCallsDataFromVdn(_0x54e7a7, livePlayerObjs.adCallsPlayingNum);
    } else {
        livePlayerObjs.adCallsAPI[livePlayerObjs[_0x1fec31(1045)]].title = _0x48e01c;
        livePlayerObjs[_0x1fec31(876)][livePlayerObjs.adCallsPlayingNum][_0x1fec31(1066)] = _0x3762e9;
        livePlayerObjs[_0x1fec31(876)][livePlayerObjs[_0x1fec31(1045)]][_0x1fec31(815)] = _0x584323;
        livePlayerObjs[_0x1fec31(876)][livePlayerObjs[_0x1fec31(1045)]][_0x1fec31(1050)] = _0x4a4682;
        playLiveAdCalls(_0x54e7a7);
        ;
        if (livePlayerObjs.adCallsAPI[_0x410be2][_0x1fec31(592)]) {
            ;
            if (_0x42c03a > 0) {
                if (_0x42c03a < 5) {
                    _0x42c03a = 5;
                } else {
                    _0x42c03a < 20 ? _0x42c03a = parseInt(_0x42c03a * 0.9) : _0x42c03a = parseInt(_0x42c03a * 0.8);
                }
                clearInterval(livePlayerObjs[_0x54e7a7.divId][_0x1fec31(893)]);
                ;
                livePlayerObjs[_0x54e7a7[_0x1fec31(492)]][_0x1fec31(893)] = setInterval(function () {
                    var _0x485021 = _0x1fec31;
                    !livePlayerObjs[_0x54e7a7[_0x485021(492)]][_0x485021(379)] && (isIPad() ? !livePlayerObjs[_0x54e7a7.divId].isHidden && _0x3c9d67++ : _0x3c9d67++);
                    _0x3c9d67 - _0x42c03a * 2 >= 0 && clearInterval(livePlayerObjs[_0x54e7a7.divId][_0x485021(893)]);
                    !_0xb041dc && _0x410be2 == livePlayerObjs[_0x485021(1045)] && !livePlayerObjs[_0x54e7a7[_0x485021(492)]][_0x485021(800)] && _0x3c9d67 === _0x42c03a * 2 * 1000 && !livePlayerObjs[_0x54e7a7[_0x485021(492)]][_0x485021(379)] && (_0xb041dc = true, playNextLiveAdCalls(_0x54e7a7));
                }, 1000);
            }
        }
    }
}
function liveStoreAdcallsData() {
    var _0x4a6b43 = '', _0x273fb8 = '', _0x11240d = null, _0xb3fca3 = '';
    livePlayerObjs.adCallsAPI && livePlayerObjs.adCallsAPI.length > 0 && (_0x4a6b43 = livePlayerObjs.adCallsAPI[0].tai, _0x273fb8 = livePlayerObjs.adCallsAPI[0].divId, livePlayerObjs.adCallsAPI[0].storetime = Date.parse(new Date()), _0x4a6b43 && _0x273fb8 && typeof localStorage !== 'undefined' && localStorage.setItem && (_0xb3fca3 = 'd' + _0x273fb8 + '@@@' + _0x4a6b43, typeof live_Ad_Calls === 'string' && live_Ad_Calls.length > 2 && (_0xb3fca3 += '@@@' + encodeURIComponent(live_Ad_Calls)), typeof localStorage !== 'undefined' && localStorage.getItem && (_0x11240d = localStorage.getItem('liveAdCalls')), _0x11240d ? _0x11240d = JSON.parse(_0x11240d) : _0x11240d = {}, _0x11240d[_0xb3fca3] = livePlayerObjs.adCallsAPI, localStorage.setItem('liveAdCalls', JSON.stringify(_0x11240d))));
}
function liveGetAdcallsData(_0x309d98) {
    var _0x1da848 = null, _0x475b86 = _0x309d98.tai, _0x31acde = _0x309d98.divId, _0x1da848 = null, _0x5213cb = null, _0x45a852 = 0, _0x18ac82 = Date.parse(new Date()), _0x1bccec = 15000, _0x56aa45 = 0;
    _0x475b86 && _0x31acde && (_0x5213cb = 'd' + _0x31acde + '@@@' + _0x475b86, typeof live_Ad_Calls === 'string' && live_Ad_Calls.length > 2 && (_0x5213cb += '@@@' + encodeURIComponent(live_Ad_Calls)), typeof localStorage !== 'undefined' && localStorage.getItem && (_0x1da848 = localStorage.getItem('liveAdCalls'), _0x1da848 = JSON.parse(_0x1da848), _0x1da848 && (livePlayerObjs.adCallsAPI = _0x1da848[_0x5213cb]), Array.isArray(livePlayerObjs.adCallsAPI) && livePlayerObjs.adCallsAPI.length > 0 ? (_0x56aa45 = (livePlayerObjs.adCallsAPI[0].totalLength - 0) * 1000, _0x56aa45 && _0x1bccec - _0x56aa45 < 0 && (_0x1bccec = _0x56aa45), _0x45a852 = livePlayerObjs.adCallsAPI[0].storetime, _0x45a852 && _0x18ac82 - _0x45a852 - _0x1bccec > 0 && (livePlayerObjs.adCallsAPI = '')) : livePlayerObjs.adCallsAPI = ''));
}
function liveDeleteAdcallsData(_0x2802fc) {
    var _0x2dbd12 = null;
    typeof localStorage !== 'undefined' && localStorage.getItem && (_0x2dbd12 = localStorage.getItem('liveAdCalls'), _0x2dbd12 = JSON.parse(_0x2dbd12), _0x2dbd12 && _0x2dbd12[_0x2802fc] && (delete _0x2dbd12[_0x2802fc], typeof localStorage !== 'undefined' && localStorage.setItem && localStorage.setItem('liveAdCalls', JSON.stringify(_0x2dbd12))));
}
function parseLiveAdCallsDataFromApi(_0x5468f3) {
    ;
    if (_0x5468f3 && !_0x5468f3.divId) {
        var _0x22500e = 0;
        Array.isArray(_0x5468f3) && (_0x22500e = _0x5468f3.length);
        livePlayerObjs.adCallsAPI = [];
        livePlayerObjs.outsideAdcalls = [];
        for (var _0x22dce1 = 0; _0x22dce1 < _0x22500e; _0x22dce1++) {
            (_0x5468f3[_0x22dce1].guid || _0x5468f3[_0x22dce1].sdks && Array.isArray(_0x5468f3[_0x22dce1].sdks)) && (livePlayerObjs.adCallsAPI[_0x22dce1] = {}, livePlayerObjs.adCallsAPI[_0x22dce1].guid = _0x5468f3[_0x22dce1].guid, livePlayerObjs.adCallsAPI[_0x22dce1].duration = _0x5468f3[_0x22dce1].duration - 0 > 0 ? _0x5468f3[_0x22dce1].duration - 0 : 15, livePlayerObjs.adCallsAPI[_0x22dce1].clickUrl = _0x5468f3[_0x22dce1].clickUrl ? _0x5468f3[_0x22dce1].clickUrl : '', livePlayerObjs.adCallsAPI[_0x22dce1].eventExposure = _0x5468f3[_0x22dce1].eventExposure, livePlayerObjs.adCallsAPI[_0x22dce1].eventExposure1 = _0x5468f3[_0x22dce1].eventExposure1, livePlayerObjs.adCallsAPI[_0x22dce1].startcount = _0x5468f3[_0x22dce1].startcount, livePlayerObjs.adCallsAPI[_0x22dce1].monitorTime = _0x5468f3[_0x22dce1].monitorTime, livePlayerObjs.adCallsAPI[_0x22dce1].middlecount = _0x5468f3[_0x22dce1].middlecount, livePlayerObjs.adCallsAPI[_0x22dce1].monitor = _0x5468f3[_0x22dce1].monitor, livePlayerObjs.adCallsAPI[_0x22dce1].impression = _0x5468f3[_0x22dce1].impression, _0x5468f3[_0x22dce1].sdks && Array.isArray(_0x5468f3[_0x22dce1].sdks) && (livePlayerObjs.outsideAdcalls.push(_0x22dce1), livePlayerObjs.adCallsAPI[_0x22dce1].sdks = _0x5468f3[_0x22dce1].sdks));
        }
        Array.isArray(livePlayerObjs.adCallsAPI) && livePlayerObjs.adCallsAPI.length < 1 && (livePlayerObjs.adCallsAPI = '');
    } else {
        if (Array.isArray(livePlayerObjs.adCallsAPI) && livePlayerObjs.adCallsAPI.length > 0) {
            if (Array.isArray(livePlayerObjs.outsideAdcalls) && livePlayerObjs.outsideAdcalls.length > 0) {
                livePlayerObjs.outsideAdcallsGetEnd = false;
                livePlayerObjs.outsideAdcallsNum = livePlayerObjs.outsideAdcalls.pop();
                var _0x1e6eb5 = null;
                livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum] && (_0x1e6eb5 = livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].sdks);
                _0x1e6eb5 && Array.isArray(_0x1e6eb5) && (_0x1e6eb5.length < 1 || typeof getAdDataFromOutside === 'undefined' ? (livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum] && (livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].sdks = null, livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].guid = '', livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].url = '', livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].duration = 0, livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].clickUrl = '', livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].monitor = null, livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].impression = null), parseLiveAdCallsDataFromApi(_0x5468f3)) : getAdDataFromOutside('calls', _0x1e6eb5, returnAdcallsDataFromOutside, _0x5468f3, returnAdcallsDataFromOutsideWhenError, _0x5468f3));
                livePlayerObjs.getOutsideAdcallsTimer = setTimeout(function () {
                    ;
                    !livePlayerObjs.outsideAdcallsGetEnd && (livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum] && (livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].sdks = null, livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].guid = '', livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].url = '', livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].duration = 0, livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].clickUrl = '', livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].monitor = null, livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].impression = null), parseLiveAdCallsDataFromApi(_0x5468f3));
                }, 10000);
                return;
            }
            livePlayerObjs.outsideAdcallsGetEnd = true;
            livePlayerObjs.adCallsPlayingNum = 0;
            getLiveAdCallsDataFromVdn(_0x5468f3, livePlayerObjs.adCallsPlayingNum);
            livePlayerObjs.getOutsideAdcallsTimer !== undefined && clearTimeout(livePlayerObjs.getOutsideAdcallsTimer);
            livePlayerObjs.adCallsAPI.totalLength = 0;
            for (var _0x202d10 = 0; _0x202d10 < livePlayerObjs.adCallsAPI.length; _0x202d10++) {
                livePlayerObjs.adCallsAPI[_0x202d10] && livePlayerObjs.adCallsAPI[_0x202d10].duration > 0 && (livePlayerObjs.adCallsAPI.totalLength += livePlayerObjs.adCallsAPI[_0x202d10].duration - 0);
            }
            livePlayerObjs.adCallsAPI && livePlayerObjs.adCallsAPI.length > 0 && (livePlayerObjs.adCallsAPI[0].divId = _0x5468f3.divId, livePlayerObjs.adCallsAPI[0].tai = _0x5468f3.t, livePlayerObjs.adCallsAPI[0].totalLength = livePlayerObjs.adCallsAPI.totalLength);
            if (livePlayerObjs.adCallsAPI.totalLength - 0 > 0) {
                livePlayerObjs.adCallsAPI.totalLength = Math.round(livePlayerObjs.adCallsAPI.totalLength);
                clearInterval(livePlayerObjs[_0x5468f3.divId].adCallsErrorTotalTimer);
                var _0x265f98 = 0, _0x4fd77c = false;
                livePlayerObjs[_0x5468f3.divId].adCallsErrorTotalTimer = setInterval(function () {
                    ;
                    !livePlayerObjs[_0x5468f3.divId].isClosingAdcalls && (isIPad() ? !livePlayerObjs[_0x5468f3.divId].isHidden && _0x265f98++ : _0x265f98++);
                    _0x265f98 - livePlayerObjs.adCallsAPI.totalLength * 2 >= 0 && clearInterval(livePlayerObjs[_0x5468f3.divId].adCallsErrorTotalTimer);
                    !_0x4fd77c && !livePlayerObjs[_0x5468f3.divId].adCallsIsPlayed && !livePlayerObjs[_0x5468f3.divId].isClosingAdcalls && _0x265f98 - livePlayerObjs.adCallsAPI.totalLength * 2 === 0 && (_0x4fd77c = true, livePlayerObjs.adCallsAPI = '', livePlayerObjs.adCalls = '', playLiveVideo(_0x5468f3));
                }, 1000);
            }
        } else {
            livePlayerObjs.adCallsAPI = '';
            playLiveVideo(_0x5468f3);
        }
    }
}
function parseLiveAdCallsDataFromApiWhenError(_0x15e0a0) {
    ;
    if (livePlayerObjs.adCallsAPI && Array.isArray(livePlayerObjs.adCallsAPI) && livePlayerObjs.adCallsAPI.length > 0 || livePlayerObjs.adCallsAPI === '') {
        return;
    }
    playLiveVideo(_0x15e0a0);
}
function playNextLiveAdCalls(_0x18beef, _0x377300) {
    var _0x16ab24 = _0x377300 ? _0x377300 : window.event;
    if (!livePlayerObjs[_0x18beef.divId].adCallsIsPlayed) {
        if (document.getElementById('h5player_' + _0x18beef.divId).currentTime < 3 && _0x16ab24 && _0x16ab24.type === 'ended') {
            return;
        }
        isUseAliMonitor && sendLiveAliAdCallsRequestData(_0x18beef, 'play.1.43');
        livePlayerObjs.adCallsPlayingNum += 1;
        getLiveAdCallsDataFromVdn(_0x18beef, livePlayerObjs.adCallsPlayingNum);
    }
}
function playLiveAdCalls(_0x5cdfdc) {
    ;
    destroyH5LiveHls(_0x5cdfdc);
    if (isLiveHlsJsSupported()) {
        if (moduleInitialized) {
            createAdCallsLiveHls(_0x5cdfdc);
        } else {
            clearInterval(livePlayerObjs[_0x5cdfdc.divId].adCallsCanPlayTimer);
            var _0x2e2f60 = 0, _0x4441dc = false;
            livePlayerObjs[_0x5cdfdc.divId].adCallsCanPlayTimer = setInterval(function () {
                ;
                _0x2e2f60 += 100;
                !_0x4441dc && (_0x2e2f60 - 6000 >= 0 || moduleInitialized) && (_0x4441dc = true, clearInterval(livePlayerObjs[_0x5cdfdc.divId].adCallsCanPlayTimer), createAdCallsLiveHls(_0x5cdfdc));
            }, 100);
        }
    } else {
        createAdCallsLiveHls(_0x5cdfdc);
    }
    livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].startLoad = Date.parse(new Date());
    livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].loadTime = 0;
    isUseAliMonitor && sendLiveAliAdCallsRequestData(_0x5cdfdc, 'play.1.41');
}
function returnAdPauseDataFromOutsideWhenError(_0x4fe11f, _0x479b30, _0x54f166) {
}
function returnAdPauseDataFromOutside(_0x29b816, _0x26c64b, _0x577f27) {
    ;
    if (!_0x2429b9 || !_0x2429b9[_0x166785(998)]) {
        returnAdPauseDataFromOutsideWhenError('pause', _0x166785(829), _0x577f27);
    } else {
        ;
        if (livePlayerObjs[_0x166785(982)][_0x5a94c5]) {
            livePlayerObjs[_0x166785(982)][_0x5a94c5][_0x166785(998)] = _0x2429b9[_0x166785(998)];
            livePlayerObjs[_0x166785(982)][_0x5a94c5][_0x166785(882)] = _0x2429b9[_0x166785(882)] ? _0x2429b9[_0x166785(882)] : '';
            livePlayerObjs.adPauseAPI[_0x5a94c5].eventExposure = _0x2429b9[_0x166785(671)];
            livePlayerObjs[_0x166785(982)][_0x5a94c5][_0x166785(433)] = _0x2429b9[_0x166785(433)];
            livePlayerObjs[_0x166785(982)][_0x5a94c5][_0x166785(836)] = _0x2429b9[_0x166785(836)];
            livePlayerObjs.adPauseAPI[_0x5a94c5][_0x166785(311)] = _0x2429b9[_0x166785(311)];
            livePlayerObjs[_0x166785(982)][_0x5a94c5].sdks = null;
            LiveAdPause[_0x166785(1053)][_0x166785(1121)](_0x577f27);
            ;
            if (_0x487fc1) {
                ;
                for (;; _0x2d2fd3 < _0x1a5c0f; _0x2d2fd3++) {
                    _0x28fa3f = _0x487fc1[_0x2d2fd3];
                    _0x28fa3f && getApiByImage(_0x28fa3f);
                }
            }
        }
    }
}
function parseLiveAdBannerDataFromApi(_0x5ea207) {
    ;
    if (_0x5ea207 && !_0x5ea207.divId) {
        var _0x3c5898 = 0;
        Array.isArray(_0x5ea207) && (_0x3c5898 = _0x5ea207.length);
        livePlayerObjs.adBannerAPI = [];
        for (var _0xe5d7b0 = 0; _0xe5d7b0 < _0x3c5898; _0xe5d7b0++) {
            if (_0x5ea207[_0xe5d7b0].url && (_0x5ea207[_0xe5d7b0].url.indexOf('.mp4') > 0 || _0x5ea207[_0xe5d7b0].url.indexOf('.m3u8') > 0)) {
                continue;
            }
            (_0x5ea207[_0xe5d7b0].url || _0x5ea207[_0xe5d7b0].sdks && Array.isArray(_0x5ea207[_0xe5d7b0].sdks)) && (livePlayerObjs.adBannerAPI[_0xe5d7b0] = {}, livePlayerObjs.adBannerAPI[_0xe5d7b0].url = _0x5ea207[_0xe5d7b0].url, livePlayerObjs.adBannerAPI[_0xe5d7b0].clickUrl = _0x5ea207[_0xe5d7b0].clickUrl ? _0x5ea207[_0xe5d7b0].clickUrl : '', livePlayerObjs.adBannerAPI[_0xe5d7b0].eventExposure = _0x5ea207[_0xe5d7b0].eventExposure, livePlayerObjs.adBannerAPI[_0xe5d7b0].eventExposure1 = _0x5ea207[_0xe5d7b0].eventExposure1, livePlayerObjs.adBannerAPI[_0xe5d7b0].monitor = _0x5ea207[_0xe5d7b0].monitor, livePlayerObjs.adBannerAPI[_0xe5d7b0].impression = _0x5ea207[_0xe5d7b0].impression, _0x5ea207[_0xe5d7b0].sdks && Array.isArray(_0x5ea207[_0xe5d7b0].sdks) && (livePlayerObjs.adBannerAPI[_0xe5d7b0].sdks = _0x5ea207[_0xe5d7b0].sdks));
        }
        Array.isArray(livePlayerObjs.adBannerAPI) && livePlayerObjs.adBannerAPI.length < 1 && (livePlayerObjs.adBannerAPI = '');
    } else {
        if (Array.isArray(livePlayerObjs.adBannerAPI) && livePlayerObjs.adBannerAPI.length > 0) {
            var _0x56be81 = livePlayerObjs[_0x5ea207.divId].adBannerNum ? livePlayerObjs[_0x5ea207.divId].adBannerNum : 0, _0x1aa548 = null;
            livePlayerObjs.adBannerAPI[_0x56be81] && (_0x1aa548 = livePlayerObjs.adBannerAPI[_0x56be81].sdks);
            if (_0x1aa548 && Array.isArray(_0x1aa548)) {
                livePlayerObjs.adBannerAPI[_0x56be81].sdks = null;
                _0x1aa548.length < 1 || typeof getAdDataFromOutside === 'undefined' ? returnAdBannerDataFromOutsideWhenError('banner', 'empty', _0x5ea207) : getAdDataFromOutside('banner', _0x1aa548, returnAdBannerDataFromOutside, _0x5ea207, returnAdBannerDataFromOutsideWhenError, _0x5ea207);
                return;
            }
            livePlayerObjs[_0x5ea207.divId].adBannerIsShow = true;
            var _0x5ad4eb = document.getElementById('adbanner_' + _0x5ea207.divId);
            !_0x5ad4eb ? new LiveAdBanner(_0x5ea207) : LiveAdBanner.prototype.adBannerShowOrHide(_0x5ea207, 'show');
        } else {
            livePlayerObjs.adBannerAPI = '';
            livePlayerObjs[_0x5ea207.divId].adBannerIsShow = false;
            !livePlayerObjs[_0x5ea207.divId].adBannerPlayed && setTimeout(function () {
                ;
                !livePlayerObjs[_0x5ea207.divId].adBannerPlayed && (livePlayerObjs[_0x5ea207.divId].adBannerPlayed = true, livePlayerObjs[_0x5ea207.divId].adBannerGetting = true, loadLiveScript(livePlayerObjs[_0x5ea207.divId].adBanner, parseLiveAdBannerDataFromApi, _0x5ea207, parseLiveAdBannerDataFromApiWhenError, 100), livePlayerObjs[_0x5ea207.divId].adBannerGetting && parseLiveAdBannerDataFromApi(_0x5ea207));
            }, 120000);
        }
    }
}
function parseLiveAdBannerDataFromApiWhenError(_0x566352) {
    ;
    livePlayerObjs.adBannerAPI = '';
    livePlayerObjs[_0x566352.divId].adBannerIsShow = false;
    !livePlayerObjs[_0x566352.divId].adBannerPlayed && setTimeout(function () {
        ;
        !livePlayerObjs[_0x566352.divId].adBannerPlayed && (livePlayerObjs[_0x566352.divId].adBannerPlayed = true, livePlayerObjs[_0x566352.divId].adBannerGetting = true, loadLiveScript(livePlayerObjs[_0x566352.divId].adBanner, parseLiveAdBannerDataFromApi, _0x566352, parseLiveAdBannerDataFromApiWhenError, 100), livePlayerObjs[_0x566352.divId].adBannerGetting && parseLiveAdBannerDataFromApi(_0x566352));
    }, 120000);
}
function returnAdBannerDataFromOutsideWhenError(_0x5a6957, _0x1d5c0f, _0x2de096) {
}
function returnAdBannerDataFromOutside(_0x573ac7, _0x4a7d16, _0x357b92) {
    ;
    if (!_0x450bf3 || !_0x450bf3[_0x553893(998)] || !_0x450bf3[_0x553893(882)]) {
        returnAdBannerDataFromOutsideWhenError(_0x553893(397), _0x553893(829), _0x357b92);
    } else {
        ;
        if (livePlayerObjs[_0x553893(634)][_0x5e1b7c]) {
            livePlayerObjs[_0x553893(634)][_0x5e1b7c].url = _0x450bf3[_0x553893(998)];
            livePlayerObjs.adBannerAPI[_0x5e1b7c][_0x553893(882)] = _0x450bf3[_0x553893(882)] ? _0x450bf3.clickUrl : '';
            livePlayerObjs[_0x553893(634)][_0x5e1b7c][_0x553893(671)] = _0x450bf3[_0x553893(671)];
            livePlayerObjs[_0x553893(634)][_0x5e1b7c][_0x553893(433)] = _0x450bf3[_0x553893(433)];
            livePlayerObjs[_0x553893(634)][_0x5e1b7c][_0x553893(836)] = _0x450bf3[_0x553893(836)];
            livePlayerObjs[_0x553893(634)][_0x5e1b7c][_0x553893(311)] = _0x450bf3[_0x553893(311)];
            livePlayerObjs[_0x553893(634)][_0x5e1b7c][_0x553893(1070)] = null;
            parseLiveAdBannerDataFromApi(_0x357b92);
            ;
            if (_0x2dd275) {
                ;
                for (;; _0xc9e99d < _0x2a099c; _0xc9e99d++) {
                    _0x2acc68 = _0x2dd275[_0xc9e99d];
                    _0x2acc68 && getApiByImage(_0x2acc68);
                }
            }
        }
    }
}
function initLiveH5Player(_0x2e206c) {
    ;
    livePlayerObjs[_0x2e206c.divId].video.playing = false;
    livePlayerObjs[_0x2e206c.divId].adCallsIsPlayed = false;
    _0x2e206c.isVip === 'true' && (_0x2e206c.islogin = 'true');
    var _0x26226c = document.getElementById('error_msg_' + _0x2e206c.divId), _0x4fe082 = false;
    _0x26226c && (_0x4fe082 = _0x26226c.style.display !== 'none' && _0x26226c.innerHTML.length > 2 && _0x26226c.innerHTML.indexOf('鍚\uFFFD') === -1);
    if (_0x2e206c.playerType === 'hw' && _0x4fe082) {
        return;
    }
    var _0x169ff8 = document.getElementById('h5player_' + _0x2e206c.divId);
    if (livePlayerObjs[_0x2e206c.divId].adCalls && livePlayerObjs[_0x2e206c.divId].adCalls.length > 3 && livePlayerObjs[_0x2e206c.divId].vdn.public === '1' && !_0x4fe082) {
        livePlayerObjs.adCallsPlayingNum = 0;
        _0x169ff8.addEventListener('ended', playNextLiveAdCalls.bind(null, _0x2e206c), false);
        _0x169ff8.addEventListener('play', liveAdCallsStartPlay.bind(null, _0x2e206c), false);
        var _0x57c8d7 = false;
        Array.isArray(livePlayerObjs.adCallsAPI) && livePlayerObjs.adCallsAPI.length > 0 && (livePlayerObjs.adCallsAPI[0].tai === _0x2e206c.t && (_0x57c8d7 = true));
        _0x57c8d7 ? parseLiveAdCallsDataFromApi(_0x2e206c) : Array.isArray(livePlayerObjs.adCallsAPI) && livePlayerObjs.adCallsAPI.length > 0 ? parseLiveAdCallsDataFromApi(_0x2e206c) : loadLiveScript(livePlayerObjs[_0x2e206c.divId].adCalls, parseLiveAdCallsDataFromApi, _0x2e206c, parseLiveAdCallsDataFromApiWhenError, 100, 12000);
    } else {
        _0x2e206c.playerType === 'liveback' && (_0x2e206c.st && _0x2e206c.et || _0x2e206c.start && _0x2e206c.end) ? (createLivebackPlayer(_0x2e206c), _0x2e206c.st = '', _0x2e206c.et = '') : playLiveVideo(_0x2e206c);
        if (!isIPad() && _0x2e206c.hasBarrage === 'true' && !isLiveBarrageJsLoaded && _0x2e206c.barrageitemID && _0x2e206c.barrageApp) {
            var _0xb7295e = '//js.player.cntv.cn/creator/html5player_barrage.js', _0x3fe507 = 3;
            typeof barrageRows !== 'undefined' && (_0x3fe507 = barrageRows);
            var _0x638689 = 1;
            typeof barrageSpeed !== 'undefined' && (_0x638689 = barrageSpeed - 0);
            LazyLoad.js(_0xb7295e, function () {
                ;
                isLiveBarrageJsLoaded = true;
                if (typeof Html5PlayerBarrage !== 'undefined') {
                    var _0x5cac08 = _0x2e206c.barrageitemID, _0x150adf = _0x2e206c.barrageApp, _0x36e2ca = {
                            'itemid': _0x5cac08,
                            'app': _0x150adf,
                            'numOfRows': _0x3fe507,
                            'speed': _0x638689
                        };
                    new Html5PlayerBarrage(_0x2e206c.divId, _0x36e2ca);
                }
            });
        }
    }
}
function getRandom() {
    var _0x228b4f = new Date();
    return _0x228b4f.getTime();
}
function liveCheckVdnReturnMsg(_0x47ad4e, _0x40657e) {
    var _0x345cb5 = '', _0x1d4226 = true, _0x226e8e = 'video';
    if (_0x47ad4e.ack === 'no') {
        _0x1d4226 = false;
        _0x345cb5 = liveStatusMsg['ack_no_and_status_' + _0x47ad4e.status];
        !_0x345cb5 && (_0x345cb5 = liveStatusMsg.ack_no);
    } else {
        if (_0x47ad4e.status === '0') {
            _0x345cb5 = liveStatusMsg.status_0;
            _0x1d4226 = false;
        } else {
            _0x47ad4e.public === '0' ? (_0x47ad4e.video_protect && _0x47ad4e.audio_protect && (_0x345cb5 = liveStatusMsg['video_protect_' + _0x47ad4e.video_protect + '_and_audio_protect_' + _0x47ad4e.audio_protect], _0x47ad4e.public === '0' && _0x47ad4e.audio_protect === '3' && (_0x47ad4e.hls_url && _0x47ad4e.hls_url.hls6 || _0x40657e ? _0x226e8e = 'audio' : (_0x345cb5 = '', _0x226e8e = 'video'))), !_0x345cb5 && (_0x345cb5 = liveStatusMsg.public_0_default)) : _0x345cb5 = '';
        }
    }
    return {
        'msg': _0x345cb5,
        'hasHlsAddr': _0x1d4226,
        'hlsType': _0x226e8e
    };
}
function getLiveCDNByRandom(_0x22c8c0) {
    var _0x344531 = null, _0x5f4962 = '', _0x46b95c = 0, _0x2f74b5 = 0, _0x23e8d8 = 0, _0x4f06fc = Math.floor(Math.random() * 100);
    return _0x22c8c0 && (_0x46b95c = _0x22c8c0.length, _0x2f74b5 = 100 / _0x46b95c, _0x23e8d8 = Math.floor(_0x4f06fc / _0x2f74b5), _0x23e8d8 - _0x46b95c > -1 && (_0x23e8d8 = 0), _0x5f4962 = _0x22c8c0[_0x23e8d8]), _0x5f4962 && (_0x344531 = {
        'cdnUrl': _0x5f4962,
        'cdnIndex': _0x23e8d8
    }), _0x344531;
}
function parseLiveStaticVideoMsgWhenError(_0x1b42b4, _0x5e209f) {
    var _0x52311b = _0x1b42b4.vdnErrorMsg;
    if (livePlayerObjs[_0x1b42b4.divId].getStaticMsg) {
        return;
    }
    livePlayerObjs[_0x1b42b4.divId].videoUrlCount = 2;
    livePlayerObjs[_0x1b42b4.divId].timeshiftUrlCount = 2;
    if (livePlayerObjs[_0x1b42b4.divId].isBackupCdn) {
        createLiveHls(_0x1b42b4);
        return;
    }
    var _0x4435f3 = _0x1b42b4.vdnErrorMsg ? _0x1b42b4.vdnErrorMsg : 'VDN_REQUEST_FAILED';
    _0x52311b && livePlayerObjs[_0x1b42b4.divId].isNewVdn && !livePlayerObjs[_0x1b42b4.divId].isReportError && (livePlayerObjs[_0x1b42b4.divId].isReportError = true, setCntvLiveMetadata(_0x1b42b4, '690003', _0x4435f3));
    _0x1b42b4.vdnErrorMsg = '';
    showLivePlayerErrorMsg(_0x1b42b4);
}
function parseLiveStaticVideoMsg(_0x48cd8d, _0x2da74a, _0x3c4e38) {
    var _0x16d3eb = null, _0x5936b5 = '';
    livePlayerObjs[_0x48cd8d.divId].getStaticMsg = true;
    try {
        var _0x32cdac = null, _0x406585 = null;
        if (livePlayerObjs[_0x48cd8d.divId].encrypted !== true) {
            _0x16d3eb = JSON.parse(_0x3c4e38);
        } else {
            _0x3c4e38 = _0x3c4e38.trim();
            isIPad() ? (_0x32cdac = CryptoJS.enc.Base64.parse('0hdiziKsev1LRe24oGTMPwfg9f+kcCWQ56sxi+jMAKE='), _0x406585 = CryptoJS.enc.Base64.parse('QQ5Pe7EiIIUWIpqmJL0oGg==')) : (_0x32cdac = CryptoJS.enc.Base64.parse('JMo0DT+7XkLZcT1KE1Nv8rOXwxDc7UmOB7eVzx11MvU='), _0x406585 = CryptoJS.enc.Base64.parse('I6JulGGNroT8GVjO56ss6A=='));
            var _0x270a50 = CryptoJS.AES.decrypt(_0x3c4e38, _0x32cdac, {
                'mode': CryptoJS.mode.CBC,
                'padding': CryptoJS.pad.Pkcs7,
                'iv': _0x406585
            });
            _0x16d3eb = JSON.parse(_0x270a50.toString(CryptoJS.enc.Utf8));
        }
    } catch (_0x57f57d) {
        _0x5936b5 = 'parse_error';
    }
    livePlayerObjs[_0x48cd8d.divId].staticUrl = '';
    livePlayerObjs[_0x48cd8d.divId].encrypted = null;
    var _0x2ddf89 = null, _0x46524b = null, _0x3fa09d = null, _0x4b8980 = null, _0x313e84 = null, _0x2573fa = null, _0x45e264 = null, _0x2dc0fc = null, _0x2ad175 = null, _0x12a752 = false, _0x39fa18 = '', _0x2fc285 = '', _0x1c5aff = '', _0x5dfca6 = '', _0x22121b = '', _0xeb4265 = '', _0x1749a6 = _0x48cd8d.t, _0xcbb774 = _0x48cd8d.t, _0x180267 = _0x48cd8d.t, _0x4290ac = _0x48cd8d.t, _0x4656ae = _0x48cd8d.vdnErrorMsg;
    if (_0x5936b5 === 'parse_error' || _0x16d3eb && _0x16d3eb.live_static_switch === '0') {
        if (livePlayerObjs[_0x48cd8d.divId].isBackupCdn) {
            livePlayerObjs[_0x48cd8d.divId].videoUrlCount = 2;
            livePlayerObjs[_0x48cd8d.divId].timeshiftUrlCount = 2;
            createLiveHls(_0x48cd8d);
            return;
        }
        _0x5936b5 = _0x48cd8d.vdnErrorMsg ? _0x48cd8d.vdnErrorMsg : 'VDN_REQUEST_FAILED';
        _0x4656ae && livePlayerObjs[_0x48cd8d.divId].isNewVdn && !livePlayerObjs[_0x48cd8d.divId].isReportError && (livePlayerObjs[_0x48cd8d.divId].isReportError = true, setCntvLiveMetadata(_0x48cd8d, '690003', _0x5936b5));
        _0x48cd8d.vdnErrorMsg = '';
        showLivePlayerErrorMsg(_0x48cd8d);
        return;
    }
    var _0x270c0a = 0;
    if (_0x16d3eb && _0x16d3eb.live_policy) {
        _0x2ddf89 = _0x16d3eb.live_policy;
        _0x270c0a = _0x2ddf89.length;
        for (var _0x297054 = 0; _0x297054 < _0x270c0a; _0x297054++) {
            _0x46524b = _0x2ddf89[_0x297054];
            if (_0x46524b && _0x46524b.channels) {
                _0x3fa09d = _0x46524b.channels;
                for (var _0x39d02c = 0; _0x39d02c < _0x3fa09d.length; _0x39d02c++) {
                    if (_0x48cd8d.t === _0x3fa09d[_0x39d02c].channel) {
                        _0x12a752 = true;
                        _0x3fa09d[_0x39d02c].ext && (_0x180267 = _0x3fa09d[_0x39d02c].ext.hls_timebase || _0x180267, _0x4290ac = _0x3fa09d[_0x39d02c].ext.hls_pic || _0x4290ac, livePlayerObjs[_0x48cd8d.divId].isDrm ? (_0x1749a6 = _0x3fa09d[_0x39d02c].ext.hls_cdrm || _0x1749a6, _0xcbb774 = _0x3fa09d[_0x39d02c].ext.hls_cdrm_timeshift || _0xcbb774) : (_0x1749a6 = _0x3fa09d[_0x39d02c].ext.hls_nd || _0x1749a6, _0xcbb774 = _0x3fa09d[_0x39d02c].ext.hls_nd_timeshift || _0xcbb774));
                        break;
                    }
                }
                if (_0x12a752) {
                    _0x4b8980 = _0x46524b.cn_manifest;
                    _0x48cd8d.isNotMainland && (_0x4b8980 = _0x46524b.fn_manifest);
                    if (_0x4b8980) {
                        if (livePlayerObjs[_0x48cd8d.divId].isDrm) {
                            _0x313e84 = _0x4b8980.hls_cdrm;
                            if (_0x48cd8d.isLive4k === 'true' && _0x4b8980.hls_nd_4k) {
                                livePlayerObjs[_0x48cd8d.divId].is4kHls = 'true';
                                _0x313e84 = _0x4b8980.hls_nd_4k;
                                if (!checkLiveBlueSupport()) {
                                    showLivePlayerMsg(_0x48cd8d, '褰撳墠娴忚\uE74D鍣ㄧ増鏈\uE0FF笉鏀\uE21B寔4K鎾\uE15F斁锛岃\uE1EC鏇存崲鍏朵粬娴忚\uE74D鍣ㄦ垨鏇存柊鐗堟湰銆\uFFFD');
                                    return;
                                }
                            }
                            _0x2573fa = _0x4b8980.hls_cdrm_timeshift ? _0x4b8980.hls_cdrm_timeshift : _0x313e84;
                        } else {
                            _0x313e84 = _0x4b8980.hls_nd;
                            _0x2573fa = _0x4b8980.hls_nd_timeshift ? _0x4b8980.hls_nd_timeshift : _0x313e84;
                        }
                        _0x313e84 && (_0x2ad175 = getLiveCDNByRandom(_0x313e84), _0x2ad175 && _0x2ad175.cdnUrl && (_0x39fa18 = _0x2ad175.cdnUrl, _0x313e84.splice(_0x2ad175.cdnIndex, 1), _0x2ad175 = getLiveCDNByRandom(_0x313e84), _0x2ad175 && _0x2ad175.cdnUrl ? _0x2fc285 = _0x2ad175.cdnUrl : _0x2fc285 = _0x39fa18), _0x39fa18 && (_0x39fa18 = _0x39fa18.replace('${channel}', _0x1749a6)), _0x2fc285 && (_0x2fc285 = _0x2fc285.replace('${channel}', _0x1749a6)));
                        _0x2573fa && (_0x2ad175 = getLiveCDNByRandom(_0x2573fa), _0x2ad175 && _0x2ad175.cdnUrl && (_0x1c5aff = _0x2ad175.cdnUrl, _0x2573fa.splice(_0x2ad175.cdnIndex, 1), _0x2ad175 = getLiveCDNByRandom(_0x2573fa), _0x2ad175 && _0x2ad175.cdnUrl ? _0x5dfca6 = _0x2ad175.cdnUrl : _0x5dfca6 = _0x1c5aff), _0x1c5aff && (_0x1c5aff = _0x1c5aff.replace('${channel}', _0xcbb774)), _0x2fc285 && (_0x5dfca6 = _0x5dfca6.replace('${channel}', _0xcbb774)));
                        _0x45e264 = _0x4b8980.hls_pic;
                        _0x45e264 && (_0x2ad175 = getLiveCDNByRandom(_0x45e264), _0x2ad175 && _0x2ad175.cdnUrl && (_0x22121b = _0x2ad175.cdnUrl), _0x22121b && (_0x22121b = _0x22121b.replace('${channel}', _0x4290ac)));
                        _0x2dc0fc = _0x4b8980.hls_timebase;
                        _0x2dc0fc && (_0x2ad175 = getLiveCDNByRandom(_0x2dc0fc), _0x2ad175 && _0x2ad175.cdnUrl && (_0xeb4265 = _0x2ad175.cdnUrl), _0xeb4265 && (_0xeb4265 = _0xeb4265.replace('${channel}', _0x180267)));
                    }
                    break;
                }
            }
        }
    }
    if (livePlayerObjs[_0x48cd8d.divId].isBackupCdn) {
        livePlayerObjs[_0x48cd8d.divId].videoUrlCount === 0 && (_0x39fa18 && (livePlayerObjs[_0x48cd8d.divId].video.liveUrl = _0x39fa18), _0x2fc285 && (livePlayerObjs[_0x48cd8d.divId].video.backupUrl = _0x2fc285));
        livePlayerObjs[_0x48cd8d.divId].videoUrlCount === 1 && (_0x39fa18 && (livePlayerObjs[_0x48cd8d.divId].video.backupUrl = _0x39fa18));
        livePlayerObjs[_0x48cd8d.divId].timeshiftUrlCount === 0 && (_0x1c5aff && (livePlayerObjs[_0x48cd8d.divId].video.timeshiftUrl = _0x1c5aff), _0x5dfca6 && (livePlayerObjs[_0x48cd8d.divId].video.timeshiftBackupUrl = _0x5dfca6));
        livePlayerObjs[_0x48cd8d.divId].timeshiftUrlCount === 1 && (_0x1c5aff && (livePlayerObjs[_0x48cd8d.divId].video.timeshiftBackupUrl = _0x1c5aff));
        livePlayerObjs[_0x48cd8d.divId].isLive ? livePlayerObjs[_0x48cd8d.divId].video.url = _0x39fa18 : livePlayerObjs[_0x48cd8d.divId].video.url = _0x1c5aff;
        livePlayerObjs[_0x48cd8d.divId].videoUrlCount = 2;
        livePlayerObjs[_0x48cd8d.divId].timeshiftUrlCount = 2;
        createLiveHls(_0x48cd8d);
        return;
    }
    livePlayerObjs[_0x48cd8d.divId].videoUrlCount = 2;
    livePlayerObjs[_0x48cd8d.divId].timeshiftUrlCount = 2;
    if (_0x39fa18) {
        var _0x302985 = { ack: 'yes' };
        ;
        livePlayerObjs[_0x48cd8d.divId].isNewVdn ? (_0x302985.play = '1', _0x302985.default_stream = '', _0x302985.client_sid = '', _0x302985.manifest = {}, _0x302985.manifest.hls_cdrm = _0x39fa18, _0x302985.manifest.hls_cdrm_timeshift = _0x1c5aff, _0x302985.manifest.hls_nd = _0x39fa18, _0x302985.manifest.hls_nd_timeshift = _0x1c5aff, _0x302985.manifest.hls_pic = _0x22121b, _0x302985.manifest.hls_timebase = _0xeb4265, _0x302985.backup = {}, _0x302985.backup.hls_cdrm = _0x2fc285, _0x302985.backup.hls_cdrm_timeshift = _0x5dfca6, _0x302985.backup.hls_nd = _0x2fc285, _0x302985.backup.hls_nd_timeshift = _0x5dfca6, _0x302985.lc = {}, _0x302985.lc.ip = '', _0x302985.lc.country_code = '', _0x302985.lc.provice_code = '', _0x302985.lc.city_code = '', _0x302985.lc.isp_code = '', _0x302985 = JSON.stringify(_0x302985), _0x48cd8d.vdnRetryNum = 5, parseLiveDataFromVdnx(_0x48cd8d, false, _0x302985, true)) : (_0x302985.public = '1', _0x302985.default_stream = '', _0x302985.client_sid = '', _0x302985.hls_url = {}, _0x302985.hls_url.hls2 = _0x39fa18, _0x302985.flv_url = {}, _0x302985.flv_url.flv5 = _0xeb4265, _0x302985.hls_cdn_info = {}, _0x302985.hls_cdn_info.cdn_code = 'UNKONWN', _0x302985.lc = {}, _0x302985.lc.ip = '', _0x302985.lc.country_code = '', _0x302985.lc.provice_code = '', _0x302985.lc.city_code = '', _0x302985.lc.isp_code = '', html5VideoData = JSON.stringify(_0x302985), parseLiveDataFromVdn(_0x48cd8d));
    } else {
        _0x5936b5 = _0x48cd8d.vdnErrorMsg ? _0x48cd8d.vdnErrorMsg : 'VDN_REQUEST_FAILED';
        livePlayerObjs[_0x48cd8d.divId].isNewVdn && !livePlayerObjs[_0x48cd8d.divId].isReportError && (livePlayerObjs[_0x48cd8d.divId].isReportError = true, setCntvLiveMetadata(_0x48cd8d, '690003', _0x5936b5));
        _0x48cd8d.vdnErrorMsg = '';
        _0x48cd8d.vdnRetryNum = 5;
        showLivePlayerErrorMsg(_0x48cd8d);
        return;
    }
}
function getLiveStaticVideoMsg(_0x38b930) {
    var _0x1b43b7 = '';
    isIPad() ? _0x1b43b7 = 'https://api.live.cntv.cn/livestatic/zs/livestatic_config/html5/version.json' : _0x1b43b7 = 'https://api.live.cntv.cn/livestatic/zs/livestatic_config/pcweb/version.json';
    !_0x38b930.vdnRetryNum && (_0x38b930.vdnRetryNum = 0);
    !livePlayerObjs[_0x38b930.divId].isBackupCdn && _0x38b930.vdnRetryNum++;
    if (_0x38b930.vdnRetryNum - 4 > 0) {
        return;
    }
    livePlayerObjs[_0x38b930.divId].getStaticMsg = false;
    livePlayerObjs[_0x38b930.divId].isReportError = false;
    doLoadLiveDataByAjax(_0x1b43b7, '', getLiveStaticConf, _0x38b930, parseLiveStaticVideoMsgWhenError, 6000);
}
function getLiveStaticConf(_0x731405, _0x297f12, _0x3cc419) {
    var _0x1d3188 = 'http://js.player.cntv.cn/creator/static-mini.js';
    _0x731405.isHttps === 'true' && (_0x1d3188 = _0x1d3188.replace('http://', 'https://'));
    var _0x43a679 = null;
    livePlayerObjs[_0x731405.divId].staticUrl = '';
    livePlayerObjs[_0x731405.divId].encrypted = null;
    try {
        _0x43a679 = JSON.parse(_0x3cc419);
        _0x43a679 && _0x43a679.emconfig ? isIPad() ? _0x43a679 = _0x43a679.emconfig['2001'] : _0x43a679 = _0x43a679.emconfig['1001'] : _0x43a679 = null;
    } catch (_0x1a6350) {
        _0x43a679 = null;
    }
    if (!_0x43a679) {
        parseLiveStaticVideoMsgWhenError(_0x731405);
        return;
    }
    livePlayerObjs[_0x731405.divId].staticUrl = _0x43a679.channelFilePath;
    livePlayerObjs[_0x731405.divId].encrypted = _0x43a679.encrypted;
    if (!livePlayerObjs[_0x731405.divId].staticUrl) {
        parseLiveStaticVideoMsgWhenError(_0x731405);
        return;
    }
    typeof CryptoJS === 'undefined' && livePlayerObjs[_0x731405.divId].encrypted === true ? loadLiveScript(_0x1d3188, getLiveParseStaticJs, _0x731405, parseLiveStaticVideoMsgWhenError, 6000) : getLiveParseStaticJs(_0x731405);
}
function getLiveParseStaticJs(_0x48941c) {
    var _0x16327f = livePlayerObjs[_0x48941c.divId].staticUrl;
    if (!_0x16327f) {
        parseLiveStaticVideoMsgWhenError(_0x48941c);
        return;
    }
    doLoadLiveDataByAjax(_0x16327f, '', parseLiveStaticVideoMsg, _0x48941c, parseLiveStaticVideoMsgWhenError, 10000);
}
function parseLiveDataFromVdnWhenError(_0x4f0c0d, _0x11ba44) {
    ;
    if (livePlayerObjs[_0x4f0c0d.divId].isErrorDone) {
        return;
    }
    livePlayerObjs[_0x4f0c0d.divId].isErrorDone = true;
    if (typeof livePlayerObjs[_0x4f0c0d.divId].video.url !== 'string' || livePlayerObjs[_0x4f0c0d.divId].video.url.length < 10) {
        livePlayerObjs[_0x4f0c0d.divId].video.url = '';
        livePlayerObjs[_0x4f0c0d.divId].video.liveUrl = '';
        livePlayerObjs[_0x4f0c0d.divId].video.timeshiftUrl = '';
        livePlayerObjs[_0x4f0c0d.divId].video.backupUrl = '';
        livePlayerObjs[_0x4f0c0d.divId].video.timeshiftBackupUrl = '';
        createH5LivePlayerElement(_0x4f0c0d.divId);
        if (!_0x4f0c0d.vdnRetryNum && (!_0x11ba44 || _0x11ba44 === 'timeout')) {
            var _0x5a7764 = 'VDN_REQUEST_FAILED';
            _0x11ba44 === 'timeout' && (_0x5a7764 = 'VDN_REQUEST_TIMEOUT');
            setCntvLiveMetadata(_0x4f0c0d, '690003', _0x5a7764);
        }
        if (_0x4f0c0d.t !== 'cctv1') {
            if (!_0x4f0c0d.vdnRetryNum || _0x4f0c0d.vdnRetryNum - 1 < 1) {
                _0x4f0c0d.isBackupVdn = true;
                var _0x4d183a = document.getElementById('loading_' + _0x4f0c0d.divId);
                _0x4d183a && (_0x4d183a.style.display = 'block');
                setTimeout(function () {
                    ;
                    _0x4f0c0d.isAutoPlay = 'true';
                    _0x4f0c0d.posterImg = '';
                    createLivePlayer(_0x4f0c0d);
                    _0x4f0c0d.vdnRetryNum === undefined && (_0x4f0c0d.vdnRetryNum = 0);
                    _0x4f0c0d.vdnRetryNum++;
                }, 3000);
            } else {
                showLivePlayerErrorMsg(_0x4f0c0d);
            }
        }
    }
    if (_0x4f0c0d.t === 'cctv1') {
        var _0x2d371a = Math.floor(Math.random() * 100), _0x4e8fce = '', _0x2f3d17 = '', _0x42c569 = '', _0x181da0 = '';
        if (_0x2d371a < 33) {
            _0x2f3d17 = 'http://ldncctvwbcdali.v.myalicdn.com/ldncctvwbcd/cdrmldcctv1_1/index.m3u8';
            _0x42c569 = 'http://ldncctvwbndali.v.myalicdn.com/ldncctvwbnd/ldcctv1_2/index.m3u8';
            _0x181da0 = 'LIVE-HLS-CDN-ALI';
        } else {
            if (_0x2d371a >= 33 && _0x2d371a < 65) {
                _0x2f3d17 = 'http://ldncctvwbcdtxy.liveplay.myqcloud.com/ldncctvwbcd/cdrmldcctv1_1/index.m3u8';
                _0x42c569 = 'http://ldncctvwbndtxy.liveplay.myqcloud.com/ldncctvwbnd/ldcctv1_2/index.m3u8';
                _0x181da0 = 'LIVE-HLS-CDN-TXY';
            } else {
                if (_0x2d371a >= 65 && _0x2d371a < 80) {
                    _0x2f3d17 = 'http://ldncctvwbcdbd.a.bdydns.com/ldncctvwbcd/cdrmldcctv1_1/index.m3u8';
                    _0x42c569 = 'http://ldncctvwbndbd.a.bdydns.com/ldncctvwbnd/ldcctv1_2/index.m3u8';
                    _0x181da0 = 'LIVE-HLS-CDN-BD';
                } else {
                    if (_0x2d371a >= 80 && _0x2d371a < 89) {
                        _0x2f3d17 = 'http://ldncctvwbcdhwy.cntv.myhwcdn.cn/ldncctvwbcd/cdrmldcctv1_1/index.m3u8';
                        _0x42c569 = 'http://ldncctvwbndhwy.cntv.myhwcdn.cn/ldncctvwbnd/ldcctv1_2/index.m3u8';
                        _0x181da0 = 'LIVE-HLS-CDN-HW';
                    } else {
                        _0x2d371a >= 89 && _0x2d371a < 99 ? (_0x2f3d17 = 'http://ldncctvwbcdks.v.kcdnvip.com/ldncctvwbcd/cdrmldcctv1_1/index.m3u8', _0x42c569 = 'http://ldncctvwbndks.v.kcdnvip.com/ldncctvwbnd/ldcctv1_2/index.m3u8', _0x181da0 = 'LIVE-HLS-CDN-KS') : (_0x2f3d17 = 'http://ldncctvwbcdcnc.v.wscdns.com/ldncctvwbcd/cdrmldcctv1_1/index.m3u8', _0x42c569 = 'http://ldncctvwbndcnc.v.wscdns.com/ldncctvwbnd/ldcctv1_2/index.m3u8', _0x181da0 = 'LIVE-HLS-CDN-CNC2');
                    }
                }
            }
        }
        isIPad() ? _0x2f3d17 += '?b=200-1600' : _0x2f3d17 += '?b=200-2100';
        isLiveHlsJsSupported() && isWasmSupported() || isIosDrmPlayer(_0x4f0c0d) ? _0x4e8fce = _0x2f3d17 : _0x4e8fce = _0x42c569;
        _0x4f0c0d.isHttps === 'true' && (_0x4e8fce = _0x4e8fce.replace('http://', 'https://'));
        var _0x2d4150 = {
            ack: 'yes',
            public: '1',
            default_stream: '',
            client_sid: '',
            hls_url: {},
            hls_cdn_info: {},
            lc: {}
        };
        ;
        ;
        ;
        ;
        ;
        _0x2d4150.hls_url.hls2 = _0x4e8fce;
        ;
        _0x2d4150.hls_cdn_info.cdn_code = _0x181da0;
        ;
        _0x2d4150.lc.ip = '';
        _0x2d4150.lc.country_code = '';
        _0x2d4150.lc.provice_code = '';
        _0x2d4150.lc.city_code = '';
        _0x2d4150.lc.isp_code = '';
        _0x2d4150 = JSON.stringify(_0x2d4150);
        parseLiveDataFromVdn(_0x4f0c0d, false, _0x2d4150);
    }
}
function parseLiveDataFromVdn(_0xbfb3ad, _0x1f6526, _0x5feaaa) {
    ;
    _0xbfb3ad[_0x4d3451(704)] = 0;
    _0xbfb3ad[_0x4d3451(421)] = 0;
    livePlayerObjs[_0xbfb3ad.divId][_0x4d3451(973)] !== undefined && clearTimeout(livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(973)]);
    livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]].isErrorDone = true;
    ;
    _0xbfb3ad.isHttps === _0x4d3451(1171) && (_0x21344c = _0x4d3451(310));
    if (!_0x1f6526) {
        try {
            _0x2409d7 = _0x5feaaa ? _0x5feaaa : html5VideoData;
            _0x43671d = eval('(' + _0x2409d7 + ')');
            _0x464e8c = _0x43671d[_0x4d3451(602)];
            _0x464e8c !== undefined && _0x464e8c === '0' ? (_0x43671d[_0x4d3451(834)] = '0', _0x4e9122 = getLiveVdnTipMsg(_0x43671d[_0x4d3451(507)]), _0x43671d[_0x4d3451(342)] === '3' && (!_0x43671d[_0x4d3451(507)] && (_0x4e9122 = _0x4d3451(1014)), _0x43671d[_0x4d3451(564)] && _0x43671d[_0x4d3451(564)][_0x4d3451(630)] ? (_0x4e9122 += _0x4d3451(1031), livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(366)][_0x4d3451(363)] = _0x43671d[_0x4d3451(564)][_0x4d3451(630)]) : _0x4e9122 = getLiveVdnTipMsg(_0x43671d[_0x4d3451(507)]))) : _0x464e8c !== undefined && (_0x43671d[_0x4d3451(834)] = '1');
            if (_0x43671d[_0x4d3451(400)] === 'no') {
                typeof goldlog != 'undefined' && goldlog[_0x4d3451(736) + _0xbfb3ad[_0x4d3451(492)]] && typeof goldlog[_0x4d3451(736) + _0xbfb3ad.divId][_0x4d3451(425)] !== _0x4d3451(546) && (goldlog[_0x4d3451(736) + _0xbfb3ad[_0x4d3451(492)]][_0x4d3451(425)] = false);
                setCntvLiveMetadata(_0xbfb3ad, _0x4d3451(495), _0x4d3451(1013));
            } else {
                livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(742)][_0x4d3451(834)] = _0x43671d.public;
                livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]].vdn[_0x4d3451(841)] = _0x43671d.hls_cdn_info[_0x4d3451(864)];
                livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(742)][_0x4d3451(980)] = _0x43671d.client_sid;
                livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(742)][_0x4d3451(807)] = _0x43671d.lc.ip;
                livePlayerObjs[_0xbfb3ad.divId][_0x4d3451(742)].vdnCountryCode = _0x43671d.lc[_0x4d3451(892)];
                livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(742)][_0x4d3451(796)] = _0x43671d.lc[_0x4d3451(570)];
                livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]].vdn[_0x4d3451(359)] = _0x43671d.lc[_0x4d3451(944)];
                livePlayerObjs[_0xbfb3ad.divId][_0x4d3451(742)].vdnISPCode = _0x43671d.lc.isp_code;
                isLiveSdrmPlayer(_0xbfb3ad) ? _0x43671d[_0x4d3451(317)] && _0x43671d[_0x4d3451(317)][_0x4d3451(886)] ? _0x5c2801 = _0x43671d[_0x4d3451(317)][_0x4d3451(886)] : _0x5c2801 = _0x43671d.hls_url[_0x4d3451(432)] : _0x43671d.manifest && _0x43671d[_0x4d3451(913)][_0x4d3451(718)] ? _0x5c2801 = _0x43671d[_0x4d3451(913)].hls_nd : _0x5c2801 = _0x43671d.hls_url[_0x4d3451(432)];
                livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(366)][_0x4d3451(998)] = _0x5c2801;
                livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(366)].liveUrl = _0x5c2801;
                livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]].video[_0x4d3451(313)] = _0x5c2801;
                livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]].video[_0x4d3451(1052)] = _0x5c2801;
                livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(366)][_0x4d3451(517)] = _0x5c2801;
                _0x43671d[_0x4d3451(564)][_0x4d3451(630)] && (livePlayerObjs[_0xbfb3ad.divId][_0x4d3451(366)][_0x4d3451(675)] = _0x43671d[_0x4d3451(564)][_0x4d3451(630)]);
                if (livePlayerObjs[_0xbfb3ad.divId][_0x4d3451(1071)] === _0x4d3451(1019)) {
                    livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(919)] = 0;
                    livePlayerObjs[_0xbfb3ad.divId][_0x4d3451(551)] = [];
                    ;
                    if (typeof _0xbfb3ad[_0x4d3451(1039)] === _0x4d3451(881) && _0xbfb3ad[_0x4d3451(1039)][_0x4d3451(808)](_0x4d3451(336)) > 0) {
                        ;
                        if (_0xbfb3ad[_0x4d3451(1039)][_0x4d3451(808)]('resolution=2560') > 0) {
                            _0x405754 = 6000000;
                            _0x239634 = '4K';
                        } else {
                            if (_0xbfb3ad.others.indexOf('resolution=1080') > 0) {
                                _0x405754 = 3600000;
                                _0x239634 = _0x4d3451(614);
                            } else {
                                if (_0xbfb3ad[_0x4d3451(1039)][_0x4d3451(808)](_0x4d3451(501)) > 0) {
                                    _0x405754 = 1800000;
                                    _0x239634 = '720';
                                } else {
                                    if (_0xbfb3ad.others[_0x4d3451(808)]('resolution=540') > 0) {
                                        _0x405754 = 1350000;
                                        _0x239634 = _0x4d3451(496);
                                    } else {
                                        _0xbfb3ad[_0x4d3451(1039)][_0x4d3451(808)](_0x4d3451(314)) > 0 ? (_0x405754 = 900000, _0x239634 = '480') : (_0x405754 = _0x405754 = 600000, _0x239634 = _0x4d3451(831));
                                    }
                                }
                            }
                        }
                        (_0x239634 === _0x4d3451(831) || _0x239634 === _0x4d3451(821) || _0x239634 === _0x4d3451(496)) && (livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]].flvListLenWhenNoLogin = 1);
                        livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(551)] = [{
                                'bitrate': _0x405754,
                                'resolution': _0x239634,
                                'url': _0xbfb3ad[_0x4d3451(1039)]
                            }];
                        livePlayerObjs[_0xbfb3ad.divId][_0x4d3451(742)][_0x4d3451(344)] = _0x4d3451(1078);
                    } else {
                        _0x43671d[_0x4d3451(317)] && _0x43671d[_0x4d3451(317)][_0x4d3451(886)] && _0x43671d[_0x4d3451(317)][_0x4d3451(886)].indexOf(_0x4d3451(336)) > 0 && livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(551)][_0x4d3451(659)]({
                            'bitrate': 3600000,
                            'resolution': _0x4d3451(614),
                            'url': _0x43671d.flv_url[_0x4d3451(886)]
                        });
                        _0x43671d[_0x4d3451(317)] && _0x43671d[_0x4d3451(317)].flv2 && _0x43671d[_0x4d3451(317)][_0x4d3451(1097)].indexOf(_0x4d3451(336)) > 0 && livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]].flvList[_0x4d3451(659)]({
                            'bitrate': 1800000,
                            'resolution': '720',
                            'url': _0x43671d[_0x4d3451(317)][_0x4d3451(1097)]
                        });
                        _0x43671d[_0x4d3451(317)] && _0x43671d.flv_url[_0x4d3451(676)] && _0x43671d[_0x4d3451(317)][_0x4d3451(676)][_0x4d3451(808)](_0x4d3451(336)) > 0 && (livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(919)] = 1, livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(551)][_0x4d3451(659)]({
                            'bitrate': 1350000,
                            'resolution': _0x4d3451(496),
                            'url': _0x43671d.flv_url[_0x4d3451(676)]
                        }));
                        _0x43671d[_0x4d3451(317)] && _0x43671d[_0x4d3451(317)][_0x4d3451(670)] && _0x43671d[_0x4d3451(317)][_0x4d3451(670)][_0x4d3451(808)](_0x4d3451(336)) > 0 && (livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(919)] && (livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(919)] += 1), livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(551)][_0x4d3451(659)]({
                            'bitrate': 900000,
                            'resolution': _0x4d3451(821),
                            'url': _0x43671d[_0x4d3451(317)][_0x4d3451(670)]
                        }));
                        livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(551)][_0x4d3451(1067)] > 0 && _0x43671d.flv_cdn_info && _0x43671d.flv_cdn_info[_0x4d3451(864)] && (livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(742)][_0x4d3451(344)] = _0x43671d[_0x4d3451(954)][_0x4d3451(864)]);
                    }
                    livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]].flvList[_0x4d3451(1067)] < 1 && (livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]].flvList = [], livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(1071)] = _0x4d3451(575), livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]].others = _0xbfb3ad.others = '');
                }
                _0x43671d[_0x4d3451(834)] === '0' && !isTimeshift(_0xbfb3ad) && _0xbfb3ad.playerType !== _0x4d3451(362) && _0x464e8c === undefined && (_0x4e9122 = _0x4d3451(345), typeof LiveControlsBar === _0x4d3451(546) && !livePlayerObjs[_0x4d3451(450)] ? (livePlayerObjs.isLoadLiveJs = true, LazyLoad.js(_0x21344c, function () {
                    var _0xa00d16 = _0x4d3451;
                    createH5LivePlayerElement(_0xbfb3ad[_0xa00d16(492)]);
                })) : createH5LivePlayerElement(_0xbfb3ad[_0x4d3451(492)]));
                _0x43671d[_0x4d3451(1096)] && (livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]].video[_0x4d3451(815)] = _0x43671d.default_stream);
                currentLiveTimeData = null;
                _0x43671d[_0x4d3451(317)] && _0x43671d[_0x4d3451(317)][_0x4d3451(539)] && (livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(539)] = _0x43671d[_0x4d3451(317)][_0x4d3451(539)]);
            }
        } catch (_0x28a857) {
            _0x4e9122 = _0x4d3451(349);
            _0x43671d = {};
            setCntvLiveMetadata(_0xbfb3ad, _0x4d3451(495), _0x4d3451(751));
            typeof goldlog != _0x4d3451(546) && goldlog['h5player_' + _0xbfb3ad[_0x4d3451(492)]] && typeof goldlog[_0x4d3451(736) + _0xbfb3ad[_0x4d3451(492)]][_0x4d3451(425)] !== _0x4d3451(546) && (goldlog['h5player_' + _0xbfb3ad[_0x4d3451(492)]][_0x4d3451(425)] = false);
        }
        _0x4e9122 !== _0x4d3451(349) && typeof _0x43671d === _0x4d3451(1085) && _0x43671d && _0xbfb3ad[_0x4d3451(987)] !== 'liveback' && _0x464e8c === undefined && (_0x54cf1c = liveCheckVdnReturnMsg(_0x43671d), typeof _0x54cf1c === _0x4d3451(1085) && _0x54cf1c && (_0x4e9122 = _0x54cf1c[_0x4d3451(727)], _0x54cf1c[_0x4d3451(312)] === _0x4d3451(683) && _0x43671d[_0x4d3451(564)] && _0x43671d[_0x4d3451(564)].hls6 && (livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(366)][_0x4d3451(363)] = _0x43671d[_0x4d3451(564)][_0x4d3451(630)])));
        if (typeof _0x4e9122 === _0x4d3451(881) && _0x4e9122[_0x4d3451(1067)] > 1) {
            _0x4e9122 === _0x4d3451(349) && _0xbfb3ad.t === _0x4d3451(1063) ? (livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(1116)] = false, parseLiveDataFromVdnWhenError(_0xbfb3ad, _0x4e9122)) : _0x4e9122 === _0x4d3451(349) ? showLivePlayerErrorMsg(_0xbfb3ad) : (showLivePlayerMsg(_0xbfb3ad, _0x4e9122), setTimeout(function () {
                var _0x149484 = _0x4d3451;
                try {
                    var _0x185ca4 = document.getElementById(_0x149484(843) + _0xbfb3ad[_0x149484(492)]);
                    _0x185ca4 && document[_0x149484(1001)](_0xbfb3ad[_0x149484(492)]) && (_0x185ca4[_0x149484(655)][_0x149484(590)] = _0x149484(454));
                } catch (_0x228280) {
                }
            }, 1200));
            if (livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]] && livePlayerObjs[_0xbfb3ad.divId][_0x4d3451(366)] && !livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]].video[_0x4d3451(363)] && !livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(366)][_0x4d3451(998)]) {
                return;
            }
        }
    }
    createH5LivePlayerElement(_0xbfb3ad.divId);
    if (!isLiveEs6Supported()) {
        ;
        _0xa609fa && (isUseAliMonitor && (typeof goldlog != 'undefined' && goldlog[_0x4d3451(736) + _0xbfb3ad[_0x4d3451(492)]] && typeof goldlog['h5player_' + _0xbfb3ad[_0x4d3451(492)]][_0x4d3451(425)] !== 'undefined' ? (goldlog[_0x4d3451(736) + _0xbfb3ad[_0x4d3451(492)]][_0x4d3451(425)] = true, !livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(637)] && setCntvLiveMetadata(_0xbfb3ad, _0x4d3451(578)), setCntvLiveMetadata(_0xbfb3ad)) : setTimeout(function () {
            setCntvLiveMetadata(_0xbfb3ad);
        }, 300)), livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(366)].url.indexOf('cdrm') > 0 ? showLivePlayerMsg(_0xbfb3ad, _0x4d3451(875)) : (_0xa609fa[_0x4d3451(447)] = true, _0xa609fa.src = livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]].video[_0x4d3451(998)]));
    } else {
        if (!livePlayerObjs[_0x4d3451(450)]) {
            livePlayerObjs.isLoadLiveJs = true;
            loadLiveScript(_0x21344c, initLiveH5Player, _0xbfb3ad);
        } else {
            if (typeof LiveControlsBar !== _0x4d3451(546)) {
                clearInterval(livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(1156)]);
                initLiveH5Player(_0xbfb3ad);
            } else {
                ;
                livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]].loadLiveTimer = setInterval(function () {
                    var _0x472830 = _0x4d3451;
                    _0x51ad41++;
                    _0x51ad41 > 50 && clearInterval(livePlayerObjs[_0xbfb3ad.divId][_0x472830(1156)]);
                    typeof LiveControlsBar !== _0x472830(546) && (clearInterval(livePlayerObjs[_0xbfb3ad[_0x472830(492)]][_0x472830(1156)]), initLiveH5Player(_0xbfb3ad));
                }, 200);
            }
        }
    }
    isUseAliMonitor && (livePlayerObjs[_0xbfb3ad[_0x4d3451(492)]][_0x4d3451(637)] = true, setCntvLiveMetadata(_0xbfb3ad, _0x4d3451(578)));
}
function parseLiveDataFromVdnxWhenError(_0x3fed01, _0x178cfa) {
    var _0x53fa15 = '';
    if (livePlayerObjs[_0x3fed01.divId].isErrorDone) {
        return;
    }
    livePlayerObjs[_0x3fed01.divId].isErrorDone = true;
    livePlayerObjs[_0x3fed01.divId].video.url = '';
    livePlayerObjs[_0x3fed01.divId].video.liveUrl = '';
    livePlayerObjs[_0x3fed01.divId].video.timeshiftUrl = '';
    livePlayerObjs[_0x3fed01.divId].video.backupUrl = '';
    livePlayerObjs[_0x3fed01.divId].video.timeshiftBackupUrl = '';
    createH5LivePlayerElement(_0x3fed01.divId);
    _0x53fa15 = _0x178cfa ? _0x178cfa : 'VDN_REQUEST_FAILED';
    !_0x3fed01.vdnRetryNum && (_0x178cfa === 'timeout' && (_0x53fa15 = 'VDN_REQUEST_TIMEOUT'), _0x3fed01.vdnErrorMsg = _0x53fa15);
    if (!_0x3fed01.vdnRetryNum || _0x3fed01.vdnRetryNum - 1 < 2) {
        _0x3fed01.isBackupVdn = true;
        var _0xbd7252 = document.getElementById('loading_' + _0x3fed01.divId);
        _0xbd7252 && (_0xbd7252.style.display = 'block');
        !_0x3fed01.vdnRetryNum && (_0x3fed01.vdnRetryNum = 0);
        _0x3fed01.vdnRetryNum == 2 ? (_0x3fed01.isAutoPlay = 'true', _0x3fed01.posterImg = '', getLiveStaticVideoMsg(_0x3fed01), _0x3fed01.vdnRetryNum++) : setTimeout(function () {
            ;
            _0x3fed01.isAutoPlay = 'true';
            _0x3fed01.posterImg = '';
            createLivePlayer(_0x3fed01);
            _0x3fed01.vdnRetryNum++;
        }, 3000);
    } else {
        showLivePlayerErrorMsg(_0x3fed01);
    }
    setCntvLiveMetadata(_0x3fed01, '690003', _0x53fa15 + '_1.24');
}
function checkLiveBlueSupport() {
    var _0x3cffc0 = false;
    return typeof MediaSource !== 'undefined' && (MediaSource.isTypeSupported('video/mp4;codecs="hev1.1.6.L120.90"') && (_0x3cffc0 = true), MediaSource.isTypeSupported('video/mp4;codecs="hev1.2.4.L120.90"') && (_0x3cffc0 = true), MediaSource.isTypeSupported('video/mp4;codecs="hev1.3.E.L120.90"') && (_0x3cffc0 = true), MediaSource.isTypeSupported('video/mp4;codecs="hev1.4.10.L120.90"') && (_0x3cffc0 = true)), (getChromeVersion() < 107 || /firefox/i.test(navigator.userAgent)) && (_0x3cffc0 = false), _0x3cffc0;
}
function parseLiveDataFromVdnx(_0x2acebe, _0x1e6941, _0x7f6b03, _0xb53dee) {
    var _0x1fd8e5 = {}, _0x25ca86 = '', _0x279e47 = '';
    livePlayerObjs[_0x2acebe.divId].videoUrlCount = 0;
    livePlayerObjs[_0x2acebe.divId].timeshiftUrlCount = 0;
    var _0x32fbbf = '', _0x14adf5 = '', _0x188773 = null, _0x4ee894 = '', _0x5cf609 = null, _0x170c9a = '';
    _0x2acebe.cdnRetryNum = 0;
    _0x2acebe.cdnTimeshiftRetryNum = 0;
    livePlayerObjs[_0x2acebe.divId].vdnTimer !== undefined && clearTimeout(livePlayerObjs[_0x2acebe.divId].vdnTimer);
    livePlayerObjs[_0x2acebe.divId].isErrorDone = true;
    var _0x32d1d3 = 'http://js.player.cntv.cn/creator/liveplayer_controls.js';
    _0x2acebe.isHttps === 'true' && (_0x32d1d3 = 'https://js.player.cntv.cn/creator/liveplayer_controls.js');
    if (!_0x1e6941) {
        try {
            _0x5cf609 = _0x7f6b03;
            _0x1fd8e5 = JSON.parse(_0x5cf609);
            if (_0x1fd8e5.ack === 'no') {
                _0x14adf5 = 'ACK_NO';
                _0x32fbbf = getLiveVdnTipMsg(_0x1fd8e5.tip_msg, _0x1fd8e5);
            } else {
                _0x4ee894 = _0x1fd8e5.play;
                _0x4ee894 !== undefined && _0x4ee894 === '0' ? (_0x1fd8e5.public = '0', _0x32fbbf = getLiveVdnTipMsg(_0x1fd8e5.tip_msg, _0x1fd8e5), _0x1fd8e5.audio_protect === '3' && (!_0x1fd8e5.tip_msg && (_0x32fbbf = '鏆備笉鏀\uE21B寔鎾\uE15F斁璇ヨ\uE74B棰戝唴瀹癸紱<br />璇风偣鍑绘挱鏀炬寜閽\uE1BD敹鍚\uE101\uE11D鑺傜洰'), _0x1fd8e5.manifest && _0x1fd8e5.manifest.hls_audio ? (_0x32fbbf += '<span style=\'display:none;\'>璇风偣鍑绘挱鏀炬寜閽\uE1BD敹鍚\uE101\uE11D鑺傜洰</span>', livePlayerObjs[_0x2acebe.divId].video.audioUrl = _0x1fd8e5.manifest.hls_audio, livePlayerObjs[_0x2acebe.divId].video.defaultAudioUrl = _0x1fd8e5.manifest.hls_audio) : _0x32fbbf = getLiveVdnTipMsg(_0x1fd8e5.tip_msg))) : _0x4ee894 === undefined ? _0x14adf5 = 'VDN_PARSE_ERROR' : _0x1fd8e5.public = '1';
                if (_0x2acebe.isLive4k === 'true' && _0x1fd8e5.manifest && _0x1fd8e5.manifest.hls_nd_4k) {
                    _0x1fd8e5.manifest.hls_cdrm = _0x1fd8e5.manifest.hls_nd_4k;
                    livePlayerObjs[_0x2acebe.divId].is4kHls = 'true';
                    _0x1fd8e5.backup && _0x1fd8e5.backup.hls_cdrm && (_0x1fd8e5.backup.hls_cdrm = _0x1fd8e5.manifest.hls_cdrm);
                    if (!checkLiveBlueSupport()) {
                        showLivePlayerMsg(_0x2acebe, '褰撳墠娴忚\uE74D鍣ㄧ増鏈\uE0FF笉鏀\uE21B寔4K鎾\uE15F斁锛岃\uE1EC鏇存崲鍏朵粬娴忚\uE74D鍣ㄦ垨鏇存柊鐗堟湰銆\uFFFD');
                        return;
                    }
                }
                livePlayerObjs[_0x2acebe.divId].vdn.public = '1';
                livePlayerObjs[_0x2acebe.divId].vdn.cdnName = '';
                livePlayerObjs[_0x2acebe.divId].vdn.sid = _0x1fd8e5.client_sid;
                livePlayerObjs[_0x2acebe.divId].vdn.vdnIP = _0x1fd8e5.lc.ip;
                livePlayerObjs[_0x2acebe.divId].vdn.vdnCountryCode = _0x1fd8e5.lc.country_code;
                livePlayerObjs[_0x2acebe.divId].vdn.vdnProvinceCode = _0x1fd8e5.lc.provice_code || _0x1fd8e5.lc.province_code;
                livePlayerObjs[_0x2acebe.divId].vdn.vdnCityCode = _0x1fd8e5.lc.city_code;
                livePlayerObjs[_0x2acebe.divId].vdn.vdnISPCode = _0x1fd8e5.lc.isp_code;
                livePlayerObjs[_0x2acebe.divId].video.timeshiftUrl = '';
                if (livePlayerObjs[_0x2acebe.divId].isDrm) {
                    _0x1fd8e5.manifest && _0x1fd8e5.manifest.hls_cdrm ? (_0x25ca86 = _0x1fd8e5.manifest.hls_cdrm, livePlayerObjs[_0x2acebe.divId].videoUrlCount++) : _0x1fd8e5.manifest && _0x1fd8e5.manifest.hls_nd && (_0x25ca86 = _0x1fd8e5.manifest.hls_nd, livePlayerObjs[_0x2acebe.divId].videoUrlCount++);
                    _0x1fd8e5.manifest && _0x1fd8e5.manifest.hls_cdrm_timeshift ? (_0x279e47 = _0x1fd8e5.manifest.hls_cdrm_timeshift, livePlayerObjs[_0x2acebe.divId].timeshiftUrlCount++) : _0x1fd8e5.manifest && _0x1fd8e5.manifest.hls_nd_timeshift && (_0x279e47 = _0x1fd8e5.manifest.hls_nd_timeshift, livePlayerObjs[_0x2acebe.divId].timeshiftUrlCount++);
                } else {
                    if (_0x1fd8e5.manifest) {
                        _0x170c9a = _0x1fd8e5.manifest.hls_nd;
                        _0x170c9a && (_0x25ca86 = _0x170c9a, livePlayerObjs[_0x2acebe.divId].videoUrlCount++);
                        if (isIPad() && (!_0x170c9a || _0x170c9a.length < 4)) {
                            if (_0x2acebe.jumpToApp === 'true') {
                                showLivePlayerMsg(_0x2acebe, 'jumpToApp');
                                return;
                            }
                            if (!isIosDrmPlayer(_0x2acebe) && showNoDrmMsg(_0x2acebe)) {
                                return;
                            }
                        }
                    }
                    _0x1fd8e5.manifest && _0x1fd8e5.manifest.hls_nd_timeshift && (_0x279e47 = _0x1fd8e5.manifest.hls_nd_timeshift, livePlayerObjs[_0x2acebe.divId].timeshiftUrlCount++);
                }
                livePlayerObjs[_0x2acebe.divId].video.url = _0x25ca86;
                livePlayerObjs[_0x2acebe.divId].video.liveUrl = _0x25ca86;
                !_0x279e47 && (_0x279e47 = _0x25ca86);
                livePlayerObjs[_0x2acebe.divId].video.timeshiftUrl = _0x279e47;
                livePlayerObjs[_0x2acebe.divId].video.backupUrl = '';
                livePlayerObjs[_0x2acebe.divId].video.timeshiftBackupUrl = '';
                _0x25ca86 = '';
                _0x279e47 = '';
                livePlayerObjs[_0x2acebe.divId].isDrm ? (_0x1fd8e5.backup && _0x1fd8e5.backup.hls_cdrm ? (_0x25ca86 = _0x1fd8e5.backup.hls_cdrm, livePlayerObjs[_0x2acebe.divId].videoUrlCount++) : _0x1fd8e5.backup && _0x1fd8e5.backup.hls_nd && (_0x25ca86 = _0x1fd8e5.backup.hls_nd, livePlayerObjs[_0x2acebe.divId].videoUrlCount++), _0x1fd8e5.backup && _0x1fd8e5.backup.hls_cdrm_timeshift ? (_0x279e47 = _0x1fd8e5.backup.hls_cdrm_timeshift, livePlayerObjs[_0x2acebe.divId].timeshiftUrlCount++) : _0x1fd8e5.backup && _0x1fd8e5.backup.hls_nd_timeshift && (_0x279e47 = _0x1fd8e5.backup.hls_nd_timeshift, livePlayerObjs[_0x2acebe.divId].timeshiftUrlCount++)) : (_0x1fd8e5.backup && _0x1fd8e5.backup.hls_nd && (_0x25ca86 = _0x1fd8e5.backup.hls_nd, livePlayerObjs[_0x2acebe.divId].videoUrlCount++), _0x1fd8e5.backup && _0x1fd8e5.backup.hls_nd_timeshift && (_0x279e47 = _0x1fd8e5.backup.hls_nd_timeshift, livePlayerObjs[_0x2acebe.divId].timeshiftUrlCount++));
                !_0x25ca86 && (_0x25ca86 = livePlayerObjs[_0x2acebe.divId].video.url);
                livePlayerObjs[_0x2acebe.divId].video.backupUrl = _0x25ca86;
                !livePlayerObjs[_0x2acebe.divId].video.url && (livePlayerObjs[_0x2acebe.divId].video.url = livePlayerObjs[_0x2acebe.divId].video.backupUrl);
                !livePlayerObjs[_0x2acebe.divId].video.liveUrl && (livePlayerObjs[_0x2acebe.divId].video.liveUrl = livePlayerObjs[_0x2acebe.divId].video.backupUrl);
                !_0x279e47 && (_0x279e47 = livePlayerObjs[_0x2acebe.divId].video.timeshiftUrl);
                livePlayerObjs[_0x2acebe.divId].video.timeshiftBackupUrl = _0x279e47;
                !livePlayerObjs[_0x2acebe.divId].video.timeshiftUrl && (livePlayerObjs[_0x2acebe.divId].video.timeshiftUrl = livePlayerObjs[_0x2acebe.divId].video.timeshiftBackupUrl);
                _0x1fd8e5.manifest && _0x1fd8e5.manifest.hls_audio && (livePlayerObjs[_0x2acebe.divId].video.defaultAudioUrl = _0x1fd8e5.manifest.hls_audio);
                _0x1fd8e5.public === '0' && !isTimeshift(_0x2acebe) && _0x2acebe.playerType !== 'liveback' && _0x4ee894 === undefined && (_0x32fbbf = '鐢变簬鎾\uE15E嚭瀹夋帓鍙樻洿锛屾殏涓嶆敮鎸佹挱鏀捐\uE1DA鏃舵\uE18C鍐呭\uE190', typeof LiveControlsBar === 'undefined' && !livePlayerObjs.isLoadLiveJs ? (livePlayerObjs.isLoadLiveJs = true, LazyLoad.js(_0x32d1d3, function () {
                    ;
                    createH5LivePlayerElement(_0x2acebe.divId);
                })) : createH5LivePlayerElement(_0x2acebe.divId));
                _0x1fd8e5.default_stream && (livePlayerObjs[_0x2acebe.divId].video.defaultStream = _0x1fd8e5.default_stream);
                currentLiveTimeData = null;
                _0x1fd8e5.manifest && _0x1fd8e5.manifest.hls_timebase && (livePlayerObjs[_0x2acebe.divId].flv5 = _0x1fd8e5.manifest.hls_timebase);
            }
        } catch (_0x2994c1) {
            _0x32fbbf = 'retry';
            _0x1fd8e5 = {};
            _0x14adf5 = 'VDN_PARSE_ERROR';
            typeof goldlog != 'undefined' && goldlog['h5player_' + _0x2acebe.divId] && typeof goldlog['h5player_' + _0x2acebe.divId].heartbeatStarted !== 'undefined' && (goldlog['h5player_' + _0x2acebe.divId].heartbeatStarted = false);
        }
        _0x32fbbf !== 'retry' && typeof _0x1fd8e5 === 'object' && _0x1fd8e5 && _0x2acebe.playerType !== 'liveback' && _0x4ee894 === undefined && (_0x188773 = liveCheckVdnReturnMsg(_0x1fd8e5), typeof _0x188773 === 'object' && _0x188773 && (_0x32fbbf = _0x188773.msg, _0x188773.hlsType === 'audio' && _0x1fd8e5.manifest && _0x1fd8e5.manifest.hls_audio && (livePlayerObjs[_0x2acebe.divId].video.audioUrl = _0x1fd8e5.manifest.hls_audio)));
        _0x14adf5 !== 'ACK_NO' && livePlayerObjs[_0x2acebe.divId] && livePlayerObjs[_0x2acebe.divId].video && !livePlayerObjs[_0x2acebe.divId].video.audioUrl && !livePlayerObjs[_0x2acebe.divId].video.url && (_0x14adf5 = 'VDN_RESPONSE_EMPTY');
        if (!_0xb53dee && _0x14adf5 !== 'ACK_NO' && (_0x14adf5 === 'VDN_RESPONSE_EMPTY' || _0x14adf5 === 'VDN_PARSE_ERROR')) {
            livePlayerObjs[_0x2acebe.divId].isErrorDone = false;
            _0x2acebe.vdnRetryNum = 2;
            parseLiveDataFromVdnxWhenError(_0x2acebe, _0x14adf5);
            return;
        }
        typeof _0x32fbbf === 'string' && _0x32fbbf.length > 1 && (_0x32fbbf === 'retry' ? showLivePlayerErrorMsg(_0x2acebe) : (showLivePlayerMsg(_0x2acebe, _0x32fbbf), setTimeout(function () {
            ;
            try {
                var _0x4f38f1 = document.getElementById('loading_' + _0x2acebe.divId);
                _0x4f38f1 && document.getElementById(_0x2acebe.divId) && (_0x4f38f1.style.display = 'none');
            } catch (_0x3ef239) {
            }
        }, 30000)));
    }
    createH5LivePlayerElement(_0x2acebe.divId);
    if (!isLiveEs6Supported()) {
        var _0x511b63 = document.getElementById('h5player_' + _0x2acebe.divId);
        _0x511b63 && (isUseAliMonitor && (typeof goldlog != 'undefined' && goldlog['h5player_' + _0x2acebe.divId] && typeof goldlog['h5player_' + _0x2acebe.divId].heartbeatStarted !== 'undefined' ? (goldlog['h5player_' + _0x2acebe.divId].heartbeatStarted = true, !livePlayerObjs[_0x2acebe.divId].aliInited && setCntvLiveMetadata(_0x2acebe, 'init'), setCntvLiveMetadata(_0x2acebe)) : setTimeout(function () {
            setCntvLiveMetadata(_0x2acebe);
        }, 300)), livePlayerObjs[_0x2acebe.divId].video.url.indexOf('cdrm') > 0 ? showLivePlayerMsg(_0x2acebe, '鎮ㄥ綋鍓嶇殑娴忚\uE74D鍣ㄤ笉鏀\uE21B寔鎾\uE15F斁锛岃\uE1EC鍗囩骇娴忚\uE74D鍣ㄦ垨鏇存崲璁惧\uE62C') : (_0x511b63.controls = true, _0x511b63.src = livePlayerObjs[_0x2acebe.divId].video.url));
    } else {
        if (!livePlayerObjs.isLoadLiveJs) {
            livePlayerObjs.isLoadLiveJs = true;
            loadLiveScript(_0x32d1d3, function () {
                ;
                moduleInitialized || !livePlayerObjs.isLoadWorker ? (livePlayerObjs.newWorkerCreatePlayer = false, initLiveH5Player(_0x2acebe), clearInterval(livePlayerObjs[_0x2acebe.divId].checkJsLoadedTimer)) : livePlayerObjs.newWorkerCreatePlayer = true;
            }, _0x2acebe, null, 15000);
            livePlayerObjs[_0x2acebe.divId].checkJsLoadedTimer = setTimeout(function () {
                var _0x32f941 = '';
                (livePlayerObjs.newWorkerCreatePlayer === undefined || livePlayerObjs.isLoadWorker && !moduleInitialized) && (livePlayerObjs.newWorkerCreatePlayer === undefined ? _0x32f941 = 'JS_LOAD_FAILED' : _0x32f941 = 'WORKER_LOAD_FAILED', showLivePlayerErrorMsg(_0x2acebe), setCntvLiveMetadata(_0x2acebe, '690003', _0x32f941));
            }, 30000);
        } else {
            if (typeof LiveControlsBar !== 'undefined') {
                clearInterval(livePlayerObjs[_0x2acebe.divId].loadLiveTimer);
                initLiveH5Player(_0x2acebe);
            } else {
                var _0x1aeda6 = 0;
                livePlayerObjs[_0x2acebe.divId].loadLiveTimer = setInterval(function () {
                    ;
                    _0x1aeda6++;
                    _0x1aeda6 > 80 && clearInterval(livePlayerObjs[_0x2acebe.divId].loadLiveTimer);
                    typeof LiveControlsBar !== 'undefined' && (clearInterval(livePlayerObjs[_0x2acebe.divId].loadLiveTimer), initLiveH5Player(_0x2acebe));
                }, 200);
            }
        }
    }
    isUseAliMonitor && (livePlayerObjs[_0x2acebe.divId].aliInited = true, setCntvLiveMetadata(_0x2acebe, 'init'));
}
function createH5LivePlayerElement(_0x212bb2) {
    var _0x404e69 = document.getElementById(_0x212bb2);
    if (document.getElementById('h5player_' + _0x212bb2) || !_0x404e69) {
        return;
    }
    var _0x2afa0e = document.createElement('video');
    isMobleUseBrowserUi ? _0x2afa0e.controls = true : _0x2afa0e.controls = false;
    _0x2afa0e.muted = false;
    _0x2afa0e.volume = 0.5;
    _0x2afa0e.autoplay = true;
    _0x2afa0e.setAttribute('webkit-playsinline', 'webkit-playsinline');
    _0x2afa0e.setAttribute('playsinline', '');
    _0x2afa0e.setAttribute('controlslist', 'nodownload');
    _0x2afa0e.setAttribute('x-webkit-airplay', 'allow');
    isIPad() && /(baidu)/i.test(navigator.userAgent) && _0x2afa0e.setAttribute('t7-video-player-type', 'inline');
    _0x2afa0e.setAttribute('x5-playsinline', '');
    _0x2afa0e.preload = true;
    _0x2afa0e.setAttribute('id', 'h5player_' + _0x212bb2);
    _0x2afa0e.style.width = '100%';
    _0x2afa0e.style.height = '100%';
    _0x2afa0e.style.left = '0px';
    _0x2afa0e.style.top = '0px';
    _0x2afa0e.style.backgroundColor = '#000';
    var _0xeb6917 = document.getElementById('error_msg_' + _0x212bb2);
    _0xeb6917 && _0xeb6917.style.display !== 'none' ? _0x2afa0e.style.display = 'none' : _0x2afa0e.style.display = 'block';
    _0x404e69.appendChild(_0x2afa0e);
    if (isIPad()) {
        isAndroidWeixin = /(Android)/i.test(navigator.userAgent) && /(micromessenger)/i.test(navigator.userAgent);
        if (isAndroidWeixin && !livePlayerObjs[_0x212bb2].hasPosterImg) {
            _0x2afa0e.style.display = 'none';
            var _0x1796de = document.getElementById('h5canvas_' + _0x212bb2);
            !_0x1796de ? (_0x1796de = document.createElement('canvas'), _0x1796de.id = 'h5canvas_' + _0x212bb2, _0x1796de.style.width = '100%', _0x1796de.style.height = '100%', _0x1796de.style.display = 'block', _0x1796de.width = _0x404e69.clientWidth * window.devicePixelRatio, _0x1796de.height = _0x404e69.clientHeight * window.devicePixelRatio, document.getElementById(_0x212bb2).appendChild(_0x1796de)) : _0x1796de.style.display = 'block';
        }
    }
    initH5LivePlayerEvents(_0x212bb2);
}
function isPlayerInViewport(_0x4f7f8c) {
    var _0x4ab2d1 = null;
    return _0x4f7f8c && _0x4f7f8c.getBoundingClientRect ? (_0x4ab2d1 = _0x4f7f8c.getBoundingClientRect(), _0x4ab2d1 ? _0x4ab2d1.top < window.innerHeight && _0x4ab2d1.bottom > 0 && _0x4ab2d1.left < window.innerWidth && _0x4ab2d1.right > 0 : false) : false;
}
function initH5LivePlayerEvents(_0x4f457c) {
    var _0x1c37a0 = document.getElementById('h5player_' + _0x4f457c), _0x547e41 = [
            'play',
            'playing',
            'canplay',
            'canplaythrough',
            'durationchange',
            'emptied',
            'abort',
            'ended',
            'pause',
            'seeked',
            'seeking',
            'stalled',
            'waiting',
            'error',
            'timeupdate',
            'contextmenu'
        ], _0x20e448 = /macintosh|mac os x/i.test(navigator.userAgent) && /safari/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent);
    _0x547e41.forEach(function (_0xd55360) {
        liveAddListener(_0x1c37a0, _0xd55360, captureLive);
    });
    window.addEventListener('blur', function () {
        var _0x286e56 = document.getElementById('player_pagefullscreen_' + _0x4f457c);
        (navigator.userAgent.toLowerCase().indexOf('micromessenger') > 0 || navigator.userAgent.toLowerCase().indexOf('huaweibrowser') > 0 || navigator.userAgent.toLowerCase().indexOf('weibo') > 0) && _0x286e56 && (_0x286e56.getAttribute('isPageFullscreen') === 'true' && isCanvasSupported(_0x4f457c) && (_0x286e56.setAttribute('isPageFullscreen', 'true'), LiveMobileFullscreenBtn.prototype.pageFullscreenClick(_0x4f457c, 'yes')));
    }, false);
    var _0x55d2de = /(iphone|ipad)/i.test(navigator.userAgent) && /(micromessenger)/i.test(navigator.userAgent);
    document.addEventListener('visibilitychange', function () {
        var _0x1adbc4 = document.hidden, _0x156abc = document.getElementById('h5player_' + _0x4f457c);
        if (_0x1adbc4) {
            if (_0x156abc) {
                livePlayerObjs[_0x4f457c].isHidden = true;
                if (!isIPad()) {
                    if (document.getElementById('adcalls_bar_' + _0x4f457c)) {
                        return;
                    }
                    _0x156abc.muted && (livePlayerObjs[_0x4f457c].video.playing || _0x20e448 && !livePlayerObjs[_0x4f457c].pauseByManul) ? (livePlayerObjs[_0x4f457c].isPausedBecauseMuted = true, _0x156abc.pause()) : livePlayerObjs[_0x4f457c].isPausedBecauseMuted = false;
                } else {
                    _0x156abc.pause();
                    if (document.getElementById('adcalls_bar_' + _0x4f457c)) {
                        _0x55d2de && (livePlayerObjs[_0x4f457c].iosCurrentTime = _0x156abc.currentTime);
                        return;
                    }
                    livePlayerObjs[_0x4f457c].LiveCanplaythroughTime = Date.parse(new Date()) / 1000;
                    isCanvasSupported(_0x4f457c) && clearInterval(livePlayerObjs[_0x4f457c].canvasDrawTimer);
                    typeof goldlog != 'undefined' && goldlog['h5player_' + _0x4f457c] && typeof goldlog['h5player_' + _0x4f457c].heartbeatStarted !== 'undefined' && (goldlog['h5player_' + _0x4f457c].heartbeatStarted = false);
                    livePlayerObjs[_0x4f457c].isLive && livePlayerObjs && livePlayerObjs[_0x4f457c] && (clearInterval(livePlayerObjs[_0x4f457c].titleUpdateTimer), clearInterval(livePlayerObjs[_0x4f457c].loadingErrorTimer));
                }
            }
        } else {
            if (_0x156abc) {
                livePlayerObjs[_0x4f457c].isHidden = false;
                var _0x4dbb80 = document.getElementById('error_msg_' + _0x4f457c);
                if (_0x4dbb80) {
                    document.getElementById('loading_' + _0x4f457c) && (document.getElementById('loading_' + _0x4f457c).style.display = 'none');
                    return;
                }
                if (!isIPad()) {
                    var _0xf4f041 = livePlayerObjs[_0x4f457c].playerType === 'live_homepage' || livePlayerObjs[_0x4f457c].playerType === 'small';
                    if (_0xf4f041 && !isPlayerInViewport(_0x156abc)) {
                        return;
                    }
                    livePlayerObjs[_0x4f457c].isPausedBecauseMuted && _0x156abc.muted && LivePlayOrPauseBtn.prototype.playOrPause(_0x4f457c);
                    livePlayerObjs[_0x4f457c].isPausedBecauseMuted = false;
                    return;
                }
                if (document.getElementById('adcalls_bar_' + _0x4f457c)) {
                    setTimeout(function () {
                        ;
                        _0x55d2de && (_0x156abc.currentTime = livePlayerObjs[_0x4f457c].iosCurrentTime);
                        _0x156abc.play();
                    }, 1000);
                    return;
                }
                if (/(iphone|ipad)/i.test(navigator.userAgent) && /(safari)/i.test(navigator.userAgent)) {
                    var _0x419ce7 = document.getElementById('player_pagefullscreen_' + _0x4f457c);
                    _0x419ce7 && _0x419ce7.getAttribute('isPageFullscreen') === 'true' && (_0x419ce7.setAttribute('isPageFullscreen', 'true'), LiveMobileFullscreenBtn.prototype.pageFullscreenClick(_0x4f457c, 'yes'));
                }
                livePlayerObjs[_0x4f457c].isLive && livePlayerObjs[_0x4f457c].end && livePlayerObjs[_0x4f457c].end - 0 > 0 && (livePlayerObjs[_0x4f457c].end = parseInt(livePlayerObjs[_0x4f457c].end) + Date.parse(new Date()) / 1000 - livePlayerObjs[_0x4f457c].LiveCanplaythroughTime);
                livePlayerObjs[_0x4f457c].isLive && livePlayerObjs[_0x4f457c].LiveCanplaythroughTime && Date.parse(new Date()) / 1000 - livePlayerObjs[_0x4f457c].LiveCanplaythroughTime > livePlayerObjs.liveRetryTimeout ? ((!_0x4dbb80 || _0x4dbb80.style.display === 'none') && (document.getElementById('loading_' + _0x4f457c) && (document.getElementById('loading_' + _0x4f457c).style.display = 'block'), createLiveHls(livePlayerObjs[_0x4f457c])), livePlayerObjs[_0x4f457c].LiveCanplaythroughTime = Date.parse(new Date()) / 1000) : (typeof goldlog != 'undefined' && goldlog['h5player_' + _0x4f457c] && typeof goldlog['h5player_' + _0x4f457c].heartbeatStarted !== 'undefined' && (goldlog['h5player_' + _0x4f457c].heartbeatStarted = true), _0x156abc.play(), /(weibo)/i.test(navigator.userAgent) ? isCanvasSupported(_0x4f457c) && typeof canvasLive !== 'undefined' && canvasLive(_0x4f457c) : setTimeout(function () {
                    ;
                    if (/(iphone|ipad)/i.test(navigator.userAgent)) {
                        var _0x585581 = 0;
                        !livePlayerObjs[_0x4f457c].isLive && (_0x585581 = _0x156abc.currentTime);
                        _0x156abc.load();
                        _0x156abc.play();
                        !livePlayerObjs[_0x4f457c].isLive && livePlayerObjs[_0x4f457c].playedPos && livePlayerObjs[_0x4f457c].playedPos - 0 > 0 && setTimeout(function () {
                            ;
                            _0x156abc.currentTime = livePlayerObjs[_0x4f457c].playedPos;
                        }, 800);
                    } else {
                        if (!isCanvasSupported(_0x4f457c)) {
                            return;
                        }
                        var _0x545487 = document.body.clientWidth || window.innerWidth, _0xfd34ae = document.documentElement.clientHeight || window.innerHeight;
                        _0x545487 = parseInt(_0x545487);
                        _0xfd34ae = parseInt(_0xfd34ae);
                        _0x545487 / _0xfd34ae < 1 ? (Math.abs(livePlayerObjs[_0x4f457c].w - _0x545487) < 50 && (_0x545487 = livePlayerObjs[_0x4f457c].w), _0xfd34ae = _0x545487 * livePlayerObjs[_0x4f457c].h / livePlayerObjs[_0x4f457c].w) : (Math.abs(livePlayerObjs[_0x4f457c].h - _0xfd34ae) < 50 && (_0xfd34ae = livePlayerObjs[_0x4f457c].w), _0x545487 = _0xfd34ae * livePlayerObjs[_0x4f457c].w / livePlayerObjs[_0x4f457c].h);
                        document.getElementById(_0x4f457c).style.width = _0x545487 + 'px';
                        document.getElementById(_0x4f457c).style.height = _0xfd34ae + 'px';
                        isCanvasSupported(_0x4f457c) && typeof canvasLive !== 'undefined' && canvasLive(_0x4f457c);
                    }
                }, 350), livePlayerObjs[_0x4f457c].isLive && (LiveTileShow.prototype.updateTitleAndCheckCopyright(livePlayerObjs[_0x4f457c]), LiveTileShow.prototype.checkLoadingError(livePlayerObjs[_0x4f457c])));
            }
        }
    }, false);
    if (isIPad()) {
        var _0x26fba8 = _0x4f457c;
        window.addEventListener('resize', function () {
            ;
            if (!isNewH5LivePlayer(livePlayerObjs[_0x26fba8])) {
                return;
            }
            if (livePlayerObjs[_0x26fba8] && livePlayerObjs[_0x26fba8].rotation === 'false') {
                var _0x367c8e = document.getElementById('player_pagefullscreen_' + _0x26fba8);
                _0x367c8e && _0x367c8e.getAttribute('isPageFullscreen') === 'true' && (_0x367c8e.setAttribute('isPageFullscreen', 'true'), LiveMobileFullscreenBtn.prototype.pageFullscreenClick(_0x26fba8, 'yes'));
                return;
            }
            if (window.orientation === 180 || window.orientation === 0) {
                var _0x49f223 = document.getElementsByTagName('canvas'), _0x12eb24 = document.getElementsByTagName('video'), _0x5d5498 = _0x12eb24 ? _0x12eb24.length : 0, _0x59a736 = null, _0x2fb6db = null, _0x1a3b74 = '', _0x27da89 = null, _0xf18271 = 'false';
                for (var _0x347196 = 0; _0x347196 < _0x12eb24.length; _0x347196++) {
                    if (_0x12eb24[_0x347196].getAttribute('id').indexOf('h5player_') !== -1) {
                        _0x1a3b74 = _0x12eb24[_0x347196].getAttribute('id').replace('h5player_', '');
                        var _0x19e5dc = document.getElementById('player_pagefullscreen_' + _0x1a3b74);
                        _0x19e5dc && (_0x19e5dc.setAttribute('isByClick', 'true'), setTimeout(function () {
                            ;
                            _0x19e5dc.setAttribute('isByClick', 'false');
                        }, 500));
                    }
                }
                setTimeout(function () {
                    var _0x5056d6 = document.body.clientWidth || window.innerWidth, _0x499253 = document.documentElement.clientHeight || window.innerHeight;
                    _0x5056d6 = parseInt(_0x5056d6);
                    _0x499253 = parseInt(_0x499253);
                    if (_0x5056d6 / _0x499253 < 1) {
                        typeof playerOriginalWidth !== 'undefined' && playerOriginalWidth && (_0x5056d6 = _0x5056d6 * playerOriginalWidth);
                        _0x499253 = _0x5056d6 * livePlayerObjs[_0x1a3b74].h / livePlayerObjs[_0x1a3b74].w;
                    } else {
                        if (_0x5056d6 / _0x499253 + 0.1 < livePlayerObjs[_0x1a3b74].w / livePlayerObjs[_0x1a3b74].h) {
                            var _0x18753a = 0;
                            _0x2fb6db = document.getElementById(_0x1a3b74);
                            if (livePlayerObjs[_0x1a3b74].maxW && livePlayerObjs[_0x1a3b74].maxW - 20 > 0) {
                                _0x18753a = parseInt(livePlayerObjs[_0x1a3b74].maxW);
                            } else {
                                _0x2fb6db && _0x2fb6db.parentNode && _0x2fb6db.parentNode.offsetWidth ? (_0x18753a = _0x2fb6db.parentNode.offsetWidth, _0x18753a = parseInt(_0x18753a)) : _0x18753a = parseInt(document.body.offsetWidth);
                            }
                            _0x18753a && _0x18753a > 20 && _0x18753a < _0x5056d6 && (_0x5056d6 = _0x18753a);
                            _0x499253 = _0x5056d6 * livePlayerObjs[_0x1a3b74].h / livePlayerObjs[_0x1a3b74].w;
                        } else {
                            _0x5056d6 = _0x499253 * livePlayerObjs[_0x1a3b74].w / livePlayerObjs[_0x1a3b74].h;
                        }
                    }
                    for (var _0x278ab4 = 0; _0x278ab4 < _0x5d5498; _0x278ab4++) {
                        if (_0x12eb24[_0x278ab4].getAttribute('id').indexOf('h5player_') !== -1) {
                            _0x59a736 = _0x49f223[_0x278ab4];
                            _0x1a3b74 = _0x12eb24[_0x278ab4].getAttribute('id').replace('h5player_', '');
                            var _0x23f8b0 = document.getElementById('control_bar_' + _0x1a3b74);
                            _0x27da89 = document.getElementById('player_pagefullscreen_' + _0x1a3b74);
                            _0x27da89 && (_0xf18271 = _0x27da89.getAttribute('isPageFullscreen'));
                            _0x2fb6db = document.getElementById(_0x1a3b74);
                            livePlayerObjs[_0x1a3b74].w = _0x5056d6;
                            livePlayerObjs[_0x1a3b74].h = _0x499253;
                            _0xf18271 === 'true' ? (_0x59a736 && LiveMobileFullscreenBtn.prototype.pageFullsreenToCanvas(_0x59a736, _0x1a3b74), (document.body.clientWidth || window.innerWidth) / (document.documentElement.clientHeight || window.innerHeight) < 1 ? _0x23f8b0.style.bottom = '80px' : _0x23f8b0.style.bottom = '0px') : (_0x2fb6db.style.width = _0x5056d6 + 'px', _0x2fb6db.style.height = _0x499253 + 'px', _0x59a736 && LiveMobileFullscreenBtn.prototype.pageFullsreenToCanvas(_0x59a736, _0x1a3b74, 'nofull'), _0x23f8b0.style.bottom = '0px');
                        }
                    }
                }, 380);
            }
            if (window.orientation === 90 || window.orientation === -90) {
                var _0x49f223 = document.getElementsByTagName('canvas'), _0x12eb24 = document.getElementsByTagName('video'), _0x5d5498 = _0x12eb24 ? _0x12eb24.length : 0, _0x59a736 = null, _0x2fb6db = null, _0x1a3b74 = '', _0x27da89 = null, _0xf18271 = 'false';
                for (var _0x347196 = 0; _0x347196 < _0x12eb24.length; _0x347196++) {
                    if (_0x12eb24[_0x347196].getAttribute('id').indexOf('h5player_') !== -1) {
                        _0x1a3b74 = _0x12eb24[_0x347196].getAttribute('id').replace('h5player_', '');
                        var _0x19e5dc = document.getElementById('player_pagefullscreen_' + _0x1a3b74);
                        _0x19e5dc && (_0x19e5dc.setAttribute('isByClick', 'true'), setTimeout(function () {
                            ;
                            _0x19e5dc.setAttribute('isByClick', 'false');
                        }, 500));
                    }
                }
                setTimeout(function () {
                    var _0x458f69 = document.body.clientWidth || window.innerWidth, _0xc09ef9 = document.documentElement.clientHeight || window.innerHeight;
                    _0x458f69 = parseInt(_0x458f69);
                    _0xc09ef9 = parseInt(_0xc09ef9);
                    if (_0x458f69 / _0xc09ef9 < 1) {
                        typeof playerOriginalWidth !== 'undefined' && playerOriginalWidth && (_0x458f69 = _0x458f69 * playerOriginalWidth);
                        _0xc09ef9 = _0x458f69 * livePlayerObjs[_0x1a3b74].h / livePlayerObjs[_0x1a3b74].w;
                    } else {
                        if (_0x458f69 / _0xc09ef9 + 0.1 < livePlayerObjs[_0x1a3b74].w / livePlayerObjs[_0x1a3b74].h) {
                            var _0x344ce0 = 0;
                            _0x2fb6db = document.getElementById(_0x1a3b74);
                            if (livePlayerObjs[_0x1a3b74].maxW && livePlayerObjs[_0x1a3b74].maxW - 20 > 0) {
                                _0x344ce0 = parseInt(livePlayerObjs[_0x1a3b74].maxW);
                            } else {
                                _0x2fb6db && _0x2fb6db.parentNode && _0x2fb6db.parentNode.offsetWidth ? (_0x344ce0 = _0x2fb6db.parentNode.offsetWidth, _0x344ce0 = parseInt(_0x344ce0)) : _0x344ce0 = parseInt(document.body.offsetWidth);
                            }
                            _0x344ce0 && _0x344ce0 > 20 && _0x344ce0 < _0x458f69 && (_0x458f69 = _0x344ce0);
                            _0xc09ef9 = _0x458f69 * livePlayerObjs[_0x1a3b74].h / livePlayerObjs[_0x1a3b74].w;
                        } else {
                            _0x458f69 = _0xc09ef9 * livePlayerObjs[_0x1a3b74].w / livePlayerObjs[_0x1a3b74].h;
                        }
                    }
                    for (var _0x24bb8b = 0; _0x24bb8b < _0x5d5498; _0x24bb8b++) {
                        if (_0x12eb24[_0x24bb8b].getAttribute('id').indexOf('h5player_') !== -1) {
                            _0x59a736 = _0x49f223[_0x24bb8b];
                            _0x1a3b74 = _0x12eb24[_0x24bb8b].getAttribute('id').replace('h5player_', '');
                            var _0xb84a9b = document.getElementById('control_bar_' + _0x1a3b74);
                            _0x27da89 = document.getElementById('player_pagefullscreen_' + _0x1a3b74);
                            _0x27da89 && (_0xf18271 = _0x27da89.getAttribute('isPageFullscreen'));
                            livePlayerObjs[_0x1a3b74].w = _0x458f69;
                            livePlayerObjs[_0x1a3b74].h = _0xc09ef9;
                            _0xf18271 === 'true' ? (_0x59a736 && LiveMobileFullscreenBtn.prototype.pageFullsreenToCanvas(_0x59a736, _0x1a3b74), (document.body.clientWidth || window.innerWidth) / (document.documentElement.clientHeight || window.innerHeight) < 1 ? _0xb84a9b.style.bottom = '80px' : _0xb84a9b.style.bottom = '0px') : (_0x2fb6db = document.getElementById(_0x1a3b74), _0x2fb6db.style.width = _0x458f69 + 'px', _0x2fb6db.style.height = _0xc09ef9 + 'px', _0x59a736 && LiveMobileFullscreenBtn.prototype.pageFullsreenToCanvas(_0x59a736, _0x1a3b74, 'nofull'), _0xb84a9b.style.bottom = '0px');
                        }
                    }
                }, 380);
            }
        }, false);
    }
}
function removeH5LivePlayerEvents(_0x352e8c) {
    var _0x487bcc = document.getElementById('h5player_' + _0x352e8c), _0x58da6c = [
            'play',
            'playing',
            'canplay',
            'canplaythrough',
            'durationchange',
            'emptied',
            'abort',
            'ended',
            'pause',
            'seeked',
            'seeking',
            'stalled',
            'waiting',
            'error',
            'timeupdate',
            'contextmenu'
        ];
    _0x58da6c.forEach(function (_0x48f5a8) {
        _0x487bcc.removeEventListener(_0x48f5a8, captureLive, false);
    });
}
function captureLive(_0x4548d2) {
    ;
    if (_0x4548d2.target && _0x4548d2.target.id) {
        var _0x469f78 = _0x4548d2.target.id.replace('h5player_', '');
        _0x4548d2.type == 'canplaythrough' && (livePlayerObjs[_0x469f78].LiveCanplaythroughTime = Date.parse(new Date()) / 1000, document.getElementById('loading_' + _0x469f78) && (document.getElementById('loading_' + _0x469f78).style.display = 'none'), document.getElementById('h5canvas_' + _0x469f78) && canvasLive(_0x469f78), livePlayerObjs[_0x469f78].startCreatHls && !isIPad() && setTimeout(function () {
            ;
            document.getElementById('h5player_' + _0x469f78) && (document.getElementById('h5player_' + _0x469f78).style.visibility = 'visible');
        }, 330), livePlayerObjs[_0x469f78].startCreatHls = false);
        if (_0x4548d2.type == 'play' || _0x4548d2.type == 'playing' || _0x4548d2.type == 'timeupdate' && /(iphone|ipad)/i.test(navigator.userAgent)) {
            livePlayerObjs[_0x469f78].video.playing = true;
            livePlayerObjs[_0x469f78].isNoError = true;
            typeof LivePlayOrPauseBtn !== 'undefined' && (/(iphone|ipad)/i.test(navigator.userAgent) ? useBrowserPlayerControls(_0x469f78) : LivePlayOrPauseBtn.prototype.switchPlayOrPauseBtn(_0x469f78, 'play'));
            document.getElementById('loading_' + _0x469f78) && (document.getElementById('loading_' + _0x469f78).style.display = 'none');
            if (isIPad() && !livePlayerObjs[_0x469f78].isNocavas) {
                if (isAndroidWeixin) {
                    var _0x264f1f = document.getElementById('h5player_' + _0x469f78);
                    if (_0x264f1f) {
                        _0x264f1f.style.display = 'block';
                        var _0x5a48d6 = document.getElementById('h5canvas_' + _0x469f78);
                        _0x5a48d6 && (livePlayerObjs[_0x469f78].isNocavas = true, document.getElementById(_0x469f78).removeChild(_0x5a48d6), !livePlayerObjs[_0x469f78].isStartPlay && (_0x264f1f.play(), _0x264f1f.pause()));
                    }
                }
            }
        }
        if (_0x4548d2.type == 'waiting' || _0x4548d2.type == 'pause' || _0x4548d2.type == 'ended' || _0x4548d2.type == 'error') {
            livePlayerObjs[_0x469f78].video.playing = false;
            typeof LivePlayOrPauseBtn !== 'undefined' && (_0x4548d2.type !== 'stalled' && LivePlayOrPauseBtn.prototype.switchPlayOrPauseBtn(_0x469f78, 'pause'));
            (_0x4548d2.type == 'waiting' || _0x4548d2.type == 'seeking' && navigator.userAgent.toLowerCase().indexOf('micromessenger') > 0) && (document.getElementById('loading_' + _0x469f78) && (document.getElementById('loading_' + _0x469f78).style.display = 'block', livePlayerObjs[_0x469f78].startCreatHls && !isIPad() && (document.getElementById('h5player_' + _0x469f78).style.visibility = 'hidden'), typeof LiveTileShow !== 'undefined' && LiveTileShow.prototype.checkLoadingError(livePlayerObjs[_0x469f78])));
            _0x4548d2.type == 'ended' && document.getElementById('player_progress_cached_' + _0x469f78) && (document.getElementById('player_progress_cached_' + _0x469f78).style.width = '0%');
            if (_0x4548d2.type == 'ended') {
                livePlayerObjs[_0x469f78].isEnd = true;
                typeof goldlog != 'undefined' && goldlog['h5player_' + _0x469f78] && typeof goldlog['h5player_' + _0x469f78].heartbeatStarted !== 'undefined' && (goldlog['h5player_' + _0x469f78].heartbeatStarted = false);
                if (livePlayerObjs[_0x469f78].playerType === 'liveback' && !isNewH5LivePlayer(livePlayerObjs[_0x469f78])) {
                    var _0x97225c = _0x4548d2.target.currentTime, _0x6a0420 = 0;
                    livePlayerObjs[_0x469f78].video && livePlayerObjs[_0x469f78].video.duration && (_0x6a0420 = livePlayerObjs[_0x469f78].video.duration - 0);
                    _0x6a0420 > 1 && _0x97225c - 1 > 0 && _0x97225c + 2 < _0x6a0420 && showLivePlayerErrorMsg(livePlayerObjs[_0x469f78]);
                }
            }
            if (_0x4548d2.type == 'error' && livePlayerObjs[_0x469f78].noHlsJs && livePlayerObjs[_0x469f78].isNewVdn) {
                !livePlayerObjs[_0x469f78].vdnRetryNum && (livePlayerObjs[_0x469f78].vdnRetryNum = 0);
                if (livePlayerObjs[_0x469f78].playerType === 'liveback') {
                    livePlayerObjs[_0x469f78].vdnRetryNum++;
                    showLivePlayerErrorMsg(livePlayerObjs[_0x469f78]);
                } else {
                    if (livePlayerObjs[_0x469f78].cdnRetryNum - 1 >= 0) {
                        livePlayerObjs[_0x469f78].vdnRetryNum = 5;
                        showLivePlayerErrorMsg(livePlayerObjs[_0x469f78]);
                    } else {
                        var _0x508e61 = livePlayerObjs[_0x469f78].video.url;
                        livePlayerObjs[_0x469f78].video && (livePlayerObjs[_0x469f78].video.backupUrl && (_0x508e61 = livePlayerObjs[_0x469f78].video.backupUrl));
                        livePlayerObjs[_0x469f78].isBackupCdn = true;
                        livePlayerObjs[_0x469f78].video.url = _0x508e61;
                        livePlayerObjs[_0x469f78].cdnRetryNum++;
                        createLiveHls(livePlayerObjs[_0x469f78]);
                    }
                }
            }
        }
        if (_0x4548d2.type == 'durationchange' && isIPad() && livePlayerObjs[_0x469f78].video.duration) {
            var _0x264f1f = document.getElementById('h5player_' + _0x469f78);
            _0x264f1f && (_0x264f1f.duration > 0 && Math.abs(1 - _0x264f1f.duration / livePlayerObjs[_0x469f78].video.duration) < 0.1 && Math.ceil(_0x264f1f.duration) != Math.ceil(livePlayerObjs[_0x469f78].video.duration) && (livePlayerObjs[_0x469f78].video.duration = _0x264f1f.duration, document.getElementById('played_time_total_' + _0x469f78) && (document.getElementById('played_time_total_' + _0x469f78).innerHTML = LivePlayTimeShow.prototype.formatTimeToStr(livePlayerObjs[_0x469f78].video.duration))));
        }
        if (_0x4548d2.type == 'play' && document.querySelectorAll) {
            var _0x4affec = document.querySelectorAll('video,audio'), _0x11ff31 = _0x4affec.length;
            if (_0x11ff31 - 1 > 0) {
                for (var _0x274c31 = 0; _0x274c31 < _0x11ff31; _0x274c31++) {
                    if ('h5player_' + _0x469f78 === _0x4affec[_0x274c31].id) {
                        isCanvasSupported(_0x469f78) && typeof canvasLive !== 'undefined' && canvasLive(_0x469f78);
                        continue;
                    } else {
                        _0x4affec[_0x274c31].pause();
                    }
                }
            }
        }
    }
    if (_0x4548d2 && _0x4548d2.type === 'contextmenu') {
        _0x4548d2.preventDefault ? _0x4548d2.preventDefault() : _0x4548d2.returnValue = false;
        var _0x5e0087 = document.getElementById('contextmenu_' + _0x469f78);
        _0x5e0087 && LiveContextmenu.prototype.showOrHideContextmenu(livePlayerObjs[_0x469f78], 'show', _0x4548d2);
    }
}
function liveAddListener(_0x4e51bb, _0x4d7453, _0x4b0dd8) {
    ;
    if (_0x4e51bb.attachEvent) {
        _0x4e51bb.attachEvent('on' + _0x4d7453, _0x4b0dd8);
    } else {
        _0x4e51bb.addEventListener && _0x4e51bb.addEventListener(_0x4d7453, _0x4b0dd8, false);
    }
}
function doLoadLiveDataByAjax(_0x12bc2a, _0x401f84, _0xed2d9f, _0x582190, _0x17fc85, _0x5407e5, _0x1bf40b, _0xccc124, _0x12dc40) {
    var _0x496f9c = new XMLHttpRequest(), _0x208533 = null;
    _0x1bf40b = _0x1bf40b ? _0x1bf40b : 'get';
    _0xccc124 = _0xccc124 ? _0xccc124 : true;
    !_0x12dc40 && _0x582190.vdnParasFromPage && _0x582190.vdnParasFromPage.vtoken && (_0x401f84 += '&vtokenpos=1');
    if (_0x1bf40b === 'get') {
        if (_0x401f84) {
            _0x12bc2a.indexOf('?') === -1 && (_0x12bc2a += '?');
            _0x12bc2a += _0x401f84;
        } else {
        }
        _0x496f9c.open(_0x1bf40b, _0x12bc2a, _0xccc124);
        !_0x12dc40 && _0x582190.vdnParasFromPage && _0x582190.vdnParasFromPage.vtoken && _0x496f9c.setRequestHeader('vtoken', _0x582190.vdnParasFromPage.vtoken);
        _0x582190.authKey && _0x496f9c.setRequestHeader('auth-key', _0x582190.authKey);
        _0x496f9c.send();
    } else {
        _0x496f9c.open(_0x1bf40b, _0x12bc2a, _0xccc124);
        _0x496f9c.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        _0x401f84 ? _0x496f9c.send(_0x401f84) : _0x496f9c.send();
    }
    _0x496f9c.onreadystatechange = function () {
        ;
        _0x496f9c.readyState == 4 && _0x496f9c.status == 200 && (_0x208533 = _0x496f9c.responseText, _0x208533 ? _0xed2d9f(_0x582190, '', _0x208533) : _0x17fc85(_0x582190));
    };
    _0x496f9c.onerror = function (_0x52c6ba) {
        _0x17fc85 && _0x17fc85(_0x582190);
    };
    _0x17fc85 && _0x5407e5 && _0x5407e5 > 0 && setTimeout(function () {
        ;
        _0x17fc85 && (_0x17fc85.name === 'parseLiveDataFromVdnWhenError' || _0x17fc85.name === 'parseLiveDataFromVdnxWhenError') ? _0x17fc85(_0x582190, 'timeout') : _0x17fc85(_0x582190);
    }, _0x5407e5);
}
function loadLiveScript(_0x57a0fc, _0x313d37, _0x6ecb5e, _0x349f7f, _0x57093f, _0x2cc0aa) {
    var _0x551df4 = document.getElementsByTagName('head')[0], _0x3d15fc = document.createElement('script');
    _0x3d15fc.type = 'text/javascript';
    _0x3d15fc.onload = function () {
        typeof _0x313d37 === 'function' && (_0x57093f && _0x57093f < 1000 ? setTimeout(function () {
            _0x313d37(_0x6ecb5e);
        }, _0x57093f) : _0x313d37(_0x6ecb5e));
    };
    _0x3d15fc.onerror = function (_0x5c45a1) {
        ;
        typeof _0x349f7f === 'function' && _0x349f7f(_0x6ecb5e);
    };
    _0x3d15fc.src = _0x57a0fc;
    _0x551df4.appendChild(_0x3d15fc);
    if (_0x349f7f && (_0x57093f && _0x57093f >= 1000 || _0x2cc0aa && _0x2cc0aa >= 1000)) {
        var _0x1ecf63 = _0x57093f >= 1000 ? _0x57093f : _0x2cc0aa;
        _0x349f7f && (_0x349f7f.name === 'parseLiveDataFromVdnWhenError' || _0x349f7f.name === 'checkLivebackCopyrightWhenError') ? livePlayerObjs[_0x6ecb5e.divId].vdnTimer = setTimeout(function () {
            ;
            _0x349f7f(_0x6ecb5e, 'timeout');
        }, _0x1ecf63) : setTimeout(function () {
            _0x349f7f(_0x6ecb5e);
        }, _0x1ecf63);
    }
}
function liveAdCallsStartPlay(_0x54ff58) {
    ;
    if (!livePlayerObjs[_0x54ff58.divId].adCallsIsPlayed) {
        if (!livePlayerObjs.adCallsAPI || !livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum]) {
            return;
        }
        !livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].endLoad && livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].startLoad && (livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].endLoad = Date.parse(new Date()), livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].loadTime = livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].endLoad - livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].startLoad, isUseAliMonitor && sendLiveAliAdCallsRequestData(_0x54ff58, 'play.1.42'));
    }
}
function sendLiveAdCallsDataByAliApi(_0x1f54fe, _0x3c23c0) {
    var _0xd4cc06 = '', _0x224708 = 'h5player_' + _0x1f54fe.divId, _0x95c3bb = 0, _0x247e9b = {
            'type': 'LIVE',
            'ad_url': livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].hlsUrl,
            'ad_v_id': livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].guid,
            'ad_sum': livePlayerObjs.adCallsAPI.length,
            'ad_num': livePlayerObjs.adCallsPlayingNum + 1,
            'ad_len': livePlayerObjs.adCallsAPI.length * 15,
            'v_id': _0x1f54fe.t,
            'channel': _0x1f54fe.t,
            'playerversion': livePlayerVer,
            'bit': '900',
            'streamProtocol': 'HLS',
            'referURL': encodeURIComponent(location.href.substr(0, 127)),
            'cdnCode': livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].cdnCode,
            'videoProfile': 'vdn'
        };
    goldlog[_0x224708] && goldlog[_0x224708].createTime ? _0x95c3bb = goldlog[_0x224708].createTime : (_0x95c3bb = new Date().getTime(), goldlog[_0x224708] = {}, goldlog[_0x224708].createTime = _0x95c3bb);
    _0x247e9b.createTime = _0x95c3bb;
    _0x247e9b.loadTime = livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].loadTime;
    document.referrer && (_0x247e9b.referer = encodeURIComponent(document.referrer.substr(0, 127)));
    var _0x45bc2b = Object.keys(_0x247e9b);
    _0x45bc2b.forEach(function (_0x2389e6) {
        _0xd4cc06 += '&' + _0x2389e6 + '=' + _0x247e9b[_0x2389e6];
    });
    var _0x2efe76 = '';
    isIPad() ? _0x2efe76 = 'HTML5.PHD' : _0x2efe76 = 'HTML5.PC';
    goldlog.record('/' + _0x3c23c0, '', 'playScene=' + _0x2efe76 + _0xd4cc06, '');
}
function sendLiveAliAdCallsRequestData(_0x22f59f, _0x373c96) {
    ;
    if (typeof goldlog !== 'undefined' && document.getElementById('h5player_' + _0x22f59f.divId)) {
        sendLiveAdCallsDataByAliApi(_0x22f59f, _0x373c96);
        return;
    }
    var _0x108e70 = 0, _0x27a5b1 = setInterval(function () {
            ;
            _0x108e70++;
            if (_0x108e70 > 50) {
                clearInterval(_0x27a5b1);
                return;
            }
            typeof goldlog !== 'undefined' && document.getElementById('h5player_' + _0x22f59f.divId) && (clearInterval(_0x27a5b1), sendLiveAdCallsDataByAliApi(_0x22f59f, _0x373c96));
        }, 150);
}
function setCntvLiveMetadata(_0x260b97, _0x254588, _0x251516) {
    var _0x1dac12 = 'h5player_' + _0x260b97.divId, _0x2d7b4b = null, _0xfd0f9 = '', _0x5d313c = '', _0x5eb344 = 'HTML5_CDN_LIVE_DRM_PLAYER';
    livePlayerObjs[_0x260b97.divId].isDrm === false && (_0x5eb344 = 'CNTV_HTML5_PLAYER');
    livePlayerObjs[_0x260b97.divId] && livePlayerObjs[_0x260b97.divId].video && livePlayerObjs[_0x260b97.divId].video.url && (livePlayerObjs[_0x260b97.divId].video.url.indexOf('begintimeabs=') > 0 && (_0x5eb344 = 'HTML5_LIVESHIFT_DRM_PLAYER', livePlayerObjs[_0x260b97.divId].isDrm === false && (_0x5eb344 = 'HTML5_LIVESHIFT_PLAYER')), livePlayerObjs[_0x260b97.divId].video.url.indexOf('begintimeabs=') > 0 && livePlayerObjs[_0x260b97.divId].video.url.indexOf('endtimeabs=') > 0 && (_0x5eb344 = 'HTML5_LIVEBACK_DRM_PLAYER', livePlayerObjs[_0x260b97.divId].isDrm === false && (_0x5eb344 = 'CNTV_HTML5_LIVEBACKPLAYER')));
    var _0x1cf696 = '';
    isIPad() ? _0x1cf696 = 'HTML5.PHD' : _0x1cf696 = 'HTML5.PC';
    var _0x4ed319 = 'F';
    isLiveEnableP2p && livePlayerObjs[_0x260b97.divId].isP2p && (_0x4ed319 = 'T');
    var _0x5c965f = '', _0x22d4c3 = '', _0x4118b9 = livePlayerObjs[_0x260b97.divId].vdn.cdnName, _0x5e7732 = '', _0x29e7e7 = '';
    livePlayerObjs[_0x260b97.divId].cdncip && (_0x5e7732 = livePlayerObjs[_0x260b97.divId].cdncip);
    livePlayerObjs[_0x260b97.divId].cdnsip && (_0x29e7e7 = livePlayerObjs[_0x260b97.divId].cdnsip);
    livePlayerObjs[_0x260b97.divId].isLive && (_0x260b97.others === 'flv' || typeof _0x260b97.others === 'string' && _0x260b97.others.indexOf('.flv') > 0) ? (_0x5d313c = livePlayerObjs[_0x260b97.divId].streamUrl ? livePlayerObjs[_0x260b97.divId].streamUrl : '', _0x22d4c3 = 'FLV', livePlayerObjs[_0x260b97.divId].vdn.flvCdnName ? _0x4118b9 = livePlayerObjs[_0x260b97.divId].vdn.flvCdnName : _0x4118b9 = 'unknown') : (_0x5d313c = livePlayerObjs[_0x260b97.divId].video.url, _0x22d4c3 = 'HLS');
    if (livePlayerObjs[_0x260b97.divId].isLive && livePlayerObjs[_0x260b97.divId].video.audioUrl) {
        var _0x449093 = document.getElementById('error_msg_' + _0x260b97.divId);
        _0x449093 && _0x449093.innerHTML.indexOf('鐐瑰嚮鎾\uE15F斁鎸夐挳鏀跺惉姝よ妭鐩\uFFFD') > 0 && (_0x5eb344 = 'HTML5_LIVEAUDIO_PLAYER', _0x5d313c = livePlayerObjs[_0x260b97.divId].video.audioUrl);
    }
    var _0x3915b8 = '1.24';
    (_0x251516 === 'VDN_REQUEST_FAILED' || _0x251516 === 'VDN_PARSE_ERROR' || _0x251516 === 'VDN_REQUEST_TIMEOUT') && (_0x3915b8 = '1.4');
    _0x251516 && (_0x251516 = _0x251516.replace('_1.24', ''));
    if (_0x254588 == '690003') {
        livePlayerObjs[_0x260b97.divId].vdn && livePlayerObjs[_0x260b97.divId].vdn.vdnUrl && (_0x5c965f = livePlayerObjs[_0x260b97.divId].vdn.vdnUrl);
        _0x2d7b4b = {
            'playScene': _0x1cf696,
            'type': 'LIVE',
            'column': _0x260b97.t,
            'v_id': _0x260b97.t,
            'channel': _0x260b97.t,
            'column': _0x260b97.t,
            'ver': livePlayerVer,
            'applicationName': _0x5eb344,
            'playerName': _0x5eb344,
            'streamType': livePlayerObjs[_0x260b97.divId].isLive ? 'live' : 'liveback',
            'assetName': _0x260b97.t,
            'streamUrl': _0x5c965f,
            'playAMR': 'F',
            'streamMBR': '1',
            'bit': '900',
            'streamProtocol': _0x22d4c3,
            'videoProfile': 'vdn',
            'P2PStyle': _0x4ed319,
            'error_code': _0x251516,
            'error_info': _0x251516
        };
        _0xfd0f9 = location.href.split('/');
        _0xfd0f9.length > 1 && typeof goldlog != 'undefined' && typeof goldlog.initSession != 'undefined' && (_0x2d7b4b.site = encodeURIComponent(_0xfd0f9[2]));
    } else {
        _0x2d7b4b = {
            'playScene': _0x1cf696,
            'column': _0x260b97.t,
            'v_id': _0x260b97.t,
            'channel': _0x260b97.t,
            'ver': livePlayerVer,
            'applicationName': _0x5eb344,
            'playerName': _0x5eb344,
            'streamType': livePlayerObjs[_0x260b97.divId].isLive ? 'live' : 'liveback',
            'assetName': _0x260b97.t,
            'streamUrl': _0x5d313c,
            'playAMR': 'F',
            'streamMBR': '1',
            'bit': '900',
            'streamProtocol': _0x22d4c3,
            'cdnCode': _0x4118b9,
            'videoProfile': 'vdn',
            'vdnSID': livePlayerObjs[_0x260b97.divId].vdn.sid,
            'vdnIP': livePlayerObjs[_0x260b97.divId].vdn.vdnIP,
            'vdnCountryCode': livePlayerObjs[_0x260b97.divId].vdn.vdnCountryCode,
            'vdnProvinceCode': livePlayerObjs[_0x260b97.divId].vdn.vdnProvinceCode,
            'vdnCityCode': livePlayerObjs[_0x260b97.divId].vdn.vdnCityCode,
            'vdnISPCode': livePlayerObjs[_0x260b97.divId].vdn.vdnISPCode,
            'cdncip': _0x5e7732,
            'cdnsip': _0x29e7e7,
            'public': livePlayerObjs[_0x260b97.divId].vdn.public,
            'P2PStyle': _0x4ed319
        };
        var _0xfd0f9 = location.href.split('/');
        _0xfd0f9.length > 1 && (_0x2d7b4b.site = encodeURIComponent(_0xfd0f9[2]));
    }
    if (typeof goldlog != 'undefined' && typeof goldlog.startSession != 'undefined') {
        if (_0x254588 == 'init') {
            goldlog.initSession(_0x1dac12, _0x2d7b4b);
            livePlayerObjs[_0x260b97.divId].aliInited = true;
        } else {
            if (_0x254588 == '690003') {
                var _0x11bee5 = '';
                goldlog[_0x1dac12] && goldlog[_0x1dac12].createTime ? _0x11bee5 = goldlog[_0x1dac12].createTime : _0x11bee5 = new Date().getTime();
                var _0x2bccd7 = Object.keys(_0x2d7b4b), _0x271e0b = '';
                _0x2bccd7.forEach(function (_0x2c84c6) {
                    ;
                    switch (_0x2c84c6) {
                    case 'ver':
                        _0x271e0b += '&playerversion=' + _0x2d7b4b[_0x2c84c6];
                        break;
                    case 'vdnSID':
                        _0x271e0b += '&client_sid=' + _0x2d7b4b[_0x2c84c6];
                        break;
                    case 'vdnIP':
                        _0x271e0b += '&lc_ip=' + _0x2d7b4b[_0x2c84c6];
                        break;
                    case 'vdnCountryCode':
                        _0x271e0b += '&lc_coun=' + _0x2d7b4b[_0x2c84c6];
                        break;
                    case 'vdnProvinceCode':
                        _0x271e0b += '&lc_prov=' + _0x2d7b4b[_0x2c84c6];
                        break;
                    case 'vdnCityCode':
                        _0x271e0b += '&lc_city=' + _0x2d7b4b[_0x2c84c6];
                        break;
                    case 'vdnISPCode':
                        _0x271e0b += '&lc_isp=' + _0x2d7b4b[_0x2c84c6];
                        break;
                    default:
                        _0x271e0b += '&' + _0x2c84c6 + '=' + _0x2d7b4b[_0x2c84c6];
                    }
                });
                _0x271e0b += '&createTime=' + _0x11bee5;
                _0x271e0b += '&curURL=' + encodeURIComponent(location.href.substr(0, 127));
                document.referrer ? _0x271e0b += '&referURL=' + encodeURIComponent(document.referrer.substr(0, 127)) : _0x271e0b += '&referURL=';
                goldlog.record('/play.' + _0x3915b8, '', '&type=H5&playtime=0&loadtime=0' + _0x271e0b, '');
            } else {
                goldlog.startSession(_0x1dac12, _0x2d7b4b, 20);
            }
        }
    } else {
        var _0x58b304 = 0, _0x308327 = setInterval(function () {
                ;
                _0x58b304++;
                if (_0x58b304 > 50) {
                    clearInterval(_0x308327);
                    return;
                }
                if (typeof goldlog != 'undefined' && typeof goldlog.startSession != 'undefined') {
                    clearInterval(_0x308327);
                    if (_0x254588 == 'init') {
                        goldlog.initSession(_0x1dac12, _0x2d7b4b);
                    } else {
                        if (_0x254588 == '690003') {
                            var _0x2c2689 = '';
                            goldlog[_0x1dac12] && goldlog[_0x1dac12].createTime ? _0x2c2689 = goldlog[_0x1dac12].createTime : _0x2c2689 = new Date().getTime();
                            var _0x3006cf = Object.keys(_0x2d7b4b), _0x1c1a93 = '';
                            _0x3006cf.forEach(function (_0x3d64e6) {
                                ;
                                switch (_0x3d64e6) {
                                case 'ver':
                                    _0x1c1a93 += '&playerversion=' + _0x2d7b4b[_0x3d64e6];
                                    break;
                                case 'vdnSID':
                                    _0x1c1a93 += '&client_sid=' + _0x2d7b4b[_0x3d64e6];
                                    break;
                                case 'vdnIP':
                                    _0x1c1a93 += '&lc_ip=' + _0x2d7b4b[_0x3d64e6];
                                    break;
                                case 'vdnCountryCode':
                                    _0x1c1a93 += '&lc_coun=' + _0x2d7b4b[_0x3d64e6];
                                    break;
                                case 'vdnProvinceCode':
                                    _0x1c1a93 += '&lc_prov=' + _0x2d7b4b[_0x3d64e6];
                                    break;
                                case 'vdnCityCode':
                                    _0x1c1a93 += '&lc_city=' + _0x2d7b4b[_0x3d64e6];
                                    break;
                                case 'vdnISPCode':
                                    _0x1c1a93 += '&lc_isp=' + _0x2d7b4b[_0x3d64e6];
                                    break;
                                default:
                                    _0x1c1a93 += '&' + _0x3d64e6 + '=' + _0x2d7b4b[_0x3d64e6];
                                }
                            });
                            _0x1c1a93 += '&createTime=' + _0x2c2689;
                            _0x1c1a93 += '&curURL=' + encodeURIComponent(location.href.substr(0, 127));
                            document.referrer ? _0x1c1a93 += '&referURL=' + encodeURIComponent(document.referrer.substr(0, 127)) : _0x1c1a93 += '&referURL=';
                            goldlog.record('/play.' + _0x3915b8, '', '&type=H5&playtime=0&loadtime=0' + _0x1c1a93, '');
                        } else {
                            goldlog.startSession(_0x1dac12, _0x2d7b4b, 20);
                        }
                    }
                }
            }, 200);
    }
}
function doLoadLiveAliAnalyticsJs(_0x494452) {
    var _0xb39c71 = createElementByType('script', 'convivaJs237', 'absolute', '0px', '0px', '0px', '0px');
    _0x494452.isHttps === 'true' ? _0xb39c71.src = 'https://js.data.cctv.com/__aplus_plugin_cctv.js,aplus_plugin_aplus_u.js' : _0xb39c71.src = 'http://js.data.cctv.com/__aplus_plugin_cctv.js,aplus_plugin_aplus_u.js';
    var _0x5087eb = document.getElementsByTagName('head')[0];
    _0x5087eb.appendChild(_0xb39c71);
}
function isTimeshiftP2p(_0x389711) {
    var _0x135fe3 = false;
    return _0x389711.timeshiftP2p === 'true' && (_0x135fe3 = true), _0x135fe3;
}
function isTimeshift(_0x30a444) {
    ;
    return _0x30a444.playerType === 'live' && _0x30a444.st && _0x30a444.st - 1000000000 > 0;
}
function isLiveEs6Supported() {
    var _0x4c0b09 = [];
    return isIPad() && _0x4c0b09 && !_0x4c0b09.includes ? false : true;
}
function isLiveHlsJsSupported() {
    var _0x1d6e37 = window.MediaSource || window.WebKitMediaSource;
    if (!_0x1d6e37) {
        return false;
    }
    if (/(iphone|ipad)/i.test(navigator.userAgent)) {
        return false;
    }
    var _0x5db165 = SourceBuffer || window.WebKitSourceBuffer, _0x561579 = _0x1d6e37 && typeof _0x1d6e37.isTypeSupported === 'function' && _0x1d6e37.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'), _0x2ece25 = !_0x5db165 || _0x5db165.prototype && typeof _0x5db165.prototype.appendBuffer === 'function' && typeof _0x5db165.prototype.remove === 'function';
    return !!_0x561579 && !!_0x2ece25;
}
function getChromeVersion() {
    var _0xddc6e0 = '', _0x1e6945 = navigator.userAgent.indexOf('Chrome/'), _0x343ec5 = navigator.userAgent.substr(_0x1e6945 + 7);
    return _0xddc6e0 = parseInt(_0x343ec5), _0xddc6e0;
}
function isWasmSupported() {
    ;
    try {
        if (typeof WebAssembly === 'object' && typeof WebAssembly.instantiate === 'function') {
            var _0x37cbeb = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
            if (_0x37cbeb instanceof WebAssembly.Module) {
                return new WebAssembly.Instance(_0x37cbeb) instanceof WebAssembly.Instance;
            }
        }
    } catch (_0x516c85) {
    }
    return false;
}
function isLiveCdrm2(_0x592ae4) {
    var _0x31da56 = false, _0x3128ad = [];
    _0x3128ad.indexOf(_0x592ae4.t) !== -1 && (_0x31da56 = true);
    return;
}
function flashIsCreated() {
    ;
    livePlayerObjs.flashLiveback && livePlayerObjs.flashLiveback.flashId && livePlayerObjs.flashLiveback.start && document.getElementById(livePlayerObjs.flashLiveback.flashId).PageCallFlash({
        'IsLive': 'false',
        'ShiftTime': livePlayerObjs.flashLiveback.start
    });
}
function getFlashVer() {
    var _0x29f5ec = flashChecker();
    _0x29f5ec.f && _0x29f5ec.v >= 33 ? isFlashPlayer = true : isFlashPlayer = false;
}
function flashChecker() {
    var _0xe4e0ac = 0, _0x1946d5 = 0;
    if (0) {
        try {
            var _0x32cb82 = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
            _0x32cb82 && (_0xe4e0ac = 1, VSwf = _0x32cb82.GetVariable('$version'), _0x1946d5 = parseInt(VSwf.split(' ')[1].split(',')[0]));
        } catch (_0x128a25) {
        }
    } else {
        if (navigator.plugins && navigator.plugins.length > 0) {
            try {
                var _0x32cb82 = navigator.plugins['Shockwave Flash'];
                if (_0x32cb82) {
                    _0xe4e0ac = 1;
                    var _0x483411 = _0x32cb82.description.split(' ');
                    for (var _0x23a251 = 0; _0x23a251 < _0x483411.length; ++_0x23a251) {
                        if (isNaN(parseInt(_0x483411[_0x23a251]))) {
                            continue;
                        }
                        _0x1946d5 = parseInt(_0x483411[_0x23a251]);
                        !isIPad() && getChromeVersion() >= 55 && _0x1946d5 >= 23 && _0x32cb82.filename === 'internal-not-yet-present' && (_0x1946d5 = 22);
                    }
                }
            } catch (_0x18bfbb) {
            }
        }
    }
    return {
        'f': _0xe4e0ac,
        'v': _0x1946d5
    };
}
var PlayerBrowserCheckUtil = {};
PlayerBrowserCheckUtil.checkUserAgent = function () {
    var _0x33f44a = navigator.userAgent;
    return {
        'isIphone': _0x33f44a.indexOf('iPhone') > -1,
        'isAndroid': _0x33f44a.indexOf('Android') > -1,
        'isDingding': _0x33f44a.indexOf('DingTalk') > -1,
        'isMobile': /AppleWebKit.*Mobile/i.test(_0x33f44a) || /Android/i.test(_0x33f44a) || /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(_0x33f44a),
        'isIE7': /MSIE 7.0|MSIE 8.0|MSIE/i.test(_0x33f44a),
        'isFireFox': /(?:Firefox)/.test(_0x33f44a),
        'isWinPhone': /Windows Phone/i.test(_0x33f44a),
        'isWeChat': /MicroMessenger/i.test(_0x33f44a),
        'isCBox': /CNTV_APP_CLIENT_CBOX/i.test(_0x33f44a),
        'isAndroidPad': /Android/i.test(_0x33f44a) && !/Mobile/i.test(_0x33f44a),
        'isIpad': /ipad/i.test(_0x33f44a),
        'isTablet': /(?:iPad|PlayBook)/.test(_0x33f44a) || _0x33f44a.indexOf('Android') > -1 && !/(?:Mobile)/.test(_0x33f44a) || /(?:Firefox)/.test(_0x33f44a) && /(?:Tablet)/.test(_0x33f44a),
        'ios': !!_0x33f44a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        'isSafari': _0x33f44a.indexOf('Safari') > -1 && _0x33f44a.indexOf('Chrome') < 1,
        'isVivo': /vivo/i.test(_0x33f44a),
        'isHuawei': /huawei/i.test(_0x33f44a),
        'isHuaweiZhinengzhushou': typeof JSAPI != 'undefined' && typeof JSAPI.openByApp4EMUI6 != 'undefined',
        'isQQ': _0x33f44a.indexOf('MQQBrowser') > -1
    };
};
function liveJumpToApp(_0x302f48, _0x28bf8b) {
    var _0x315b7b = encodeURIComponent(_0x302f48);
    if (PlayerBrowserCheckUtil.checkUserAgent().isIphone) {
        PlayerBrowserCheckUtil.checkUserAgent().isWeChat ? window.location = 'https://a.app.qq.com/o/simple.jsp?pkgname=cn.cntv&ios_scheme=' + _0x315b7b : (window.location = 'https://a.app.qq.com/o/simple.jsp?pkgname=cn.cntv&ios_scheme=' + _0x315b7b, setTimeout(function () {
            ;
            window.location = 'https://itunes.apple.com/cn/app/cntv-zhong-guo-wang-luo-dian/id331259725?mt=8';
        }, 2500));
    } else {
        if (PlayerBrowserCheckUtil.checkUserAgent().isWeChat) {
            if (PlayerBrowserCheckUtil.checkUserAgent().isIpad) {
                window.location = 'https://a.app.qq.com/o/simple.jsp?pkgname=cn.cntvhd&ios_scheme=' + _0x315b7b;
            } else {
                PlayerBrowserCheckUtil.checkUserAgent().isAndroidPad ? window.location = 'https://a.app.qq.com/o/simple.jsp?pkgname=cn.cntvhd&android_schema=' + _0x315b7b : window.location = 'https://a.app.qq.com/o/simple.jsp?pkgname=cn.cntv&android_schema=' + _0x315b7b;
            }
        } else {
            if (PlayerBrowserCheckUtil.checkUserAgent().isDingding) {
                if (PlayerBrowserCheckUtil.checkUserAgent().isIpad) {
                    window.location = 'https://a.app.qq.com/o/simple.jsp?pkgname=cn.cntvhd&ios_scheme=' + _0x315b7b;
                } else {
                    PlayerBrowserCheckUtil.checkUserAgent().isAndroidPad ? window.location = 'https://a.app.qq.com/o/simple.jsp?pkgname=cn.cntvhd&android_schema=' + _0x315b7b : window.location = 'https://a.app.qq.com/o/simple.jsp?pkgname=cn.cntv&android_schema=' + _0x315b7b;
                }
            } else {
                PlayerBrowserCheckUtil.checkUserAgent().isHuaweiZhinengzhushou ? JSAPI.openByApp4EMUI6('cn.cntv', _0x302f48, 1, 'C112192') : (window.location = 'https://a.app.qq.com/o/simple.jsp?pkgname=cn.cntv&android_schema=' + _0x315b7b, setTimeout(function () {
                    ;
                    if (PlayerBrowserCheckUtil.checkUserAgent().isIpad) {
                        window.location = 'https://itunes.apple.com/cn/app/%E5%A4%AE%E8%A7%86%E5%BD%B1%E9%9F%B3hd-%E6%B5%B7%E9%87%8F%E5%A4%AE%E8%A7%86%E5%86%85%E5%AE%B9%E9%AB%98%E6%B8%85%E7%9B%B4%E6%92%AD/id391071343?mt=8';
                    } else {
                        if (PlayerBrowserCheckUtil.checkUserAgent().isAndroidPad) {
                            window.location = 'https://a.app.qq.com/o/simple.jsp?pkgname=cn.cntvhd&android_schema=' + _0x315b7b;
                        } else {
                            if (PlayerBrowserCheckUtil.checkUserAgent().isVivo) {
                                window.location = 'vivomarket://details?id=cn.cntv';
                            } else {
                                PlayerBrowserCheckUtil.checkUserAgent().isHuawei ? window.location = 'hiapp://com.huawei.appmarket?activityName=activityUri|appdetail.activity&params={"params":[{"name":"uri","type":"String","value":"app|C112192"}]}&channelId=123412' : window.location = 'https://app.cctv.com/special/download/ysyy/index.html';
                            }
                        }
                    }
                }, 2500));
            }
        }
    }
}
function showLivePlayerPosterImg(_0x5c1974) {
    var _0x5b87d3 = '';
    _0x5b87d3 = '<div id="poster_' + _0x5c1974.divId + '" style="position:absolute;top:0px;left:0px;margin:0 auto;text-align:center;width:100%;height:100%;cursor:pointer;z-index:20;">';
    _0x5c1974.posterImg && _0x5c1974.posterImg.length > 3 && (_0x5b87d3 += '<img src="' + _0x5c1974.posterImg + '" style="width:100%;height:100%;object-fit:contain;">');
    _0x5b87d3 += '</div>';
    document.getElementById(_0x5c1974.divId).insertAdjacentHTML('afterBegin', _0x5b87d3);
    var _0x383812 = '//player.cntv.cn/html5Player/images/20190905/play.png';
    _0x5c1974.ui === 'ipanda' && (_0x383812 = '//player.cntv.cn/html5Player/images/ipanda20201204/play.png');
    var _0x23f0cf = 'bottom:18px;left:18px;width:48px;', _0x285c32 = 'width:48px;height:48px;padding:0px;';
    _0x5c1974.isLeftBottom === 'false' ? (_0x23f0cf = 'top:50%;margin:-24px auto 0;text-align:center;width:100%;', isIPad() && (_0x285c32 = 'width:30px;height:30px;padding:9px;')) : isIPad() && (_0x23f0cf = 'bottom:0px;left:9px;width:48px;', _0x285c32 = 'width:30px;height:30px;padding:9px;');
    _0x5b87d3 = '<div id="poster_playbtn_' + _0x5c1974.divId + '" style="position:absolute;' + _0x23f0cf + 'height:48px;cursor:pointer;z-index:23;">';
    _0x5b87d3 += '<img src="' + _0x383812 + '" style="' + _0x285c32 + '">';
    _0x5b87d3 += '</div>';
    document.getElementById(_0x5c1974.divId).insertAdjacentHTML('afterBegin', _0x5b87d3);
    document.getElementById('poster_playbtn_' + _0x5c1974.divId).addEventListener('click', function (_0x4a5441) {
        removeLivePlayerPosterImg(_0x5c1974);
    }, false);
    document.getElementById(_0x5c1974.divId).addEventListener('click', function (_0x238553) {
        removeLivePlayerPosterImg(_0x5c1974);
    }, false);
}
function removeLivePlayerPosterImg(_0x1443f0) {
    var _0x3dfca5 = document.getElementById(_0x1443f0.divId), _0xcf318c = document.getElementById('poster_playbtn_' + _0x1443f0.divId), _0x42b94d = document.getElementById('poster_' + _0x1443f0.divId);
    if (!_0xcf318c && !_0x42b94d) {
        return;
    }
    if (document.getElementById('html5Player-' + _0x1443f0.divId)) {
        return;
    }
    isIPad() && (livePlayerObjs[_0x1443f0.divId].hasPosterImg = true);
    _0xcf318c && _0x3dfca5.removeChild(_0xcf318c);
    _0x42b94d && _0x3dfca5.removeChild(document.getElementById('poster_' + _0x1443f0.divId));
    _0x1443f0.posterImg = '';
    /(iphone|ipad)/i.test(navigator.userAgent) && (livePlayerObjs.isSdrmAutoPlay = 'true');
    !isNewH5LivePlayer(livePlayerObjs[_0x1443f0.divId]) && (_0x1443f0.isAutoPlay = 'true');
    if (_0x1443f0.others && (_0x1443f0.others.indexOf('.m3u8') > 0 || _0x1443f0.others.indexOf('.ts') > 0)) {
        livePlayerObjs[_0x1443f0.divId].video.url = _0x1443f0.others;
        livePlayerObjs[_0x1443f0.divId].vdn.public = '1';
        parseLiveDataFromVdn(_0x1443f0, true);
    } else {
        if (livePlayerObjs[_0x1443f0.divId].isNewVdn) {
            doLoadLiveDataByAjax(livePlayerObjs[_0x1443f0.divId].vdn.vdnUrl, '', parseLiveDataFromVdnx, _0x1443f0, parseLiveDataFromVdnxWhenError, 10000);
            _0x1443f0.authKey = '';
        } else {
            livePlayerObjs[_0x1443f0.divId].vdn.vdnUrl.indexOf('liveHtml5.do?') > 0 ? loadLiveScript(livePlayerObjs[_0x1443f0.divId].vdn.vdnUrl, parseLiveDataFromVdn, _0x1443f0, parseLiveDataFromVdnWhenError, 10000) : doLoadLiveDataByAjax(livePlayerObjs[_0x1443f0.divId].vdn.vdnUrl, '', parseLiveDataFromVdn, _0x1443f0, parseLiveDataFromVdnWhenError, 10000);
        }
    }
    createLiveVideoLoadingImg(_0x1443f0);
}
function showNoDrmMsg(_0x1bcfbc, _0x4f4e65) {
    var _0x46f93a = false;
    if (!isLiveHlsJsSupported() || !isWasmSupported()) {
        var _0x55e585 = [
                'cctv3',
                'cctv5',
                'cctv5plus',
                'cctv6',
                'cctv8',
                'cctv16'
            ], _0x158eb7 = [
                'cctv1',
                'cctv13',
                'cctv2',
                'cctv4',
                'cctv7',
                'cctvjilu',
                'cctv10',
                'cctv11',
                'cctv12',
                'cctvchild',
                'cctv15',
                'cctv17',
                'cctveurope',
                'cctvamerica'
            ];
        if (_0x55e585.indexOf(_0x1bcfbc.t) !== -1) {
            _0x46f93a = true;
            showLivePlayerMsg(_0x1bcfbc, '鏈\uE101椂娈佃妭鐩\uE1BF\uE1EC浣跨敤鐢佃剳绔\uE21D\uE747鐪\uFFFD');
        } else {
            _0x158eb7.indexOf(_0x1bcfbc.t) !== -1 ? (_0x46f93a = true, showLivePlayerMsg(_0x1bcfbc, '鏈\uE101椂娈佃妭鐩\uE1BF\uE1EC浣跨敤鐢佃剳绔\uE21B垨澶\uE1BF\uE74B褰遍煶瀹\u3221埛绔\uE21D\uE747鐪\uFFFD')) : _0x46f93a = false;
        }
        if (_0x46f93a) {
            var _0x5aeefe = document.getElementById('control_bar_' + _0x1bcfbc.divId);
            _0x5aeefe && (_0x5aeefe.style.display = 'none');
        }
    }
    return _0x46f93a;
}
function getLiveVdnTipMsg(_0x59af6b, _0x34449d) {
    var _0x5fb4be = _0x59af6b, _0x23a870 = null;
    return _0x5fb4be ? (_0x5fb4be += '', _0x5fb4be.length > 0 && (_0x5fb4be = _0x5fb4be.replace(/(   )/g, '<br />'))) : (_0x5fb4be = liveStatusMsg.public_0_default, _0x34449d && (_0x23a870 = liveCheckVdnReturnMsg(_0x34449d, false), _0x23a870 && _0x23a870.msg && (_0x5fb4be = _0x23a870.msg))), _0x5fb4be;
}
function showLivePlayerErrorMsg(_0x6ba755) {
    var _0x1a8bc9 = '缃戠粶寮\u20AC灏忓樊浜嗭紝';
    !isIPad() && document.getElementById(_0x6ba755.divId) && (document.getElementById(_0x6ba755.divId).innerHTML = '');
    _0x1a8bc9 += '璇风\u25E2鍚庡啀璇\uFFFD';
    showLivePlayerMsg(_0x6ba755, _0x1a8bc9);
}
function showLivePlayerMsg(_0x1d79f9, _0x1badb7, _0x4e86e4) {
    var _0x13b944 = false;
    destroyH5LiveHls(_0x1d79f9, _0x4e86e4);
    livePlayerObjs[_0x1d79f9.divId] && (livePlayerObjs[_0x1d79f9.divId].errorIsReported && clearTimeout(livePlayerObjs[_0x1d79f9.divId].errorTimer), livePlayerObjs[_0x1d79f9.divId].errorIsReported = false);
    var _0x2aa300 = document.getElementById(_0x1d79f9.divId);
    document.getElementById('h5player_' + _0x1d79f9.divId) && (document.getElementById('h5player_' + _0x1d79f9.divId).pause(), document.getElementById('h5player_' + _0x1d79f9.divId).style.display = 'none');
    document.getElementById('h5canvas_' + _0x1d79f9.divId) && (document.getElementById('h5canvas_' + _0x1d79f9.divId).style.display = 'none');
    isIPad() && document.getElementById('control_bar_' + _0x1d79f9.divId) && (document.getElementById('control_bar_' + _0x1d79f9.divId).style.display = 'none');
    _0x1badb7 && _0x1badb7.indexOf('鍒锋柊') > 0 && (_0x2aa300.innerHTML = '');
    _0x1badb7 && _0x1badb7.indexOf('sorry') !== -1 && (_0x1badb7 = _0x1badb7.replace('sorry', ''), (_0x1d79f9.t === 'cctv5' || _0x1d79f9.t === 'cctv5plus') && (_0x1badb7 = '鍥犵増鏉冨師鍥狅紝鏆傛椂涓嶆彁渚涜\uE1DA鏃舵\uE18C鑺傜洰', isIPad() ? _0x1badb7 += '<br />' : _0x1badb7 += '锛\uFFFD', _0x1badb7 += '璇烽\u20AC夋嫨澶\uE1BF\uE74B棰戣\uE747鐪嬬綉缁滅洿鎾\uFFFD'));
    var _0x55c2f1 = document.getElementById('error_msg_' + _0x1d79f9.divId);
    if (!_0x55c2f1) {
        _0x55c2f1 = createElementByType('div', 'error_msg_' + _0x1d79f9.divId, 'absolute', '100%', '100%', '0', '0');
        var _0x26d417 = '16', _0x2fa151 = '28', _0x4cd13d = '55%';
        isIPad() && (_0x26d417 = '14', _0x2fa151 = '20', _0x4cd13d = '50%');
        _0x55c2f1.style.cssText = 'position:absolute;width:100%;top:' + _0x4cd13d + ';color:#FFF;font-size:' + _0x26d417 + 'px;line-height:' + _0x2fa151 + 'px;word-break:break-all;font-family:PingFangSC-Regular,Helvetica,Arial,Microsoft Yahei,sans-serif;margin:0 auto;text-align:center;';
        _0x2aa300.appendChild(_0x55c2f1);
    }
    _0x1badb7 === 'jumpToApp' && (_0x1badb7 = '<div>鏈\uE101椂娈佃妭鐩\uE1BF\uE1EC浣跨敤鐢佃剳绔\uE21B垨澶\uE1BF\uE74B褰遍煶瀹\u3221埛绔\uE21D\uE747鐪\uFFFD</div>', _0x1badb7 += '<div style=\'text-align: center;width:200px;margin:20px auto\'><img src=\'//player.cntv.cn/html5Player/images/20190905/jump_to_app.png\' id=\'jump_to_app_' + _0x1d79f9.divId + '\' style=\'width:200px;\'></div>', _0x13b944 = true);
    _0x55c2f1.innerHTML = _0x1badb7;
    showLivePlayerBg(_0x1d79f9.divId);
    document.getElementById('loading_' + _0x1d79f9.divId) && (document.getElementById('loading_' + _0x1d79f9.divId).style.display = 'none');
    var _0x51df93 = document.getElementById('play_or_pause_play_' + _0x1d79f9.divId);
    _0x51df93 && LivePlayOrPauseBtn.prototype.switchPlayOrPauseBtn(_0x1d79f9.divId, 'pause');
    livePlayerObjs[_0x1d79f9.divId] && livePlayerObjs[_0x1d79f9.divId].video && (clearInterval(livePlayerObjs[_0x1d79f9.divId].video.playedTimer), livePlayerObjs[_0x1d79f9.divId].loadingTime = 0);
    if (isIPad()) {
        var _0x4b0e5 = document.getElementById('h5player_' + _0x1d79f9.divId);
        if (_0x1badb7.indexOf('鍚\uFFFD') === -1) {
            var _0x4e75c3 = document.getElementById('player_pagefullscreen_' + _0x1d79f9.divId);
            _0x4e75c3 && _0x4e75c3.getAttribute('isPageFullscreen') === 'true' ? (_0x4e75c3.setAttribute('isPageFullscreen', 'true'), LiveMobileFullscreenBtn.prototype.pageFullscreenClick(_0x1d79f9.divId, 'yes')) : _0x2aa300.contains && _0x2aa300.contains(_0x4b0e5) ? (/(ucbrowser)/i.test(navigator.userAgent) && /(Android)/i.test(navigator.userAgent) && (_0x4b0e5.src = ''), /(iphone|ipad)/i.test(navigator.userAgent) && (document.exitPictureInPicture && document.exitPictureInPicture(), _0x2aa300.removeChild(_0x4b0e5))) : typeof LiveFullscreenBtn !== 'undefined' && LiveFullscreenBtn.prototype.exitFullscreen();
            var _0x3976b4 = document.getElementById('control_bar_' + _0x1d79f9.divId);
            _0x3976b4 && _0x2aa300.removeChild(_0x3976b4);
        }
    }
    if (_0x13b944) {
        var _0x4ec576 = document.getElementById('jump_to_app_' + _0x1d79f9.divId);
        _0x4ec576 && _0x4ec576.addEventListener('click', function (_0x3ff259) {
            var _0x1eeda9 = encodeURIComponent(document.title), _0x8ba3bd = encodeURIComponent(_0x1d79f9.t);
            liveJumpToApp('cntvcbox://app.cntv.cn/liveVideo?playid=' + _0x8ba3bd + '&title=' + _0x1eeda9, '../download/index.html?vtype=8&playid=' + _0x8ba3bd + '&title=' + _0x1eeda9);
        }, false);
    }
}
function removeLiveErrorMsg(_0x378936, _0x5b1257) {
    var _0x24c71b = document.getElementById(_0x378936.divId), _0x38bc9a = document.getElementById('error_msg_' + _0x378936.divId);
    if (_0x38bc9a) {
        _0x24c71b.removeChild(_0x38bc9a);
        if (isIPad()) {
            var _0xd68784 = 'cctv_html5player_bg_16X9.png';
            _0x378936.h / _0x378936.w > 1 && (_0xd68784 = 'cctv_html5player_bg_9X16.png');
            _0x378936.isHttps === 'true' ? _0x24c71b.style.backgroundImage = 'url(\'https://player.cntv.cn/html5Player/images/' + _0xd68784 + '\')' : _0x24c71b.style.backgroundImage = 'url(\'http://player.cntv.cn/html5Player/images/' + _0xd68784 + '\')';
        } else {
            _0x24c71b.style.backgroundImage = '';
            _0x24c71b.style.backgroundColor = '#000';
        }
        var _0x3dc0d4 = document.getElementById('h5player_' + _0x378936.divId);
        !isIPad() && _0x3dc0d4 && (_0x3dc0d4.style.display = 'block');
        document.getElementById('h5canvas_' + _0x378936.divId) && (document.getElementById('h5canvas_' + _0x378936.divId).style.display = 'block');
        if (document.getElementById('timeshift_bar_' + _0x378936.divId) && !_0x5b1257) {
            createLiveHls(_0x378936);
            var _0x4e52f3 = 2;
            livePlayerObjs[_0x378936.divId].startStamp && (_0x4e52f3 = livePlayerObjs[_0x378936.divId].startStamp);
            var _0x1f4e55 = 2;
            livePlayerObjs[_0x378936.divId].startStamp && livePlayerObjs[_0x378936.divId].startStamp - 0 > 0 && (_0x1f4e55 = livePlayerObjs[_0x378936.divId].startStamp);
            LiveTimeshiftBar.prototype.liveTimeUpdate(_0x378936, _0x4e52f3);
        }
        (_0x378936.playerType === 'small' || _0x378936.playerType === 'hw') && createLiveHls(_0x378936);
    }
    var _0x58be40 = document.getElementById('logo_' + _0x378936.divId);
    _0x58be40 && document.getElementById(_0x378936.divId) && (_0x58be40.style.display = 'none', document.getElementById(_0x378936.divId).removeChild(_0x58be40));
}
function showLivePlayerBg(_0x17791b) {
    var _0x46931c = document.getElementById(_0x17791b);
    _0x46931c.style.backgroundImage = 'url(\'//player.cntv.cn/html5Player/images/20190905/cctv_bg.png\')';
    _0x46931c.style.backgroundRepeat = 'no-repeat';
    _0x46931c.style.backgroundPosition = '0px 0px';
    _0x46931c.style.backgroundSize = '100% 100%';
    if (!document.getElementById('logo_' + _0x17791b)) {
        var _0x184cbd = '', _0x1360a7 = '//player.cntv.cn/html5Player/images/20190905/cctv_logo.png';
        livePlayerObjs[_0x17791b].logoImg && livePlayerObjs[_0x17791b].logoImg.length > 5 && (_0x1360a7 = livePlayerObjs[_0x17791b].logoImg, _0x1360a7 = _0x1360a7.replace('http://', '//'));
        location.href.indexOf('fromapp=cctvnews') > 0 && (_0x1360a7 = '//player.cntv.cn/html5Player/images/20190905/cctv_logo.png');
        typeof calledByApp !== 'undefined' && (calledByApp === 'cctvnews' && (_0x1360a7 = '//player.cntv.cn/html5Player/images/20190905/cctv_logo.png'));
        _0x184cbd = '<div id="logo_' + _0x17791b + '" style="position:absolute;top:20%;margin:0 auto;text-align:center;width:100%;height:15%;cursor:pointer;z-index:20;">';
        _0x184cbd += '<img src="' + _0x1360a7 + '" style="width:auto;height:100%;display:inline-block;">';
        _0x184cbd += '</div>';
        try {
            _0x46931c.insertAdjacentHTML('afterBegin', _0x184cbd);
        } catch (_0x149371) {
        }
    }
}
function isDrmLegalDomainUrl() {
    var _0x14d513 = '', _0x35d57e = false;
    try {
        var _0x3dd04b = window.location.href || self.location.href || document.URL || document.location;
        _0x3dd04b = _0x3dd04b.toString().toLocaleLowerCase();
        _0x14d513 = /https?:\/\/(?:[^/]+\.)?([^./]+\.\w*.(?:cn|com|org))(?:$|\/)/.exec(_0x3dd04b);
        if (!_0x14d513) {
            var _0x1b5e1d = _0x3dd04b.split('/');
            if (_0x1b5e1d && _0x1b5e1d.length > 1) {
                _0x14d513 = _0x1b5e1d[2];
            } else {
                return false;
            }
        } else {
            _0x14d513 = _0x14d513[1];
        }
        var _0x193b70 = [
            '7G179P79P7A47A17G179P7A9',
            '7G179P79P7A47A17G179P7AA7AG',
            '7G179P7A97A47A17G179P7A9',
            '7AJ7AJ7AJ7G17927AY79W7A979H79W7G179P7AA7AG',
            '79R7A97G17927AY79W7A979H79W7G179P7AA7AG',
            '7A17G17A97AY79P7G179E7AA7A17G179P7A9',
            '7AJ7AJ7AJ7G179H7AA79P7A079P79T7927A979W7G179P7A9',
            '7AJ7AJ7AJ7G179P7A979H7937927A77AG7G179P7AA7AG',
            '7AJ7AJ7AJ7G17AK7AG7A47A17G179P7A9',
            '7AJ7AJ7AJ7G179P79T7A979P7AY79W7G17AA7AQ79E',
            '7AJ7AJ7AJ7G17A979P7AY79W7G079P7A779W7AU7AU79279P7G179P7AA7AG',
            '7AG7G17A979P7AY79W7G079P7A779W7AU7AU79279P7G179P7AA7AG',
            '79P7A779W7AU7AU79279P7G179P79T7A979P7AY79W7G17AA7AQ79E',
            '7G17G57GL7GM7GS7G57G179P7A9',
            '7AJ7AJ7AJ7G179P7AY7AY79P79P7G179E7AA7A17G179P7A9',
            '7AJ7AJ7AJ7G179E7AA7A17G179P7A9',
            '79W79H7AG7927A97G179P7AY7AA7AQ7A479W7A77G179P7A97A47A17927A97A479R7AQ7A979W7A77G179P7A9',
            '7G179E7AA7A17G179P7A9',
            '7G17927AY79W7A979H79W7G179P7AA7AG'
        ];
        _0x193b70.push('7G17AA7A77A57AG7AY79279P79P79T79W7A97A979R7A779P79T7927A979W7G179P7A9');
        _0x193b70.push('7G17927AY79W7A979H79W7G179P7A9');
        _0x193b70.push('7G179P7AU7AG7AY7A479R7G179P7AA7AG');
        var _0x1fca6d = '7G9AY8QU401JK5LMVBFSCX6DNWOPHR3ET2IZ', _0x12a386 = _0x1fca6d.length, _0x3eea26 = _0x1fca6d.split(''), _0x1986b8 = '', _0xa24f4e, _0x26722e, _0x5b942c, _0x58df3c;
        for (var _0x1df403 = 0; _0x1df403 < _0x14d513.length; _0x1df403++) {
            _0xa24f4e = _0x14d513.charCodeAt(_0x1df403);
            _0x26722e = _0xa24f4e % _0x12a386;
            _0xa24f4e = (_0xa24f4e - _0x26722e) / _0x12a386;
            _0x5b942c = _0xa24f4e % _0x12a386;
            _0xa24f4e = (_0xa24f4e - _0x5b942c) / _0x12a386;
            _0x58df3c = _0xa24f4e % _0x12a386;
            _0x1986b8 += _0x3eea26[_0x58df3c] + _0x3eea26[_0x5b942c] + _0x3eea26[_0x26722e];
        }
        for (_0x1df403 = 0; _0x1df403 < _0x193b70.length; _0x1df403++) {
            if (_0x1986b8.indexOf(_0x193b70[_0x1df403]) >= 0) {
                _0x35d57e = true;
                break;
            }
        }
        window.top && window.self && window.top != window.self && (_0x35d57e = false);
    } catch (_0x572994) {
    }
    return _0x35d57e;
}
function isIPad() {
    ;
    return /(iphone|ipad)/i.test(navigator.userAgent) || /(Android)/i.test(navigator.userAgent) || /(OpenHarmony)/i.test(navigator.userAgent) && /(Mobile)/i.test(navigator.userAgent);
}
function isCanvasSupported(_0x2ba5cd) {
    var _0x468eca = false, _0x4c9096 = document.getElementById('h5canvas_' + _0x2ba5cd);
    _0x4c9096 && _0x4c9096.getContext && isIPad() && (_0x468eca = true);
    var _0x34e041 = navigator.userAgent.toLowerCase();
    return (_0x34e041.indexOf('oppobrowser') > 0 || _0x34e041.indexOf('firefox') > 0 || _0x34e041.indexOf('liebao') > 0 || _0x34e041.indexOf('oneplus') > 0) && (_0x468eca = false), _0x468eca;
}
function transformDateToStamp(_0x4f0ac7) {
    ;
    _0x4f0ac7 += '';
    if (_0x4f0ac7.length === 10) {
        return _0x4f0ac7;
    }
    var _0x1f97e2 = _0x4f0ac7.substr(0, 4), _0x1f10b6 = _0x4f0ac7.substr(4, 2), _0x1a5208 = _0x4f0ac7.substr(6, 2), _0x49848d = _0x4f0ac7.substr(8, 2), _0x536695 = _0x4f0ac7.substr(10, 2), _0x20dba7 = '00';
    _0x4f0ac7.length === 14 && (_0x20dba7 = _0x4f0ac7.substr(12, 2));
    var _0x28a52f = _0x1f97e2 + '-' + _0x1f10b6 + '-' + _0x1a5208 + ' ' + _0x49848d + ':' + _0x536695 + ':' + _0x20dba7;
    return datetimeToUnix(_0x28a52f);
}
function createElementByType(_0x28721f, _0x2c8ae8, _0x5b7530, _0x4cf9ae, _0x130dc0, _0x5682e1, _0x487b06) {
    var _0x297d05 = document.createElement(_0x28721f);
    return _0x297d05.setAttribute('id', _0x2c8ae8), _0x297d05.style.position = _0x5b7530, _0x297d05.style.width = _0x4cf9ae, _0x297d05.style.height = _0x130dc0, _0x297d05.style.left = _0x5682e1, _0x297d05.style.top = _0x487b06, _0x297d05;
}
function getLivefingerprint2() {
}
function setCookie_vdn(_0x5dfebf, _0x547d67, _0x5dedb6) {
    ;
    _0x5dfebf == 'Fingerprint' && (_0x5dfebf = 'cna');
    if (_0x5dedb6) {
        var _0x4edb7b = new Date();
        _0x4edb7b.setTime(_0x4edb7b.getTime() + _0x5dedb6 * 24 * 60 * 60 * 1000);
        document.cookie = _0x5dfebf + '=' + _0x547d67 + ';expires=' + _0x4edb7b.toGMTString();
    } else {
        document.cookie = _0x5dfebf + '=' + _0x547d67;
    }
    try {
        window.localStorage && localStorage.setItem(_0x5dfebf, _0x547d67);
    } catch (_0x562974) {
    }
}
function removeCookie_vdn(_0x36ccfc) {
    setCookie_vdn(_0x36ccfc, '', -1);
}
function getCookie_vdn(_0x30f9ab) {
    var _0x1019f2 = '';
    _0x30f9ab == 'Fingerprint' && (_0x30f9ab = 'cna');
    if (document.cookie) {
        var _0x325dba = document.cookie, _0x53b325 = _0x325dba.split('; ');
        for (var _0x214f5e = 0; _0x214f5e < _0x53b325.length; _0x214f5e++) {
            var _0x15ebb6 = _0x53b325[_0x214f5e].split('=');
            if (_0x15ebb6[0] == _0x30f9ab) {
                _0x1019f2 = _0x15ebb6[1].toString();
                break;
            }
        }
    }
    _0x1019f2 += '';
    try {
        (!_0x1019f2 || _0x1019f2.length < 20) && window.localStorage && (_0x1019f2 = localStorage[_0x30f9ab] ? localStorage[_0x30f9ab] : '');
    } catch (_0x4d8769) {
        _0x1019f2 = '';
    }
    return _0x1019f2;
}
function getFingerprint() {
    var _0x11fa8c = new Fingerprint2();
    _0x11fa8c.get(function (_0x271e05) {
        ;
        setCookie_vdn('Fingerprint', _0x271e05.toUpperCase(), 7);
    });
}
function showLivePlayerSmallWindow(_0x3df425, _0x2dd12c, _0x5c8c67, _0x5ee1b3, _0x383338) {
    var _0x39a549 = document.getElementById(_0x3df425), _0x326646 = document.getElementById('h5player_' + _0x3df425);
    if (!_0x39a549 || !_0x326646) {
        return;
    }
    if (!document.getElementById('control_bar_' + _0x3df425)) {
        return;
    }
    if (livePlayerObjs[_0x3df425] && !livePlayerObjs[_0x3df425].isShowSmallWindow) {
        return;
    }
    _0x2dd12c = _0x2dd12c ? _0x2dd12c : 20;
    _0x5c8c67 = _0x5c8c67 ? _0x5c8c67 : 20;
    _0x5ee1b3 = _0x5ee1b3 ? _0x5ee1b3 : 428;
    _0x383338 = parseInt(_0x5ee1b3 * livePlayerObjs[_0x3df425].h / livePlayerObjs[_0x3df425].w);
    _0x39a549.style.position = 'fixed';
    _0x39a549.style.right = _0x2dd12c + 'px';
    _0x39a549.style.bottom = _0x5c8c67 + 'px';
    _0x39a549.style.width = _0x5ee1b3 + 'px';
    _0x39a549.style.height = _0x383338 + 'px';
    _0x39a549.style.margin = '0';
    var _0xd9fc26 = document.getElementById('control_bar_' + _0x3df425), _0xca54e2 = _0xd9fc26.children, _0x11cfde = _0xca54e2.length;
    for (var _0x5501ee = 0; _0x5501ee < _0x11cfde; _0x5501ee++) {
        _0xca54e2[_0x5501ee].style.display = 'none';
    }
    var _0xa48d6c = document.getElementById('timeshift_time_' + _0x3df425);
    _0xa48d6c && (_0xa48d6c.style.display = 'none');
    var _0x2c76d8 = document.getElementById('play_or_plause_' + _0x3df425);
    _0x2c76d8 && (_0x2c76d8.style.display = 'block');
    if (document.getElementById('close_player_' + _0x3df425)) {
        document.getElementById('close_player_' + _0x3df425).style.display = 'block';
    } else {
        var _0x10c8e5 = _0x5c8c67 + _0x383338 - 30, _0x1af166 = _0x2dd12c + 10, _0x5e2045 = 'block', _0x3d1192 = document.querySelector('.dragLayer');
        _0x3d1192 && (_0x5e2045 = 'none');
        var _0xde638f = '<div id="close_player_' + _0x3df425 + '" style="position:fixed;bottom:' + _0x10c8e5 + 'px;right:' + _0x1af166 + 'px;margin:2px;text-align:center;width:16;height:16;cursor:pointer;z-index:20;">';
        _0xde638f += '<img src="//player.cntv.cn/html5Player/images/20190905/close_player.png" style="width:12px;height:12px;display:' + _0x5e2045 + ';">';
        _0xde638f += '</div>';
        document.getElementById(_0x3df425).insertAdjacentHTML('afterBegin', _0xde638f);
    }
    document.getElementById('close_player_' + _0x3df425).addEventListener('click', function (_0x5df40d) {
        hideLivePlayerSmallWindow(_0x3df425);
    }, false);
    var _0x26d1a4 = document.getElementById(_0x3df425);
    return _0x26d1a4 && LiveAdBanner.prototype.adBannerShowOrHide(livePlayerObjs[_0x3df425], 'hide'), true;
}
function hideLivePlayerSmallWindow(_0x2d5e9f) {
    var _0x1bf72d = document.getElementById(_0x2d5e9f), _0x145762 = _0x1bf72d.offsetWidth;
    if (!_0x1bf72d || !document.getElementById('control_bar_' + _0x2d5e9f) || _0x145762 - 600 > 0) {
        return;
    }
    var _0x45bd78 = document.getElementById('player_fullscreen_' + _0x2d5e9f);
    if (_0x45bd78 && _0x45bd78.getAttribute('isFullscreen') === 'true') {
        return;
    }
    var _0x35b094 = _0x1bf72d.getAttribute('originalStyle');
    document.getElementById('close_player_' + _0x2d5e9f) && _0x1bf72d.removeChild(document.getElementById('close_player_' + _0x2d5e9f));
    _0x1bf72d.style.cssText = _0x35b094;
    var _0x1b6ebf = document.getElementById('control_bar_' + _0x2d5e9f), _0x4339d7 = [
            'play_or_plause_' + _0x2d5e9f,
            'played_time_' + _0x2d5e9f,
            'player_speed_' + _0x2d5e9f,
            'player_resolution_' + _0x2d5e9f,
            'player_set_' + _0x2d5e9f
        ];
    _0x4339d7.push('play_next_' + _0x2d5e9f);
    _0x4339d7.push('player_sound_btn_' + _0x2d5e9f);
    _0x4339d7.push('player_pagefullscreen_' + _0x2d5e9f);
    _0x4339d7.push('player_fullscreen_' + _0x2d5e9f);
    _0x4339d7.push('player_progress_' + _0x2d5e9f);
    _0x4339d7.push('player_progress_total_' + _0x2d5e9f);
    _0x4339d7.push('player_progress_played_' + _0x2d5e9f);
    _0x4339d7.push('player_progress_cached_' + _0x2d5e9f);
    _0x4339d7.push('timeshift_bar_' + _0x2d5e9f);
    _0x4339d7.push('timeshift_pointer_' + _0x2d5e9f);
    _0x4339d7.push('timeshiftbtn_' + _0x2d5e9f);
    _0x4339d7.push('audio_' + _0x2d5e9f);
    !livePlayerObjs[_0x2d5e9f].isLive && (_0x4339d7.push('timeshift_time_' + _0x2d5e9f), _0x4339d7.push('return_to_live_' + _0x2d5e9f));
    if (_0x1b6ebf) {
        _0x1b6ebf.style.display = 'none';
        var _0x207ea7 = document.getElementById('pic_in_pic_' + _0x2d5e9f);
        _0x207ea7 && (_0x207ea7.style.display = 'none');
        var _0x2d6c9c = _0x1b6ebf.children, _0x4d9684 = _0x2d6c9c.length;
        for (var _0x1765c9 = 0; _0x1765c9 < _0x4d9684; _0x1765c9++) {
            _0x4339d7.includes(_0x2d6c9c[_0x1765c9].id) && (_0x2d6c9c[_0x1765c9].style.display = 'block');
        }
    }
    return true;
}
var liveStatusMsg = {
        'ack_no_and_status_002': '璇ヨ\uE74B棰戝凡涓嬫灦锛岃\uE1EC瑙傜湅鍏朵粬瑙嗛\uE576',
        'ack_no_and_status_003': '璇ヨ\uE74B棰戝凡涓嬫灦锛岃\uE1EC瑙傜湅鍏朵粬瑙嗛\uE576',
        'ack_no_and_status_004': '璇ヨ\uE74B棰戜笉瀛樺湪',
        'ack_no_and_status_005': '璇ヨ\uE74B棰戝\uE178鏍镐腑锛岃\uE1EC閫夋嫨瑙傜湅鍏朵粬绮惧僵瑙嗛\uE576',
        'ack_no_and_status_006': '鏀惰垂瑙嗛\uE576鏈\uE044畾浠\uFFFD',
        'ack_no_and_status_007': '鏀惰垂瑙嗛\uE576鏃犺\uE747鐪嬫潈闄\uFFFD',
        'ack_no': '缃戠粶寮\u20AC灏忓樊浜嗭紝璇风\u25E2鍚庡啀璇\uFFFD',
        'status_0': '鐢变簬鎾\uE15E嚭瀹夋帓鍙樻洿锛屾殏涓嶆敮鎸佹挱鏀捐\uE1DA鏃舵\uE18C鍐呭\uE190',
        'public_0_default': '鐢变簬鎾\uE15E嚭瀹夋帓鍙樻洿锛屾殏涓嶆敮鎸佹挱鏀捐\uE1DA鏃舵\uE18C鍐呭\uE190',
        'video_protect_0_and_audio_protect_0': '鏆備笉鏀\uE21B寔鎾\uE15F斁璇ヨ\uE74B棰戝唴瀹\uFFFD',
        'video_protect_0_and_audio_protect_3': '鏈\uE101椂娈佃妭鐩\uE1BC洜鐗堟潈鍘熷洜锛屾殏鏃舵棤娉曟挱鏀撅紱<br />璇风偣鍑绘挱鏀炬寜閽\uE1BD敹鍚\uE101\uE11D鑺傜洰',
        'video_protect_1_and_audio_protect_0': isIPad() ? '鏈\uE101椂娈佃妭鐩\uE1BF\uE1EC浣跨敤鐢佃剳绔\uE21D\uE747鐪\uFFFD' : '鎮ㄦ墍鍦ㄧ殑鍦板尯锛屾殏涓嶆敮鎸佹挱鏀捐\uE1DA瑙嗛\uE576',
        'video_protect_1_and_audio_protect_3': isIPad() ? '鏆備笉鏀\uE21B寔鎾\uE15F斁璇ヨ\uE74B棰戝唴瀹癸紱<br />璇风偣鍑绘挱鏀炬寜閽\uE1BD敹鍚\uE101\uE11D鑺傜洰锛\uFFFD<br />鎴栫Щ鑷崇數鑴戠\uE06C瑙傜湅鏁堟灉鏇翠匠' : '鏆備笉鏀\uE21B寔鎾\uE15F斁璇ヨ\uE74B棰戝唴瀹癸紱<br />璇风偣鍑绘挱鏀炬寜閽\uE1BD敹鍚\uE101\uE11D鑺傜洰',
        'video_protect_2_and_audio_protect_0': isIPad() ? '鏈\uE101椂娈佃妭鐩\uE1BF\uE1EC浣跨敤鐢佃剳绔\uE21D\uE747鐪\uFFFD' : '鏈\uE101椂娈佃妭鐩\uE1BC洜鐗堟潈鍘熷洜锛屾殏鏃舵棤娉曟挱鏀\uFFFD',
        'video_protect_2_and_audio_protect_3': isIPad() ? '鏆備笉鏀\uE21B寔鎾\uE15F斁璇ヨ\uE74B棰戝唴瀹癸紱<br />璇风偣鍑绘挱鏀炬寜閽\uE1BD敹鍚\uE101\uE11D鑺傜洰' : '鏆備笉鏀\uE21B寔鎾\uE15F斁璇ヨ\uE74B棰戝唴瀹癸紱<br />璇风偣鍑绘挱鏀炬寜閽\uE1BD敹鍚\uE101\uE11D鑺傜洰锛\uFFFD<br />鎴栫Щ鑷崇Щ鍔ㄧ\uE06C瑙傜湅',
        'video_protect_3_and_audio_protect_0': isIPad() ? '鎮ㄦ墍鍦ㄧ殑鍦板尯锛屾殏涓嶆敮鎸佹挱鏀捐\uE1DA瑙嗛\uE576' : '鏈\uE101椂娈佃妭鐩\uE1BC洜鐗堟潈鍘熷洜锛屾殏鏃舵棤娉曟挱鏀撅紝璇疯嚦澶\uE1BF\uE74B缃戠Щ鍔ㄧ\uE06C瑙傜湅',
        'video_protect_3_and_audio_protect_3': isIPad() ? '鏆備笉鏀\uE21B寔鎾\uE15F斁璇ヨ\uE74B棰戝唴瀹癸紱<br />璇风偣鍑绘挱鏀炬寜閽\uE1BD敹鍚\uE101\uE11D鑺傜洰' : '鏆備笉鏀\uE21B寔鎾\uE15F斁璇ヨ\uE74B棰戝唴瀹癸紱<br />璇风偣鍑绘挱鏀炬寜閽\uE1BD敹鍚\uE101\uE11D鑺傜洰'
    }, liveLanguageMsg = {
        'en': {
            'ui': {
                'fullscreen': 'Fullscreen',
                'exitFullscreen': 'Exit fullscreen',
                'noneFullscreen': 'This browser does not support fullscreen',
                'webpageFullscreen': 'Webpage Fullscreen',
                'exitWebpageFullscreen': 'Exit webpage Fullscreen',
                'originalSound': 'Audio',
                'ImmersiveSound': 'Immersive',
                'loudspeakerBox': 'Speaker',
                'earphone': 'Earphone',
                'live': 'Live',
                '4K': '4K',
                'p1080': '1080P',
                'p720': 'SD',
                'p540': 'HD',
                'p480': 'STD',
                'p360': 'LD',
                'auto': 'Auto',
                'today': 'Today',
                'Monday': 'Mon.',
                'Tuesday': 'Tue.',
                'Wednesday': 'Wed.',
                'Thursday': 'Thur.',
                'Friday': 'Fri.',
                'Saturday': 'Sat.',
                'Sunday': 'Sun.',
                'month': '.',
                'day': '',
                'timeshift': 'Time shift',
                'returnToLive': 'Return to live',
                'picInPic': 'Picture in picture',
                'picInPicUsing': 'Picture in picture in use',
                'switchChannels': 'Channels',
                'ver': 'Ver',
                'ad': 'Ad',
                'closeAd': 'close Ad'
            }
        },
        'default': {
            'ui': {
                'fullscreen': '鍏ㄥ睆',
                'exitFullscreen': '閫\u20AC鍑哄叏灞\uFFFD',
                'noneFullscreen': '璇ユ祻瑙堝櫒涓嶆敮鎸佸叏灞\uFFFD',
                'webpageFullscreen': '缃戦\u3009鍏ㄥ睆',
                'exitWebpageFullscreen': '閫\u20AC鍑虹綉椤靛叏灞\uFFFD',
                'originalSound': '鍘熷０',
                'ImmersiveSound': '娌夋蹈',
                'loudspeakerBox': '闊崇\uE188',
                'earphone': '鑰虫満',
                'live': '姝ｅ湪鐩存挱',
                '4K': '4K',
                'p1080': '钃濆厜',
                'p720': '瓒呮竻',
                'p540': '楂樻竻',
                'p480': '鏍囨竻',
                'p360': '娴佺晠',
                'auto': '鑷\uE044姩',
                'today': '浠婃棩',
                'Monday': '鍛ㄤ竴',
                'Tuesday': '鍛ㄤ簩',
                'Wednesday': '鍛ㄤ笁',
                'Thursday': '鍛ㄥ洓',
                'Friday': '鍛ㄤ簲',
                'Saturday': '鍛ㄥ叚',
                'Sunday': '鍛ㄦ棩',
                'month': '鏈\uFFFD',
                'day': '鏃\uFFFD',
                'timeshift': '鏃剁Щ',
                'returnToLive': '杩斿洖鐩存挱',
                'picInPic': '鐢讳腑鐢\uFFFD',
                'picInPicUsing': '鐢讳腑鐢讳娇鐢ㄤ腑',
                'switchChannels': '鎹\u3220彴',
                'ver': '鐗堟湰',
                'ad': '骞垮憡',
                'closeAd': '鍏抽棴骞垮憡'
            }
        },
        'ui': {},
        'errorMsg': {},
        'language': {}
    };
!function (_0x433a2c) {
    'use strict';
    ;
    function _0x37b838(_0x130904, _0xf310ab) {
        var _0x24d58d = (65535 & _0x130904) + (65535 & _0xf310ab), _0x513940 = (_0x130904 >> 16) + (_0xf310ab >> 16) + (_0x24d58d >> 16);
        return _0x513940 << 16 | 65535 & _0x24d58d;
    }
    function _0x4e7aad(_0x3d87cb, _0x1c5101) {
        return _0x3d87cb << _0x1c5101 | _0x3d87cb >>> 32 - _0x1c5101;
    }
    function _0x388afa(_0x3e3d9b, _0x11582b, _0x48d61a, _0x450c9b, _0x1870fb, _0xbd4ed6) {
        return _0x37b838(_0x4e7aad(_0x37b838(_0x37b838(_0x11582b, _0x3e3d9b), _0x37b838(_0x450c9b, _0xbd4ed6)), _0x1870fb), _0x48d61a);
    }
    function _0x203d52(_0x302c4f, _0x786a4a, _0x2d366a, _0x2643b7, _0x10dd2f, _0x3ab3d5, _0x210923) {
        return _0x388afa(_0x786a4a & _0x2d366a | ~_0x786a4a & _0x2643b7, _0x302c4f, _0x786a4a, _0x10dd2f, _0x3ab3d5, _0x210923);
    }
    function _0x11a115(_0x102afa, _0x595b9a, _0x5616a7, _0x70bd43, _0xba8452, _0xce249e, _0x5a8aef) {
        return _0x388afa(_0x595b9a & _0x70bd43 | _0x5616a7 & ~_0x70bd43, _0x102afa, _0x595b9a, _0xba8452, _0xce249e, _0x5a8aef);
    }
    function _0x299c30(_0x4a88b3, _0x2bb778, _0x18b496, _0x439979, _0x3ab2eb, _0x4a8ba1, _0x21c227) {
        return _0x388afa(_0x2bb778 ^ _0x18b496 ^ _0x439979, _0x4a88b3, _0x2bb778, _0x3ab2eb, _0x4a8ba1, _0x21c227);
    }
    function _0x1bab6f(_0x2a821a, _0x4d690e, _0x59b32b, _0xc3e663, _0x4bf33b, _0x1795e9, _0x118e19) {
        return _0x388afa(_0x59b32b ^ (_0x4d690e | ~_0xc3e663), _0x2a821a, _0x4d690e, _0x4bf33b, _0x1795e9, _0x118e19);
    }
    function _0x571d5a(_0x337826, _0x110466) {
        ;
        _0x337826[_0x110466 >> 5] |= 128 << _0x110466 % 32;
        _0x337826[(_0x110466 + 64 >>> 9 << 4) + 14] = _0x110466;
        var _0x364549, _0x80554e, _0x4f931a, _0x1367d2, _0x2b8f9e, _0x300dec = 1732584193, _0x513604 = -271733879, _0xf8113a = -1732584194, _0x268fbf = 271733878;
        for (_0x364549 = 0; _0x364549 < _0x337826.length; _0x364549 += 16) {
            _0x80554e = _0x300dec;
            _0x4f931a = _0x513604;
            _0x1367d2 = _0xf8113a;
            _0x2b8f9e = _0x268fbf;
            _0x300dec = _0x203d52(_0x300dec, _0x513604, _0xf8113a, _0x268fbf, _0x337826[_0x364549], 7, -680876936);
            _0x268fbf = _0x203d52(_0x268fbf, _0x300dec, _0x513604, _0xf8113a, _0x337826[_0x364549 + 1], 12, -389564586);
            _0xf8113a = _0x203d52(_0xf8113a, _0x268fbf, _0x300dec, _0x513604, _0x337826[_0x364549 + 2], 17, 606105819);
            _0x513604 = _0x203d52(_0x513604, _0xf8113a, _0x268fbf, _0x300dec, _0x337826[_0x364549 + 3], 22, -1044525330);
            _0x300dec = _0x203d52(_0x300dec, _0x513604, _0xf8113a, _0x268fbf, _0x337826[_0x364549 + 4], 7, -176418897);
            _0x268fbf = _0x203d52(_0x268fbf, _0x300dec, _0x513604, _0xf8113a, _0x337826[_0x364549 + 5], 12, 1200080426);
            _0xf8113a = _0x203d52(_0xf8113a, _0x268fbf, _0x300dec, _0x513604, _0x337826[_0x364549 + 6], 17, -1473231341);
            _0x513604 = _0x203d52(_0x513604, _0xf8113a, _0x268fbf, _0x300dec, _0x337826[_0x364549 + 7], 22, -45705983);
            _0x300dec = _0x203d52(_0x300dec, _0x513604, _0xf8113a, _0x268fbf, _0x337826[_0x364549 + 8], 7, 1770035416);
            _0x268fbf = _0x203d52(_0x268fbf, _0x300dec, _0x513604, _0xf8113a, _0x337826[_0x364549 + 9], 12, -1958414417);
            _0xf8113a = _0x203d52(_0xf8113a, _0x268fbf, _0x300dec, _0x513604, _0x337826[_0x364549 + 10], 17, -42063);
            _0x513604 = _0x203d52(_0x513604, _0xf8113a, _0x268fbf, _0x300dec, _0x337826[_0x364549 + 11], 22, -1990404162);
            _0x300dec = _0x203d52(_0x300dec, _0x513604, _0xf8113a, _0x268fbf, _0x337826[_0x364549 + 12], 7, 1804603682);
            _0x268fbf = _0x203d52(_0x268fbf, _0x300dec, _0x513604, _0xf8113a, _0x337826[_0x364549 + 13], 12, -40341101);
            _0xf8113a = _0x203d52(_0xf8113a, _0x268fbf, _0x300dec, _0x513604, _0x337826[_0x364549 + 14], 17, -1502002290);
            _0x513604 = _0x203d52(_0x513604, _0xf8113a, _0x268fbf, _0x300dec, _0x337826[_0x364549 + 15], 22, 1236535329);
            _0x300dec = _0x11a115(_0x300dec, _0x513604, _0xf8113a, _0x268fbf, _0x337826[_0x364549 + 1], 5, -165796510);
            _0x268fbf = _0x11a115(_0x268fbf, _0x300dec, _0x513604, _0xf8113a, _0x337826[_0x364549 + 6], 9, -1069501632);
            _0xf8113a = _0x11a115(_0xf8113a, _0x268fbf, _0x300dec, _0x513604, _0x337826[_0x364549 + 11], 14, 643717713);
            _0x513604 = _0x11a115(_0x513604, _0xf8113a, _0x268fbf, _0x300dec, _0x337826[_0x364549], 20, -373897302);
            _0x300dec = _0x11a115(_0x300dec, _0x513604, _0xf8113a, _0x268fbf, _0x337826[_0x364549 + 5], 5, -701558691);
            _0x268fbf = _0x11a115(_0x268fbf, _0x300dec, _0x513604, _0xf8113a, _0x337826[_0x364549 + 10], 9, 38016083);
            _0xf8113a = _0x11a115(_0xf8113a, _0x268fbf, _0x300dec, _0x513604, _0x337826[_0x364549 + 15], 14, -660478335);
            _0x513604 = _0x11a115(_0x513604, _0xf8113a, _0x268fbf, _0x300dec, _0x337826[_0x364549 + 4], 20, -405537848);
            _0x300dec = _0x11a115(_0x300dec, _0x513604, _0xf8113a, _0x268fbf, _0x337826[_0x364549 + 9], 5, 568446438);
            _0x268fbf = _0x11a115(_0x268fbf, _0x300dec, _0x513604, _0xf8113a, _0x337826[_0x364549 + 14], 9, -1019803690);
            _0xf8113a = _0x11a115(_0xf8113a, _0x268fbf, _0x300dec, _0x513604, _0x337826[_0x364549 + 3], 14, -187363961);
            _0x513604 = _0x11a115(_0x513604, _0xf8113a, _0x268fbf, _0x300dec, _0x337826[_0x364549 + 8], 20, 1163531501);
            _0x300dec = _0x11a115(_0x300dec, _0x513604, _0xf8113a, _0x268fbf, _0x337826[_0x364549 + 13], 5, -1444681467);
            _0x268fbf = _0x11a115(_0x268fbf, _0x300dec, _0x513604, _0xf8113a, _0x337826[_0x364549 + 2], 9, -51403784);
            _0xf8113a = _0x11a115(_0xf8113a, _0x268fbf, _0x300dec, _0x513604, _0x337826[_0x364549 + 7], 14, 1735328473);
            _0x513604 = _0x11a115(_0x513604, _0xf8113a, _0x268fbf, _0x300dec, _0x337826[_0x364549 + 12], 20, -1926607734);
            _0x300dec = _0x299c30(_0x300dec, _0x513604, _0xf8113a, _0x268fbf, _0x337826[_0x364549 + 5], 4, -378558);
            _0x268fbf = _0x299c30(_0x268fbf, _0x300dec, _0x513604, _0xf8113a, _0x337826[_0x364549 + 8], 11, -2022574463);
            _0xf8113a = _0x299c30(_0xf8113a, _0x268fbf, _0x300dec, _0x513604, _0x337826[_0x364549 + 11], 16, 1839030562);
            _0x513604 = _0x299c30(_0x513604, _0xf8113a, _0x268fbf, _0x300dec, _0x337826[_0x364549 + 14], 23, -35309556);
            _0x300dec = _0x299c30(_0x300dec, _0x513604, _0xf8113a, _0x268fbf, _0x337826[_0x364549 + 1], 4, -1530992060);
            _0x268fbf = _0x299c30(_0x268fbf, _0x300dec, _0x513604, _0xf8113a, _0x337826[_0x364549 + 4], 11, 1272893353);
            _0xf8113a = _0x299c30(_0xf8113a, _0x268fbf, _0x300dec, _0x513604, _0x337826[_0x364549 + 7], 16, -155497632);
            _0x513604 = _0x299c30(_0x513604, _0xf8113a, _0x268fbf, _0x300dec, _0x337826[_0x364549 + 10], 23, -1094730640);
            _0x300dec = _0x299c30(_0x300dec, _0x513604, _0xf8113a, _0x268fbf, _0x337826[_0x364549 + 13], 4, 681279174);
            _0x268fbf = _0x299c30(_0x268fbf, _0x300dec, _0x513604, _0xf8113a, _0x337826[_0x364549], 11, -358537222);
            _0xf8113a = _0x299c30(_0xf8113a, _0x268fbf, _0x300dec, _0x513604, _0x337826[_0x364549 + 3], 16, -722521979);
            _0x513604 = _0x299c30(_0x513604, _0xf8113a, _0x268fbf, _0x300dec, _0x337826[_0x364549 + 6], 23, 76029189);
            _0x300dec = _0x299c30(_0x300dec, _0x513604, _0xf8113a, _0x268fbf, _0x337826[_0x364549 + 9], 4, -640364487);
            _0x268fbf = _0x299c30(_0x268fbf, _0x300dec, _0x513604, _0xf8113a, _0x337826[_0x364549 + 12], 11, -421815835);
            _0xf8113a = _0x299c30(_0xf8113a, _0x268fbf, _0x300dec, _0x513604, _0x337826[_0x364549 + 15], 16, 530742520);
            _0x513604 = _0x299c30(_0x513604, _0xf8113a, _0x268fbf, _0x300dec, _0x337826[_0x364549 + 2], 23, -995338651);
            _0x300dec = _0x1bab6f(_0x300dec, _0x513604, _0xf8113a, _0x268fbf, _0x337826[_0x364549], 6, -198630844);
            _0x268fbf = _0x1bab6f(_0x268fbf, _0x300dec, _0x513604, _0xf8113a, _0x337826[_0x364549 + 7], 10, 1126891415);
            _0xf8113a = _0x1bab6f(_0xf8113a, _0x268fbf, _0x300dec, _0x513604, _0x337826[_0x364549 + 14], 15, -1416354905);
            _0x513604 = _0x1bab6f(_0x513604, _0xf8113a, _0x268fbf, _0x300dec, _0x337826[_0x364549 + 5], 21, -57434055);
            _0x300dec = _0x1bab6f(_0x300dec, _0x513604, _0xf8113a, _0x268fbf, _0x337826[_0x364549 + 12], 6, 1700485571);
            _0x268fbf = _0x1bab6f(_0x268fbf, _0x300dec, _0x513604, _0xf8113a, _0x337826[_0x364549 + 3], 10, -1894986606);
            _0xf8113a = _0x1bab6f(_0xf8113a, _0x268fbf, _0x300dec, _0x513604, _0x337826[_0x364549 + 10], 15, -1051523);
            _0x513604 = _0x1bab6f(_0x513604, _0xf8113a, _0x268fbf, _0x300dec, _0x337826[_0x364549 + 1], 21, -2054922799);
            _0x300dec = _0x1bab6f(_0x300dec, _0x513604, _0xf8113a, _0x268fbf, _0x337826[_0x364549 + 8], 6, 1873313359);
            _0x268fbf = _0x1bab6f(_0x268fbf, _0x300dec, _0x513604, _0xf8113a, _0x337826[_0x364549 + 15], 10, -30611744);
            _0xf8113a = _0x1bab6f(_0xf8113a, _0x268fbf, _0x300dec, _0x513604, _0x337826[_0x364549 + 6], 15, -1560198380);
            _0x513604 = _0x1bab6f(_0x513604, _0xf8113a, _0x268fbf, _0x300dec, _0x337826[_0x364549 + 13], 21, 1309151649);
            _0x300dec = _0x1bab6f(_0x300dec, _0x513604, _0xf8113a, _0x268fbf, _0x337826[_0x364549 + 4], 6, -145523070);
            _0x268fbf = _0x1bab6f(_0x268fbf, _0x300dec, _0x513604, _0xf8113a, _0x337826[_0x364549 + 11], 10, -1120210379);
            _0xf8113a = _0x1bab6f(_0xf8113a, _0x268fbf, _0x300dec, _0x513604, _0x337826[_0x364549 + 2], 15, 718787259);
            _0x513604 = _0x1bab6f(_0x513604, _0xf8113a, _0x268fbf, _0x300dec, _0x337826[_0x364549 + 9], 21, -343485551);
            _0x300dec = _0x37b838(_0x300dec, _0x80554e);
            _0x513604 = _0x37b838(_0x513604, _0x4f931a);
            _0xf8113a = _0x37b838(_0xf8113a, _0x1367d2);
            _0x268fbf = _0x37b838(_0x268fbf, _0x2b8f9e);
        }
        return [
            _0x300dec,
            _0x513604,
            _0xf8113a,
            _0x268fbf
        ];
    }
    function _0x31908b(_0x13f7f4) {
        var _0x1ecec0, _0x52519d = '';
        for (_0x1ecec0 = 0; _0x1ecec0 < 32 * _0x13f7f4.length; _0x1ecec0 += 8) {
            _0x52519d += String.fromCharCode(_0x13f7f4[_0x1ecec0 >> 5] >>> _0x1ecec0 % 32 & 255);
        }
        return _0x52519d;
    }
    function _0x2be39b(_0x3cd85b) {
        var _0x54a084, _0x14fcb3 = [];
        for (_0x14fcb3[(_0x3cd85b.length >> 2) - 1] = void 0, _0x54a084 = 0; _0x54a084 < _0x14fcb3.length; _0x54a084 += 1) {
            _0x14fcb3[_0x54a084] = 0;
        }
        for (_0x54a084 = 0; _0x54a084 < 8 * _0x3cd85b.length; _0x54a084 += 8) {
            _0x14fcb3[_0x54a084 >> 5] |= (255 & _0x3cd85b.charCodeAt(_0x54a084 / 8)) << _0x54a084 % 32;
        }
        return _0x14fcb3;
    }
    function _0x3bd833(_0x57dc84) {
        ;
        return _0x31908b(_0x571d5a(_0x2be39b(_0x57dc84), 8 * _0x57dc84.length));
    }
    function _0x5b036c(_0x3bc0f5, _0x1d9933) {
        var _0x16f390, _0xf9b0dd, _0x284e9c = _0x2be39b(_0x3bc0f5), _0x2002d4 = [], _0x39c4da = [];
        for (_0x2002d4[15] = _0x39c4da[15] = void 0, _0x284e9c.length > 16 && (_0x284e9c = _0x571d5a(_0x284e9c, 8 * _0x3bc0f5.length)), _0x16f390 = 0; 16 > _0x16f390; _0x16f390 += 1) {
            _0x2002d4[_0x16f390] = 909522486 ^ _0x284e9c[_0x16f390];
            _0x39c4da[_0x16f390] = 1549556828 ^ _0x284e9c[_0x16f390];
        }
        return _0xf9b0dd = _0x571d5a(_0x2002d4.concat(_0x2be39b(_0x1d9933)), 512 + 8 * _0x1d9933.length), _0x31908b(_0x571d5a(_0x39c4da.concat(_0xf9b0dd), 640));
    }
    function _0x3f3944(_0x46581f) {
        var _0x51cdb8, _0x12b424, _0x53db63 = '';
        for (_0x12b424 = 0; _0x12b424 < _0x46581f.length; _0x12b424 += 1) {
            _0x51cdb8 = _0x46581f.charCodeAt(_0x12b424);
            _0x53db63 += '0123456789abcdef'.charAt(_0x51cdb8 >>> 4 & 15) + '0123456789abcdef'.charAt(15 & _0x51cdb8);
        }
        return _0x53db63;
    }
    function _0x3d5733(_0x1ef1c1) {
        return unescape(encodeURIComponent(_0x1ef1c1));
    }
    function _0x278e51(_0x4d2c4b) {
        return _0x3bd833(_0x3d5733(_0x4d2c4b));
    }
    function _0xdc4557(_0x227ea5) {
        return _0x3f3944(_0x278e51(_0x227ea5));
    }
    function _0x5968b7(_0x1a7419, _0x5870b7) {
        return _0x5b036c(_0x3d5733(_0x1a7419), _0x3d5733(_0x5870b7));
    }
    function _0x32cf0c(_0x5bdadb, _0x32d676) {
        return _0x3f3944(_0x5968b7(_0x5bdadb, _0x32d676));
    }
    function _0x3f9073(_0x22a19d, _0x3ce799, _0x570f13) {
        return _0x3ce799 ? _0x570f13 ? _0x5968b7(_0x3ce799, _0x22a19d) : _0x32cf0c(_0x3ce799, _0x22a19d) : _0x570f13 ? _0x278e51(_0x22a19d) : _0xdc4557(_0x22a19d);
    }
    'function' == typeof define && define.amd ? define(function () {
        return _0x3f9073;
    }) : _0x433a2c.setH5Str = _0x3f9073;
}(this);
var LazyLoad = function (_0x19e022) {
    var _0x330052, _0x1ab850, _0x5d67d4 = {}, _0x426ef8 = 0, _0x465c34 = {
            'css': [],
            'js': []
        }, _0x46df2b = _0x19e022.styleSheets;
    function _0xce394f(_0x3dfd74, _0x1b5f57) {
        var _0x5f0273 = _0x19e022.createElement(_0x3dfd74), _0x43b81c;
        for (_0x43b81c in _0x1b5f57) {
            _0x1b5f57.hasOwnProperty(_0x43b81c) && _0x5f0273.setAttribute(_0x43b81c, _0x1b5f57[_0x43b81c]);
        }
        return _0x5f0273;
    }
    function _0x18eebb(_0x113726) {
        var _0x3a0dfd = _0x5d67d4[_0x113726], _0x443ac7, _0x274f9b;
        _0x3a0dfd && (_0x443ac7 = _0x3a0dfd.callback, _0x274f9b = _0x3a0dfd.urls, _0x274f9b.shift(), _0x426ef8 = 0, !_0x274f9b.length && (_0x443ac7 && _0x443ac7.call(_0x3a0dfd.context, _0x3a0dfd.obj), _0x5d67d4[_0x113726] = null, _0x465c34[_0x113726].length && _0x4cce93(_0x113726)));
    }
    function _0x3df2d6() {
        var _0x558faf = navigator.userAgent;
        _0x330052 = { 'async': _0x19e022.createElement('script').async === true };
        (_0x330052.webkit = /AppleWebKit\//.test(_0x558faf)) || (_0x330052.ie = /MSIE|Trident/.test(_0x558faf)) || (_0x330052.opera = /Opera/.test(_0x558faf)) || (_0x330052.gecko = /Gecko\//.test(_0x558faf)) || (_0x330052.unknown = true);
    }
    function _0x4cce93(_0x3cb57c, _0x13d421, _0x4340fd, _0x4eb942, _0x173785) {
        var _0x50b640 = function () {
                _0x18eebb(_0x3cb57c);
            }, _0x8b95eb = _0x3cb57c === 'css', _0x2869ff = [], _0x3de465, _0x4d40e, _0x32de03, _0x49d35d, _0x4daf58, _0x461b03;
        _0x330052 || _0x3df2d6();
        if (_0x13d421) {
            _0x13d421 = typeof _0x13d421 === 'string' ? [_0x13d421] : _0x13d421.concat();
            if (_0x8b95eb || _0x330052.async || _0x330052.gecko || _0x330052.opera) {
                _0x465c34[_0x3cb57c].push({
                    'urls': _0x13d421,
                    'callback': _0x4340fd,
                    'obj': _0x4eb942,
                    'context': _0x173785
                });
            } else {
                for (_0x3de465 = 0, _0x4d40e = _0x13d421.length; _0x3de465 < _0x4d40e; ++_0x3de465) {
                    _0x465c34[_0x3cb57c].push({
                        'urls': [_0x13d421[_0x3de465]],
                        'callback': _0x3de465 === _0x4d40e - 1 ? _0x4340fd : null,
                        'obj': _0x4eb942,
                        'context': _0x173785
                    });
                }
            }
        }
        if (_0x5d67d4[_0x3cb57c] || !(_0x49d35d = _0x5d67d4[_0x3cb57c] = _0x465c34[_0x3cb57c].shift())) {
            return;
        }
        _0x1ab850 || (_0x1ab850 = _0x19e022.head || _0x19e022.getElementsByTagName('head')[0]);
        _0x4daf58 = _0x49d35d.urls.concat();
        for (_0x3de465 = 0, _0x4d40e = _0x4daf58.length; _0x3de465 < _0x4d40e; ++_0x3de465) {
            _0x461b03 = _0x4daf58[_0x3de465];
            _0x8b95eb ? _0x32de03 = _0x330052.gecko ? _0xce394f('style') : _0xce394f('link', {
                'href': _0x461b03,
                'rel': 'stylesheet'
            }) : (_0x32de03 = _0xce394f('script', { 'src': _0x461b03 }), _0x32de03.async = false);
            _0x32de03.className = 'lazyload';
            _0x32de03.setAttribute('charset', 'utf-8');
            if (_0x330052.ie && !_0x8b95eb && 'onreadystatechange' in _0x32de03 && !('draggable' in _0x32de03)) {
                _0x32de03.onreadystatechange = function () {
                    ;
                    /loaded|complete/.test(_0x32de03.readyState) && (_0x32de03.onreadystatechange = null, _0x50b640());
                };
            } else {
                _0x8b95eb && (_0x330052.gecko || _0x330052.webkit) ? _0x330052.webkit ? (_0x49d35d.urls[_0x3de465] = _0x32de03.href, _0x4aeaaa()) : (_0x32de03.innerHTML = '@import "' + _0x461b03 + '";', _0x5cb40e(_0x32de03)) : _0x32de03.onload = _0x32de03.onerror = _0x50b640;
            }
            _0x2869ff.push(_0x32de03);
        }
        for (_0x3de465 = 0, _0x4d40e = _0x2869ff.length; _0x3de465 < _0x4d40e; ++_0x3de465) {
            _0x1ab850.appendChild(_0x2869ff[_0x3de465]);
        }
    }
    function _0x5cb40e(_0x2193d7) {
        var _0x370eb4;
        try {
            _0x370eb4 = !!_0x2193d7.sheet.cssRules;
        } catch (_0x437788) {
            _0x426ef8 += 1;
            _0x426ef8 < 200 ? setTimeout(function () {
                _0x5cb40e(_0x2193d7);
            }, 50) : _0x370eb4 && _0x18eebb('css');
            return;
        }
        _0x18eebb('css');
    }
    function _0x4aeaaa() {
        var _0x47b035 = _0x5d67d4.css, _0x1378fa;
        if (_0x47b035) {
            _0x1378fa = _0x46df2b.length;
            while (--_0x1378fa >= 0) {
                if (_0x46df2b[_0x1378fa].href === _0x47b035.urls[0]) {
                    _0x18eebb('css');
                    break;
                }
            }
            _0x426ef8 += 1;
            _0x47b035 && (_0x426ef8 < 200 ? setTimeout(_0x4aeaaa, 50) : _0x18eebb('css'));
        }
    }
    return {
        'css': function (_0x3be3d0, _0x488872, _0x4b7cf4, _0x130269) {
            _0x4cce93('css', _0x3be3d0, _0x488872, _0x4b7cf4, _0x130269);
        },
        'js': function (_0x54ad7b, _0x34a0e5, _0x366735, _0x56c074) {
            _0x4cce93('js', _0x54ad7b, _0x34a0e5, _0x366735, _0x56c074);
        }
    };
}(this.document);
window.addEventListener('beforeunload', function () {
    ;
    try {
        'serviceWorker' in navigator && navigator.serviceWorker.ready.then(function (_0x7b76c8) {
            ;
            _0x7b76c8 && _0x7b76c8.unregister && _0x7b76c8.unregister();
        });
    } catch (_0x49e23b) {
    }
});
if (/(iphone|ipad)/i.test(navigator.userAgent) && (/safari/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent) && !/qqbrowser/i.test(navigator.userAgent))) {
    try {
        'serviceWorker' in navigator && navigator.serviceWorker.ready.then(function (_0x4c2b10) {
            ;
            _0x4c2b10 && _0x4c2b10.unregister && (isLiveIosSafariDrm = true);
        });
    } catch (a0_0x599f42) {
    }
}
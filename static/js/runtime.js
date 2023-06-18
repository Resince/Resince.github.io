setInterval(() => {
    let create_time = Math.round(new Date('2023-6-1 00:00:00').getTime() / 1000); //在此行修改建站时间
    let timestamp = Math.round((new Date().getTime()) / 1000);
    let second = timestamp - create_time;
    let time = new Array(0, 0, 0, 0, 0);

    var nol = function (h) {
        return h > 9 ? h : '0' + h;
    }
    if (second >= 365 * 24 * 3600) {
        time[0] = parseInt(second / (365 * 24 * 3600));
        second %= 365 * 24 * 3600;
    }
    if (second >= 24 * 3600) {
        time[1] = parseInt(second / (24 * 3600));
        second %= 24 * 3600;
    }
    if (second >= 3600) {
        time[2] = nol(parseInt(second / 3600));
        second %= 3600;
    }
    if (second >= 60) {
        time[3] = nol(parseInt(second / 60));
        second %= 60;
    }
    if (second > 0) {
        time[4] = nol(second);
    }
    // 运行时间
    let runtime = "<div id='runtime'>" + '本站已经运行了';
    if (time[0] > 0) {
        runtime += ' ' + time[0] + ' 年';
    }
    if (time[1] > 0) {
        runtime += ' ' + time[1] + ' 天';
    }
    runtime += ' ' + time[2] + ' 小时 ' + time[3] + ' 分钟 ' + time[4] + ' 秒 ! ' + '</div>';
    // 合并html
    currentTimeHtml = runtime;
    document.getElementById("workboard").innerHTML = currentTimeHtml;
}, 1000);
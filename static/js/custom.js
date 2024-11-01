// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}

// 复制提醒
document.addEventListener("copy", (function () {
    debounce((function () {
        new Vue({
            data: function () {
                this.$notify({
                    title: "复制成功",
                    message: "若要转载最好保留原文链接哦",
                    position: "top-left",
                    offset: 50,
                    showClose: !0,
                    type: "success",
                    duration: 5e3
                })
            }
        })
    }
    ), 300)
}
))

// 防抖
function share() {
    debounce(share_, 300);
}


// 控制台输出
var now1 = new Date();
function createtime1() {
    var grt = new Date("06/01/2023 00:00:00"); //此处修改你的建站时间或者网站上线时间
    now1.setTime(now1.getTime() + 250);
    var days = (now1 - grt) / 1000 / 60 / 60 / 24;
    var dnum = Math.floor(days);
    var ascll = [
        ` 
██████╗ ███████╗███████╗██╗███╗   ██╗ ██████╗███████╗
██╔══██╗██╔════╝██╔════╝██║████╗  ██║██╔════╝██╔════╝
██████╔╝█████╗  ███████╗██║██╔██╗ ██║██║     █████╗  
██╔══██╗██╔══╝  ╚════██║██║██║╚██╗██║██║     ██╔══╝  
██║  ██║███████╗███████║██║██║ ╚████║╚██████╗███████╗
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝╚══════╝                                                  
                                
`,
        "欢迎来到ResinceのBlog 的控制台!",
        "小站已经苟活",
        dnum,
        "天啦!",
        " ©2023 By Resince"
    ];

    setTimeout(
        console.log.bind(
            console,
            `\n%c${ascll[0]} \n %c ${ascll[1]}\n %c ${ascll[2]} %c${ascll[3]} %c${ascll[4]} \n %c${ascll[5]}\n`,
            "color:#39c5bb",
            "color:#39c5bb",
            "color:#39c5bb",
            "color:#39c5bb",
            "color:#39c5bb",
            "color:#5636ed"
        )
    );
}
createtime1();

// 重写console方法
console.log = function () { };
console.error = function () { };
console.warn = function () { };
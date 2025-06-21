let is_function_area = true;  // 是否来到功能区
let now_function_area = 1;  // 功能区编号
let isTransitioning = false;

let last_scroll_top = 0;

let into_f1 = false;
let into_f2 = false;
let into_f3 = false;
let into_f4 = false;
let into_f5 = false;
let into_f6 = false;
let into_f7 = false;
let into_f8 = false;
let into_f9 = false;
let into_f10 = false;
let into_f11 = false;
let into_f12 = false;
let into_f13 = false;
let into_f14 = false;


let example1_var = 1;
let example2_var = 1;
let example3_var = 1;

/////////////////////////////////////////// 导航
let is_located = false;
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
    
      const targetId = this.getAttribute('data-target');
      const targetElement = document.querySelector("."+targetId);
        console.log("点击了", targetElement);
    
      
      if (targetElement) {
        is_located = true;
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
        setTimeout(()=>{
            is_located = false;
        },2000)  // 1500ms后滚动到指定位置，然后就可以取消了
        
        // 根据目标元素，进入执行的功能区
        if (targetElement == ".title5_bg") {
            is_function_area = true;
            now_function_area = 12;
            into_f10 = true;
        } else if (targetElement == '.title4_bg') {
            is_function_area = true;
            now_function_area = 10;
            into_f9 = true;
        } else if (targetElement == '.title3_bg') {
            
            is_function_area = true;
            now_function_area = 9;
            into_f8 = true;
        } else if (targetElement == '.title2_bg') {
            is_function_area = true;
            now_function_area = 8;
            into_f7 = true;
        } else if (targetElement == '.title1_bg') {
            is_function_area = true;
            now_function_area = 4;
            into_f2 = true;
        } else if (targetElement == '.big_title_bg') {
            return;
        }
         
      }
    });
  });


////////////////////////////////////////// 功能区1
const big_title_img = document.querySelector(".big_title_img");


////////////////////////////////////////// 功能区2
const dialog_function_area = document.querySelector('.dialog_function_area')
let snapThreshold = 50;
const dialog_options = document.querySelectorAll(".dialog_function_area .dialog .option");
let dialog_option_mode = 0;
const begin_dialog = document.querySelector(".dialog_function_area #begin_dialog");
const dialog_A_1 = document.querySelector(".dialog_function_area #A-1");
const dialog_A_2 = document.querySelector(".dialog_function_area #A-2");
const dialog_B_1 = document.querySelector(".dialog_function_area #B-1");
const dialog_B_2 = document.querySelector(".dialog_function_area #B-2");
const dialog_C_1 = document.querySelector(".dialog_function_area #C-1");
const dialog_C_2 = document.querySelector(".dialog_function_area #C-2");

let show_dialog_first = false;

function click_option() {
    if (dialog_option_mode == 0) return;

    isTransitioning = true;

    if (dialog_option_mode == 1) {
        begin_dialog.classList.remove("active");

        setTimeout(()=>{
            
            begin_dialog.classList.add("hidden");
            dialog_A_1.classList.remove("hidden");
            

            setTimeout(()=>{  // 加载之后显示
                dialog_A_1.classList.add("active");
            },100)

            setTimeout(()=>{
                isTransitioning = false;
            },1000)
        }, 1000)

        show_dialog_first = true;
        return;
    }

    if (dialog_option_mode == 2) {
        begin_dialog.classList.remove("active");

        setTimeout(()=>{
            
            begin_dialog.classList.add("hidden");
            dialog_B_1.classList.remove("hidden");
            

            setTimeout(()=>{  // 加载之后显示
                dialog_B_1.classList.add("active");
            },100)
            setTimeout(()=>{
                isTransitioning = false;
            },1000)
        }, 1000)

        show_dialog_first = true;
        return;
    }

    if (dialog_option_mode == 3) {
        begin_dialog.classList.remove("active");

        setTimeout(()=>{
            
            begin_dialog.classList.add("hidden");
            dialog_C_1.classList.remove("hidden");
            

            setTimeout(()=>{  // 加载之后显示
                dialog_C_1.classList.add("active");
            },100)
            setTimeout(()=>{
                isTransitioning = false;
            },1000)
        }, 1000)

        show_dialog_first = true;
        return;
    }
}


////////////////////////////////////////// txt1
const txt1 = document.querySelector("#txt1");
const txt_distinct = 400;




////////////////////////////////////////// example1
const example1 = document.querySelector("#example1");
const e1_group1 = document.querySelector("#example1 #group1");
const e1_group2 = document.querySelector("#example1 #group2");


////////////////////////////////////////// txt2
const txt2 = document.querySelector("#txt2");



////////////////////////////////////////// 小标题1的内容
const title1_bg = document.querySelector(".title1_bg");
const title1_img = document.querySelector(".title1_img");
////////////////////////////////////////// 小标题2的内容
const title2_bg = document.querySelector(".title2_bg");
const title2_img = document.querySelector(".title2_img");
////////////////////////////////////////// 小标题3的内容
const title3_bg = document.querySelector(".title3_bg");
const title3_img = document.querySelector(".title3_img");
////////////////////////////////////////// 小标题4的内容
const title4_bg = document.querySelector(".title4_bg");
const title4_img = document.querySelector(".title4_img");
////////////////////////////////////////// 小标题5的内容
const title5_bg = document.querySelector(".title5_bg");
const title5_img = document.querySelector(".title5_img");

////////////////////////////////////////// txt3
const txt3 = document.querySelector("#txt3");

////////////////////////////////////////// graph1
const graph1 = document.querySelector("#graph1");
const g_p1 = document.querySelector("#graph1 #p1");

////////////////////////////////////////// txt4
const txt4 = document.querySelector("#txt4");

////////////////////////////////////////// graph2
const graph2 = document.querySelector("#graph2");
const g2_p1 = document.querySelector("#graph2 #p1");
const g2_p2 = document.querySelector("#graph2 #p2");

////////////////////////////////////////// txt5
const txt5 = document.querySelector("#txt5");

////////////////////////////////////////// example2
const example2 = document.querySelector("#example2");
const e2_group1 = document.querySelector("#example2 #group1");
const e2_group2 = document.querySelector("#example2 #group2");

////////////////////////////////////////// txt6
const txt6 = document.querySelector("#txt6");

////////////////////////////////////////// txt7
const txt7 = document.querySelector("#txt7");

////////////////////////////////////////// paopao1、2
const paopao1 = document.querySelector("#paopao1");
const paopao2 = document.querySelector("#paopao2");


////////////////////////////////////////// txt8
const txt8 = document.querySelector("#txt8");

////////////////////////////////////////// txt9
const txt9 = document.querySelector("#txt9");

////////////////////////////////////////// txt10
const txt10 = document.querySelector("#txt10");

////////////////////////////////////////// story1
const story1 = document.querySelector("#story1");
const open_story1 = document.querySelector("#story1 #open_story");
const story_ps = document.querySelectorAll("#story1 p");

////////////////////////////////////////// txt11
const txt11 = document.querySelector("#txt11");

////////////////////////////////////////// txt12
const txt12 = document.querySelector("#txt12");

////////////////////////////////////////// txt13
const txt13 = document.querySelector("#txt13");

////////////////////////////////////////// txt14
const txt14 = document.querySelector("#txt14");

////////////////////////////////////////// txt15
const txt15 = document.querySelector("#txt15");

////////////////////////////////////////// story2
const story2 = document.querySelector("#story2");
const open_story2 = document.querySelector("#story2 #open_story");
const story2_ps = document.querySelectorAll("#story2 p");

////////////////////////////////////////// story3
const story3 = document.querySelector("#story3");
const open_story3 = document.querySelector("#story3 #open_story");
const story3_ps = document.querySelectorAll("#story3 p");

////////////////////////////////////////// txt16
const txt16 = document.querySelector("#txt16");

////////////////////////////////////////// txt17
const txt17 = document.querySelector("#txt17");


////////////////////////////////////////// jianbao
const jianbao = document.querySelector("#jianbao");
const jianbao1 = document.querySelector("#jianbao #jianbao1")
const jianbao2 = document.querySelector("#jianbao #jianbao2")
const jianbao3 = document.querySelector("#jianbao #jianbao3")
const jianbao4 = document.querySelector("#jianbao #jianbao4")
const jianbao5 = document.querySelector("#jianbao #jianbao5")
const jianbao1_p6 = document.querySelector("#jianbao1 #p6");
const jianbao2_p4 = document.querySelector("#jianbao2 #p4");
const jianbao2_p5 = document.querySelector("#jianbao2 #p5");
const jianbao3_p4 = document.querySelector("#jianbao3 #p4");
const jianbao3_p5 = document.querySelector("#jianbao3 #p5");
const jianbao4_p4 = document.querySelector("#jianbao4 #p4");
const jianbao4_p5 = document.querySelector("#jianbao4 #p5");
const jianbao5_p4 = document.querySelector("#jianbao5 #p4");


////////////////////////////////////////// txt18
const txt18 = document.querySelector("#txt18");

////////////////////////////////////////// txt19
const txt19 = document.querySelector("#txt19");


////////////////////////////////////////// txt20
const txt20 = document.querySelector("#txt20");

////////////////////////////////////////// txt21
const txt21 = document.querySelector("#txt21");

////////////////////////////////////////// txt22
const txt22 = document.querySelector("#txt22");

////////////////////////////////////////// example3
const example3 = document.querySelector("#example3");
const e3_group1 = document.querySelector("#example3 #group1");
const e3_group2 = document.querySelector("#example3 #group2");


////////////////////////////////////////// txt23
const txt23 = document.querySelector("#txt23");
const click1 = document.querySelector("#txt23 #click1")
const click2 = document.querySelector("#txt23 #click2")
const click3 = document.querySelector("#txt23 #click3")
const dialog_res1 = document.querySelector("#txt23 #dialog_res1");
const close1 = document.querySelector("#txt23 #dialog_res1 #close1");
const dialog_res2 = document.querySelector("#txt23 #dialog_res2");
const close2 = document.querySelector("#txt23 #dialog_res2 #close2");
const dialog_res3 = document.querySelector("#txt23 #dialog_res3");
const close3 = document.querySelector("#txt23 #dialog_res3 #close3");

////////////////////////////////////////// txt24
const txt24 = document.querySelector("#txt24");
////////////////////////////////////////// txt25
const txt25 = document.querySelector("#txt25");


////////////////////////////////////////// txt27
const txt27 = document.querySelector("#txt27");

///////////////////////////////////////// timeDate
const timeDate = document.querySelector("#timeDate")
const timeDateFather = document.querySelector("#timeDateFather")
const need_fix = document.querySelector("#need_fix") 

let count = 1;

window.addEventListener("wheel", (event) => {

    if (is_function_area) {
        if (now_function_area == 3) {
            if (isTransitioning) {
                event.preventDefault();
                return;
            }
            if (example1_var == 1) {
                // 上
                if (event.deltaY < 0)  {
                    is_function_area = false;
                    return;
                }
                
                // 下
                if (event.deltaY > 0) {
                    event.preventDefault();
                    isTransitioning = true;
                    console.log("example1下移");
                    e1_group1.classList.remove("active");
                    example1_var = 2;
                    setTimeout(()=>{
                        e1_group1.classList.add("hidden");
                        e1_group2.classList.remove("hidden");
                        setTimeout(()=>{
                            e1_group2.classList.add("active");
                        },100)
                        setTimeout(()=>{
                            isTransitioning = false;
                        },1000)
                    }, 1000)
                    return;
                }
            } else if (example1_var == 2) {
                // 上
                if (event.deltaY < 0) {
                    event.preventDefault();
                    isTransitioning = true;
                    console.log("example1上移");
                    e1_group2.classList.remove("active");
                    example1_var = 1;
                    setTimeout(()=>{
                        e1_group2.classList.add("hidden");
                        e1_group1.classList.remove("hidden");
                        setTimeout(()=>{
                            e1_group1.classList.add("active");
                        },100)
                        setTimeout(()=>{
                            isTransitioning = false;
                        },1000)
                    }, 1000)
                    return;
                }
                // 下
                if (event.deltaY > 0) {
                    is_function_area = false;
                    return;
                }
                
            }
        }
        if (now_function_area == 7) {
            if (isTransitioning) {
                event.preventDefault();
                return;
            }
            if (example2_var == 1) {
                // 上
                if (event.deltaY < 0)  {
                    is_function_area = false;
                    return;
                }
                
                // 下
                if (event.deltaY > 0) {
                    event.preventDefault();
                    isTransitioning = true;
                    console.log("example2下移");
                    e2_group1.classList.remove("active");
                    example2_var = 2;
                    setTimeout(()=>{
                        e2_group1.classList.add("hidden");
                        e2_group2.classList.remove("hidden");
                        setTimeout(()=>{
                            e2_group2.classList.add("active");
                        },100)
                        setTimeout(()=>{
                            isTransitioning = false;
                        },1000)
                    }, 1000)
                    return;
                }
            } else if (example2_var == 2) {
                // 上
                if (event.deltaY < 0) {
                    event.preventDefault();
                    isTransitioning = true;
                    console.log("example2上移");
                    e2_group2.classList.remove("active");
                    example2_var = 1;
                    setTimeout(()=>{
                        e2_group2.classList.add("hidden");
                        e2_group1.classList.remove("hidden");
                        setTimeout(()=>{
                            e2_group1.classList.add("active");
                        },100)
                        setTimeout(()=>{
                            isTransitioning = false;
                        },1000)
                    }, 1000)
                    return;
                }
                // 下
                if (event.deltaY > 0) {
                    is_function_area = false;
                    return;
                }
                
            }
        }
        if (now_function_area == 11) {
            if (isTransitioning) {
                event.preventDefault();
                return;
            }
            if (example3_var == 1) {
                // 上
                if (event.deltaY < 0)  {
                    is_function_area = false;
                    return;
                }
                
                // 下
                if (event.deltaY > 0) {
                    event.preventDefault();
                    isTransitioning = true;
                    console.log("example3下移");
                    e3_group1.classList.remove("active");
                    example3_var = 2;
                    setTimeout(()=>{
                        e3_group1.classList.add("hidden");
                        e3_group2.classList.remove("hidden");
                        setTimeout(()=>{
                            e3_group2.classList.add("active");
                        },100)
                        setTimeout(()=>{
                            isTransitioning = false;
                        },1000)
                    }, 1000)
                    return;
                }
            } else if (example3_var == 2) {
                // 上
                if (event.deltaY < 0) {
                    event.preventDefault();
                    isTransitioning = true;
                    console.log("example3上移");
                    e3_group2.classList.remove("active");
                    example3_var = 1;
                    setTimeout(()=>{
                        e3_group2.classList.add("hidden");
                        e3_group1.classList.remove("hidden");
                        setTimeout(()=>{
                            e3_group1.classList.add("active");
                        },100)
                        setTimeout(()=>{
                            isTransitioning = false;
                        },1000)
                    }, 1000)
                    return;
                }
                // 下
                if (event.deltaY > 0) {
                    is_function_area = false;
                    return;
                }
                
            }
        }
    }

    if (event.deltaY < 0) return; 
    // console.log("现在是否是功能区：", is_function_area, count)
    // count++;
    if (!is_function_area) return;  // 不是功能区，直接执行
    

    
    if (is_function_area) {

        event.preventDefault();  // 阻止默认滚动行为
        if (isTransitioning) return;  // 正在变化，不允许滚动
        console.log("目前是功能区", now_function_area ,"wheel滚轮执行对应功能代码");
        

        if (now_function_area == 1) {
            isTransitioning = true;
            big_title_img.classList.add("big_title_img_show");  // 显示大标题图片    
            setTimeout(()=>{
                isTransitioning = false;
                is_function_area = false;  // 执行之后退出功能区
                console.log("退出功能区", now_function_area)
            }, 2000) 
            
        }

        if (now_function_area == 2) {
            isTransitioning = true;
            if (show_dialog_first) {
                if (dialog_option_mode == 1) {
                    dialog_A_1.classList.remove("active");
            
                    setTimeout(()=>{
                        
                        dialog_A_1.classList.add("hidden");
                        dialog_A_2.classList.remove("hidden");
                        
            
                        setTimeout(()=>{  // 加载之后显示
                            dialog_A_2.classList.add("active");


                            let try_agin1 = document.querySelector("#A-2 .try_agin");
                            console.log("try_agin1", try_agin1)
                            try_agin1.addEventListener("click", ()=>{
                                console.log("有东西点击了")
                                show_dialog_first = false;
                                dialog_option_mode = 0;
                                dialog_A_2.classList.remove("active");

                                setTimeout(()=>{
                                    begin_dialog.classList.remove("hidden");
                                    dialog_A_2.classList.add("hidden");

                                    setTimeout(()=>{
                                        begin_dialog.classList.add("active");

                                        setTimeout(()=>{
                                            now_function_area = 2;
                                            is_function_area = true;
                                            console.log("重新进入对话功能区")
                                        })
                                    },100)
                                }, 1000)
                                
                            })

                        },100)
                        setTimeout(()=>{
                            isTransitioning = false;
                            is_function_area = false;
                            console.log("退出功能区", now_function_area)
                        },1000)
                    }, 1000)



                    return;
                }
                if (dialog_option_mode == 2) {
                    dialog_B_1.classList.remove("active");
            
                    setTimeout(()=>{
                        
                        dialog_B_1.classList.add("hidden");
                        dialog_B_2.classList.remove("hidden");
                        
            
                        setTimeout(()=>{  // 加载之后显示
                            dialog_B_2.classList.add("active");

                            let try_agin2 = document.querySelector("#B-2 .try_agin");
                            try_agin2.addEventListener("click", ()=>{
                                console.log("有东西点击了")
                                show_dialog_first = false;
                                dialog_option_mode = 0;
                                dialog_B_2.classList.remove("active");

                                setTimeout(()=>{
                                    begin_dialog.classList.remove("hidden");
                                    dialog_B_2.classList.add("hidden");

                                    setTimeout(()=>{
                                        begin_dialog.classList.add("active");

                                        setTimeout(()=>{
                                            now_function_area = 2;
                                            is_function_area = true;
                                            console.log("重新进入对话功能区")
                                        })
                                    },100)
                                }, 1000)
                                
                            })

                        },100)
                        setTimeout(()=>{
                            isTransitioning = false;
                            is_function_area = false;
                            console.log("退出功能区", now_function_area)
                        },1000)
                    }, 1000)

                    return;
                }
                if (dialog_option_mode == 3) {
                    dialog_C_1.classList.remove("active");
            
                    setTimeout(()=>{
                        
                        dialog_C_1.classList.add("hidden");
                        dialog_C_2.classList.remove("hidden");
                        
            
                        setTimeout(()=>{  // 加载之后显示
                            dialog_C_2.classList.add("active");

                            let try_agin3 = document.querySelector("#C-2 .try_agin");
                            try_agin3.addEventListener("click", ()=>{
                                console.log("有东西点击了")
                                show_dialog_first = false;
                                dialog_option_mode = 0;
                                dialog_C_2.classList.remove("active");

                                setTimeout(()=>{
                                    begin_dialog.classList.remove("hidden");
                                    dialog_C_2.classList.add("hidden");

                                    setTimeout(()=>{
                                        begin_dialog.classList.add("active");

                                        setTimeout(()=>{
                                            now_function_area = 2;
                                            is_function_area = true;
                                            console.log("重新进入对话功能区")
                                        })
                                    },100)
                                }, 1000)
                                
                            })
                        },100)
                        setTimeout(()=>{
                            isTransitioning = false;
                            is_function_area = false;
                            console.log("退出功能区", now_function_area)
                        },1000)
                    }, 1000)

                    return;
                }



            } else {
                return;
            }
        }




        if (now_function_area == 4) {
            title1_bg.style.opacity = '0';
            isTransitioning = true;
            
            setTimeout(()=> {
                title1_bg.style.backgroundImage  = "none";
                title1_bg.style.opacity = '1';
                title1_img.style.opacity = '1';

                setTimeout(()=>{
                    isTransitioning = false;
                    is_function_area = false;
                    console.log("退出功能区", now_function_area)
                }, 2000)
                return;
            }, 2000)


        }

        if (now_function_area == 5) {
            isTransitioning = true;
            g_p1.style.opacity = '1';
            g_p1.style.top = '-200px';
            setTimeout(()=>{
                isTransitioning = false;
                is_function_area = false;
                console.log("退出功能区", now_function_area)
            }, 2000)
            return;
        }

        if (now_function_area == 6) {
            isTransitioning = true;
            g2_p1.style.opacity = '1';
            g2_p1.style.top = '520px';
            // g2_p2.style.opacity = '0.6';
            setTimeout(()=>{
                isTransitioning = false;
                is_function_area = false;
                console.log("退出功能区", now_function_area)
            }, 2000)
            return;
        }

        if (now_function_area == 7) {
            isTransitioning = true;
            console.log("第二个案例的滚轮事件触发")
            e2_group1.classList.remove("active");

            setTimeout(()=>{
                e2_group1.classList.add("hidden");
                e2_group2.classList.remove("hidden");
                setTimeout(()=>{
                    e2_group2.classList.add("active");
                },100)
                setTimeout(()=>{
                    isTransitioning = false;
                    is_function_area = false;
                    console.log("退出功能区", now_function_area)
                }, 2000)
            }, 2000)

            return;
        }

        if (now_function_area == 8) {
            title2_bg.style.opacity = '0';
            isTransitioning = true;
            
            setTimeout(()=> {
                title2_bg.style.backgroundImage  = "none";
                title2_bg.style.opacity = '1';
                title2_img.style.opacity = '1';
                setTimeout(()=>{
                    isTransitioning = false;
                    is_function_area = false;
                    console.log("退出功能区", now_function_area)
                }, 2000)
                return;
            }, 2000)


        }

        if (now_function_area == 9) {
            title3_bg.style.opacity = '0';
            isTransitioning = true;
            
            setTimeout(()=> {
                title3_bg.style.backgroundImage  = "none";
                title3_bg.style.opacity = '1';
                title3_img.style.opacity = '1';

                setTimeout(()=>{
                    isTransitioning = false;
                    is_function_area = false;
                    console.log("退出功能区", now_function_area)
                }, 2000)
                return;
            }, 2000)


        }

        if (now_function_area == 10) {
            title4_bg.style.opacity = '0';
            isTransitioning = true;
            
            setTimeout(()=> {
                title4_bg.style.backgroundImage  = "none";
                title4_bg.style.opacity = '1';
                title4_img.style.opacity = '1';

                setTimeout(()=>{
                    isTransitioning = false;
                    is_function_area = false;
                    console.log("退出功能区", now_function_area)
                }, 2000)
                return;
            }, 2000)


        }

        if (now_function_area == 11) {
            e3_group1.classList.remove("active");
            isTransitioning = true;

            setTimeout(()=>{
                e3_group1.classList.add("hidden");
                e3_group2.classList.remove("hidden");
                setTimeout(()=>{
                    e3_group2.classList.add("active");
                },100)

                setTimeout(()=>{
                    isTransitioning = false;
                    is_function_area = false;
                    console.log("退出功能区", now_function_area)
                }, 2000)
            }, 2000)

            return;
        }

        if (now_function_area == 12) {
            title5_bg.style.opacity = '0';
            isTransitioning = true;
            
            setTimeout(()=> {
                title5_bg.style.backgroundImage  = "none";
                title5_bg.style.opacity = '1';
                title5_img.style.opacity = '1';

                setTimeout(()=>{
                    isTransitioning = false;
                    is_function_area = false;
                    console.log("退出功能区", now_function_area)
                }, 2000)
                return;
            }, 2000)


        }
        


    }
}, {passive: false})  





window.addEventListener("scroll", (event) => {



    // 如果是定位，就不做拦截进入功能区
    if (is_located) return;

    
    const scrollTop = document.documentElement.scrollTop;
    // console.log(scrollTop)
    console.log("当前高度", scrollTop)

    // 到达对话框功能区，进行吸附，并添加监听函数
    if (scrollTop >= dialog_function_area.offsetTop - snapThreshold && scrollTop < dialog_function_area.offsetTop && into_f1 == false) {
        console.log("到达对话框功能区，进行吸附")
        into_f1 = true;
        window.scrollTo({ 
            top: dialog_function_area.offsetTop, 
            behavior: 'smooth' 
        });
        is_function_area = true;
        now_function_area = 2;
        dialog_options.forEach(option => {
            option.addEventListener('click', () => {
                const answer = option.getAttribute('data-answer');
                console.log("点击了", answer)
                switch(answer) {
                    case 'A':
                        dialog_option_mode = 1;
                        break;
                    case 'B':
                        dialog_option_mode = 2;
                        break;
                    case 'C':
                        dialog_option_mode = 3;
                        break;
                }
                click_option();
            });
        });
    }

    // 快要靠近txt文字的时候，给他们出现
    if (scrollTop >= txt1.offsetTop - txt_distinct) {
        // txt1.classList.remove("txt_hidden");
        txt1.classList.add("txt_show");

    }

    if (scrollTop >= example1.offsetTop - snapThreshold && scrollTop < example1.offsetTop + snapThreshold) {
        example1.classList.add("example_show")
        is_function_area = true;
        now_function_area = 3;
    }
    // if (scrollTop >= example1.offsetTop + 100 && scrollTop < example1.offsetTop + 200) {


        // if (scrollTop > last_scroll_top && example1_var == 1) {
        //     console.log("example1下移");
        //     e1_group1.classList.remove("active");
        //     example1_var = 2;
        //     setTimeout(()=>{
        //         e1_group1.classList.add("hidden");
        //         e1_group2.classList.remove("hidden");
        //         setTimeout(()=>{
        //             e1_group2.classList.add("active");
        //         },100)
        //     }, 1000)
        // } else if (scrollTop < last_scroll_top && example1_var == 2) {
        //     console.log("example1上移");
        //     e1_group2.classList.remove("active");
        //     example1_var = 1;
        //     setTimeout(()=>{
        //         e1_group2.classList.add("hidden");
        //         e1_group1.classList.remove("hidden");
        //         setTimeout(()=>{
        //             e1_group1.classList.add("active");
        //         },100)
        //     }, 1000)
        // }
        // last_scroll_top = scrollTop;
    // }

    // // if (scrollTop >= example1.offsetTop - snapThreshold && scrollTop < example1.offsetTop) {
    // if (scrollTop >= example1.offsetTop - snapThreshold && scrollTop <= example1.offsetTop) {
    // // if (scrollTop >= example1.offsetTop + 100 && scrollTop < example1.offsetTop + 500) {
    //     console.log("来道了来到了11111111111111111111111111111111111111111111111111111111111111")
    //     // console.log("到达案例功能区，进行吸附")
    //     // window.scrollTo({ 
    //     //     top: example1.offsetTop, 
    //     //     behavior: 'smooth' 
    //     // });

    //     is_function_area = true;
    //     now_function_area = 3;

    //     example1.classList.add("example_show")

    
    // }

    if (scrollTop >= txt2.offsetTop - txt_distinct) {
        txt2.classList.add("txt_show");
    }

    if (scrollTop >= title1_bg.offsetTop - snapThreshold && scrollTop < title1_bg.offsetTop && into_f2 == false) {
        console.log("到达第一个小标题功能区，进行吸附")
        into_f2 = true;
        window.scrollTo({ 
            top: title1_bg.offsetTop, 
            behavior: 'smooth' 
        });

        is_function_area = true;
        now_function_area = 4;
    }



    if (scrollTop >= txt3.offsetTop - txt_distinct) {
        txt3.classList.add("txt_show");
    }

    if (scrollTop >= graph1.offsetTop - 500  && into_f3 == false) {
        graph1.style.opacity = '1';
        into_f3 = true;
        is_function_area = true;
        now_function_area = 5;
        console.log("到达图表1功能区")
    }

    if (scrollTop >= txt4.offsetTop - txt_distinct) {
        txt4.classList.add("txt_show");
    }

    // console.log("当前屏幕高度:", scrollTop)
    // console.log("图标2的高度", graph2.offsetTop)
    if (scrollTop >= graph2.offsetTop - 300 && into_f4 == false) {
        into_f4 = true;
        graph2.style.opacity = '1';
        is_function_area = true;
        now_function_area = 6;
        console.log("到达图表2功能区")
    }

    if (scrollTop >= txt5.offsetTop - txt_distinct) {
        txt5.classList.add("txt_show");
    }
    
    if (scrollTop >= example2.offsetTop - snapThreshold && scrollTop < example2.offsetTop + snapThreshold) {
        example2.classList.add("example_show")
        is_function_area = true;
        now_function_area = 7;
    }

    // if (scrollTop >= example2.offsetTop - snapThreshold - 100 && scrollTop < example2.offsetTop) {
    //     example2.classList.add("example_show")
    // }

    // console.log("scrollTop:", scrollTop, "example2.offsetTop:", example2.offsetTop)
    // if (scrollTop >= example2.offsetTop  && scrollTop < example2.offsetTop + 200) {

        // console.log("到达案例功能区，进行吸附")
        // window.scrollTo({ 
        //     top: example2.offsetTop, 
        //     behavior: 'smooth' 
        // });

        // is_function_area = true;
        // now_function_area = 7;




        // example2_var++;

        // if (example2_var>1) {
    //         if (scrollTop > last_scroll_top && example2_var == 1) {
    //             console.log("example2下移");
    //             e2_group1.classList.remove("active");
    //             // isTransitioning = true;
    //             example2_var = 2;
    //             setTimeout(()=>{
    //                 e2_group1.classList.add("hidden");
    //                 e2_group2.classList.remove("hidden");
    //                 setTimeout(()=>{
    //                     e2_group2.classList.add("active");
    //                 },100)
    
    //                 // setTimeout(()=>{
    //                 //     // isTransitioning = false;
    //                 //     // is_function_area = false;
    //                 //     // console.log("退出功能区", now_function_area)
    //                 // }, 2000)
    //             }, 1000)
    //         } else if (scrollTop < last_scroll_top && example2_var == 2) {
    //             console.log("example2上移");
    //             e2_group2.classList.remove("active");
    //             // isTransitioning = true;
    //             example2_var = 1;
    //             setTimeout(()=>{
    //                 e2_group2.classList.add("hidden");
    //                 e2_group1.classList.remove("hidden");
    //                 setTimeout(()=>{
    //                     e2_group1.classList.add("active");
    //                 },100)
    
    //                 // setTimeout(()=>{
    //                 //     // isTransitioning = false;
    //                 //     // // is_function_area = false;
    //                 //     // console.log("退出功能区", now_function_area)
    //                 // }, 2000)
    //             }, 1000)
    //         }
    //     // }






    //     last_scroll_top = scrollTop;


    // }

    if (scrollTop >= txt6.offsetTop - txt_distinct) {
        txt6.classList.add("txt_show");
    }

    if (scrollTop >= txt7.offsetTop - txt_distinct) {
        txt7.classList.add("txt_show");
    }

    if (scrollTop >= paopao1.offsetTop - 300  && into_f5 == false) {
        into_f5 = true;
        // paopao1.style.opacity = '1';
        const img1 = document.querySelector("#paopao1 #img1");
        const img2 = document.querySelector("#paopao1 #img2");
        const img3 = document.querySelector("#paopao1 #img3");
        const img4 = document.querySelector("#paopao1 #img4");
        const img5 = document.querySelector("#paopao1 #img5");
        const img6 = document.querySelector("#paopao1 #img6");
        const img7 = document.querySelector("#paopao1 #img7");
        const img8 = document.querySelector("#paopao1 #img8");
        
        img1.style.opacity = '1';
        setTimeout(()=>{
            img2.style.opacity = '1';
            setTimeout(()=>{
                img3.style.opacity = '1';
                setTimeout(()=>{
                    img4.style.opacity = '1';
                    setTimeout(()=>{
                        img5.style.opacity = '1';
                        setTimeout(()=>{
                            img6.style.opacity = '1';
                            setTimeout(()=>{
                                img7.style.opacity = '1';
                                setTimeout(()=>{
                                    img8.style.opacity = '1';
                                },1500)
                            },1500)
                        },1500)
                    },1500)
                },1500)
            },1500)
        },1500)
    }

    if (scrollTop >= txt8.offsetTop - txt_distinct) {
        txt8.classList.add("txt_show");
    }

    if (scrollTop >= paopao2.offsetTop - 300 && into_f6 == false) {
        // paopao2.style.opacity = '1';
        into_f6 = true;
        const img1 = document.querySelector("#paopao2 #img1");
        const img2 = document.querySelector("#paopao2 #img2");
        const img3 = document.querySelector("#paopao2 #img3");
        const img4 = document.querySelector("#paopao2 #img4");
        const img5 = document.querySelector("#paopao2 #img5");
        const img6 = document.querySelector("#paopao2 #img6");
        const img7 = document.querySelector("#paopao2 #img7");
        const img8 = document.querySelector("#paopao2 #img8");
        
        img1.style.opacity = '1';
        setTimeout(()=>{
            img2.style.opacity = '1';
            setTimeout(()=>{
                img3.style.opacity = '1';
                setTimeout(()=>{
                    img4.style.opacity = '1';
                    setTimeout(()=>{
                        img5.style.opacity = '1';
                        setTimeout(()=>{
                            img6.style.opacity = '1';
                            setTimeout(()=>{
                                img7.style.opacity = '1';
                                setTimeout(()=>{
                                    img8.style.opacity = '1';
                                },1500)
                            },1500)
                        },1500)
                    },1500)
                },1500)
            },1500)
        },1500)
    }

    if (scrollTop >= txt9.offsetTop - txt_distinct) {
        txt9.classList.add("txt_show");
    }

    if (scrollTop >= title2_bg.offsetTop - snapThreshold && scrollTop < title2_bg.offsetTop && into_f7 == false) {
        console.log("到达第二个小标题功能区，进行吸附")
        into_f7 = true;
        window.scrollTo({ 
            top: title2_bg.offsetTop, 
            behavior: 'smooth' 
        });

        is_function_area = true;
        now_function_area = 8;
    }

    if (scrollTop >= txt10.offsetTop - txt_distinct) {
        txt10.classList.add("txt_show");
    }

    if (scrollTop >= story1.offsetTop - 400) {
        story1.style.opacity = '1';

        open_story1.addEventListener("click", ()=>{
            console.log("点击二零")
            story_ps.forEach(p => {
                p.style.opacity = '1';
            })
        })
    }

    if (scrollTop >= txt11.offsetTop - txt_distinct) {
        txt11.classList.add("txt_show");
    }

    if (scrollTop >= txt12.offsetTop - txt_distinct) {
        txt12.classList.add("txt_show");
    }

    if (scrollTop >= txt13.offsetTop - txt_distinct) {
        txt13.classList.add("txt_show");
    }

    if (scrollTop >= txt14.offsetTop - txt_distinct) {
        txt14.classList.add("txt_show");
    }

    if (scrollTop >= txt15.offsetTop - txt_distinct) {
        txt15.classList.add("txt_show");
    }

    if (scrollTop >= story2.offsetTop - 400) {
        story2.style.opacity = '1';

        open_story2.addEventListener("click", ()=>{
            console.log("点击二零")
            story2_ps.forEach(p => {
                p.style.opacity = '1';
            })
        })
    }

    if (scrollTop >= story3.offsetTop - 400) {
        story3.style.opacity = '1'; 

        open_story3.addEventListener("click", ()=>{
            console.log("点击二零")
            open_story3.style.opacity = '0.5'
            story3_ps.forEach(p => {
                p.style.opacity = '1';
            })
        })
    }

    if (scrollTop >= txt16.offsetTop - txt_distinct) {
        txt16.classList.add("txt_show");
    }

    if (scrollTop >= title3_bg.offsetTop - snapThreshold && scrollTop < title3_bg.offsetTop && into_f8 == false) {
        into_f8 = true;
        console.log("到达第三个小标题功能区，进行吸附")
        window.scrollTo({ 
            top: title3_bg.offsetTop, 
            behavior: 'smooth' 
        });

        is_function_area = true;
        now_function_area = 9;
    }

    if (scrollTop >= txt17.offsetTop - txt_distinct) {
        txt17.classList.add("txt_show");
    }


    if (scrollTop >= jianbao.offsetTop - txt_distinct) {
        jianbao.classList.add("txt_show");
        jianbao1.style.opacity = '1';
        jianbao1_p6.addEventListener("click", ()=>{
            jianbao1.style.opacity = '0';
            setTimeout(()=>{
                jianbao1.style.display = 'none';
                jianbao2.style.display = 'block';
                setTimeout(()=>{
                    jianbao2.style.opacity = '1';

                    jianbao2_p4.addEventListener("click", ()=>{
                        jianbao2.style.opacity = '0';
                        setTimeout(()=>{
                            jianbao2.style.display = 'none';
                            jianbao3.style.display = 'block';
                            setTimeout(()=>{
                                jianbao3.style.opacity = '1';
                                setTimeout(()=>{
                                    jianbao3_p4.addEventListener("click", ()=>{
                                        jianbao3.style.opacity = '0';
                                        setTimeout(()=>{
                                            jianbao3.style.display = 'none';
                                            jianbao5.style.display = 'block';
                                            setTimeout(()=>{
                                                jianbao5.style.opacity = '1';
                                                setTimeout(()=>{
                                                    // 给重来一次
                                                    jianbao5_p4.addEventListener("click", ()=>{
                                                        jianbao5.style.opacity = '0';
                                                        setTimeout(()=>{
                                                            jianbao5.style.display = 'none';
                                                            jianbao1.style.display = 'block';
                                                            setTimeout(()=>{
                                                                jianbao1.style.opacity = '1';
                                                            },100)
                                                        },2000)
                                                    })
                                                },2000)
                                            },100)
                                        },2000)
                                    })
                                    jianbao3_p5.addEventListener("click", ()=>{
                                        jianbao3.style.opacity = '0';
                                        setTimeout(()=>{
                                            jianbao3.style.display = 'none';
                                            jianbao5.style.display = 'block';
                                            setTimeout(()=>{
                                                jianbao5.style.opacity = '1';
                                                setTimeout(()=>{
                                                    // 给重来一次
                                                    jianbao5_p4.addEventListener("click", ()=>{
                                                        jianbao5.style.opacity = '0';
                                                        setTimeout(()=>{
                                                            jianbao5.style.display = 'none';
                                                            jianbao1.style.display = 'block';
                                                            setTimeout(()=>{
                                                                jianbao1.style.opacity = '1';
                                                            },100)
                                                        },2000)
                                                    })
                                                },2000)
                                            },100)
                                        },2000)
                                    })
                                }, 2000)
                            },100)
                        },2000)
                    })

                    jianbao2_p5.addEventListener("click", ()=>{
                        jianbao2.style.opacity = '0';
                        setTimeout(()=>{
                            jianbao2.style.display = 'none';
                            jianbao4.style.display = 'block';
                            setTimeout(()=>{
                                jianbao4.style.opacity = '1';
                                setTimeout(()=>{
                                    jianbao4_p4.addEventListener("click", ()=>{
                                        jianbao4.style.opacity = '0';
                                        setTimeout(()=>{
                                            jianbao4.style.display = 'none';
                                            jianbao5.style.display = 'block';
                                            setTimeout(()=>{
                                                jianbao5.style.opacity = '1';
                                                setTimeout(()=>{
                                                    // 给重来一次
                                                    jianbao5_p4.addEventListener("click", ()=>{
                                                        jianbao5.style.opacity = '0';
                                                        setTimeout(()=>{
                                                            jianbao5.style.display = 'none';
                                                            jianbao1.style.display = 'block';
                                                            setTimeout(()=>{
                                                                jianbao1.style.opacity = '1';
                                                            },100)
                                                        },2000)
                                                    })
                                                },2000)
                                            },100)
                                        },2000)
                                    })
                                    jianbao4_p5.addEventListener("click", ()=>{
                                        jianbao4.style.opacity = '0';
                                        setTimeout(()=>{
                                            jianbao4.style.display = 'none';
                                            jianbao5.style.display = 'block';
                                            setTimeout(()=>{
                                                jianbao5.style.opacity = '1';
                                                setTimeout(()=>{
                                                    // 给重来一次
                                                    jianbao5_p4.addEventListener("click", ()=>{
                                                        jianbao5.style.opacity = '0';
                                                        setTimeout(()=>{
                                                            jianbao5.style.display = 'none';
                                                            jianbao1.style.display = 'block';
                                                            setTimeout(()=>{
                                                                jianbao1.style.opacity = '1';
                                                            },100)
                                                        },2000)
                                                    })
                                                },2000)
                                            },100)
                                        },2000)
                                    })
                                }, 2000)
                            },100)
                        },2000)
                    })

                },100)
            },2000)
        })
    }


    if (scrollTop >= txt18.offsetTop - txt_distinct) {
        txt18.classList.add("txt_show");
    }

    if (scrollTop >= txt19.offsetTop - txt_distinct) {
        txt19.classList.add("txt_show");
    }

    if (scrollTop >= title4_bg.offsetTop - snapThreshold && scrollTop < title4_bg.offsetTop && into_f9 == false) {
        into_f9 = true;
        console.log("到达第四个小标题功能区，进行吸附")
        window.scrollTo({ 
            top: title4_bg.offsetTop, 
            behavior: 'smooth' 
        });

        is_function_area = true;
        now_function_area = 10;
    }

    if (scrollTop >= txt20.offsetTop - txt_distinct) {
        txt20.classList.add("txt_show");
    }

    if (scrollTop >= txt21.offsetTop - txt_distinct) {
        txt21.classList.add("txt_show");
    }

    if (scrollTop >= example3.offsetTop - snapThreshold && scrollTop < example3.offsetTop + snapThreshold) {
        example3.classList.add("example_show")
        is_function_area = true;
        now_function_area = 11;
    }
    
    // if (scrollTop >= example3.offsetTop - snapThreshold - 100 && scrollTop < example3.offsetTop) {
    //     example3.classList.add("example_show")
    // }

    // // console.log("scrollTop:", scrollTop, "example2.offsetTop:", example2.offsetTop)
    // if (scrollTop >= example3.offsetTop + 100 && scrollTop < example3.offsetTop + 200) {


    //         if (scrollTop > last_scroll_top && example3_var == 1) {
    //             console.log("example2下移");
    //             e3_group1.classList.remove("active");
    //             // isTransitioning = true;
    //             example3_var = 2;
    //             setTimeout(()=>{
    //                 e3_group1.classList.add("hidden");
    //                 e3_group2.classList.remove("hidden");
    //                 setTimeout(()=>{
    //                     e3_group2.classList.add("active");
    //                 },100)
    
    //                 // setTimeout(()=>{
    //                 //     // isTransitioning = false;
    //                 //     // is_function_area = false;
    //                 //     // console.log("退出功能区", now_function_area)
    //                 // }, 2000)
    //             }, 1000)
    //         } else if (scrollTop < last_scroll_top && example3_var == 2) {
    //             console.log("example3上移");
    //             e3_group2.classList.remove("active");
    //             // isTransitioning = true;
    //             example3_var = 1;
    //             setTimeout(()=>{
    //                 e3_group2.classList.add("hidden");
    //                 e3_group1.classList.remove("hidden");
    //                 setTimeout(()=>{
    //                     e3_group1.classList.add("active");
    //                 },100)
    
    //                 // setTimeout(()=>{
    //                 //     // isTransitioning = false;
    //                 //     // // is_function_area = false;
    //                 //     // console.log("退出功能区", now_function_area)
    //                 // }, 2000)
    //             }, 1000)
    //         }
    //     // }






    //     last_scroll_top = scrollTop;


    // }

    // if (scrollTop >= example3.offsetTop - snapThreshold && scrollTop < example3.offsetTop) {

    //     console.log("到达案例功能区，进行吸附")
    //     window.scrollTo({ 
    //         top: example3.offsetTop, 
    //         behavior: 'smooth' 
    //     });

    //     // is_function_area = true;
    //     // now_function_area = 11;

    //     example3.classList.add("example_show")

    //     example3_var++;

    //     if (example3_var>1) {
    //         if (scrollTop > last_scroll_top) {
    //             console.log("下移");
    //             e3_group1.classList.remove("active");
    //             isTransitioning = true;
        
    //             setTimeout(()=>{
    //                 e3_group1.classList.add("hidden");
    //                 e3_group2.classList.remove("hidden");
    //                 setTimeout(()=>{
    //                     e3_group2.classList.add("active");
    //                 },100)
    
    //                 setTimeout(()=>{
    //                     isTransitioning = false;
    //                     is_function_area = false;
    //                     console.log("退出功能区", now_function_area)
    //                 }, 2000)
    //             }, 2000)
    //         } else {
    //             console.log("上移");
    //             e3_group2.classList.remove("active");
    //             isTransitioning = true;
        
    //             setTimeout(()=>{
    //                 e3_group2.classList.add("hidden");
    //                 e3_group1.classList.remove("hidden");
    //                 setTimeout(()=>{
    //                     e3_group1.classList.add("active");
    //                 },100)
    
    //                 setTimeout(()=>{
    //                     isTransitioning = false;
    //                     is_function_area = false;
    //                     console.log("退出功能区", now_function_area)
    //                 }, 2000)
    //             }, 2000)
    //         }
    //     }






    //     last_scroll_top = scrollTop;

    // }

    if (scrollTop >= txt22.offsetTop - txt_distinct) {
        txt22.classList.add("txt_show");
    }

    if (scrollTop >= txt23.offsetTop - txt_distinct) {
        txt23.classList.add("txt_show");

        click1.addEventListener("click", ()=>{
            dialog_res1.style.display = "block";
            dialog_res2.style.display = 'none';
            dialog_res3.style.display = 'none';

            setTimeout(()=>{
                dialog_res1.style.opacity = '1';

                close1.addEventListener("click", ()=>{
                    dialog_res1.style.display = "none";
                })

            },100)
        })

        click2.addEventListener("click", ()=>{
            dialog_res1.style.display = 'none';
            dialog_res2.style.display = "block";
            dialog_res3.style.display = 'none';
            setTimeout(()=>{
                dialog_res2.style.opacity = '1';

                close2.addEventListener("click", ()=>{
                    dialog_res2.style.display = "none";
                })
            },100)
        })

        click3.addEventListener("click", ()=>{
            dialog_res1.style.display = 'none';
            dialog_res2.style.display = 'none';
            dialog_res3.style.display = "block";
            setTimeout(()=>{
                dialog_res3.style.opacity = '1';

                close3.addEventListener("click", ()=>{
                    dialog_res3.style.display = "none";
                })
            },100)
        })
    }

    if (scrollTop >= txt24.offsetTop - txt_distinct) {
        txt24.classList.add("txt_show");
    }


    if (scrollTop >= title5_bg.offsetTop - snapThreshold && scrollTop < title5_bg.offsetTop && into_f10 == false) {
        into_f10 = true;
        console.log("到达第四个小标题功能区，进行吸附")
        window.scrollTo({ 
            top: title5_bg.offsetTop, 
            behavior: 'smooth' 
        });

        is_function_area = true;
        now_function_area = 12;
    }

    if (scrollTop >= txt25.offsetTop - txt_distinct) {
        txt25.classList.add("txt_show");
    }

    
    if (scrollTop >= txt27.offsetTop - txt_distinct) {
        txt27.classList.add("txt_show");
        // console.log("111111111111111111111111111111111111111")
    }


    if (scrollTop < timeDateFather.offsetTop - (window.innerHeight / 2)) {
        need_fix.style.position = 'absolute';
        need_fix.style.top = '0px';
    }
    // console.log("timeDateFather.offsetTop", timeDateFather.offsetTop)
    if (scrollTop >= timeDateFather.offsetTop - (window.innerHeight / 2) && scrollTop <= timeDateFather.offsetTop + (window.innerHeight / 2)) {
        need_fix.style.position = 'fixed';
        need_fix.style.top = ((window.innerHeight / 2) - 100) + 'px';
    }
    if (scrollTop > timeDateFather.offsetTop + (window.innerHeight / 2)) {
        need_fix.style.position = 'absolute';
        need_fix.style.top = '650px';
    }

    // if (scrollTop >= timeDateFather.offsetTop && scrollTop <= timeDateFather.offsetTop + timeDateFather.offsetHeight - 100) {
    //     console.log("hhhhh1111111111111111111111111111111111111111")
    //     need_fix.style.position = 'fixed';
    //     // need_fix.style.top = '-33px';
    //     // need_fix.style.left = '303px';
    // } else {
    //     need_fix.style.position = 'absolute';
    //     // need_fix.style.top = '0px';
    //     // need_fix.style.left = '-140px';
    // }
})
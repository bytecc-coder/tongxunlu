$(function () {
        let arr = [
            {
                name:'陈龙',tell:18406585334,py:'chenlong'
            },
            {
                name:'罗腾达',tell:18406581214,py:'luotengda'
            },
            {
                name:'刘彦红',tell:18406585301,py:'liuyanhong'
            },
            {
                name:'贺锦华',tell:18406582417,py:'hejinhua'
            },
            {
                name:'夏锡淼',tell:18406580699,py:'xiaximiao'
            },
            {
                name:'秦伟',tell:18406584172,py:'qinwei'
            },
            {
                name:'安彤',tell:18406585217,py:'antong'
            },
            {
                name:'左翌尧',tell:18406586294,py:'zuoyiyao'
            },
            {
                name:'刘源',tell:18406584279,py:'liuyuan'
            },
            {
                name:'李潇宇',tell:18406581472,py:'lixiaoyu'
            },
            {
                name:'成铭铭',tell:18406586027,py:'chengmingming'
            },
            {
                name:'刘勇',tell:18406581725,py:'liuyong'
            },
            {
                name:'张琰敏',tell:18406585259,py:'zhangyanmin'
            },
            {   name:'武勇明',tell:18406586309,py:'wuyongming'},
        ]
        let main = $('main');
        let aside = $('aside');
        let input = $('input')

        render(arr);


        input.on('input',function () {
            let val = $(this).val();//获取表单的值
            let newarr = arr.filter(ele=>ele.name.includes(val) || ele.py.includes(val) || ele.tell.toString().includes(val) );
            render(newarr);
        })


        function render(arr){

            main.empty();
            aside.empty();
            let person = {}
            //分类
            arr.forEach(ele =>{
                let firstChar = ele.py.charAt(0).toUpperCase();
                if(!person[firstChar]){
                    person[firstChar] = [];
                }
                person[firstChar].push(ele);
            });

            //排序
            let keysarr = Object.keys(person).sort();
            let html = '';
            let html_aside='';
            for(let i = 0; i < keysarr.length; i++){
                let ele = keysarr[i] // 这里是所有的首字母

                html_aside+=`
                    
                        <li>${ele}</li>
                    
                `;


                html+=`
                    <section>
                        <h2>${ele}</h2>
                `;

                for (let j = 0; j<person[ele].length; j++){
                    let info = person[ele][j];
                    html+=`
                        <ul>
                            <li>
                                <a href="tel:${info.tell}">${info.name}</a>
                            </li>
                        </ul>
                    `

                }

                html += `</section>`

                main.html(html);

                aside.html(html_aside);
            }
        }

})
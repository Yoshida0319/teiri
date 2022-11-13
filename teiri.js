const nnoatai=document.getElementById('nnoatai');
const botann=document.getElementById('botan');
const re=document.getElementById('result-area')
nnoatai.onkeydown=event=>{
 if(event.key==='Enter'){
    botann.onclick();
 }
}
botann.onclick = ()=>{
    const yyy=nnoatai.value;
    const n=parseInt(yyy);
    const l=n.length;
    let a=[];
    let osimai=[];
    let leta=0;
    let keisan=[];
    let hyou=[1];
    if (l==0){
        return;
    } else if (isNaN(n) || n===0){
        re.innerText="";
        const paragraph=document.createElement('p');
        const result=("自然数を入力してください");
        paragraph.innerText=result;
        re.appendChild(paragraph);
        return;
    } else if(n===1){
        keisan.push(1);
        totyuu(keisan);
        return;
    }
    const y=Math.sqrt(n);
    const z=Math.floor(y);
    a.push(2);
    let b=3;
    abc();
    function abc(){
        let i=0;
        let sqrt=Math.sqrt(b);
        let floor=Math.floor(sqrt);
        abcd();
        function abcd(){
            const element = a[i];
            let o=b/element;
            let ok=Math.floor(o);
            if(b>z){
                let i=0;
                abd(n,1,0,a);
            } else if (ok!==o && floor>=element){
                i++;
                abcd();
            } else if(floor<element){
                a.push(b);
                let i=0;
                b++;
                b++;
                abc();
            } else if(ok===o){
                b++;
                b++;
                let i=0;
                abc();
            }
        }
    }
    function abd(b,aha,j,a){
        const element=a[j];
        let o=b/element;
        let ok=Math.floor(o);
        if(a.length===j && b===1){
            totyuu(keisan);
        } else if(a.length===j) {
            keisan.push(2);
            totyuu(keisan);
        } else if(ok===o){
            let b=o;
            aha++;
            abd(b,aha,j,a);
        } else if(ok!==o && aha!==1){
            keisan.push(aha);
            j++;
            abd(b,1,j,a);
        }else if(ok!==o){
            j++;
            abd(b,1,j,a);
        }
    }
    function totyuu(keisan){
        let sounan=[];
        for (let index = 0; index < keisan.length; index++) {
            sounan.push(1);
        }
        saigo(keisan,sounan,0);
    }
    function saigo(keisan,sounan,keta){
        if(keta===keisan.length){
            hyouzi(osimai,2);
            return;
        } else if(sounan[keta] >= keisan[keta]){
            sounan[keta]=1;
            keta++;
            saigo(keisan,sounan,keta);
        } else if(sounan[keta] < keisan[keta]){
            sounan[keta]=sounan[keta]+1;
            tuika(sounan,1)
            saigo(keisan,sounan,0);
        }
    }
    function tuika(sounan,kara){
        for (let ind = 0; ind < sounan.length; ind++) {
            const elem=sounan[ind];
            kara=kara*elem;
        }
        osimai.push(kara);
    }
    function hyouzi(osimai,nora){
        if(hyou.length === osimai.length + 1){
            tukareta(hyou);
            return;
        }
        for (let syaa = 0; syaa < osimai.length; syaa++) {
            const esa = osimai[syaa];
            if(esa === nora){
                hyou.push(esa);
            }
        }
        nora++;
        hyouzi(osimai,nora);
    }
    function tukareta(hyou){
        let haro=0;
        for (let suita = 0; suita < hyou.length; suita++) {
            const sui = hyou[suita];
            haro=haro+sui;
        }
        haro=haro*haro;
        re.innerHTML="";
        let nnn=("n=" + n + "の時、");
        re.insertAdjacentHTML("beforeend",nnn);
        const paragraph=document.createElement('br');
        re.appendChild(paragraph);
        let result=("(" + hyou[0]);
        re.insertAdjacentHTML("beforeend",result);
        for (let onaka = 1; onaka < hyou.length; onaka++) {
            const naka = hyou[onaka];
            let result=("+" + naka);
            re.insertAdjacentHTML("beforeend",result);
        }
        let resu=(")²=" + haro + "=" + hyou[0] + "³");
        re.insertAdjacentHTML("beforeend",resu);
        for (let mou = 1; mou < hyou.length; mou++) {
            const tyoi = hyou[mou];
            let resu=("+" + tyoi + "³");
            re.insertAdjacentHTML("beforeend",resu);
        }
    }
}
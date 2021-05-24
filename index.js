let m=document.getElementById('gg')
m.innerHTML=('&nbsp')
let s=' '
let RESULT=''
let M=''
let y=''
function num(y) {
    a=s.length-1
    if(typeof(s)==='number'){
        s=' '+y
        m.innerHTML=(s)
    }
    else{
        s=s+y
        m.innerHTML=(s)
    }
}
function plus () {
    let k=''
    let a=s.length-1
    if(s[a]=='-'){
        a=a-1
        for(a;a>=0;a--){
            k=s[a]+k
        }
        s=k
        s=s+'+'
        m.innerHTML=(s)
    }
    else if(s[a]=='+'){
        m.innerHTML=(s)
    }
    else if(typeof(s)==='number'){
        s=' +'
        m.innerHTML=(s)
    }
    else{
        s=s+'+'
        m.innerHTML=(s)
    }
}
function minus () {
    let r=''
    let e=s.length-1
    if(s[e]=='+'){
        e=e-1
        for(e;e>=0;e--){
            r=s[e]+r
        }
        s=r
        s=s+'-'
        m.innerHTML=(s)
    }
    else if(s[e]=='-'){
        s=s
        m.innerHTML=(s)
    }
    else if(typeof(s)==='number'){
        s=' -'
        m.innerHTML=(s)
    }
    else{
        s=s+'-'
        m.innerHTML=(s)
    }
}
function cal(s){
    let P=0
    let o=''
    let z=0
    let zz=''
    let aa=0
    let dd=0
    z=Number(zz)
    i=s.length-1
    for(let dd=0;dd<=i;dd++){
        if(s[dd]=='+'){
            if(aa==0){
                //let d=dd-1
                    for(let d=dd-1;d>=0;d--){
                        if(s[d]=='+'||s[d]=='-'){
                             d=0
                        }
                        else{
                            o=s[d]+o
                            P=Number(o)
                        }
                    }
                    aa=P
                    P=0
                    o=''
                    let K=0
                    d=dd+1
                    while(s[d]!='+' && s[d]!='-' && d<s.length){
                        o=o+s[d]
                        K=Number(o)
                        d++
                    }
                    aa=aa+K
                }
            else{
                    P=0
                    o=''
                    let K=0
                    d=dd+1
                    while(s[d]!='+' && s[d]!='-' && d<s.length){
                        o=o+s[d]
                        K=Number(o)
                        d++
                    }
                    aa=aa+K
                }
        }
        else if(s[dd]=='-'){
            if(aa==0){
            let d=dd-1
                for(d;d>=0;d--){
                    if(s[d]=='+'||s[d]=='-'){
                         d=0
                    }
                    else{
                        o=s[d]+o
                        P=Number(o)
                    }
                }
                aa=P
                P=0
                o=''
                let K=0
                d=dd+1
                while(s[d]!='+' && s[d]!='-' && d<s.length){
                    o=o+s[d]
                    K=Number(o)
                    d++
                }
                aa=aa-K
            }
            else{
                P=0
                o=''
                let K=0
                d=dd+1
                while(s[d]!='+' && s[d]!='-' && d<s.length){
                    o=o+s[d]
                    K=Number(o)
                    d++
                }
                aa=aa-K
            }
        }
    }
    let q=''
    if(typeof(s)!="string"){
        q=s.toString()
    }
    else{
        q=s
    }
    if(q.indexOf('+') == -1 && q.indexOf('-') == -1){
        aa=Number(s)
    }
    return aa
}
function equal () {
    q=s.length-1
    if(s[q]==' '){
        s=s+''
    }
    else if(s[q]=='p'){
        s=s+''
    }
    else if(s[q]=='T'){}
    else if(s[q]=='+'){
        let x=''
        q=q-1
        for(q;q>=0;q--){
            x=s[q]+x
        }
        s=cal(x.slice(1))
        m.innerHTML=(x+'='+s)
    }
    else if(s[q]=='-'){
        let x=''
        q=q-1
        for(q;q>=0;q--){
            x=s[q]+x
        }
        s=cal(x.slice(1))
        m.innerHTML=(x+'='+s)
    }
    else{
        if(typeof(s)==='string'){
            x=s.slice(1)
            s=cal(x)
            m.innerHTML=(x+'='+s)
        }
    }
}
function cl(){
    s=' '
    m.innerHTML=('&nbsp')
}
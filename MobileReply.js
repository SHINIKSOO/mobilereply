window.onload = function () {
    var modal = document.querySelector('.login_modal');
    var none_modal = document.querySelector('.back_cmt');

    document.querySelector('#login_btn').onclick = function () {
        let yn = confirm('로그인이 필요한 서비스입니다. 로그인하시겠습니까?')
        if (yn) {

            modal.style.display = "flex";
            none_modal.style.display = "none";

        }
    }
}

/*로그인구현JS 카카오로 한번에*/
function loginWithKakao() {


    alert('로그인되었습니다.');


    var sessionId = '신익수';
    sessionStorage.setItem("ID", sessionId);



    if (sessionStorage.getItem("ID") === sessionId) {
        document.querySelector('.login_modal').style.display = "none";
        document.querySelector('.back_cmt').style.display = "block";
        document.querySelector('.w_btn_ok').style.display = "block";
        document.querySelector('.w_btn').style.display = "none";


        document.querySelector('.login_session').innerHTML = "<strong>" + sessionStorage.getItem("ID") + "</strong>" + "님 접속" + '<span><button class="logout">logout</button></span>';





        var logout = document.querySelector(".logout");
        logout.addEventListener('click', function () {
            alert('로그아웃합니다');
            sessionStorage.clear();
            location.href = "";
        });


    }


}
//모달닫기//
function CloseModal() {
    document.querySelector('.login_modal').style.display = "none";
    document.querySelector('.back_cmt').style.display = "block";
}



/*글쓰기*/
var num = 0;
var olddate;
var oldsec;
var oldmin;


function save() {



    //금칙어//
    var Nonwords = new Array("바보", "babo");
    var flag = 0;


    //도배//
    if (window.event.keyCode == 13) {

        var newdate = new Date();
        var min = newdate.getMinutes();
        var sec = newdate.getSeconds();

        console.log("작성할때 초" + sec);
        console.log("시간기준초" + oldsec);

        if (min === oldmin) {
            if (sec - oldsec < 2) {
                alert('2초에 한번씩 작성가능합니다.');
                return;
            }
        }




        const backCmt = document.querySelector('.back_cmt');
        const cmt = document.querySelector("#cmt_context").value;

        var anycmt = cmt.toLowerCase();


        //금칙어로 정한 배열 단어가 있는지 전부 체크//
        while (flag <= Nonwords.length - 1) {
            if (anycmt.indexOf(Nonwords[flag]) != -1) {
                alert(Nonwords[flag] + '는금지어입니다..');
                return;
            }
            flag++;
        }


        const NewEl = document.createElement('div');
        NewEl.classList.add('cmt_row');
        backCmt.appendChild(NewEl);

        /*ID단*/
        const ConEl = document.createElement('p');
        ConEl.classList.add('inform');
        NewEl.appendChild(ConEl);

        console.log(sessionStorage.getItem("ID") + '라는 아이디로 접속중');
        if (sessionStorage.getItem("ID") === "신익수") {
            num++;


            ConEl.innerHTML = "<span class='Reple'>리플</span> <span class='user'>" + sessionStorage.getItem("ID") + "</span><span class='del_btn' onclick='del(this.id)' id='" + num + "'>" + "❌" +
                "</span>&nbsp;<span class='edit_btn' onclick='mod(this.id)' id='modify_" + num + "'>✍</span>";




            /*내용단*/
            const ConEl2 = document.createElement('p');
            ConEl2.classList.add('cmt');
            NewEl.appendChild(ConEl2);
            ConEl2.innerHTML = "<span>" + cmt + "</span>" + "<span value='0' class='Y' onclick='up(this.id)' id='up_" + num + "'>👍</span><span class='goodpoint'>0</span><span class='N' value='0'  onclick='down(this.id)' id='down_" + num + "'>👎</span><span class='badpoint'>0</span>";

        }





        /*hr선*/
        const line = document.createElement('hr');
        NewEl.appendChild(line);

        //도배를막기위한 마지막시간저장//
        olddate = new Date();
        oldsec = olddate.getSeconds();
        oldmin = olddate.getMinutes();

    }

}

/*댓글삭제*/
function del(n) {

    var id = document.querySelectorAll('.user')[n].innerHTML;
    var par = document.querySelectorAll('.user')[n].parentNode.parentNode;




    console.log(sessionStorage.getItem("ID"));

    if (sessionStorage.getItem("ID") === id) {
        alert('삭제하였습니다.');
        par.style.display = 'none';
        //par.remove();
    } else {
        alert('본인의 글만 삭제할 수 있습니다.');
    }

}



/*댓수정*/

function mod(v) {


     
     
    
    var objn = v.split("_");

    var id = document.querySelectorAll('.user')[objn[1]].innerHTML;
    
    var textval = document.querySelectorAll(".edit_btn")[objn[1]].parentNode.parentNode.querySelector(".cmt").querySelector("span");
    console.log("textval="+document.querySelectorAll(".edit_btn")[objn[1]].parentNode.parentNode.innerText);
    var pN = textval.innerText;

    

    if (sessionStorage.getItem("ID") === id) {

        //textval.style.display='none';

        textval.remove();

        var inputtag = "<input type='text'>";
        var ce = document.createElement('span');
        document.querySelectorAll(".edit_btn")[objn[1]].parentNode.parentNode.querySelector(".cmt").prepend(ce);
        ce.innerHTML = "<input type='text' class='modc' onkeyup='modifyText(this.id)' id='modd_" + objn[1] + "'value='" + pN + "' >";
        
       
     

    } else {
        alert('본인의 글만 수정할 수 있습니다.');
    }


}

//댓수정 ENTER시
function modifyText(i) {

    var objn = i.split("_");
    
    
    /*지울것*/
    var textval = document.querySelectorAll(".edit_btn")[objn[1]].parentNode.parentNode.querySelector(".cmt").querySelector("span");
    console.log(textval.innerHTML);





    if (window.event.keyCode == 13) {
        var ce = document.createElement('span');
        document.querySelectorAll(".edit_btn")[objn[1]].parentNode.parentNode.querySelector(".cmt").prepend(ce);
        ce.innerHTML = document.querySelector(".modc").value;

        alert('수정되었습니다.');
       // console.log("첫번째 인풋텍스트"+document.querySelectorAll(".modc")[1].value);
        //console.log("두번째 인풋텍스트"+document.querySelector(".modc")[1].innerText);
        document.querySelector(".modc").remove(); 
        
        textval.remove();

    }
}


//좋아요,싫어요

function up(i) {
    var objn = i.split("_");
    var point = document.querySelectorAll('.goodpoint')[objn[1]].innerHTML;
    var cnt = parseInt(point) + 1;
    if (document.querySelectorAll(".Y")[objn[1]].getAttribute('value') != 1) {  //좋아요를 한번만 누르게 하게끔 value값을이용

        if (sessionStorage.getItem("ID") != null) {


            document.querySelectorAll('.goodpoint')[objn[1]].innerHTML = cnt;
        
            document.querySelectorAll(".Y")[objn[1]].setAttribute('value', '1');



        } else {
            alert('로그인 후에 가능합니다.');
        }

    } else {
        alert('이미 누르셨습니다.');
    }
}


function down(i) {
    var objn = i.split("_");
    var point = document.querySelectorAll('.badpoint')[objn[1]].innerHTML;
    var cnt = parseInt(point) + 1;
    if (document.querySelectorAll(".N")[objn[1]].getAttribute('value') != 1) {
        if (sessionStorage.getItem("ID") != null) {

            document.querySelectorAll('.badpoint')[objn[1]].innerHTML = cnt;
            document.querySelectorAll(".N")[objn[1]].setAttribute('value', '1');
        } else {
            alert('로그인 후에 가능합니다.');
        }

    } else {
        alert('이미 누르셨습니다');
    }
}


1. 구조
 -3가지 파일
  .html
  .js
  .css

 vsCode 등으로 열어주시면 간편합니다.




2. 실행방법

 로그인은 '신익수'라는 이름으로 비밀번호없이 바로 로그인되게 하였습니다.
 로그인을 하여야만 글작성,수정,삭제,좋아요 등 필수구현기능이 가능하여 본인 외에는 불가하도록 하였습니다.(좋아요,싫어요 제외)

 금지어는 [바보,babo]로 정해져있으며, 2초간격을 두어 글을 도배하지 못하도록 설정하였습니다.


3. 개선점

 - 댓글을 동시에 수정이벤트를 클릭하여 고치려고 하면 버그가 발생합니다..
   이는, 정확히 노드의 값을 지정해주지 않아서 생기는 버그인데, 결국 제시간안에 고치지 못하였습니다.
   게시글을 남길때, 식별할 수 있는 값을 어떡해 주어야하고, 가져와야 할 지 처음 설계부터 제대로 고려하지 못했던 것 같습니다.
   
   차라리, 동시에 수정이 활성화 되는 것이 아니라, 한가지만 수정할수있게끔 했다면 해당버그를 피했을 수도 있지만, 이 또한 제 생각과 실력이 미치지 못하여 구현하지 못하였습니다.


 - 좋아요,싫어요를 둘 중에 하나씩만 되게끔 구현했어야 하는데, 둘 다 1번씩은 누를 수 있게 만들어졌습니다.
   현재는, 각 이벤트를 누를때 value값을 변경시켜 두 번 이상의 이벤트를 방지하는데 이것을 싫어요부분에도 동시에 value가 변경되게끔 주었으면 됬을까라는 아쉬움과 호기심이 남습니다.

 

 
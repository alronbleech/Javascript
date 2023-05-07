// コメントアウトは/を2回
//While文は、条件式が真（true）ならば制限なく繰り返します。
//for文は、決められた回数だけ繰り返します。
//do...while文では、条件式のtrue／falseに関わらず、最初の1回だけは必ず処理が行われ,その後、条件式を評価して、繰り返し処理を続けるか／抜けるかを決めていきます。
let orange = 100;
let apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else{
  alert('みかんの値段がりんごより高い');
}

let i;
let num = 0;

for(i = 1; i < 11; i++){ //「i++」は「i = i+1」と同じ
  num = num + i;
}

alert('1から10まで足し算した結果は' + num + 'です');
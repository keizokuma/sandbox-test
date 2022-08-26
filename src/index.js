import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し初期化
  const inputText = document.getElementById("add-text").value;

  if (!inputText) return;

  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//完了リストから指定の要素を削除
const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  //li生成
  const li = document.createElement("li");
  console.log(li);

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //p生成
  const p = document.createElement("p");
  p.innerText = text;

  //button生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;
    console.log(addTarget);
    //li生成
    const li = document.createElement("li");
    console.log(li);

    //p生成
    const p = document.createElement("p");
    p.innerText = text;

    //button生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親宅後完了リストから削除
      deleteFromCompleteList(backButton.parentNode.parentNode);

      // テキストを取得
      const text = backButton.parentNode.firstChild.innerText;

      //未完了リストに追加
      createIncompleteList(text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    //liタグの子要素にdivタグを設定
    li.appendChild(addTarget);
    console.log(li);

    //未完了リストに追加
    document.getElementById("complete-list").appendChild(li);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //liタグの子要素にdivタグを設定
  li.appendChild(div);
  console.log(li);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);

function cal() {
    var forex = 0.260 // 日幣 新台幣 匯率
    var price = parseInt($(".price").val())
    var Shipping = parseInt($(".shipping").val())
    var num = parseFloat($(".num").val())
    var totalPrice = Math.round(price * forex + Shipping * 50)
    var finalPrice = Math.round(totalPrice + num * 300 )

    var text = ``
if (Shipping == 0 || (Shipping !== Shipping)) {
        text += `<span class="Price">請務必輸入正確的 代購件數 訂單方能成立<span>`
    } else { 
        text += `<p>📣報價如下</br>🔷商品金額：[<span class="Price">${toCurrency(price)}</span> * <span class="forex">${toCurrency(forex)}</span> + <span class="Shipping">${toCurrency(Shipping)}</span>(代購件數) * 50]` 
        text += ` = <span class="totalPrice">${toCurrency(totalPrice)}</span></br>
🔷國際運費：1公斤300元</br>
🔷應付金額：<span class="totalPrice">${toCurrency(totalPrice)}</span> + <span class="Num">300*${num}</span>(重量預估${num}kg以內) = <span class="finalPrice">${toCurrency(finalPrice)}</span></p>` }


    $(".text").html(text)
if (Shipping != 0 && (Shipping == Shipping)) {
    $(".copy").html(`<button onClick="CopyTextToClipboard('.text')">點擊複製</button>`) }
    $(".price").val("")
    $(".shipping").val("")
    $(".num").val("") 

    console.log(text)
}

function CopyTextToClipboard(id) {
    var TextRange = document.createRange();
    TextRange.selectNode(document.querySelector(id));
    sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(TextRange);
    document.execCommand("copy");
    // alert("複製完成！")  //此行可加可不加
}


function toCurrency(num){
    var parts = num.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
    
}
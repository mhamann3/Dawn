CANDYRACK_DOCUMENT_LISTENER = true;

window.addEventListener('DOMContentLoaded', (event) => {
    if(window.location.pathname === "/cart") {
    const items = document.querySelectorAll(".cart-item")
    const itemsTotals = document.querySelectorAll(".cart-item__totals")
    const {variantId, discount} = JSON.parse(localStorage.getItem("candyrack-discounted-product")) || {}
    const {cart_discount_note} = JSON.parse(localStorage.getItem('candyrack-translations')) || {}

    if(items.length && itemsTotals.length && discount && variantId) {
        console.log("CR Test")
        itemsTotals.forEach(i => {
             console.log("CR Test 2")
            console.log(variantId)
            console.log
            const href = i.querySelector("a")?.href
            const hasNote = i.querySelector('[candyrack-cart-info]')
            if(href && href.includes(variantId) && !hasNote) {
                console.log("CR Test 3")
                
              const a = i.querySelector("a")
              const message = cart_discount_note || 'Discount AMOUNT will be applied at checkout.'
              a.insertAdjacentHTML(
               'afterend',
               `<div style="text-align: justify;font-size: 12px;position: relative;right: 62.5rem;">${message.replace('AMOUNT', discount)}</div>`)
            }
        })
    }
}
});

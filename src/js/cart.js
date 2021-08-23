const cart_menu = document.getElementById('cart_menu');
const add_to_cart = document.getElementById('add_to_cart');
const cart_btn = document.getElementById('cart_icon')
const close_cart = document.getElementById('close_cart');
const dim = document.getElementById('dim');
const spinner = document.getElementById('spinner');
const btn_text = document.getElementById('btn_text');

add_to_cart.addEventListener('click', () =>
{
    spinner.classList.add('show');
    btn_text.classList.add('hidden');

    setTimeout(() => {
        openCart();
    }, 1000);

} , false);

cart_btn.addEventListener('click', () =>
{
    openCart();
} , false);

close_cart.addEventListener('click', (e) =>
{
    cart_menu.classList.remove('cart--show');
    e.stopPropagation();

    spinner.classList.remove('show');
    btn_text.classList.remove('hidden');
    dim.classList.remove("show");

    document.body.style.overflow = "auto";

}, false);


function openCart (delay = true)
{
    cart_menu.classList.add('cart--show');
    dim.classList.add('show');
    document.body.style.overflow = "hidden";
}




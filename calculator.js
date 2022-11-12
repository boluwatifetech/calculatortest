const textArea = document.querySelector('.textarea');

const buttons = Array.from(document.querySelectorAll('.btn'));

buttons.map(function(button) {
    button.addEventListener('click', (e) => {
        switch (e.currentTarget.innerText) {
            case '=':
                textArea.innerText = eval(textArea.innerText);
                break;
            case 'c':
                textArea.innerText = '';
                break;
            case '<==':
                textArea.innerText = textArea.innerText.slice(0, -1);
                break;

            default:
                textArea.innerText += e.currentTarget.innerText;
        }
    })
})
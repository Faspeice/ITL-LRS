document.addEventListener('DOMContentLoaded', function() {

    const commonPhrases = [
        'Добрый день',
        'Спасибо',
        'Пожалуйста',
        'К сожалению',
        'Будьте добры',
        'С уважением',
        'Добро пожаловать',
        'Как дела?',
        'Всего хорошего',
        'До свидания'
    ];

    const phraseButtonsContainer = document.getElementById('phraseButtons');
    const textArea = document.getElementById('textArea');
    const clearBtn = document.getElementById('clearBtn');

    commonPhrases.forEach(phrase => {
        const button = document.createElement('button');
        button.textContent = phrase;
        button.addEventListener('click', function() {
            insertText(phrase);
        });
        phraseButtonsContainer.appendChild(button);
    });

    function insertText(text) {
        const startPos = textArea.selectionStart;
        const endPos = textArea.selectionEnd;
        const currentText = textArea.value;

        textArea.value = currentText.substring(0, startPos) + text + currentText.substring(endPos);

        textArea.selectionStart = textArea.selectionEnd = startPos + text.length;

        textArea.focus();
    }


    clearBtn.addEventListener('click', function() {
        textArea.value = '';
        textArea.focus();
    });
});
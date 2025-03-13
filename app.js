<script>
    // Функція для форматування тексту
function formatTextToHTML(rawText) {
    // Заміна блоків коду (між ```)
    rawText = rawText.replace(/```([\s\S]*?)```/g, function(match, code) {
        return `<pre style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; font-family: monospace;">${code.trim()}</pre>`;
    });

    // Заміна **жирного тексту**
    rawText = rawText.replace(/\*\*(.*?)\*\*/g, `<strong>$1</strong>`);

    // Заміна *курсиву*
    rawText = rawText.replace(/\*(.*?)\*/g, `<em>$1</em>`);

    // Заміна нових рядків на <br>
    rawText = rawText.replace(/\n/g, `<br>`);

    // Загальний стиль
    return `<div style="font-family: Arial, sans-serif; line-height: 1.6;">${rawText}</div>`;
}

// Отримання тексту за класом і форматування
document.addEventListener("DOMContentLoaded", function() {
    // Припускаємо, що текст має клас "raw-text"
    const textElement = document.querySelector(".raw-text");
    
    if (textElement) {
        const rawText = textElement.textContent; // Беремо текст із елемента
        const formattedHTML = formatTextToHTML(rawText); // Форматуємо його
        
        // Вставляємо відформатований HTML (наприклад, у той самий елемент)
        textElement.innerHTML = formattedHTML;
        
        // Або можна вставити в інший елемент, наприклад, з класом "output":
        // document.querySelector(".output").innerHTML = formattedHTML;
    } else {
        console.log("Елемент із класом 'raw-text' не знайдено!");
    }
});
</script>
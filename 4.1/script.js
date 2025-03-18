function openNewWindow() {
    let newWin = window.open("", "", "width=300,height=300,menubar=yes,status=yes");
    newWin.document.write(`
                <html>
                <head>
                    <title>Новое окно</title>
                    <style>
                        body { background-color: gray; text-align: center; padding: 20px; }
                    </style>
                </head>
                <body>
                    <h2>Новое окно</h2>
                    <p><a href='https://www.intuit.ru' target='_self'>Перейти на intuit.ru</a></p>
                    <p><a href='#' onclick='window.close()'>Закрыть окно</a></p>
                </body>
                </html>
            `);
    newWin.document.close();
}
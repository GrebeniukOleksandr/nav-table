// забирає border в самої довгої ul у останьої li в double_menu
let allDoubleMenus = document.querySelectorAll(".double_menu") // шукає всі класи .double_menu і присвоює їх в зміну allDoubleMenus
allDoubleMenus.forEach(doubleMenu => {                         // кожен елемент з allDoubleMenus називаємо doubleMenu
    let ul = doubleMenu.querySelectorAll('ul')                 // створює зміну ul в яку записуємо всі теги ul з doubleMenu(якщо їх буде більше 1-ї)
    let counter = 0                                            // найбільшу кількість li яку ми бачили при переборі всіх ul
    let longestUl = []                                         // створюємо масив щоб записати в нього найдовші по кількості елементів в ul
    ul.forEach(elementUl => {                                  // перебираємо кожну ul і називаємо кожну elementUl
        let li = elementUl.querySelectorAll('li')              // створює  зміну li якій присвоюємо всі li з elementUl які в цей момент перебираємо 
        if (li.length == counter) {                            // перевіряємо чи ми знайшли ще одну найбільшу ul
            longestUl.push(elementUl)                          // в масив longestUl допушуємо ще одну найдовшу ul
        } else if (li.length > counter) {                      // перевіряємо чи знайшли найбільшу кількість li в ul серед інших ul
            counter = li.length                                // присвоюємо число ріне найбільшій кільскості li
            longestUl = [elementUl]                            // перезаписуємо в масив longestUl добавляємо ul
        }
    })
    longestUl.forEach(item => {                                // перебираємо знайдені найбільші ul і кожну з них називаємо item
        item.lastElementChild.style.borderBottom = 'none'      // кожній останній дочірній li прибираємо border-bottom
    } )
})
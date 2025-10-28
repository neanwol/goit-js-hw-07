const categories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const title = category.firstElementChild.textContent;
    const itemsCount = category.lastElementChild.children.length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemsCount}`);
});
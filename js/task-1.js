const showCategories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${showCategories.length}`);
showCategories.forEach(category => {
  return console.log(
    `Category: ${category.querySelector('h2').textContent}
Elements: ${category.querySelectorAll('li').length}`
  );
});

showCategories.forEach(category => {
  category.style.borderRadius = `8px`;
  category.style.padding = `16px`;
  category.style.maxWidth = `392px`;
  category.style.backgroundColor = `#f6f6fe`;
  category.style.marginBottom = `24px`;
});

const listTitle = document.querySelectorAll('#categories .item h2');
listTitle.forEach(title => {
  title.style.fontWeight = `600`;
  title.style.fontSize = `24px`;
  title.style.lineHeight = `133%`;
  title.style.letterSpacing = `0.04em`;
  title.style.color = `#2e2f42`;
  title.style.marginBottom = `16px`;
  title.style.marginRight = `auto`;
});

const listItems = document.querySelectorAll('#categories .item ul');
listItems.forEach(item => {
  item.style.maxWidthidth = `360px`;
  item.style.minHeight = `184px`;
  item.style.display = `flex`;
  item.style.flexDirection = `column`;
  item.style.rowGap = `8px`;
});

const eachItem = document.querySelectorAll('#categories .item ul li');
eachItem.forEach(item => {
  item.style.border = `1px solid #808080`;
  item.style.borderRadius = `4px`;
  item.style.maxWidth = `360px`;
  item.style.minHeight = `40px`;
  item.style.fontWeight = `400`;
  item.style.fontSize = `16px`;
  item.style.lineHeight = `150%`;
  item.style.letterSpacing = `0.04em`;
  item.style.color = `#2e2f42`;
  item.style.padding = `8px 16px`;
});

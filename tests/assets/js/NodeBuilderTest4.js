'use strict';

const peopleTotal = qs('#people-total').value;
const peopleDataContent = getDataValue(qs('section#name-list'), 'people');
const peopleData = JSON.parse(peopleDataContent);

const ulNode = qs('ul#people');
for (let index = 0; index < peopleData.length; index++) {
    const personData = peopleData[index];
    const liNode = composeLiNode(
        personData.name,
        personData.age
    );
    ulNode.appendChild(liNode);
}
qs('strong.people-total').innerText = peopleTotal;


function composeLiNode(name, age) // js node
{
    const liText = name + ', ' + age;

    return nodeBuilder.build('li', {}, null, liText);
}

// - створити блок,

let block = document.createElement('div');

// - додати йому класи wrap, collapse, alpha, beta

block.classList.add("wrap", "collapse", "alpha", "beta");

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

block.style.backgroundColor = 'red';
block.style.color = 'lightblue';
block.style.fontSize = '5px';

// - додати цей блок в body.

document.body.appendChild(block);

// - клонувати його повністю, та додати клон в body.

let clonedBlock = block.cloneNode(true);
document.body.appendChild(clonedBlock);

// - Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let items = ['Main', 'Products', 'About us', 'Contacts'];


let ul = document.createElement('ul');

items.forEach(function(item) {
    let li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
});

document.body.appendChild(ul);



// - Є масив
let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let ul2 = document.createElement('ul');

for (const course of coursesAndDurationArray) {
    let li = document.createElement('li');

    let div = document.createElement('div');

    div.innerText = `title:${course.title},month: ${course.monthDuration}`;

    li.appendChild(div);

    ul2.appendChild(li);
}

document.body.appendChild(ul2);


// =========================

// - Є масив
let coursesAndDurationArray2 = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];


// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

let createDiv = document.createElement("div");
createDiv.classList.add("item");

for (const course of coursesAndDurationArray) {
    let divItem = document.createElement("div");
    divItem.classList.add("item");

    let h1Heading = document.createElement("h1");
    h1Heading.classList.add("heading");
    h1Heading.textContent = course.title;

    let pDescription = document.createElement("p");
    pDescription.classList.add("description");
    pDescription.textContent = `Duration: ${course.monthDuration} months`;

    divItem.appendChild(h1Heading);
    divItem.appendChild(pDescription);

    createDiv.appendChild(divItem);
}

document.body.appendChild(createDiv);

// ==========================
let simpsons = [{
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let containerDiv = document.createElement('div');
containerDiv.classList.add('container');

for (const simpson of simpsons) {
    let memberDiv = document.createElement('div');
    memberDiv.classList.add('member');

    let nameHeading = document.createElement('h2');
    nameHeading.textContent = `${simpson.name} ${simpson.surname}`;

    let ageParagraph = document.createElement('p');
    ageParagraph.textContent = `Age: ${simpson.age}`;

    let infoParagraph = document.createElement('p');
    infoParagraph.textContent = simpson.info;

    let photoImg = document.createElement('img');
    photoImg.src = simpson.photo;
    photoImg.alt = `${simpson.name} ${simpson.surname}`;

    memberDiv.appendChild(nameHeading);
    memberDiv.appendChild(ageParagraph);
    memberDiv.appendChild(infoParagraph);
    memberDiv.appendChild(photoImg);

    containerDiv.appendChild(memberDiv);
}

document.body.appendChild(containerDiv);



// =========================
// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
let coursesArray = [{
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced'
        ]
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced'
        ]
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java'
        ]
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом



let containerDiv2 = document.createElement('div');
containerDiv2.classList.add('container');


for (const course of coursesArray) {
    let courseDiv = document.createElement('div');
    courseDiv.classList.add('course');

    let titleHeading = document.createElement('h2');
    titleHeading.textContent = course.title;

    let durationParagraph = document.createElement('p');
    durationParagraph.textContent = `Duration: ${course.monthDuration} months, ${course.hourDuration} hours`;

    let modulesDiv = document.createElement('div');
    modulesDiv.classList.add('modules');

    let modulesList = document.createElement('ul');
    for (const module of course.modules) {
        let moduleItem = document.createElement('li');
        moduleItem.textContent = module;
        modulesList.appendChild(moduleItem);
    }

    courseDiv.appendChild(titleHeading);
    courseDiv.appendChild(durationParagraph);

    modulesDiv.appendChild(modulesList);

    courseDiv.appendChild(modulesDiv);

    containerDiv2.appendChild(courseDiv);
}

document.body.appendChild(containerDiv2);
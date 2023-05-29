let data1 = {
    photo: 'images/1.jpg',
    title: 'Dimitrij a teraszon',
    description: 'Nyaraláson teraszbuli'
  };

let data2 = {
    photo: 'images/2.jpg',
    title: 'Dimitrij a Dunakanyarnál fürdik',
    description: 'Nagymarosi kikötőben kutyafuttatás'
  };

let data3 = {
    photo: 'images/3.jpg',
    title: 'Dimitrij otthon van',
    description: 'Finding forever home'
    };
    
let data4 = {
    photo: 'images/4.jpg',
    title: 'Dimitrij parkozik',
    description: 'Belly rubs are his favourite'
}

let currentPhoto = 0;
let imagesData = [data1, data2, data3, data4];

function nextPhoto() {
    currentPhoto = (currentPhoto + 1) % imagesData.length;
    $('#photo').attr('src', imagesData[currentPhoto].photo);
    textUpdater(imagesData[currentPhoto].title, imagesData[currentPhoto].description);
}

function previousPhoto() {
    currentPhoto = (currentPhoto - 1 + imagesData.length) % imagesData.length;
    $('#photo').attr('src', imagesData[currentPhoto].photo);
    textUpdater(imagesData[currentPhoto].title, imagesData[currentPhoto].description);
}

function textUpdater(title, description) {
    $('#grey-container').empty(); 
    let titleElement = document.createElement('h1');
    titleElement.textContent = title;
    titleElement.classList.add('title');
    let descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;
    descriptionElement.classList.add('description');
    let greyContainer = document.getElementById('grey-container');
    greyContainer.appendChild(titleElement);
    greyContainer.appendChild(descriptionElement);
}

nextPhoto(); 

$('#next').on('click', nextPhoto);

$('#previous').on('click', previousPhoto);

var sor = document.getElementById('sor');

function thumbnailCreator(src, title, description) {
    let img = document.createElement('img');
    let image = sor.appendChild(img);
    image.setAttribute('src', src);
    image.classList.add('thumbnail');  
    
    image.addEventListener("click", function() {
        $('#photo').attr('src', src);
        textUpdater(title, description);
    });

}

imagesData.forEach((elem) => {
    thumbnailCreator(elem.photo, elem.title, elem.description);
});


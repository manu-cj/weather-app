let getPictureCity = async (city) => {
    function splittedCity(city) {
        const splitted = city.split(',');
    if (splitted.length > 0) {
        const cityName = splitted[0].trim();
        const words = cityName.split(' ');
        
        // Récupère le premier mot
        if (words.length > 0) {
          return words[0];
        }
        return ''
    }
}
    
        

    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${splittedCity(city)}&client_id=RgObc3UFUxFwwcZpGcyv8qgVwJGIoX73sR4crpFS1cA`);
        if (!response.ok) {
            throw new Error('Erreur HTTP : ' + response.status);
        }
        const datas = await response.json();
        let datas_div = document.querySelectorAll('.datas_div');
        console.log(datas);

        const collectPictureCity =
        ['https://cdn.pixabay.com/photo/2017/08/18/17/06/street-2655706_960_720.jpg',
        'https://paysages.photos/wp-content/uploads/2017/05/paysage-urbain-ce1-2-1.jpg',
        'https://img.freepik.com/photos-premium/paysage-urbain-rue-ville-sans-personnes-bordee-pierre_250802-3624.jpg',
        'https://plus.unsplash.com/premium_photo-1688114987038-28a3ea4127cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGF5c2FnZSUyMHVyYmFpbiUyMHBlaW50fGVufDB8fDB8fHww',
        'https://cdn.discordapp.com/attachments/930476260445028475/1240601126823526472/Snapchat-556128473.jpg?ex=66472755&is=6645d5d5&hm=8dd0a853273cb2f7a2bee78c75ecd3a3a88556cc986211c4d217053502f8437e&',
        'https://i.pinimg.com/736x/13/8e/da/138eda104c811c249b64c971e0dbc334.jpg',
        'https://cdn.wbtourisme.be/sites/default/files/ad7fc252-ef46-4dc6-acec-1e83e1fa16bf.jpg',
        'https://www.busfan.be/sites/default/files/migration/2017/04/Thuin-Belgie.jpg',
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/f6/0f/08/abbaye-d-aulne.jpg?w=500&h=400&s=1',
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5b/46/0a/caption.jpg?w=300&h=300&s=1',
        'https://www.thuin.be/ma-ville/services-communaux/travaux/chantiers-en-cours/reouverture-de-la-grandrue-le-17-juillet/@@images/794af9e1-7124-4b9a-99b7-9792a41e3c5b.jpeg',

        ]

        datas_div.forEach(data_div => {
            if (datas.results.length > 0) {
                let rand = Math.floor(Math.random() * datas.results.length)
                data_div.style.backgroundImage = `url(${datas.results[rand].urls.small_s3})`;
                data_div.style.backgroundSize = 'cover';
            }
            if (datas.results.length === 0) {
                let rand = Math.floor(Math.random() * collectPictureCity.length)
                data_div.style.backgroundImage = `url(${collectPictureCity[rand]})`;
                data_div.style.backgroundSize = 'cover';
            }
            
        });
    
        return datas;
    } catch (error) {
        console.error('Erreur lors de la requête API : ', error);
        throw error;
    }
}

export {getPictureCity};